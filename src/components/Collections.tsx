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
    specs: { size: '500 × 320 мм', weight: '4.5 кг', wood: 'Мореного дуб' },
    price: 'от 120 000 ₽',
    image: 'https://images.unsplash.com/photo-1606101210457-3f9f4b9ca9c3?q=80&w=1200',
    tag: 'Инвестиция'
  }
];

export default function Collections({ onDetailClick }: CollectionsProps) {
  return (
    <section id="collections" className="py-20 md:py-24 px-4 md:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold"
          >
            Избранные Артефакты
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase"
          >
            Форма Покоя
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="luxury-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[280px] flex flex-col group border border-white/5 bg-white/[0.01]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={`${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 px-2 py-1 border border-white/10 backdrop-blur-md text-[8px] uppercase tracking-[0.2em] text-white/70 rounded font-medium">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="space-y-0.5">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-[rgb(var(--accent-wood))] font-bold">{item.subtitle}</span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[7px] text-gray-600 uppercase tracking-widest mb-0.5">Материал</span>
                      <span className="text-[9px] text-gray-400 font-medium truncate">{item.specs.wood}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7px] text-gray-600 uppercase tracking-widest mb-0.5">Размер</span>
                      <span className="text-[9px] text-gray-400 font-medium truncate">{item.specs.size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 flex items-center justify-between border-t border-white/5">
                  <span className="text-base font-bold text-white/80">{item.price}</span>
                  <button 
                    onClick={onDetailClick}
                    className="text-[9px] uppercase tracking-widest text-white/50 hover:text-white transition-all border-b border-white/10 hover:border-[rgb(var(--accent-wood))] pb-0.5"
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
