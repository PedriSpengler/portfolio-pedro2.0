"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

/** Slowly rotating distorted icosahedron used as an ambient WebGL accent. */
function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12;
      ref.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.3, 4]}>
        <MeshDistortMaterial
          color="#00D4FF"
          emissive="#7C3AED"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.4}
          speed={1.6}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export default function FloatingOrb() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={2.2} color="#00D4FF" />
      <pointLight position={[-4, -2, 2]} intensity={1.6} color="#7C3AED" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
    </Canvas>
  );
}
