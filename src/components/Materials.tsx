'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const materials = [
  {
    title: 'Карагач',
    description: 'Дикая текстура и невероятная прочность. Каждое изделие обладает уникальным рисунком годовых колец.',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=1974&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2 h-[400px]',
  },
  {
    title: 'Дуб',
    description: 'Классика благородства. Мощь и устойчивость к любым испытаниям временем.',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 h-[400px]',
  },
  {
    title: 'Мореный дуб',
    description: 'Эксклюзивный материал с тысячелетней историей. Черный как уголь, твердый как камень.',
    image: 'https://images.unsplash.com/photo-1606101210457-3f9f4b9ca9c3?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 h-[400px]',
  },
  {
    title: 'Ясень',
    description: 'Светлый, гибкий и выразительный. Идеален для минималистичных интерьеров.',
    image: 'https://images.unsplash.com/photo-1596633605700-1efc9b49e277?q=80&w=2070&auto=format&fit=crop',
    size: 'col-span-1 md:col-span-2 h-[400px]',
  },
];

export default function Materials() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[rgb(var(--background))]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] mb-4 block">
              Материалы
            </span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight">
              Природа в её <br /> чистом проявлении
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm font-light leading-relaxed">
            Мы отбираем только те слэбы, которые прошли естественную сушку и обладают выразительным характером.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden monolith-card p-0 !border-white/5 ${item.size}`}
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-display text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
