'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

function Orb() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.35;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.6, 8]} scale={1.25}>
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#5eead4"
          emissiveIntensity={1.2}
          roughness={0.05}
          metalness={0.6}
          distort={0.45}
          speed={1.8}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 4]} intensity={2} />
      <Orb />
      <Stars radius={50} depth={30} count={1500} factor={3} saturation={0} fade speed={0.7} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}
