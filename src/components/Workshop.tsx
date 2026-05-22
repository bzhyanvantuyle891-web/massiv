'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    day: 'ДЕНЬ 1-5',
    title: 'ОТБОР И ГЕНЕТИКА',
    description: 'Ищем слэбы с уникальным рисунком. Анализ влажности и плотности волокон.',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=2000'
  },
  {
    day: 'ДЕНЬ 6-30',
    title: 'СТАБИЛИЗАЦИЯ',
    description: 'Снимаем внутреннее напряжение материала в климатических камерах.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000'
  },
  {
    day: 'ДЕНЬ 31-40',
    title: 'ГЕОМЕТРИЯ',
    description: 'Создание системы скрытого слива. Угол 0.1° выверяется лазером.',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=2000'
  },
  {
    day: 'ДЕНЬ 41-45',
    title: 'ФИНИШ',
    description: 'Три слоя масла и воска. Текстура шелка и защита Dry-Touch.',
    image: 'https://images.unsplash.com/photo-1596633605700-1efc9b49e277?q=80&w=2000'
  }
];

export default function Workshop() {
  return (
    <section id="workshop" className="relative py-24 md:py-32 px-4 md:px-8 bg-black overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-10"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[9px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] mb-4 block font-bold"
            >
              СЕРДЦЕ МАССИВА
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold leading-none text-white uppercase tracking-tighter"
            >
              ХРОНИКА <br /> 45 ДНЕЙ
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-medium max-w-sm leading-relaxed border-l border-white/10 pl-6 text-xs md:text-sm uppercase tracking-tight"
          >
            Премиальность не терпит спешки. Мы служим материалу ровно столько, сколько нужно для совершенства.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
            >
              <div className="w-full md:w-1/2 group">
                <div className="relative aspect-[16/9] overflow-hidden bg-[rgb(var(--accent-dark))] rounded-2xl border border-white/5">
                   <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                   />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <span className="text-3xl md:text-5xl font-black text-white/5 uppercase tracking-widest">{step.day}</span>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-lg max-w-md uppercase tracking-tight">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
