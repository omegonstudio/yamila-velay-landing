"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const azul = "#1E3A8A"; 
const violeta = "#7C3AED";

const TextureMesh: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null);

  // 1) Creamos el material una sola vez
  const material = useMemo(() => {
    const bgColor = new THREE.Color(azul); // azul oscuro
    return new THREE.ShaderMaterial({
      fragmentShader: `
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec3 u_color;
        uniform vec4 u_background;
        uniform float u_speed;
        uniform float u_detail;
        
        // Función de rotación
        mat2 m(float a) {
          float c = cos(a), s = sin(a);
          return mat2(c, -s, s, c);
        }
        
        #ifndef FNC_RGB2LUMA
        #define FNC_RGB2LUMA
        float rgb2luma(in vec3 color) {
          return dot(color, vec3(0.299, 0.587, 0.114));
        }
        float rgb2luma(in vec4 color) {
          return rgb2luma(color.rgb);
        }
        #endif
        
        #ifndef FNC_LUMA
        #define FNC_LUMA
        float luma(float v) { return v; }
        float luma(in vec3 v) { return rgb2luma(v); }
        float luma(in vec4 v) { return rgb2luma(v.rgb); }
        #endif
        
        float map(vec3 p) {
          float t = u_time * u_speed;
          p.xz *= m(t * 0.4);
          p.xy *= m(t * 0.1);
          vec3 q = p * 2.0 + t;
          return length(p + vec3(sin((t * u_speed) * 0.1))) * log(length(p) + 0.9) +
                 cos(q.x + sin(q.z + cos(q.y))) * 0.5 - 1.0;
        }
        
        void main() {
          vec2 a = gl_FragCoord.xy / u_resolution.x - vec2(0.5, 0.5);
          vec3 cl = vec3(0.0);
          float d = 2.5;
          
          for (float i = 0.0; i <= (1.0 + 20.0 * u_detail); i++) {
            vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
            float rz = map(p);
            float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
            vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
            cl = cl * l + smoothstep(3.5, 0.0, rz) * 0.6 * l;
            d += min(rz, 1.0);
          }
          
          vec4 color = vec4(min(u_color, cl), 1.0);
          color.r = max(u_background.r, color.r);
          color.g = max(u_background.g, color.g);
          color.b = max(u_background.b, color.b);
          gl_FragColor = color;
        }
      `,
      vertexShader: ` void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      uniforms: {
        u_color: { value: new THREE.Color(violeta) },

        u_background: {
          value: new THREE.Vector4(bgColor.r, bgColor.g, bgColor.b, 1),
        },
        u_speed: { value: 0.5 },
        u_detail: { value: 0.11118 },
        u_time: { value: 0 },
        u_mouse: { value: [1.0,0] },
        u_resolution: { value: [1024, 1024] },
      },
      side: THREE.DoubleSide,
      transparent: true,
    });
  }, []);

  // 2) En cada frame actualizas los uniforms
  useFrame((state) => {
    const { clock, mouse, gl } = state;
    if (mesh.current && material.uniforms) {
      material.uniforms.u_time.value = clock.getElapsedTime();
      material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      const { width, height } = gl.domElement.getBoundingClientRect();
      material.uniforms.u_resolution.value = [width, height];
    }
  });

  return (
    <mesh ref={mesh} material={material}>
      <planeGeometry args={[1024, 1024]} />
    </mesh>
  );
};

const ShaderCanvas: React.FC = () => (
  <Canvas
    gl={{
      preserveDrawingBuffer: true,
      alpha: true,
      antialias: true,
      precision: "highp",
      powerPreference: "high-performance",
    }}
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    <TextureMesh />
  </Canvas>
);

export default ShaderCanvas;
