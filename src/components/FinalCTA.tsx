'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onOrderClick: () => void;
}

export default function FinalCTA({ onOrderClick }: CTAProps) {
  return (
    <section className="py-40 md:py-60 px-4 md:px-8 flex flex-col items-center text-center bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <div className="relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))] font-semibold">Цифровое Ателье</span>
          <h2 className="text-5xl md:text-8xl font-bold max-w-5xl leading-none text-white tracking-tighter uppercase">
            Ваше время <br /> в массиве
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <button 
            onClick={onOrderClick} 
            className="premium-button scale-110 md:scale-125"
          >
            Начать диалог
          </button>
        </motion.div>
      </div>
    </section>
  );
}
