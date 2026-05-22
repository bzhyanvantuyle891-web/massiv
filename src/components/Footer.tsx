'use client';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'offer') => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase">МАССИВ</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Проектирование и создание премиальных инструментов для чайных церемоний из массива дерева.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Разделы</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#philosophy" className="hover:text-white transition-colors">Философия</a></li>
              <li><a href="#workshop" className="hover:text-white transition-colors">Мастерская</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">Коллекции</a></li>
              <li><a href="#ar" className="hover:text-white transition-colors">AR Студия</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Москва, ул. Столярная, 12</li>
              <li><a href="tel:+79991234567" className="hover:text-white transition-colors">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:hello@massiv.ru" className="hover:text-white transition-colors">hello@massiv.ru</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Реквизиты</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>ИП КОНСТАНТИНОВ А.В.</li>
              <li>ИНН: 771234567890</li>
              <li>ОГРНИП: 326770000123456</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button onClick={() => onLegalClick('offer')} className="hover:text-white transition-colors">Публичная оферта</button>
          </div>
          
          <div className="text-xs text-gray-500">
            © {currentYear} МАССИВ. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
