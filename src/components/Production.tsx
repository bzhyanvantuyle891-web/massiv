'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

export default function Production() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Individual Production */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--accent-dark))]">
              <Image 
                src="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1974&auto=format&fit=crop" 
                alt="Ручная работа"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))]">Индивидуально</span>
              <h3 className="text-3xl font-display">Артефакты в единственном экземпляре</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Создание чабани под конкретный запрос. Мы подберем слэб с характером, который резонирует с вашим внутренним миром. Ручная подгонка каждой детали и финишная отделка натуральными маслами.
              </p>
            </div>
          </motion.div>

          {/* Batch Production */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 md:pt-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--accent-dark))]">
              <Image 
                src="https://images.unsplash.com/photo-1581092921461-7d655083563b?q=80&w=2070&auto=format&fit=crop" 
                alt="Тиражное производство"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[rgb(var(--accent-wood))]">Тираж</span>
              <h3 className="text-3xl font-display">Решения для бизнеса и клубов</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Масштабируемое производство без потери качества. Изготовление партий чабаней для чайных клубов, ресторанов и магазинов. Брендирование методом лазерной гравировки или инкрустации.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
