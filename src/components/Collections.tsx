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
    image: 'https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=2000',
    tag: 'Бестселлер'
  },
  {
    title: 'Дыхание Природы',
    subtitle: 'Биофильные формы',
    description: 'Чайные доски с живым краем (Live Edge). Сохраняем природный провенанс каждого слэба.',
    specs: { size: 'Индивидуально', weight: 'от 2.8 кг', wood: 'Кавказский Карагач' },
    price: 'от 65 000 ₽',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=2000',
    tag: 'Уникально'
  },
  {
    title: 'Темная Материя',
    subtitle: 'Наследие веков',
    description: 'Эксклюзивные артефакты из реликтового мореного дуба возрастом более 2000 лет.',
    specs: { size: '500 × 320 мм', weight: '4.5 кг', wood: 'Мореный дуб' },
    price: 'от 120 000 ₽',
    image: 'https://images.unsplash.com/photo-1606101210457-3f9f4b9ca9c3?q=80&w=2000',
    tag: 'Инвестиция'
  }
];

export default function Collections({ onDetailClick }: CollectionsProps) {
  return (
    <section id="collections" className="py-40 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 md:mb-40 space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.4 }}
            className="text-[10px] uppercase tracking-[0.8em] text-[rgb(var(--accent-wood))] font-bold"
          >
            Избранные Артефакты
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-9xl font-sans font-black leading-[0.85] tracking-tighter text-white uppercase"
          >
            Форма <br /> Покоя
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card h-full flex flex-col group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={`${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--accent-dark))] via-transparent to-transparent opacity-80" />
                <div className="absolute top-8 left-8 px-5 py-2 glass-nav text-[9px] uppercase tracking-[0.3em] text-white/90 rounded-full font-bold">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8 md:p-12 space-y-10 flex-grow flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))] opacity-60 font-medium">{item.subtitle}</span>
                    <h3 className="text-4xl font-sans font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-y-4 pt-6 border-t border-white/5">
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] text-gray-600 uppercase tracking-widest">Размер</span>
                      <span className="text-[10px] text-gray-300 font-bold uppercase tracking-tighter">{item.specs.size}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] text-gray-600 uppercase tracking-widest">Материал</span>
                      <span className="text-[10px] text-gray-300 font-bold uppercase tracking-tighter">{item.specs.wood}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-10 flex items-end justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-sans font-bold text-white">{item.price}</span>
                    <span className="text-[8px] text-gray-700 uppercase tracking-widest font-black">Лимитированное издание</span>
                  </div>
                  <button 
                    onClick={onDetailClick}
                    className="premium-button !px-8 !py-4 !text-[11px] transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 active:scale-95"
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
