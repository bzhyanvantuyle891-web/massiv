'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onOrderClick: () => void;
}

export default function FinalCTA({ onOrderClick }: CTAProps) {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 flex flex-col items-center text-center bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <div className="relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-[rgb(var(--accent-wood))] font-bold ml-[1em]">Цифровое Ателье</span>
          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl text-white tracking-tighter uppercase leading-none">
            Ваше время <br /> в массиве
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={onOrderClick} 
            className="premium-button text-[10px] px-10 py-4"
          >
            Оставить заявку
          </button>
        </motion.div>
      </div>
    </section>
  );
}
