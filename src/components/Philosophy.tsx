'use client';

import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, PenTool, Wind } from 'lucide-react';

export default function Philosophy() {
  const features = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Искусство течения',
      description: 'Идеальный уклон 0.1° направляет каждую каплю к скрытому коллектору. Чабань из массива, которая остается сухой даже в разгар чайного действа.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Стабильность веков',
      description: 'Инженерная защита Dry-Touch: глубокая вакуумная пропитка натуральными маслами предотвращает деформацию и впитывание влаги.'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Тактильный интеллект',
      description: '48 часов ручной шлифовки до состояния "шелка". Мы не просто обрабатываем дерево, мы раскрываем его природный характер.'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Живая энергия',
      description: 'Использование ценных пород с историей. Каждый слэб прошел 5-летний цикл естественной сушки в условиях горного Кавказа.'
    }
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-[rgb(var(--accent-dark))] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square overflow-hidden border border-white/5 bg-black rounded-[2rem]"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-60 grayscale scale-110"
            >
              <source src="https://cdn.pixabay.com/video/2016/09/20/5312-183669145_tiny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent-dark))] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          </motion.div>

          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.6em] text-[rgb(var(--accent-wood))] font-medium block">Душа МАССИВА</span>
              <h2 className="text-5xl md:text-[5.5rem] font-display leading-[0.9] text-white tracking-tighter italic">
                Где форма <br /> обретает <br /> смысл
              </h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-lg text-lg">
                Премиальная чабань — это не мебель. Это сцена для медитации. Мы проектируем наши изделия как сложные инженерные системы, скрытые в оболочке первозданного дерева.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="space-y-6 group"
                >
                  <div className="text-[rgb(var(--accent-wood))] transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                  <h4 className="text-xl font-display text-white group-hover:text-[rgb(var(--accent-wood))] transition-colors">{feature.title}</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed border-l border-white/5 pl-6">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
