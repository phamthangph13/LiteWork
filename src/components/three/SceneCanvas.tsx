"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

type Vec = [number, number, number];

function Unit({ color = "#cfd8e3", accent = "#2f6df6" }: { color?: string; accent?: string }) {
  const group = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
    if (fan.current) fan.current.rotation.z += delta * 2.4;
  });

  const blades = Array.from({ length: 6 });

  return (
    <group ref={group} scale={1.02} position={[0, 0.1, 0]}>
      {/* AHU body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.7, 1.7]} />
        <meshStandardMaterial color={color} roughness={0.42} metalness={0.25} flatShading />
      </mesh>

      {/* panel lines */}
      {[-0.85, -0.28, 0.28, 0.85].map((x) => (
        <mesh key={x} position={[x, 0, 0.87]}>
          <boxGeometry args={[0.06, 1.6, 0.04]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} />
        </mesh>
      ))}

      {/* accent stripe */}
      <mesh position={[0, 0.86, 0.87]}>
        <boxGeometry args={[2.5, 0.1, 0.04]} />
        <meshStandardMaterial color={accent} roughness={0.35} />
      </mesh>

      {/* fan housing */}
      <mesh position={[1.32, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.16, 32, 1, true]} />
        <meshStandardMaterial color="#e8edf3" roughness={0.35} metalness={0.4} side={THREE.DoubleSide} />
      </mesh>

      <group ref={fan} position={[1.42, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        {blades.map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI * 2) / blades.length]} position={[0, 0, 0]}>
            <boxGeometry args={[1.05, 0.24, 0.04]} />
            <meshStandardMaterial color={accent} roughness={0.3} metalness={0.5} />
          </mesh>
        ))}
        <mesh>
          <cylinderGeometry args={[0.14, 0.14, 0.18, 20]} />
          <meshStandardMaterial color="#8ea2bd" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* duct */}
      <mesh position={[-2.1, 0.15, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.46, 0.46, 1.5, 28]} />
        <meshStandardMaterial color="#dde5ee" roughness={0.5} metalness={0.3} />
      </mesh>
      <mesh position={[-2.85, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.47, 0.05, 12, 30]} />
        <meshStandardMaterial color={accent} roughness={0.35} metalness={0.5} />
      </mesh>

      {/* pipes */}
      {[-0.45, 0.1, 0.62].map((y, i) => (
        <mesh key={y} position={[0, -1.05, 0.55 - i * 0.05]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.11, 0.11, 2.7, 18]} />
          <meshStandardMaterial
            color={i === 1 ? accent : "#b9c6d6"}
            roughness={0.42}
            metalness={0.45}
          />
        </mesh>
      ))}

      {/* feet */}
      {[
        [-1, -0.95, -0.6],
        [1, -0.95, -0.6],
        [-1, -0.95, 0.6],
        [1, -0.95, 0.6],
      ].map((p, i) => (
        <mesh key={i} position={p as Vec}>
          <boxGeometry args={[0.22, 0.22, 0.22]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function AirStreams({ color = "#2f6df6" }: { color?: string }) {
  const ref = useRef<THREE.Points>(null);
  const count = 900;

  const { positions, seeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sd = new Float32Array(count);
    let seed = 20260101;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 8;
      pos[i * 3 + 1] = (rand() - 0.5) * 3.6;
      pos[i * 3 + 2] = (rand() - 0.5) * 5;
      sd[i] = rand() * Math.PI * 2;
    }
    return { positions: pos, seeds: sd };
  }, [count]);

  useFrame((state) => {
    const points = ref.current;
    if (!points) return;
    const t = state.clock.elapsedTime;
    const arr = points.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      arr[i * 3] += 0.004 + Math.sin(t + s) * 0.0016;
      arr[i * 3 + 1] += Math.cos(t * 0.8 + s) * 0.0018;
      if (arr[i * 3] > 4) arr[i * 3] = -4;
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.095} color={color} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function SceneCanvas({
  variant = "unit",
  className = "",
  accent = "#2f6df6",
  body = "#cfd8e3",
}: {
  variant?: "unit" | "air";
  className?: string;
  accent?: string;
  body?: string;
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 1.3, 6.6], fov: 42 }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 6, 4]} intensity={1.6} castShadow />
        <directionalLight position={[-5, 2, -3]} intensity={0.5} />
        {variant === "unit" ? (
          <>
            <Unit color={body} accent={accent} />
            <ContactShadows position={[0, -1.25, 0]} opacity={0.22} scale={12} blur={2.6} far={4} />
          </>
        ) : (
          <AirStreams color={accent} />
        )}
      </Canvas>
    </div>
  );
}
