'use client';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'offer') => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/5 pt-24 md:pt-40 pb-12 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 md:mb-40">
          <div className="space-y-8 md:space-y-12 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-sans font-black text-white tracking-[0.2em] uppercase">МАССИВ</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 uppercase tracking-tighter">
              Проектирование и создание биофильных инструментов для чайных церемоний. Мы служим материалу с 2018 года.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-wood))] animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold italic">Ателье Активно</span>
            </div>
          </div>
          
          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))] font-black">Навигация</h4>
            <ul className="space-y-5 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-tight">
              <li><a href="#philosophy" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">Философия течения</a></li>
              <li><a href="#workshop" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">Мастерская Наследия</a></li>
              <li><a href="#collections" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">Коллекции 2026</a></li>
              <li><a href="#ar" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">AR Студия</a></li>
            </ul>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))] font-black">Связь</h4>
            <ul className="space-y-5 text-xs md:text-sm text-gray-400 font-bold uppercase tracking-tight">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-600 uppercase tracking-widest font-black">Ателье:</span>
                Москва, ул. Деревообработки, 12
              </li>
              <li><a href="tel:+79991234567" className="hover:text-white transition-colors tracking-widest font-black">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:heritage@massiv.ru" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-8">heritage@massiv.ru</a></li>
            </ul>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[rgb(var(--accent-wood))] font-black">Статус</h4>
            <ul className="text-[10px] text-gray-600 font-bold space-y-4 leading-relaxed uppercase tracking-widest">
              <li>ИП КОНСТАНТИНОВ А.В.</li>
              <li>ИНН: 771234567890</li>
              <li>ОГРНИП: 326770000123456</li>
              <li className="pt-4 flex items-center justify-center md:justify-start gap-2 text-white/20">
                 <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                 Материал Сертифицирован
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors">Конфиденциальность</button>
            <button onClick={() => onLegalClick('offer')} className="hover:text-white transition-colors">Публичная оферта</button>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.4em] text-gray-700 flex flex-col items-center md:items-end gap-4">
            <span className="text-center md:text-right uppercase tracking-[0.2em] font-black">© {currentYear} МАССИВ. ЦИФРОВОЙ АРТЕФАКТ.</span>
            <div className="flex items-center gap-3">
               <span className="px-3 py-1 border border-gray-900 rounded-sm text-[8px] bg-white/5 text-gray-500 uppercase tracking-widest font-black">Контент Маркирован ИИ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
