'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Production() {
  return (
    <section id="production" className="py-24 md:py-32 px-4 md:px-8 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111]">
              <Image 
                src="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1200" 
                alt="Ручная работа"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-4 pr-8">
              <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">Индивидуально</span>
              <h3 className="text-3xl font-bold tracking-tight text-white">Уникальные артефакты</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Создание чабани под конкретный запрос. Мы подберем слэб с характером, который резонирует с вашим внутренним миром. Ручная подгонка деталей.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 md:pt-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111]">
              <Image 
                src="https://images.unsplash.com/photo-1581092921461-7d655083563b?q=80&w=1200" 
                alt="Тиражное производство"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-4 pr-8">
              <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">B2B Ателье</span>
              <h3 className="text-3xl font-bold tracking-tight text-white">Масштабируемые решения</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Изготовление партий чабаней для чайных клубов и ресторанов без потери качества. Премиальное брендирование методом инкрустации.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
