import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import './Hero.scss';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      const headingChars = headingRef.current?.querySelectorAll('.char') as NodeListOf<Element>;
      gsap.from(headingChars, {
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.05,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: 0.2,
      });

      // Image animation
      gsap.from(imageRef.current, {
        duration: 1.2,
        opacity: 0,
        scale: 1.08,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: 0.3,
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: 0.5,
      });

      // Buttons animation
      const buttons = buttonsRef.current?.querySelectorAll('.btn') as NodeListOf<Element>;
      gsap.from(buttons, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const heading = 'Пространства\nсозданные\nдля современной жизни';
  const headingChars = heading.split('').map((char, idx) => (
    <span key={idx} className="char">
      {char}
    </span>
  ));

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero__container">
        {/* Left Column */}
        <div className="hero__left">
          <div className="hero__label">ПРЕМИАЛЬНАЯ СТУДИЯ ИНТЕРЬЕРА</div>

          <h2 className="hero__heading" ref={headingRef}>
            {headingChars}
          </h2>

          <p className="hero__description" ref={descriptionRef}>
            Мы создаём вневременные интерьеры, объединяя архитектуру, минимализм и современный
            комфорт.
          </p>

          <div className="hero__buttons" ref={buttonsRef}>
            <button className="btn btn--primary">Начать проект</button>
            <button className="btn btn--secondary">Смотреть проекты</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero__right">
          <div className="hero__image-wrapper">
            <img
              ref={imageRef}
              src="/images/hero-pexels.jpg"
              alt="Premium Interior"
              className="hero__image"
            />
            <div className="hero__card">
              <p className="hero__card-title">Современный пентхаус</p>
              <p className="hero__card-subtitle">Алматы — 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
