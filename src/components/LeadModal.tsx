'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    material: '',
    size: '',
    type: '',
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setStep(1);
    }, 4000);
  };

  const steps = [
    {
      id: 1,
      question: 'С чего начнем создание вашего артефакта?',
      options: ['Карагач (Дикая текстура)', 'Дуб (Благородная мощь)', 'Мореный дуб (Черное золото)', 'Ясень (Светлый минимализм)'],
      field: 'material'
    },
    {
      id: 2,
      question: 'Какая форма вам ближе?',
      options: ['Строгий монолит', 'Природный Live Edge', 'Коллекция для заведения'],
      field: 'size'
    },
    {
      id: 3,
      question: 'Инженерия или традиция?',
      options: ['Скрытая система слива', 'Традиционный открытый слив', 'Без слива (Сухая эстетика)'],
      field: 'type'
    }
  ];

  const progress = (step / 4) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl h-full md:h-auto bg-[rgb(var(--accent-dark))] border-white/5 md:border p-8 md:p-16 flex flex-col justify-center overflow-hidden"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <motion.div 
                className="h-full bg-[rgb(var(--accent-wood))]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              aria-label="Закрыть окно"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[rgb(var(--accent-wood))] rounded-full flex items-center justify-center mx-auto mb-8">
                   <Check className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-display text-white mb-6">Заявка принята</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Наш мастер проанализирует ваши предпочтения и <br /> свяжется с вами в течение часа.
                </p>
              </motion.div>
            ) : (
              <div className="w-full">
                {step <= 3 ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))]">Шаг {step} из 4</span>
                      <h3 className="text-3xl md:text-4xl font-display text-white">{steps[step-1].question}</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {steps[step-1].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setFormData({ ...formData, [steps[step-1].field]: option });
                            nextStep();
                          }}
                          className={`group w-full text-left p-6 border transition-all duration-300 flex justify-between items-center ${
                            formData[steps[step-1].field as keyof typeof formData] === option 
                            ? 'border-[rgb(var(--accent-wood))] bg-[rgb(var(--accent-wood))]/5' 
                            : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
                          }`}
                        >
                          <span className="text-lg font-light">{option}</span>
                          <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>

                    {step > 1 && (
                      <button 
                        onClick={prevStep}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                      >
                        <ChevronLeft size={14} /> Назад
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))]">Шаг 4 из 4</span>
                      <h3 className="text-3xl md:text-4xl font-display text-white">Последний штрих</h3>
                      <p className="text-gray-400 font-light">Оставьте контакты для обсуждения проекта.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-6">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-gray-500">Ваше имя</label>
                          <input 
                            required
                            type="text"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[rgb(var(--accent-wood))] transition-colors"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-widest text-gray-500">Телефон</label>
                          <input 
                            required
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[rgb(var(--accent-wood))] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="pt-4 space-y-6">
                        <button type="submit" className="premium-button w-full">
                          Завершить проектирование
                        </button>
                        <p className="text-[10px] text-gray-500 leading-relaxed text-center">
                          Нажимая кнопку, вы даете согласие на обработку <br />
                          <a href="#" className="underline hover:text-white transition-colors">персональных данных</a>.
                        </p>
                      </div>
                    </form>

                    <button 
                      onClick={prevStep}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                    >
                      <ChevronLeft size={14} /> К выбору параметров
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
