'use client';

import { motion } from 'framer-motion';
import { RefreshCcw, Truck, Award, Wrench } from 'lucide-react';

export default function Service() {
  const steps = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Пожизненная гарантия',
      description: 'Мы уверены в нашей инженерии слива и качестве дерева. Если что-то пойдет не так — мы это исправим.'
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: 'Ежегодный сервис',
      description: 'Бесплатное обновление защитного покрытия раз в год для всех владельцев изделий МАССИВ.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Бережная доставка',
      description: 'Специальная упаковка в деревянные кофры. Доставка по всей России и миру с полной страховкой груза.'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Реставрация',
      description: 'Вернем первозданный вид вашей чабани, даже если она прошла через годы активных церемоний.'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] mb-4 block">Доверие и Уход</span>
          <h2 className="text-4xl md:text-6xl font-display mb-6">Больше чем покупка</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Мы берем на себя заботу о вашем изделии, чтобы вы могли сосредоточиться на главном — на вкусе чая и моменте тишины.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="monolith-card flex flex-col items-center text-center !p-10 hover:bg-white/[0.02]"
            >
              <div className="mb-6 text-[rgb(var(--accent-wood))]">{step.icon}</div>
              <h4 className="text-xl font-display mb-4">{step.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
