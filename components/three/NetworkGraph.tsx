"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { BlendFunction } from "postprocessing";

const NODE_COUNT = 60;
const CONNECT_DIST = 2.3;
const PULSE_COUNT = 14;
const REPEL_RADIUS = 1.6;
const REPEL_STRENGTH = 0.035;

function Graph() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const pulsesRef = useRef<THREE.Points>(null);
  const mouseWorld = useRef(new THREE.Vector3(9999, 9999, 0));
  const mouseNdc = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(NODE_COUNT * 3);
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002
        )
      );
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxSegments = NODE_COUNT * NODE_COUNT;
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(maxSegments * 3 * 2), 3));
    return geo;
  }, []);

  // Pulses: little bright dots that travel along active edges
  const pulses = useMemo(
    () =>
      Array.from({ length: PULSE_COUNT }, () => ({
        i: 0,
        j: 0,
        t: Math.random(),
        speed: 0.25 + Math.random() * 0.35,
        active: false,
      })),
    []
  );
  const pulsePositions = useMemo(() => new Float32Array(PULSE_COUNT * 3), []);

  useFrame((state, delta) => {
    const posAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!posAttr) return;

    // project mouse into the graph's world plane
    mouseWorld.current.set(
      mouseNdc.current.x * viewport.width * 0.5,
      mouseNdc.current.y * viewport.height * 0.5,
      0
    );

    const edges: [number, number][] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      let x = posAttr.getX(i) + velocities[i].x;
      let y = posAttr.getY(i) + velocities[i].y;
      let z = posAttr.getZ(i) + velocities[i].z;

      // cursor repulsion — nodes flee from the mouse
      const dx = x - mouseWorld.current.x;
      const dy = y - mouseWorld.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > 0.001) {
        const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
        x += (dx / dist) * force;
        y += (dy / dist) * force;
      }

      if (x > 4.6 || x < -4.6) velocities[i].x *= -1;
      if (y > 3.2 || y < -3.2) velocities[i].y *= -1;
      if (z > 1.6 || z < -1.6) velocities[i].z *= -1;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    let vertexPos = 0;
    const linePos = lineGeometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = posAttr.getX(i) - posAttr.getX(j);
        const dy = posAttr.getY(i) - posAttr.getY(j);
        const dz = posAttr.getZ(i) - posAttr.getZ(j);
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECT_DIST) {
          linePos.setXYZ(vertexPos++, posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
          linePos.setXYZ(vertexPos++, posAttr.getX(j), posAttr.getY(j), posAttr.getZ(j));
          edges.push([i, j]);
        }
      }
    }
    lineGeometry.setDrawRange(0, vertexPos);
    linePos.needsUpdate = true;

    // travel pulses along random live edges
    const pulseAttr = pulsesRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (pulseAttr && edges.length > 0) {
      pulses.forEach((p, idx) => {
        if (!p.active) {
          const [i, j] = edges[Math.floor(Math.random() * edges.length)];
          p.i = i;
          p.j = j;
          p.t = 0;
          p.active = true;
        }
        p.t += delta * p.speed;
        if (p.t >= 1) {
          p.active = false;
          p.t = 1;
        }
        const ix = posAttr.getX(p.i), iy = posAttr.getY(p.i), iz = posAttr.getZ(p.i);
        const jx = posAttr.getX(p.j), jy = posAttr.getY(p.j), jz = posAttr.getZ(p.j);
        pulsePositions[idx * 3] = THREE.MathUtils.lerp(ix, jx, p.t);
        pulsePositions[idx * 3 + 1] = THREE.MathUtils.lerp(iy, jy, p.t);
        pulsePositions[idx * 3 + 2] = THREE.MathUtils.lerp(iz, jz, p.t);
      });
      pulseAttr.needsUpdate = true;
    }

    if (groupRef.current) {
      const targetX = mouseNdc.current.x * 0.35;
      const targetY = mouseNdc.current.y * 0.25;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
  });

  function handlePointerMove(e: PointerEvent) {
    mouseNdc.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseNdc.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
  }

  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <group ref={groupRef} scale={Math.min(viewport.width / 10, 1.1)}>
      <Sparkles count={80} scale={[9, 6, 3]} size={1.4} speed={0.15} color="#6E5BFF" opacity={0.35} />

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#2ce6c6" size={0.075} transparent opacity={0.95} sizeAttenuation />
      </points>

      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#6e5bff" transparent opacity={0.3} />
      </lineSegments>

      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.16} transparent opacity={0.95} sizeAttenuation />
      </points>
    </group>
  );
}

export default function NetworkGraph() {
  return (
    <Canvas
      style={{ pointerEvents: "none" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <Graph />
      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur />
        <ChromaticAberration {...({ blendFunction: BlendFunction.NORMAL, offset: new THREE.Vector2(0.0006, 0.0006) } as any)} />
      </EffectComposer>
    </Canvas>
  );
}
