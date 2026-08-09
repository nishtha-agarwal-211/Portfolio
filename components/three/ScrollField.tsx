"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 300;

function Field() {
  const ref = useRef<THREE.Points>(null);
  const velocity = useRef(0);

  const positions = useRef(
    (() => {
      const arr = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        arr[i * 3] = (Math.random() - 0.5) * 24;
        arr[i * 3 + 1] = (Math.random() - 0.5) * 50;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 6;
      }
      return arr;
    })()
  );

  useEffect(() => {
    let lastScroll = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      velocity.current = (y - lastScroll) * 0.015;
      lastScroll = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    velocity.current *= 0.92;
    if (Math.abs(velocity.current) < 0.0001) return;
    const attr = ref.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!attr) return;
    for (let i = 0; i < COUNT; i++) {
      let y = attr.getY(i) - velocity.current;
      if (y > 25) y = -25;
      if (y < -25) y = 25;
      attr.setY(i, y);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#7C3AED" size={0.025} transparent opacity={0.35} sizeAttenuation />
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
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-50" aria-hidden="true">
      <DynamicScrollField />
    </div>
  );
}
