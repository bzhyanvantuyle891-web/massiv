'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ARShowroom() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('@google/model-viewer').catch(console.error);
  }, []);

  const activateAR = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mv = document.querySelector('model-viewer') as any;
    if (mv && mv.activateAR) {
      mv.activateAR();
    } else {
      alert('AR поддерживается только на мобильных устройствах с Android/iOS');
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))]"
          >
            Технологии 2026
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-display text-white leading-tight">
            Примерка <br /> в интерьере
          </h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
            Используйте дополненную реальность (AR), чтобы увидеть масштаб и текстуру МАССИВА на вашем чайном столе. Просто нажмите кнопку на смартфоне.
          </p>
          
          <div className="pt-8">
            <button 
              className="premium-button flex items-center gap-4 group"
              onClick={activateAR}
            >
              <span>Запустить AR</span>
              <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-wood))] animate-ping" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 aspect-square relative bg-white/[0.02] border border-white/5 overflow-hidden">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <div 
            dangerouslySetInnerHTML={{ 
              __html: `
                <model-viewer
                  src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  poster="https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=2070&auto=format&fit=crop"
                  shadow-intensity="1"
                  auto-rotate
                  style="width: 100%; height: 100%; background-color: transparent;"
                >
                  <div slot="poster" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: 0.3em; font-size: 10px;">
                    Загрузка 3D среды...
                  </div>
                </model-viewer>
              ` 
            }}
            className="w-full h-full"
          />
          
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>

      </div>
    </section>
  );
}
