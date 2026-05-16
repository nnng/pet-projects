import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import './Process.scss';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const steps = sectionRef.current.querySelectorAll('.process__step');
      steps.forEach((step) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
          },
          duration: 0.8,
          opacity: 0,
          y: 30,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description:
        'Обсуждаем вашу идею, анализируем пространство и определяем направление проекта.',
    },
    {
      number: '02',
      title: 'Концепция',
      description: 'Разрабатываем детальную концепцию дизайна с 3D визуализацией и предложениями.',
    },
    {
      number: '03',
      title: 'Проектирование',
      description: 'Создаем полный набор технических чертежей и спецификаций для реализации.',
    },
    {
      number: '04',
      title: 'Реализация',
      description: 'Управляем всеми этапами работы и контролируем качество исполнения.',
    },
    {
      number: '05',
      title: 'Завершение',
      description: 'Финальная отделка, проверка и передача готового проекта в идеальном состоянии.',
    },
  ];

  return (
    <section className="process" ref={sectionRef}>
      <div className="process__container">
        <h2 className="process__heading">
          От концепции
          <br />
          до финальной детали
        </h2>

        <div className="process__steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`process__step ${activeStep === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="process__number">{step.number}</div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
              <div className="process__divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
