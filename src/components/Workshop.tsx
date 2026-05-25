'use client';

import { motion, useTransform, MotionValue, useSpring, AnimatePresence, animate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const steps = [
  {
    day: 'ДЕНЬ 1-5',
    title: 'Отбор и Генетика',
    description: 'Ищем слэбы с уникальным рисунком. Анализ влажности и плотности волокон.',
    image: 'https://images.unsplash.com/photo-1541459530419-723321557002?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 6-30',
    title: 'Стабилизация',
    description: 'Снимаем внутреннее напряжение материала в климатических камерах.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 31-40',
    title: 'Геометрия',
    description: 'Создание системы скрытого слива. Угол 0.1° выверяется лазером.',
    image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=1200'
  },
  {
    day: 'ДЕНЬ 41-45',
    title: 'Финиш',
    description: 'Три слоя масла и воска. Текстура шелка и защита Dry-Touch.',
    image: 'https://images.unsplash.com/photo-1596633605700-1efc9b49e277?q=80&w=1200'
  }
];

interface TimelineStepData {
  title: string;
  desc: string;
  id: string;
}

const timelineSteps: TimelineStepData[] = [
  {
    title: 'Этап 1: Проектирование',
    desc: 'Создание индивидуальной CAD-модели и лазерное сканирование слэба.',
    id: '01'
  },
  {
    title: 'Этап 2: Стабилизация',
    desc: '30 дней вакуумной полимеризации в климатической камере.',
    id: '02'
  },
  {
    title: 'Этап 3: Создание',
    desc: '48 часов ручной шлифовки и инкрустация латунной "реки".',
    id: '03'
  },
  {
    title: 'Этап 4: Получение',
    desc: 'Защитный кофр и экспресс-доставка. Ваша история начинается.',
    id: '04'
  }
];

function TimelineTextStep({ step, index, total, progressValue }: { step: TimelineStepData, index: number, total: number, progressValue: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progressValue, [start, start + 0.1, end - 0.1, end], [0.1, 1, 1, 0.1]);
  
  return (
    <motion.div
      style={{ opacity }}
      className="space-y-2 border-l-2 border-white/5 pl-6"
    >
      <span className="text-[9px] font-mono text-[rgb(var(--accent-wood))]">STAGE_{step.id}</span>
      <h4 className="text-base font-bold text-white uppercase">{step.title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed font-light max-w-xs">
        {step.desc}
      </p>
    </motion.div>
  );
}

const AnimatedLaser = ({ progress }: { progress: MotionValue<number> }) => {
  const y = useTransform(progress, [0, 1], [140, 260]);
  const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.line 
      x1="80" 
      x2="320" 
      y1={y} 
      y2={y} 
      style={{ opacity }}
      stroke="white" 
      strokeWidth="0.5" 
    />
  );
};

export default function Workshop() {
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { damping: 30, stiffness: 100 });
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 12,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      onUpdate: (latest) => setCurrentPercent(Math.round(latest * 100))
    });
    return () => controls.stop();
  }, [progress]);

  const rotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rectPath = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const riverPath = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);

  return (
    <div id="workshop" className="bg-[#080808]">
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.8em] text-[rgb(var(--accent-wood))] font-bold block">
              The Creation Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">
              Мастерская <br /> МАССИВА
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="luxury-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[260px] flex flex-col group border border-white/5 bg-white/[0.01]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5 space-y-3 flex-grow">
                  <span className="text-[8px] font-bold text-[rgb(var(--accent-wood))] uppercase tracking-[0.3em]">{step.day}</span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-tight">{step.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-12">
               <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.8em] text-[rgb(var(--accent-wood))] font-bold block">Engineering Protocol</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-none">Технологический <br /> таймлапс</h2>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-widest opacity-60">Автоматическая визуализация процесса</p>
               </div>
               <div className="space-y-6">
                  {timelineSteps.map((step, i) => (
                    <TimelineTextStep key={i} step={step} index={i} total={timelineSteps.length} progressValue={smoothProgress} />
                  ))}
               </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-video bg-white/[0.01] border border-white/10 rounded-2xl p-8 overflow-hidden group shadow-2xl transition-colors duration-500 hover:border-white/20">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>
                <svg viewBox="0 0 400 400" className="w-full h-full text-[rgb(var(--accent-wood))] relative z-10">
                  <motion.circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 10" style={{ rotate: rotation }} />
                  <motion.rect x="80" y="140" width="240" height="120" rx="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" style={{ pathLength: rectPath }} />
                  <motion.path d="M100 200 Q 200 230 300 200" fill="none" stroke="currentColor" strokeWidth="1" style={{ pathLength: riverPath }} />
                  <AnimatedLaser progress={smoothProgress} />
                </svg>
                <div className="absolute top-6 right-8 text-[9px] font-mono text-white/20 uppercase tracking-widest">
                   Simulation_Phase: {currentPercent}%
                </div>
                <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
