'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onConnectClick: () => void;
}

export default function Navbar({ onConnectClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Философия', href: '#philosophy' },
    { name: 'Мастерская', href: '#workshop' },
    { name: '360° Обзор', href: '#showroom' },
    { name: 'AR-Студия', href: '#ar' },
    { name: 'Коллекции', href: '#collections' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-5xl transition-all duration-700 ${
          isScrolled ? 'top-4' : 'top-6 md:top-8'
        }`}
      >
        <nav className="bg-[#0f0f0f]/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
          <a 
            href="#main" 
            onClick={(e) => scrollToSection(e, '#main')} 
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="text-lg md:text-xl font-bold tracking-widest text-white uppercase group-hover:text-[rgb(var(--accent-wood))] transition-colors duration-500">МАССИВ</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-semibold relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[rgb(var(--accent-wood))] transition-all duration-500 group-hover:w-1/2 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button 
              onClick={onConnectClick}
              className="hidden md:flex text-[10px] uppercase tracking-widest px-6 py-2.5 bg-white text-black rounded-full hover:bg-[rgb(var(--accent-wood))] hover:text-white transition-all duration-500 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(196,164,132,0.4)] transform hover:scale-105"
            >
              Оставить заявку
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[rgb(var(--accent-wood))] transition-colors p-2"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505]/98 backdrop-blur-3xl lg:hidden flex flex-col pt-32 px-6 pb-8"
          >
            <ul className="flex flex-col gap-6 flex-grow">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-4xl font-black text-white hover:text-[rgb(var(--accent-wood))] transition-all block py-2 uppercase tracking-tighter"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full mt-auto pt-8 border-t border-white/10"
            >
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onConnectClick();
                }}
                className="premium-button w-full py-5 text-sm"
              >
                Оставить заявку
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
