import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingBox3D() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current!;
    const w = () => el.clientWidth;
    const h = () => el.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w() / h(), 0.1, 1000);
    camera.position.set(8, 6, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    light.castShadow = true;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Create rotating boxes
    const group = new THREE.Group();
    scene.add(group);

    for (let i = 0; i < 3; i++) {
      const geo = new THREE.BoxGeometry(2, 2, 2);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.75 + i * 0.05, 0.7, 0.5),
        metalness: 0.7,
        roughness: 0.2,
      });
      const box = new THREE.Mesh(geo, mat);
      box.position.x = i * 4 - 4;
      box.castShadow = true;
      box.receiveShadow = true;
      group.add(box);
    }

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      group.rotation.x += 0.001;
      group.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      const width = w();
      const height = h();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      el.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} style={{ width: "100%", height: "300px" }} />;
}
