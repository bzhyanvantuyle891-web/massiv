'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CollectionsProps {
  onDetailClick: () => void;
}

const collections = [
  {
    title: 'Серия Монолит',
    subtitle: 'Архитектура тишины',
    description: 'Строгая геометрия и шелковистая отделка. Каждое изделие проходит 48-часовой цикл стабилизации формы.',
    specs: { size: '420 × 280 мм', weight: '3.2 кг', wood: 'Селективный дуб' },
    price: 'от 45 000 ₽',
    image: 'https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=1200',
    tag: 'Бестселлер'
  },
  {
    title: 'Дыхание Природы',
    subtitle: 'Биофильные формы',
    description: 'Чайные доски с живым краем (Live Edge). Сохраняем природный провенанс каждого слэба.',
    specs: { size: 'Индивидуально', weight: 'от 2.8 кг', wood: 'Карагач' },
    price: 'от 65 000 ₽',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=1200',
    tag: 'Уникально'
  },
  {
    title: 'Темная Материя',
    subtitle: 'Наследие веков',
    description: 'Эксклюзивные артефакты из реликтового мореного дуба возрастом более 2000 лет.',
    specs: { size: '500 × 320 мм', weight: '4.5 кг', wood: 'Мореный дуб' },
    price: 'от 120 000 ₽',
    image: 'https://images.unsplash.com/photo-1606101210457-3f9f4b9ca9c3?q=80&w=1200',
    tag: 'Инвестиция'
  }
];

export default function Collections({ onDetailClick }: CollectionsProps) {
  return (
    <section id="collections" className="py-24 md:py-32 px-4 md:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold"
          >
            Избранные Артефакты
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
          >
            Форма Покоя
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card h-full flex flex-col group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={`${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
                <div className="absolute top-6 left-6 px-4 py-1.5 border border-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest text-white rounded font-medium">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">{item.subtitle}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 pt-4 border-t border-white/5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Размер</span>
                      <span className="text-xs text-gray-300 font-semibold">{item.specs.size}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Материал</span>
                      <span className="text-xs text-gray-300 font-semibold">{item.specs.wood}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-white">{item.price}</span>
                  </div>
                  <button 
                    onClick={onDetailClick}
                    className="premium-button-outline"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
