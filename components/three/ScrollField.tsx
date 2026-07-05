"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 400;

function Field() {
  const ref = useRef<THREE.Points>(null);
  const velocity = useRef(0);

  const positions = useRef(
    (() => {
      const arr = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        arr[i * 3] = (Math.random() - 0.5) * 20;
        arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
      }
      return arr;
    })()
  );

  useEffect(() => {
    let lastScroll = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      velocity.current = (y - lastScroll) * 0.02;
      lastScroll = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    velocity.current *= 0.9; // decay
    const attr = ref.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!attr) return;
    for (let i = 0; i < COUNT; i++) {
      let y = attr.getY(i) - velocity.current;
      if (y > 20) y = -20;
      if (y < -20) y = 20;
      attr.setY(i, y);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#2ce6c6" size={0.035} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function ScrollFieldInner() {
  return (
    <Canvas
      style={{ pointerEvents: "none" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: false, alpha: true }}
    >
      <Field />
    </Canvas>
  );
}

// dynamic import wrapper so it never runs server-side
const DynamicScrollField = dynamic(() => Promise.resolve(ScrollFieldInner), { ssr: false });

export default function ScrollField() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    setEnabled(!reduced && !small);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-70" aria-hidden="true">
      <DynamicScrollField />
    </div>
  );
}
