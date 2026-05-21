'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Showroom from '@/components/Showroom';
import Materials from '@/components/Materials';
import Production from '@/components/Production';
import Service from '@/components/Service';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-black">
      <Hero onOrderClick={openModal} />
      
      <Philosophy />

      <Showroom />
      
      <Materials />
      
      <section className="py-24 px-4 md:px-8 flex flex-col items-center text-center bg-black">
         <h2 className="text-4xl md:text-6xl font-display mb-8 max-w-4xl leading-tight text-white">
           Создайте свой идеальный массив для чайной церемонии
         </h2>
         <button onClick={openModal} className="premium-button">
           Начать проектирование
         </button>
      </section>

      <Production />

      <Service />

      <Footer />

      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
