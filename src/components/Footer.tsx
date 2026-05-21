'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-display text-white tracking-widest">МАССИВ</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Создаем объекты вне времени. Инженерия и искусство, воплощенные в массиве ценных пород дерева.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-wood))] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gray-400">Производство активно</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[rgb(var(--accent-wood))]">Навигация</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Философия</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Материалы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Процесс</a></li>
              <li><a href="#" className="hover:text-white transition-colors">B2B решения</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[rgb(var(--accent-wood))]">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li>Москва, ул. Деревообработки, 12</li>
              <li><a href="tel:+79991234567" className="hover:text-white transition-colors">+7 (999) 123-45-67</a></li>
              <li><a href="mailto:info@massiv.ru" className="hover:text-white transition-colors">info@massiv.ru</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[rgb(var(--accent-wood))]">Реквизиты</h4>
            <ul className="text-[10px] text-gray-600 font-light space-y-2 leading-loose">
              <li>ИП КОНСТАНТИНОВ А.В.</li>
              <li>ИНН: 771234567890</li>
              <li>ОГРНИП: 326770000123456</li>
              <li>БИК: 044525974</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности (v2026.1)</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            <a href="#" className="hover:text-white transition-colors">Маркировка рекламы</a>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest text-gray-600 flex flex-col items-center md:items-end gap-2">
            <span>© {currentYear} МАССИВ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
            <div className="flex items-center gap-2">
               <span className="px-2 py-0.5 border border-gray-800 rounded-sm text-[8px]">AI MARKED</span>
               <span className="text-[8px] text-gray-700 italic">Контент оптимизирован нейросетью</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
