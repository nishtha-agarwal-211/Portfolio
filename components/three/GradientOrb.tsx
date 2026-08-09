"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";
import { BlendFunction } from "postprocessing";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColor1: { value: new THREE.Color("#7C3AED") },
      uColor2: { value: new THREE.Color("#06D6A0") },
      uColor3: { value: new THREE.Color("#38BDF8") },
      uColor4: { value: new THREE.Color("#A855F7") },
    }),
    []
  );

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vDisplacement;

    //	Simplex 3D noise
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod(i, 289.0);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 1.0/7.0;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      float noise = snoise(position * 1.5 + uTime * 0.3);
      float mouseInfluence = smoothstep(1.5, 0.0, length(position.xy - uMouse * 2.0)) * 0.15;
      vDisplacement = noise * 0.18 + mouseInfluence;
      vec3 newPos = position + normal * vDisplacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    varying vec2 vUv;
    varying float vDisplacement;

    void main() {
      float t = uTime * 0.15;
      vec3 color = mix(uColor1, uColor2, smoothstep(-0.2, 0.3, sin(vUv.x * 3.14 + t)));
      color = mix(color, uColor3, smoothstep(0.2, 0.8, sin(vUv.y * 3.14 + t * 0.7)));
      color = mix(color, uColor4, smoothstep(-0.1, 0.4, vDisplacement * 2.5));

      float fresnel = pow(1.0 - abs(dot(normalize(vec3(vUv * 2.0 - 1.0, 1.0)), vec3(0.0, 0.0, 1.0))), 2.5);
      color += fresnel * 0.3;

      gl_FragColor = vec4(color, 0.92);
    }
  `;

  useEffect(() => {
    const handler = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
    }
  });

  const scale = Math.min(viewport.width / 10, 1) * 1.6;

  return (
    <mesh ref={meshRef} scale={scale} position={[viewport.width * 0.18, 0, 0]}>
      <icosahedronGeometry args={[1, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export default function GradientOrb() {
  return (
    <Canvas
      style={{ pointerEvents: "none" }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <Orb />
      <EffectComposer>
        <Bloom
          intensity={0.7}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.5}
          mipmapBlur
        />
        <ChromaticAberration
          {...({
            blendFunction: BlendFunction.NORMAL,
            offset: new THREE.Vector2(0.0004, 0.0004),
          } as any)}
        />
      </EffectComposer>
    </Canvas>
  );
}
