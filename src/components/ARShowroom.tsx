'use client';

import { useEffect } from 'react';

export default function ARShowroom() {
  useEffect(() => {
    import('@google/model-viewer').catch(console.error);
  }, []);

  const activateAR = () => {
    const mv = document.querySelector('model-viewer') as HTMLElement & { activateAR: () => void };
    if (mv && mv.activateAR) {
      mv.activateAR();
    } else {
      alert('AR поддерживается только на мобильных устройствах с Android/iOS');
    }
  };

  return (
    <section id="ar" className="py-24 px-4 md:px-8 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[rgb(var(--accent-wood))] font-semibold">
            Технологии
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Примерка в интерьере
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-md">
            Используйте дополненную реальность (AR), чтобы увидеть масштаб и текстуру чабани на вашем столе.
          </p>
          
          <div className="pt-4">
            <button 
              className="premium-button-outline"
              onClick={activateAR}
            >
              Запустить AR
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 aspect-video lg:aspect-square relative bg-[#111] rounded-xl overflow-hidden border border-white/5">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: `
                <model-viewer
                  src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  poster="https://images.unsplash.com/photo-1590059132718-5026939989d3?q=80&w=1200&auto=format&fit=crop"
                  shadow-intensity="1"
                  auto-rotate
                  style="width: 100%; height: 100%; background-color: transparent;"
                >
                  <div slot="poster" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.4); font-size: 14px;">
                    Загрузка...
                  </div>
                </model-viewer>
              ` 
            }}
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
