'use client';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'offer') => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-widest uppercase">МАССИВ</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs">
              Проектирование и создание премиальных инструментов для чайных церемоний из массива дерева.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Разделы</h4>
            <ul className="space-y-2 text-[13px] text-gray-400">
              <li><a href="#philosophy" className="hover:text-white transition-colors">Философия</a></li>
              <li><a href="#workshop" className="hover:text-white transition-colors">Мастерская</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Коллекции</a></li>
              <li><a href="#ar" className="hover:text-white transition-colors">AR Студия</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Контакты</h4>
            <ul className="space-y-2 text-[13px] text-gray-400">
              <li>Москва, ул. Столярная, 12</li>
              <li><a href="tel:+79991234567" className="hover:text-white transition-colors">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:hello@massiv.ru" className="hover:text-white transition-colors">hello@massiv.ru</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Реквизиты</h4>
            <ul className="text-[13px] text-gray-500 space-y-2">
              <li>ИП КОНСТАНТИНОВ А.В.</li>
              <li>ИНН: 771234567890</li>
              <li>ОГРНИП: 326770000123456</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-gray-600 uppercase tracking-wider">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button onClick={() => onLegalClick('offer')} className="hover:text-white transition-colors">Публичная оферта</button>
          </div>
          
          <div className="text-[10px] text-gray-600 uppercase tracking-wider">
            © {currentYear} МАССИВ.
          </div>
        </div>
      </div>
    </footer>
  );
}
