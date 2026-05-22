'use client';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'offer') => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#030303] border-t border-white/5 relative overflow-hidden pt-24 md:pt-40 flex flex-col justify-between min-h-[70vh] md:min-h-[80vh]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow">
        <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-24 mb-20">
          
          <div className="space-y-8 lg:w-1/3">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[rgb(var(--accent-wood))] font-bold block">
              Ателье активных форм
            </span>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
              Мы переводим язык тысячелетней природы на язык современного функционального искусства. 
              Проектируем премиальные инструменты для чайных церемоний.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Прием заявок открыт</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:w-2/3 lg:justify-items-end">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Навигация</h4>
              <ul className="space-y-4 text-xs uppercase tracking-wider text-white/70 font-semibold">
                <li><a href="#philosophy" className="hover:text-[rgb(var(--accent-wood))] transition-colors">Философия</a></li>
                <li><a href="#workshop" className="hover:text-[rgb(var(--accent-wood))] transition-colors">Мастерская</a></li>
                <li><a href="#collections" className="hover:text-[rgb(var(--accent-wood))] transition-colors">Коллекции</a></li>
                <li><a href="#showroom" className="hover:text-[rgb(var(--accent-wood))] transition-colors">360° Обзор</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Контакты</h4>
              <ul className="space-y-4 text-xs text-white/70 font-semibold tracking-wider">
                <li>Москва, ул. Столярная, 12</li>
                <li><a href="tel:+79991234567" className="hover:text-[rgb(var(--accent-wood))] transition-colors">+7 999 123-45-67</a></li>
                <li><a href="mailto:hello@massiv.ru" className="hover:text-[rgb(var(--accent-wood))] transition-colors underline decoration-white/20 underline-offset-4">hello@massiv.ru</a></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Официально</h4>
              <ul className="space-y-4 text-xs text-gray-500 font-medium tracking-widest">
                <li>ИП КОНСТАНТИНОВ А.В.</li>
                <li>ИНН: 771234567890</li>
                <li>ОГРНИП: 326770000123456</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Monumental Typography */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none select-none relative z-0 mt-auto pt-10">
        <h2 className="text-[22vw] font-black text-white/[0.03] leading-[0.75] tracking-tighter uppercase whitespace-nowrap">
          МАССИВ
        </h2>
      </div>

      {/* Bottom Legal Bar */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[9px] uppercase tracking-widest text-gray-600 font-bold">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors">Конфиденциальность</button>
            <button onClick={() => onLegalClick('offer')} className="hover:text-white transition-colors">Публичная оферта</button>
          </div>
          
          <div className="text-[9px] uppercase tracking-widest text-gray-600 font-bold flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1">
               <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
               <span>AI Content Marked</span>
            </div>
            <span>© {currentYear} МАССИВ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
