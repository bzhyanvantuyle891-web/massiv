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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] max-w-6xl"
      >
        <nav 
          className={`glass-nav px-6 md:px-12 py-3 md:py-5 flex items-center justify-between transition-all duration-700 ${
            isScrolled ? 'py-2 md:py-3 bg-black/80 scale-[0.98]' : 'bg-transparent'
          }`}
        >
          <a 
            href="#main" 
            onClick={(e) => scrollToSection(e, '#main')} 
            className="flex items-center gap-3 group shrink-0"
          >
            <span className="text-lg md:text-2xl font-display tracking-[0.2em] text-white group-hover:text-[rgb(var(--accent-wood))] transition-colors uppercase">МАССИВ</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[rgb(var(--accent-wood))] transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 md:gap-10">
            <button 
              onClick={onConnectClick}
              className="hidden md:flex text-[10px] uppercase tracking-[0.3em] px-10 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-700 font-medium active:scale-95"
            >
              Консультация
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors bg-white/5 rounded-full"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/98 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center p-8"
          >
            <ul className="flex flex-col items-center gap-10 text-center w-full">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <a 
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-4xl md:text-6xl font-display text-white hover:text-[rgb(var(--accent-wood))] transition-all block py-4"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }}
                className="pt-10 w-full"
              >
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onConnectClick();
                  }}
                  className="premium-button w-full text-center py-6 text-lg"
                >
                  Начать диалог
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
