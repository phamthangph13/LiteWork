"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion, useGSAP, ScrollTrigger } from "@/lib/gsap";

const COUNT = 1400;
const ACCENT_COUNT = 90;
const FORMATIONS = 4;

type PointBuilder = (
  a: number,
  b: number,
  c: number,
) => [number, number, number];

const spherePoint: PointBuilder = (a, b, c) => {
  const y = 1 - a * 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = b * Math.PI * 2;
  const r = 2.3 * (0.78 + c * 0.22);
  return [Math.cos(theta) * radius * r, y * r, Math.sin(theta) * radius * r];
};

const knotPoint: PointBuilder = (a, b, c) => {
  const t = a * Math.PI * 2;
  const base = 1.5;
  const jitter = 0.3 * (b - 0.5) + 0.2 * (c - 0.5);
  const x = (base + Math.cos(3 * t) * 0.6) * Math.cos(2 * t);
  const y = (base + Math.cos(3 * t) * 0.6) * Math.sin(2 * t);
  const z = Math.sin(3 * t) * 0.6;
  return [x + jitter, y + jitter * 0.6, z + jitter];
};

const wavePoint: PointBuilder = (a, b, c) => {
  const x = (a - 0.5) * 6.6;
  const z = (b - 0.5) * 6.6;
  const y = Math.sin(x * 1.45) * Math.cos(z * 1.3) * 0.62 + (c - 0.5) * 0.22;
  return [x, y, z];
};

const helixPoint: PointBuilder = (a, b, c) => {
  const sign = b > 0.5 ? 1 : -1;
  const t = a * Math.PI * 6 + (b > 0.5 ? 0 : Math.PI);
  const x = Math.cos(t) * 1.9 * sign + (c - 0.5) * 0.5;
  const z = Math.sin(t) * 1.9 * sign + (c - 0.5) * 0.5;
  const y = (a - 0.5) * 5.8;
  return [x, y, z];
};

const POINT_BUILDERS: PointBuilder[] = [spherePoint, knotPoint, wavePoint, helixPoint];

function mulberry(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildFormations(seed: number, count: number): Float32Array[] {
  const rand = mulberry(seed);
  const out: Float32Array[] = [];
  for (let f = 0; f < FORMATIONS; f++) out.push(new Float32Array(count * 3));
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r1 = rand();
    const r2 = rand();
    const r3 = rand();
    for (let f = 0; f < FORMATIONS; f++) {
      const p = POINT_BUILDERS[f]!(r1, r2, r3);
      out[f]![i3] = p[0];
      out[f]![i3 + 1] = p[1];
      out[f]![i3 + 2] = p[2];
    }
  }
  return out;
}

function morphInto(target: Float32Array, source: Float32Array[], m: number) {
  const clamped = Math.max(0, Math.min(FORMATIONS - 0.001, m));
  const a = Math.floor(clamped);
  const b = Math.min(a + 1, FORMATIONS - 1);
  const t = THREE.MathUtils.smoothstep(clamped - a, 0, 1);
  const arrA = source[a]!;
  const arrB = source[b]!;
  for (let i = 0; i < target.length; i++) {
    target[i] = arrA[i]! + (arrB[i]! - arrA[i]!) * t;
  }
}

function Scene() {
  const base = useMemo(() => buildFormations(9377, COUNT), []);
  const accent = useMemo(() => buildFormations(4127, ACCENT_COUNT), []);
  const reduced = useMemo(() => prefersReducedMotion(), []);

  const groupRef = useRef<THREE.Group>(null);
  const basePointsRef = useRef<THREE.Points>(null);
  const hiPointsRef = useRef<THREE.Points>(null);

  const buffers = useRef<{
    baseGeo: THREE.BufferGeometry;
    hiGeo: THREE.BufferGeometry;
    baseAttr: THREE.BufferAttribute;
    hiAttr: THREE.BufferAttribute;
  } | null>(null);

  const morphTarget = useRef(0);
  const morphCurrent = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const baseAttr = new THREE.BufferAttribute(new Float32Array(base[0]!), 3);
    const hiAttr = new THREE.BufferAttribute(new Float32Array(accent[0]!), 3);
    const baseGeo = new THREE.BufferGeometry();
    baseGeo.setAttribute("position", baseAttr);
    const hiGeo = new THREE.BufferGeometry();
    hiGeo.setAttribute("position", hiAttr);
    buffers.current = { baseGeo, hiGeo, baseAttr, hiAttr };

    const basePoints = basePointsRef.current;
    const hiPoints = hiPointsRef.current;
    if (basePoints) basePoints.geometry = baseGeo;
    if (hiPoints) hiPoints.geometry = hiGeo;

    return () => {
      baseGeo.dispose();
      hiGeo.dispose();
      buffers.current = null;
    };
  }, [base, accent]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        morphTarget.current = self.progress * (FORMATIONS - 1);
      },
    });
  });

  useFrame((state, delta) => {
    const store = buffers.current;
    const group = groupRef.current;
    if (!store || !group) return;
    const { baseGeo, hiGeo, baseAttr, hiAttr } = store;

    const dt = Math.min(delta, 0.05);
    morphCurrent.current +=
      (morphTarget.current - morphCurrent.current) * dt * 4.2;

    morphInto(baseAttr.array as Float32Array, base, morphCurrent.current);
    morphInto(hiAttr.array as Float32Array, accent, morphCurrent.current);
    baseAttr.needsUpdate = true;
    hiAttr.needsUpdate = true;

    const t = state.clock.elapsedTime;
    group.rotation.y += dt * (reduced ? 0.012 : 0.055);
    group.rotation.x = Math.sin(t * 0.16) * 0.1 + pointer.current.y * 0.16;

    const cam = state.camera;
    if (!reduced) {
      const targetX = pointer.current.x * 0.6;
      const targetY = 0.4 - pointer.current.y * 0.35;
      cam.position.x += (targetX - cam.position.x) * 0.045;
      cam.position.y += (targetY - cam.position.y) * 0.045;
    }
    cam.lookAt(0, 0, 0);
    baseGeo.computeBoundingSphere();
    hiGeo.computeBoundingSphere();
  });

  return (
    <group ref={groupRef}>
      <points ref={basePointsRef}>
        <pointsMaterial
          size={0.022}
          color="#3a382e"
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <points ref={hiPointsRef}>
        <pointsMaterial
          size={0.085}
          color="#2d2a80"
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function AgentField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.4, 7.4], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
