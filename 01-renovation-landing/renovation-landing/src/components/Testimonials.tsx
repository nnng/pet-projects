import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './Testimonials.scss';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonials = [
    {
      id: 1,
      quote:
        'Atelier Studio преобразила наш дом в идеальное пространство для жизни. Каждая деталь продумана до совершенства.',
      author: 'Александр К.',
      project: 'Пентхаус, Алматы',
    },
    {
      id: 2,
      quote:
        'Профессионализм, внимание к деталям и инновационный подход. Это именно то, что нам было нужно для реализации нашей мечты.',
      author: 'Елена М.',
      project: 'Жилой комплекс, Нур-Султан',
    },
    {
      id: 3,
      quote:
        'Работа с Atelier Studio была удовольствием. Они поняли нашу визию и превзошли все ожидания.',
      author: 'Игорь В.',
      project: 'Офисное пространство, Астана',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, testimonials.length]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(true);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(true);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__background">
        <img
          src="/images/testimonial-bg-pexels.jpg"
          alt="Background"
          className="testimonials__bg-image"
        />
      </div>

      <div className="testimonials__container">
        <h2 className="testimonials__heading">Что говорят клиенты</h2>

        <div className="testimonials__carousel" ref={containerRef}>
          <div className="testimonials__card">
            <p className="testimonials__quote">{testimonials[currentIndex].quote}</p>

            <div className="testimonials__divider"></div>

            <div className="testimonials__info">
              <p className="testimonials__author">{testimonials[currentIndex].author}</p>
              <p className="testimonials__project">{testimonials[currentIndex].project}</p>
            </div>
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__button" onClick={handlePrev} aria-label="Previous">
              ←
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex(index);
                    setIsAutoPlay(true);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button className="testimonials__button" onClick={handleNext} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
