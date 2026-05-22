'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  const springScale = useSpring(scale, { damping: 30, stiffness: 100 });

  return (
    <section 
      ref={containerRef}
      aria-label="МАССИВ — Премиальное чайное искусство"
      className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <motion.div 
        style={{ scale: springScale }}
        className="absolute inset-0 z-0 opacity-40 will-change-transform"
      >
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
         >
            <source src="https://cdn.pixabay.com/video/2021/04/13/70912-536962386_tiny.mp4" type="video/mp4" />
         </video>
      </motion.div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 md:space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="block text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-[rgb(var(--accent-wood))] font-bold"
            >
              Эстетика вечности
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-sans font-black text-white tracking-[-0.05em] leading-[0.8] select-none uppercase">
              МАССИВ
            </h1>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-8 md:space-y-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-lg text-gray-300/80 font-medium leading-relaxed tracking-tight"
            >
              Инвестиционные артефакты для чайной культуры. <br />
              Сплав реликтовой природы и абсолютной тишины.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
            >
              <button 
                onClick={onOrderClick} 
                className="premium-button min-w-[240px]"
              >
                Начать проектирование
              </button>
              <button className="text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all duration-700 border-b border-white/5 pb-2">
                Коллекции 2026
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-6"
      >
        <div className="relative w-[1px] h-16 md:h-24 bg-white/5 overflow-hidden">
           <motion.div 
             className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[rgb(var(--accent-wood))] to-transparent"
             animate={{ y: ['-100%', '300%'] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           />
        </div>
      </motion.div>
    </section>
  );
}
