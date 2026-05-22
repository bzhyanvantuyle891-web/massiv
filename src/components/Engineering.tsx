'use client';

import { motion } from 'framer-motion';

export default function Engineering() {
  return (
    <section id="engineering" className="py-24 md:py-32 px-4 md:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">Инженерия</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Магия невидимого потока</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[rgb(var(--accent-wood))] font-bold text-sm">01</div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Уклон &quot;Золотого сечения&quot;</h4>
                  <p className="text-base text-gray-400 leading-relaxed">Поверхность рассчитана с точностью до 0.1°. Вода мгновенно устремляется к центру, не оставляя шанса застою.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[rgb(var(--accent-wood))] font-bold text-sm">02</div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Скрытый коллектор</h4>
                  <p className="text-base text-gray-400 leading-relaxed">Система слива интегрирована в массив. Никаких видимых шлангов — только чистое дерево и металл.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[rgb(var(--accent-wood))] font-bold text-sm">03</div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Защита Dry-Touch</h4>
                  <p className="text-base text-gray-400 leading-relaxed">Вакуумная пропитка полимерами на глубину 5мм. Дерево дышит, но отталкивает воду на молекулярном уровне.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-[#111] border border-white/5 rounded-2xl p-12 flex items-center justify-center overflow-hidden"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full text-[rgb(var(--accent-wood))]">
                <motion.path 
                  d="M50 200 Q 200 210 350 200" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <circle cx="200" cy="205" r="4" fill="currentColor" className="animate-pulse" />
                <rect x="100" y="150" width="200" height="10" fill="currentColor" opacity="0.1" />
                
                {[...Array(5)].map((_, i) => (
                  <line 
                    key={i} 
                    x1="50" y1={180 + i*15} 
                    x2="350" y2={180 + i*15} 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    opacity={0.3 - i*0.05} 
                  />
                ))}

                <g className="text-[10px] uppercase tracking-widest fill-gray-500 font-bold">
                   <text x="50" y="160">Surface: 0.1° Tilt</text>
                   <text x="210" y="260">Hidden Collector</text>
                   <line x1="200" y1="208" x2="200" y2="245" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </g>
              </svg>

              <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
