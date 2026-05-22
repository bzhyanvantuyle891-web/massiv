'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense, useState, useEffect, useRef } from 'react';

function ChabanModel() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 0.4, 2.5]} />
        <meshStandardMaterial color="#111" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Visual drainage detail */}
      <mesh position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.3, 32]} />
        <meshStandardMaterial color="#bc8a5f" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Luxury Feet */}
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

  // Оптимизация 3D: рендерим только если блок во вьюпорте
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '200px 0px' } // Начинаем рендер чуть заранее
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="showroom" className="h-[90vh] w-full bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center space-y-4"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-[rgb(var(--accent-wood))] font-bold block opacity-40">Интерактивный Объект</span>
          <h2 className="text-4xl md:text-7xl font-sans font-black text-white/90 tracking-tighter leading-none uppercase italic">Геометрия <br /> совершенства</h2>
        </motion.div>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        {isInView ? (
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/10 uppercase tracking-widest text-[10px]">Инициализация 3D среды...</div>}>
            <Canvas shadows camera={{ position: [0, 2, 6], fov: 35 }} frameloop="demand">
              <color attach="background" args={['#050505']} />
              <Stage intensity={0.5} environment="city" adjustCamera={false}>
                <ChabanModel />
              </Stage>
              <ContactShadows opacity={0.4} scale={10} blur={2.5} far={4} resolution={256} color="#000000" />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
              <Environment preset="night" />
            </Canvas>
          </Suspense>
        ) : (
           <div className="w-full h-full bg-[#050505]" /> // Плейсхолдер пока не во вьюпорте
        )}
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center gap-4">
        <div className="w-12 h-[1px] bg-white/10" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/20">360° Инспекция</span>
      </div>
    </section>
  );
}
