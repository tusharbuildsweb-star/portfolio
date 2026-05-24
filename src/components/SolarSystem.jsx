import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const labels = [
  'WEB DESIGN',
  'UI / UX DESIGN',
  'MERN PROJECTS',
  'REALTIME APPS',
  'BACKEND',
  'DEVELOPMENT',
];

function OrbitingLabel({ text, index, total }) {
  const groupRef = useRef();
  const angleStart = (index / total) * Math.PI * 2;
  const a = 25; 
  const b = 10; 

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * 0.15 + angleStart;
    groupRef.current.position.x = Math.cos(t) * a;
    groupRef.current.position.z = Math.sin(t) * b;
  });

  return (
    <group ref={groupRef}>
      <Html center zIndexRange={[100, 0]}>
        <div className="flex items-center gap-3 select-none pointer-events-none whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <span className="text-black font-body font-bold text-[10px] tracking-widest uppercase">
            {text}
          </span>
        </div>
      </Html>
    </group>
  );
}

function OrbitLines() {
  const points = [];
  const a = 25;
  const b = 10;
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * a, 0, Math.sin(angle) * b));
  }
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineDashedMaterial color="#000000" dashSize={0.5} gapSize={0.5} opacity={0.1} transparent />
    </line>
  );
}

export default function SolarSystem() {
  return (
    <section className="hs-panel section-wrapper bg-[#f5f5f5] flex items-center shrink-0 overflow-hidden relative">
      
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
        <div className="w-8 h-8 rounded-full border border-black/20 flex flex-col items-center justify-center text-[9px] text-black/50 font-body">03</div>
        <div className="w-[1px] h-6 bg-black/20" />
        <span className="text-[10px] uppercase tracking-widest text-black/60 font-body" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>SOLAR SYSTEM</span>
        <div className="w-[1px] h-12 bg-black/20" />
      </div>

      <div className="reveal w-full h-full absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 20, 25], fov: 50 }}>
          <OrbitLines />
          <Html center zIndexRange={[10, 0]}>
            <div className="relative flex items-center justify-center w-56 h-56 rounded-full bg-gradient-to-br from-[#ffeeb8] to-[#ffc824] shadow-[0_0_80px_rgba(255,180,0,0.4)]">
               <div className="absolute inset-0 rounded-full bg-[#FFB400] blur-[40px] opacity-40 mix-blend-multiply" />
               <div className="relative text-center z-10">
                 <h1 className="text-black font-heading font-black text-xl tracking-[0.2em] uppercase leading-tight">
                   TUSHAR<br/>UNIVERSE
                 </h1>
               </div>
            </div>
          </Html>
          {labels.map((text, i) => (
            <OrbitingLabel key={text} text={text} index={i} total={labels.length} />
          ))}
        </Canvas>
      </div>

    </section>
  );
}
