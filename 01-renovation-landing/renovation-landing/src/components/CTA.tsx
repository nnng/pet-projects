import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import './CTA.scss';

export const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 70%',
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 70%',
        },
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" ref={containerRef}>
      <div className="cta__noise"></div>

      <div className="cta__container">
        <h2 className="cta__heading" ref={headingRef}>
          Давайте создадим
          <br />
          ваше будущее пространство
        </h2>

        <p className="cta__description">Вневременные интерьеры для современной жизни.</p>

        <button className="cta__button" ref={buttonRef}>
          Обсудить проект
        </button>
      </div>

      <div className="cta__grid"></div>
    </section>
  );
};
