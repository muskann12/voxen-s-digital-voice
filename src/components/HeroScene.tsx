import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mount.current!;
    const w = () => el.clientWidth;
    const h = () => el.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08050f, 0.025);

    const camera = new THREE.PerspectiveCamera(55, w() / h(), 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x08050f, 1);
    el.appendChild(renderer.domElement);

    // Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x2a1248, metalness: 0.95, roughness: 0.08, envMapIntensity: 1.2,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(3.2, 0, 0);
    scene.add(ico);

    const wire = new THREE.Mesh(
      icoGeo,
      new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.2 }),
    );
    wire.position.copy(ico.position);
    wire.scale.setScalar(1.02);
    scene.add(wire);

    // Rings
    const ringMat = (color: number) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const mkRing = (r: number, color: number, tilt: THREE.Euler) => {
      const g = new THREE.RingGeometry(r, r + 0.03, 128);
      const m = new THREE.Mesh(g, ringMat(color));
      m.rotation.copy(tilt);
      m.position.copy(ico.position);
      scene.add(m);
      return m;
    };
    const ring1 = mkRing(5.5, 0xa855f7, new THREE.Euler(Math.PI / 2.4, 0, 0));
    const ring2 = mkRing(7.5, 0xe8c07a, new THREE.Euler(Math.PI / 3, Math.PI / 6, 0));
    const ring3 = mkRing(9.5, 0x6ba3c8, new THREE.Euler(Math.PI / 2.8, -Math.PI / 5, 0));

    // Particles 3 layers
    const layers = [
      { count: 800, color: 0x7c3aed, size: 0.04, spread: 30 },
      { count: 600, color: 0xa855f7, size: 0.05, spread: 24 },
      { count: 400, color: 0xe9d5ff, size: 0.03, spread: 36 },
    ];
    layers.forEach(L => {
      const g = new THREE.BufferGeometry();
      const pos = new Float32Array(L.count * 3);
      for (let i = 0; i < L.count; i++) {
        pos[i*3] = (Math.random() - 0.5) * L.spread;
        pos[i*3+1] = (Math.random() - 0.5) * L.spread;
        pos[i*3+2] = (Math.random() - 0.5) * L.spread;
      }
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const m = new THREE.PointsMaterial({ color: L.color, size: L.size, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
      scene.add(new THREE.Points(g, m));
    });

    // Orbiting glow spheres
    const orbColors = [0x7c3aed, 0xa855f7, 0xc084fc, 0x7c3aed, 0xa855f7, 0xc084fc];
    const orbs: { mesh: THREE.Mesh; r: number; speed: number; phase: number; tilt: number }[] = [];
    orbColors.forEach((c, i) => {
      const g = new THREE.SphereGeometry(0.12, 16, 16);
      const m = new THREE.MeshBasicMaterial({ color: c });
      const mesh = new THREE.Mesh(g, m);
      scene.add(mesh);
      orbs.push({ mesh, r: 5 + Math.random() * 5, speed: 0.3 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2, tilt: Math.random() * Math.PI });
    });

    // Lights
    scene.add(new THREE.AmbientLight(0x1a1030, 0.6));
    const l1 = new THREE.PointLight(0x7c3aed, 80, 30); l1.position.set(5, 4, 5); scene.add(l1);
    const l2 = new THREE.PointLight(0xe8c07a, 50, 30); l2.position.set(-5, -3, 4); scene.add(l2);
    const l3 = new THREE.PointLight(0x6ba3c8, 40, 30); l3.position.set(0, 5, -3); scene.add(l3);

    // Mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let raf = 0;
    const render = () => {
      const t = clock.getElapsedTime();
      ico.rotation.x = t * 0.2; ico.rotation.y = t * 0.3;
      wire.rotation.copy(ico.rotation);
      ring1.rotation.z = t * 0.15;
      ring2.rotation.z = -t * 0.1;
      ring3.rotation.z = t * 0.07;
      orbs.forEach(o => {
        const a = t * o.speed + o.phase;
        o.mesh.position.set(
          ico.position.x + Math.cos(a) * o.r,
          Math.sin(a) * o.r * Math.sin(o.tilt),
          Math.sin(a) * o.r * Math.cos(o.tilt),
        );
      });
      l1.position.x = Math.sin(t * 0.5) * 6;
      l1.position.y = Math.cos(t * 0.4) * 4;
      l2.position.x = Math.cos(t * 0.3) * 5;
      l3.position.z = Math.sin(t * 0.6) * 4;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      camera.position.x = mouse.x * 0.8;
      camera.position.y = -mouse.y * 0.5;
      camera.lookAt(ico.position.x * 0.5, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      camera.aspect = w() / h(); camera.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);
  return <div ref={mount} style={{ position: "absolute", inset: 0 }} />;
}
