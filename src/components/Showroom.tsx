'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from 'react';

function ChabanModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 0.4, 2.5]} />
        <meshStandardMaterial color="#111" roughness={0.3} metalness={0.1} />
      </mesh>
      
      <mesh position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.3, 32]} />
        <meshStandardMaterial color="#c4a484" metalness={0.6} roughness={0.4} />
      </mesh>

      {[[-1.8, 1.1], [1.8, 1.1], [-1.8, -1.1], [1.8, -1.1]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.25, z]}>
          <cylinderGeometry args={[0.08, 0.1, 0.15, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}
    </Float>
  );
}

export default function Showroom() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: '200px 0px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="showroom" className="h-[70vh] w-full bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center border-y border-white/5">
      <div className="absolute top-12 left-0 w-full z-10 flex flex-col items-center pointer-events-none space-y-2">
        <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">
          360° Обзор
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
          Интерактивная модель
        </h2>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing pt-16">
        {isInView ? (
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/40 text-sm">Загрузка 3D...</div>}>
            <Canvas shadows camera={{ position: [0, 3, 6], fov: 35 }} frameloop="demand">
              <color attach="background" args={['#050505']} />
              <Stage intensity={0.4} environment="city" adjustCamera={false}>
                <ChabanModel />
              </Stage>
              <ContactShadows opacity={0.3} scale={8} blur={2} far={4} color="#000000" />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate 
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 3}
              />
              <Environment preset="night" />
            </Canvas>
          </Suspense>
        ) : (
           <div className="w-full h-full bg-[#050505]" />
        )}
      </div>

      <div className="absolute bottom-8 left-0 w-full z-20 pointer-events-none flex justify-center">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Вращайте модель</span>
      </div>
    </section>
  );
}
