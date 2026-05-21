'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

function ChabanModel() {
  // Использование абстрактной модели (короба), так как у нас нет внешнего файла модели
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 0.4, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Стилизованные "ножки" */}
      <mesh position={[-1.8, -0.3, -1]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[1.8, -0.3, -1]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[-1.8, -0.3, 1]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[1.8, -0.3, 1]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </Float>
  );
}

export default function Showroom() {
  return (
    <section className="h-[70vh] w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4 block">Интерактив</span>
          <h2 className="text-3xl md:text-5xl font-display text-white/80">Геометрия совершенства</h2>
        </motion.div>
      </div>

      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <color attach="background" args={['#000']} />
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <ChabanModel />
        </Stage>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Взаимодействуйте с моделью</span>
      </div>
    </section>
  );
}
