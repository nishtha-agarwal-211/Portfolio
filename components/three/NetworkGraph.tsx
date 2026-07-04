"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 46;
const CONNECT_DIST = 2.4;

function Graph() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
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
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.002
        )
      );
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxSegments = NODE_COUNT * NODE_COUNT;
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(maxSegments * 3 * 2), 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    const posAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!posAttr) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      let x = posAttr.getX(i) + velocities[i].x;
      let y = posAttr.getY(i) + velocities[i].y;
      let z = posAttr.getZ(i) + velocities[i].z;

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
        }
      }
    }
    lineGeometry.setDrawRange(0, vertexPos);
    linePos.needsUpdate = true;

    if (groupRef.current) {
      const targetX = mouse.current.x * 0.35;
      const targetY = mouse.current.y * 0.25;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
  });

  function handlePointerMove(e: { clientX: number; clientY: number }) {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
  }

  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <group ref={groupRef} scale={Math.min(viewport.width / 10, 1.1)}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#2ce6c6" size={0.06} transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#6e5bff" transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

export default function NetworkGraph() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <Graph />
    </Canvas>
  );
}
