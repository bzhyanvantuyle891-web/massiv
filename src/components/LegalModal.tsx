'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-4xl max-h-[80vh] bg-[#0c0c0c] border border-white/5 rounded-[2rem] p-8 md:p-16 overflow-y-auto artisan-scrollbar shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/20 hover:text-white transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>

            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-display text-white tracking-tight italic">{title}</h3>
              <div className="text-gray-400 font-light leading-relaxed space-y-6 text-sm md:text-base">
                {content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
