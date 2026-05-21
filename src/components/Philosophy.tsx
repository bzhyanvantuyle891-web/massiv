'use client';

import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, PenTool, Wind } from 'lucide-react';

export default function Philosophy() {
  const features = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Путь воды',
      description: 'Идеальный уклон 0.1° направляет каждую каплю к сливу, не оставляя луж и разводов на поверхности.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Инженерная защита',
      description: 'Технология Dry-Touch: глубокая пропитка маслами и воском защищает дерево от деформации и влаги.'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Ручная доводка',
      description: '48 часов шлифовки каждого изделия до состояния "шелка". Мы сохраняем живую энергию материала.'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Дыхание дерева',
      description: 'Мы используем только ценные породы, прошедшие 5-летнюю камерную и естественную сушку.'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-[rgb(var(--accent-dark))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square overflow-hidden border border-white/5"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-70 grayscale"
            >
              <source src="https://cdn.pixabay.com/video/2016/09/20/5312-183669145_tiny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent-dark))] via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] mb-4 block">Философия МАССИВ</span>
              <h2 className="text-4xl md:text-6xl font-display leading-tight mb-6">
                Где форма <br /> обретает смысл
              </h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                Чабань в чайной церемонии — это не просто предмет интерьера. Это алтарь, на котором разворачивается таинство. Мы проектируем наши изделия так, чтобы ничто не отвлекало вас от момента.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="text-[rgb(var(--accent-wood))]">{feature.icon}</div>
                  <h4 className="text-xl font-display">{feature.title}</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
