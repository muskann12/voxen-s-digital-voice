import { useEffect, useRef } from "react";
import * as THREE from "three";

export function FloatingObjects() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Create floating objects
    const objects: Array<{ mesh: THREE.Mesh; vx: number; vy: number; vz: number; rx: number; ry: number; rz: number }> = [];

    for (let i = 0; i < 5; i++) {
      const geometry = [
        new THREE.OctahedronGeometry(Math.random() * 0.5 + 0.3),
        new THREE.TetrahedronGeometry(Math.random() * 0.5 + 0.3),
        new THREE.DodecahedronGeometry(Math.random() * 0.4 + 0.2),
      ][Math.floor(Math.random() * 3)];

      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
        metalness: 0.8,
        roughness: 0.2,
        emissive: new THREE.Color().setHSL(Math.random(), 0.7, 0.3),
        emissiveIntensity: 0.3,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);

      scene.add(mesh);
      objects.push({
        mesh,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
        rx: (Math.random() - 0.5) * 0.01,
        ry: (Math.random() - 0.5) * 0.01,
        rz: (Math.random() - 0.5) * 0.01,
      });
    }

    // Lighting
    const light = new THREE.PointLight(0x00ff88, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      objects.forEach((obj) => {
        obj.mesh.position.x += obj.vx;
        obj.mesh.position.y += obj.vy;
        obj.mesh.position.z += obj.vz;

        obj.mesh.rotation.x += obj.rx;
        obj.mesh.rotation.y += obj.ry;
        obj.mesh.rotation.z += obj.rz;

        // Wrap around edges
        if (Math.abs(obj.mesh.position.x) > 20) obj.vx *= -1;
        if (Math.abs(obj.mesh.position.y) > 20) obj.vy *= -1;
        if (Math.abs(obj.mesh.position.z) > 15) obj.vz *= -1;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className="absolute inset-0 -z-10" />;
}
