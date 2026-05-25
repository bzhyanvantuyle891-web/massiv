'use client';

import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, PenTool, Wind } from 'lucide-react';

export default function Philosophy() {
  const features = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: 'Искусство течения',
      description: 'Уклон 0.1° направляет каждую каплю к скрытому коллектору. Чабань остается сухой даже в разгар чайного действа.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Стабильность веков',
      description: 'Инженерная защита Dry-Touch: глубокая вакуумная пропитка предотвращает деформацию и впитывание влаги.'
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: 'Тактильный интеллект',
      description: '48 часов ручной шлифовки до состояния шелка. Мы не просто обрабатываем дерево, мы раскрываем его характер.'
    },
    {
      icon: <Wind className="w-5 h-5" />,
      title: 'Живая энергия',
      description: 'Ценные породы с историей. Каждый слэб прошел 5-летний цикл естественной сушки в условиях горного Кавказа.'
    }
  ];

  return (
    <section id="philosophy" className="py-20 md:py-24 px-4 md:px-8 bg-[#080808] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square overflow-hidden border border-white/5 bg-[#111] rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-[12px] uppercase tracking-[1em] text-white/5 font-bold -rotate-90">Born_For_Eternity</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold block">Душа МАССИВА</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                Где форма <br /> обретает смысл
              </h2>
              <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-lg">
                Премиальная чабань — это не мебель. Это сцена для медитации. Мы проектируем наши изделия как сложные инженерные системы, скрытые в оболочке первозданного дерева.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3 group"
                >
                  <div className="text-[rgb(var(--accent-wood))] transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                  <h4 className="text-base font-bold text-white group-hover:text-[rgb(var(--accent-wood))] transition-colors">{feature.title}</h4>
                  <p className="text-[13px] text-gray-500 font-normal leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
