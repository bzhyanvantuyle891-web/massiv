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
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const validate = () => {
    const newErrors = { name: '', phone: '' };
    let isValid = true;
    
    if (formData.name.length < 2) {
      newErrors.name = 'Минимум 2 символа';
      isValid = false;
    }
    
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Некорректный номер';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
        setFormData({ material: '', size: '', type: '', name: '', phone: '' });
      }, 500);
    }, 4000);
  };

  const quizSteps = [
    {
      id: 1,
      question: 'С чего начнем?',
      options: ['Карагач (Дикая текстура)', 'Дуб (Благородная мощь)', 'Мореный дуб (Черное золото)', 'Ясень (Светлый минимализм)'],
      field: 'material'
    },
    {
      id: 2,
      question: 'Какая форма?',
      options: ['Строгий монолит', 'Природный Live Edge', 'Коллекция для заведения'],
      field: 'size'
    },
    {
      id: 3,
      question: 'Тип слива?',
      options: ['Скрытая система', 'Традиционный слив', 'Без слива (Сухая)'],
      field: 'type'
    }
  ];

  const progress = (step / 4) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl h-auto bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-12 flex flex-col justify-center overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/[0.03]">
              <motion.div 
                className="h-full bg-[rgb(var(--accent-wood))]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-all"
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-[rgb(var(--accent-wood))] rounded-full flex items-center justify-center mx-auto">
                   <Check className="text-black" size={32} strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white uppercase">Заявка принята</h3>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">
                    Мастер свяжется с вами в течение часа.
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="w-full">
                <AnimatePresence mode="wait">
                  {step <= 3 ? (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] font-bold">Шаг {step} из 4</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase leading-tight">{quizSteps[step-1].question}</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {quizSteps[step-1].options.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setFormData({ ...formData, [quizSteps[step-1].field]: option });
                              nextStep();
                            }}
                            className={`group w-full text-left p-5 border rounded-2xl transition-all duration-300 flex justify-between items-center relative overflow-hidden ${
                              formData[quizSteps[step-1].field as keyof typeof formData] === option 
                              ? 'border-[rgb(var(--accent-wood))] bg-[rgb(var(--accent-wood))]/5' 
                              : 'border-white/5 hover:border-white/20 bg-white/[0.01]'
                            }`}
                          >
                            <span className="text-sm font-semibold uppercase">{option}</span>
                            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                          </button>
                        ))}
                      </div>

                      {step > 1 && (
                        <button 
                          onClick={prevStep}
                          className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
                        >
                          <ChevronLeft size={12} /> Назад
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[rgb(var(--accent-wood))] font-bold">Шаг 4 из 4</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">Контакты</h3>
                        <p className="text-gray-400 font-medium text-xs">Для обсуждения вашего проекта.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-1 relative">
                            <input 
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="ВАШЕ ИМЯ"
                              className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[rgb(var(--accent-wood))] transition-all placeholder:text-white/5 text-sm font-bold"
                            />
                            {errors.name && <span className="text-[7px] text-red-500 uppercase tracking-widest absolute -bottom-4 right-0">{errors.name}</span>}
                          </div>
                          
                          <div className="space-y-1 relative">
                            <input 
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="+7 (___) ___-__-__"
                              className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-[rgb(var(--accent-wood))] transition-all placeholder:text-white/5 text-sm font-bold"
                            />
                            {errors.phone && <span className="text-[7px] text-red-500 uppercase tracking-widest absolute -bottom-4 right-0">{errors.phone}</span>}
                          </div>
                        </div>

                        <div className="pt-4 space-y-6">
                          <button type="submit" className="premium-button w-full text-xs font-black">
                            ОТПРАВИТЬ
                          </button>
                          
                          <p className="text-[9px] text-gray-600 leading-relaxed text-center uppercase tracking-wider">
                            Нажимая кнопку, вы соглашаетесь на обработку <br />
                            <a href="#" className="underline hover:text-white">персональных данных</a>.
                          </p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
