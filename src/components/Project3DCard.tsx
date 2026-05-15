import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Project3DCardProps {
  name: string;
  category: string;
  description: string;
  result: string;
  stack: string;
  color?: string;
}

export function Project3DCard({
  name,
  category,
  description,
  result,
  stack,
  color = "#a855f7",
}: Project3DCardProps) {
  const mount = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;

    const w = el.clientWidth;
    const h = el.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Create geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 2);
    const colorNum = parseInt(color.replace("#", ""), 16);
    const material = new THREE.MeshPhongMaterial({
      color: colorNum,
      wireframe: false,
      emissive: colorNum,
      emissiveIntensity: hovered ? 0.8 : 0.2,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wire frame
    const wireGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: colorNum,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireframe);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 5, 5);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    let animationId: number;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth rotation towards target
      currentRotationX += (targetRotationX - currentRotationX) * 0.1;
      currentRotationY += (targetRotationY - currentRotationY) * 0.1;

      mesh.rotation.x = currentRotationX;
      mesh.rotation.y = currentRotationY;
      wireframe.rotation.x = currentRotationX;
      wireframe.rotation.y = currentRotationY;

      mesh.rotation.z += 0.001;
      wireframe.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      if (!hovered) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetRotationX = (y - 0.5) * 2;
      targetRotationY = (x - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, [hovered, color]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        border: "1px solid rgba(168,85,247,0.2)",
        borderRadius: 12,
        background: "linear-gradient(135deg, rgba(124,58,237,0.05), rgba(192,132,252,0.02))",
        overflow: "hidden",
        transition: "all 0.4s ease",
        borderColor: hovered ? "rgba(168,85,247,0.5)" : "rgba(168,85,247,0.2)",
      }}
    >
      {/* 3D Canvas */}
      <div
        ref={mount}
        style={{
          width: "100%",
          height: "200px",
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Content */}
      <div style={{ padding: "24px", position: "relative" }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: "#a855f7",
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "'DM Serif Display', serif",
            fontStyle: "italic",
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 13,
            color: "rgba(233,213,255,0.6)",
            lineHeight: 1.55,
          }}
        >
          {description}
        </div>
        <div
          style={{
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid rgba(168,85,247,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <span style={{ color: "rgba(233,213,255,0.5)" }}>{stack}</span>
          <span style={{ color: "#a855f7", fontWeight: 500 }}>{result}</span>
        </div>
      </div>
    </div>
  );
}
