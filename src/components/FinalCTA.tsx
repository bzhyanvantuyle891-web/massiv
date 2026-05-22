'use client';

import { motion } from 'framer-motion';

interface CTAProps {
  onOrderClick: () => void;
}

export default function FinalCTA({ onOrderClick }: CTAProps) {
  return (
    <section className="py-32 md:py-48 px-4 md:px-8 flex flex-col items-center text-center bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <div className="relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">Цифровое Ателье</span>
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl text-white tracking-tight uppercase">
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
            className="premium-button"
          >
            Оставить заявку
          </button>
        </motion.div>
      </div>

      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 hidden lg:block" />
    </section>
  );
}
