'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Zap, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Вечность',
    description: 'Мы используем мореный дуб возрастом до 2000 лет. Это не просто дерево, это геологический артефакт в вашем интерьере.'
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Чистота',
    description: 'Технология Dry-Touch исключает контакт воды с волокнами. Поверхность всегда остается безупречно сухой и тактильной.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Точность',
    description: 'Инженерный уклон 0.1° вычисляется лазером. Мы создаем идеальный поток там, где другие видят просто доску.'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Уникальность',
    description: 'Каждый слэб имеет свой паспорт и уникальный цифровой след. Ваша чабань существует в единственном экземпляре.'
  }
];

export default function ValueProposition() {
  return (
    <section className="py-60 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="space-y-20 sticky top-40">
            <div className="space-y-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] uppercase tracking-[1em] text-[rgb(var(--accent-wood))] font-bold block"
              >
                Philosophy of Craft
              </motion.span>
              <h2 className="text-7xl md:text-[9rem] font-display leading-[0.8] text-white tracking-tighter">
                Служение <br /> материалу
              </h2>
            </div>
            
            <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
              Мы не «производим» чабани. Мы переводим язык тысячелетней природы на язык современного функционального искусства.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {values.map((val, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 1.2 }}
                className="luxury-card !p-16 space-y-8 group"
              >
                <div className="text-[rgb(var(--accent-wood))] group-hover:scale-110 transition-transform duration-700">{val.icon}</div>
                <h3 className="text-4xl font-display text-white">{val.title}</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed border-l border-white/5 pl-8 group-hover:border-[rgb(var(--accent-wood))]/30 transition-colors duration-700">
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
