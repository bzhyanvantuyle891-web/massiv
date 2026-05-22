'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    day: 'ДЕНЬ 1-5',
    title: 'Отбор и Генетика',
    description: 'Ищем слэбы с уникальным рисунком. Анализ влажности и плотности волокон.',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 6-30',
    title: 'Стабилизация',
    description: 'Снимаем внутреннее напряжение материала в климатических камерах.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 31-40',
    title: 'Геометрия',
    description: 'Создание системы скрытого слива. Угол 0.1° выверяется лазером.',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 41-45',
    title: 'Финиш',
    description: 'Три слоя масла и воска. Текстура шелка и защита Dry-Touch.',
    image: 'https://images.unsplash.com/photo-1596633605700-1efc9b49e277?q=80&w=1200'
  }
];

export default function Workshop() {
  return (
    <section id="workshop" className="py-24 md:py-32 px-4 md:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">
              Мастерская
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Хроника 45 дней
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Премиальность не терпит спешки. Мы служим материалу ровно столько, сколько нужно для совершенства.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111]">
                   <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                   />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-sm font-bold text-[rgb(var(--accent-wood))] uppercase tracking-widest">{step.day}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed max-w-md">
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
