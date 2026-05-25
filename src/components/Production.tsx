'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Production() {
  return (
    <section id="production" className="py-24 md:py-40 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.8em] text-[rgb(var(--accent-wood))] font-bold block">Production & Atelier</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none">
            Масштабы <br /> мастерства
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group space-y-8"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
              <Image 
                src="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1600" 
                alt="Ручная работа"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] font-bold block">Индивидуально</span>
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Уникальные артефакты</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Создание чабани под конкретный запрос. Мы подберем слэб с характером, который резонирует с вашим внутренним миром. Ручная подгонка каждой детали.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="group space-y-8"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
              <Image 
                src="https://images.unsplash.com/photo-1581092921461-7d655083563b?q=80&w=1600" 
                alt="Тиражное производство"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="space-y-4">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] font-bold block">B2B Ателье</span>
              <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Масштабируемые решения</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Изготовление партий чабаней для чайных клубов и ресторанов без потери качества. Премиальное брендирование методом инкрустации.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
