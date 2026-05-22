'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Zap, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Вечность',
    description: 'Мы используем мореный дуб возрастом до 2000 лет. Это геологический артефакт в вашем интерьере.'
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Чистота',
    description: 'Технология Dry-Touch исключает контакт воды с волокнами. Поверхность остается сухой и тактильной.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Точность',
    description: 'Инженерный уклон 0.1° вычисляется лазером. Идеальный поток там, где другие видят просто доску.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Уникальность',
    description: 'Каждый слэб имеет уникальный паспорт. Ваша чабань существует в единственном экземпляре.'
  }
];

export default function ValueProposition() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold block">
              Философия
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Служение <br /> материалу
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Мы не «производим» чабани. Мы переводим язык тысячелетней природы на язык современного функционального искусства.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            {values.map((val, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4 group"
              >
                <div className="text-[rgb(var(--accent-wood))]">{val.icon}</div>
                <h3 className="text-xl font-bold text-white">{val.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
