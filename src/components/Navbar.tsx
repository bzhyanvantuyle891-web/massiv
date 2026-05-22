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
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
          isScrolled ? 'bg-black/95 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <a 
            href="#main" 
            onClick={(e) => scrollToSection(e, '#main')} 
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="text-xl font-bold tracking-widest text-white uppercase">МАССИВ</span>
          </a>

          <ul className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button 
              onClick={onConnectClick}
              className="hidden md:flex text-xs uppercase tracking-widest px-6 py-2.5 border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 font-semibold rounded-md"
            >
              Оставить заявку
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-white/80 hover:text-white transition-colors p-2 -mr-2"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#050505] xl:hidden flex flex-col pt-24 px-6"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-2xl font-bold text-white uppercase tracking-wider block py-2 border-b border-white/5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onConnectClick();
                  }}
                  className="premium-button w-full"
                >
                  Оставить заявку
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
