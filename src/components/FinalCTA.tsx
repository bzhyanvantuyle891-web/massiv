'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onOrderClick: () => void;
}

export default function FinalCTA({ onOrderClick }: CTAProps) {
  return (
    <section className="py-60 md:py-80 px-4 md:px-8 flex flex-col items-center text-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-6"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-[rgb(var(--accent-wood))] font-medium">Цифровое Ателье</span>
          <h2 className="text-6xl md:text-[14rem] font-display mb-12 max-w-7xl leading-[0.8] text-white tracking-tighter select-none italic">
            Ваше время <br /> в массиве
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <button 
            onClick={onOrderClick} 
            className="premium-button scale-125 md:scale-150 shadow-[0_0_50px_rgba(196,164,132,0.2)] hover:shadow-[0_0_80px_rgba(196,164,132,0.3)] transition-shadow"
          >
            Начать диалог
          </button>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent hidden lg:block" />
    </section>
  );
}
