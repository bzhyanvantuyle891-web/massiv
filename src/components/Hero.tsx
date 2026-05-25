'use client';

import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Showroom = dynamic(() => import('./Showroom'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent flex items-center justify-center text-white/5 text-[10px] uppercase tracking-widest">Инициализация 3D...</div> 
});

interface HeroProps {
  onOrderClick: () => void;
  activeModel: 'monolith' | 'nature' | 'dark';
  onModelChange: (model: 'monolith' | 'nature' | 'dark') => void;
}

const collections = [
  { id: 'monolith', name: 'Монолит', desc: 'Карагач + Матовая Латунь' },
  { id: 'nature', name: 'Дыхание', desc: 'Дуб + Закаленное стекло' },
  { id: 'dark', name: 'Материя', desc: 'Мореный дуб + Титан' },
] as const;

export default function Hero({ onOrderClick, activeModel, onModelChange }: HeroProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section 
      aria-label="МАССИВ — Премиальное чайное искусство"
      className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[#050505]"
    >
      {/* 3D Model as Background */}
      <div className="absolute inset-x-0 bottom-0 top-[10%] md:top-[15%] z-0 pointer-events-auto">
        <Showroom activeModel={activeModel} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
      </div>

      <div className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center pt-24 md:pt-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-none uppercase">
            МАССИВ
          </h1>
        </motion.div>
      </div>

      {/* Navigation Bar (HUD) */}
      <div className="absolute bottom-0 left-0 w-full z-40">
        <div className="w-full h-px bg-white/5" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 pointer-events-auto">
            <div className="flex flex-col gap-1 items-center sm:items-start">
               <span className="text-[7px] text-gray-600 uppercase tracking-[0.4em] font-mono">Action_Request</span>
               <button 
                  onClick={onOrderClick} 
                  className="premium-button text-[9px] px-10 py-3.5 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
               >
                  Начать проектирование
               </button>
            </div>
            
            <div className="flex flex-col gap-1 items-center sm:items-start relative">
               <span className="text-[7px] text-gray-600 uppercase tracking-[0.4em] font-mono">Archive_Scan</span>
               
               <AnimatePresence>
                 {isAccordionOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     className="absolute bottom-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mb-4 w-64 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden p-2 shadow-2xl z-50"
                   >
                     {collections.map((item) => (
                       <button
                         key={item.id}
                         onClick={() => {
                           onModelChange(item.id);
                           setIsAccordionOpen(false);
                         }}
                         className={`w-full text-left p-3 rounded-lg transition-all flex flex-col gap-0.5 group ${
                           activeModel === item.id ? 'bg-white/10' : 'hover:bg-white/5'
                         }`}
                       >
                         <div className="flex justify-between items-center">
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${activeModel === item.id ? 'text-[rgb(var(--accent-wood))]' : 'text-white'}`}>
                              {item.name}
                            </span>
                            {activeModel === item.id && <div className="w-1 h-1 rounded-full bg-[rgb(var(--accent-wood))] shadow-[0_0_8px_rgb(var(--accent-wood))]" />}
                         </div>
                         <span className="text-[8px] text-gray-500 uppercase tracking-wider">{item.desc}</span>
                       </button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>

               <button 
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  className={`text-[9px] uppercase tracking-[0.2em] transition-all duration-300 pb-1.5 border-b flex items-center gap-2 ${
                    isAccordionOpen ? 'text-white border-white' : 'text-white/50 border-white/10 hover:border-white'
                  }`}
               >
                  Коллекции
                  <motion.svg 
                    animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                    width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  >
                    <path d="M18 15l-6-6-6 6"/>
                  </motion.svg>
               </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-3 opacity-20 pointer-events-none hidden lg:flex"
          >
            <span className="text-[7px] uppercase tracking-[0.5em] text-white">Scroll_Explorer</span>
            <div className="w-[1px] h-8 bg-white/40" />
          </motion.div>

          <div className="flex flex-col gap-1 items-center md:items-end min-w-[160px]">
             <span className="text-[7px] text-gray-600 uppercase tracking-[0.4em] font-mono">Vision_Protocol</span>
             <div className="h-[46px] w-full" />
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
