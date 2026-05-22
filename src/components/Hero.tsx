'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  const scrollToCollections = () => {
    document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      aria-label="МАССИВ — Премиальное чайное искусство"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 z-0 opacity-40">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover grayscale brightness-50"
         >
            <source src="https://cdn.pixabay.com/video/2021/04/13/70912-536962386_tiny.mp4" type="video/mp4" />
         </video>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="block text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] font-semibold">
              Эстетика вечности
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none uppercase">
              МАССИВ
            </h1>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-10">
            <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed">
              Инвестиционные артефакты для чайной культуры. <br />
              Сплав реликтовой природы и абсолютной тишины.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onOrderClick} 
                className="premium-button w-full sm:w-auto"
              >
                Начать проектирование
              </button>
              <button 
                onClick={scrollToCollections}
                className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 pb-1 border-b border-white/10 hover:border-white"
              >
                Коллекции
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-50"
      >
        <div className="w-[1px] h-16 bg-white/20" />
      </motion.div>
    </section>
  );
}
