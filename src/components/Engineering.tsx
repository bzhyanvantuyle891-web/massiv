'use client';

import { motion } from 'framer-motion';

export default function Engineering() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[rgb(var(--accent-dark))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] mb-4 block">Инженерия 2026</span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight mb-8">Магия <br /> невидимого потока</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-white/10 flex items-center justify-center text-[rgb(var(--accent-wood))] font-display text-xl">01</div>
                <div>
                  <h4 className="text-lg text-white mb-2">Уклон &quot;Золотого сечения&quot;</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">Поверхность рассчитана с точностью до 0.1°. Вода мгновенно устремляется к центру, не оставляя шанса застою.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-white/10 flex items-center justify-center text-[rgb(var(--accent-wood))] font-display text-xl">02</div>
                <div>
                  <h4 className="text-lg text-white mb-2">Скрытый коллектор</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">Система слива интегрирована в массив. Никаких видимых шлангов или пластиковых деталей — только чистое дерево и металл.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-white/10 flex items-center justify-center text-[rgb(var(--accent-wood))] font-display text-xl">03</div>
                <div>
                  <h4 className="text-lg text-white mb-2">Защита Dry-Touch</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">Вакуумная пропитка полимерами на глубину 5мм. Дерево &quot;дышит&quot;, но отталкивает воду на молекулярном уровне.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative aspect-square bg-white/[0.02] border border-white/5 p-12 flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full text-[rgb(var(--accent-wood))]">
                <motion.path 
                  d="M50 200 Q 200 210 350 200" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <circle cx="200" cy="205" r="3" fill="currentColor" className="animate-pulse" />
                <rect x="100" y="150" width="200" height="10" fill="currentColor" opacity="0.1" />
                
                {[...Array(5)].map((_, i) => (
                  <line 
                    key={i} 
                    x1="50" y1={180 + i*15} 
                    x2="350" y2={180 + i*15} 
                    stroke="currentColor" 
                    strokeWidth="0.2" 
                    opacity={0.3 - i*0.05} 
                  />
                ))}

                <g className="text-[8px] uppercase tracking-widest fill-gray-500 font-sans">
                   <text x="50" y="170">Surface: 0.1° Tilt</text>
                   <text x="220" y="250">Hidden Collector</text>
                   <line x1="200" y1="208" x2="200" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </g>
              </svg>

              <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
