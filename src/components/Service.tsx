'use client';

import { motion } from 'framer-motion';
import { RefreshCcw, Truck, Award, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Пожизненная гарантия',
    description: 'Мы уверены в инженерии слива и качестве дерева. В случае проблем — мы их исправим.'
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: 'Ежегодный сервис',
    description: 'Бесплатное обновление защитного покрытия раз в год для всех изделий МАССИВ.'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Бережная доставка',
    description: 'Упаковка в деревянные кофры. Доставка по всему миру с полной страховкой груза.'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Реставрация',
    description: 'Вернем первозданный вид вашей чабани даже через годы активных церемоний.'
  }
];

export default function Service() {
  return (
    <section id="service" className="py-20 md:py-24 px-4 md:px-8 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold block">
            Доверие и Уход
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Больше чем покупка
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Мы берем на себя заботу о вашем изделии, чтобы вы могли сосредоточиться на главном — на вкусе чая и моменте тишины.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="luxury-card p-6 flex flex-col items-center text-center group border border-white/5 bg-white/[0.01]"
            >
              <div className="mb-4 text-[rgb(var(--accent-wood))] group-hover:scale-110 transition-transform duration-500">
                {/* Scale icon down */}
                <div className="w-5 h-5">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-[rgb(var(--accent-wood))] transition-colors">
                {step.title}
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
