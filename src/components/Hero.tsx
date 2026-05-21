'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section 
      aria-label="Главный экран"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" aria-hidden="true" />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50 scale-105"
         >
            <source src="https://cdn.pixabay.com/video/2021/04/13/70912-536962386_tiny.mp4" type="video/mp4" />
         </video>
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-sm uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))] mb-6 font-medium">
            Авторские чабани
          </span>
          <h1 className="text-7xl md:text-9xl font-display font-medium text-white mb-8 tracking-tighter">
            МАССИВ
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
            Искусство тишины и дерева. Создаем монолитные инструменты для чайных церемоний, неподвластные времени.
          </p>
          
          <nav className="flex flex-col sm:flex-row items-center justify-center gap-6" aria-label="Основные действия">
            <button 
              onClick={onOrderClick} 
              className="premium-button min-w-[200px]"
              aria-label="Оставить заявку на изготовление чабани"
            >
              Оставить заявку
            </button>
            <button 
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300 border-b border-white/20 pb-1"
              aria-label="Перейти к просмотру коллекции"
            >
              Смотреть коллекцию
            </button>
          </nav>
        </motion.div>
      </div>

      {/* Bottom Detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Скролл</span>
      </motion.div>
    </section>
  );
}
