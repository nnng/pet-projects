import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });

      // Metrics animation
      const metrics = metricsRef.current?.querySelectorAll('.metric') as NodeListOf<Element>;
      gsap.from(metrics, {
        scrollTrigger: {
          trigger: metricsRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    { number: '120+', label: 'проектов' },
    { number: '8', label: 'лет опыта' },
    { number: '24', label: 'города' },
    { number: '98%', label: 'довольных клиентов' },
  ];

  return (
    <section className="about" ref={sectionRef}>
      <div className="about__container">
        {/* Left Column - Image */}
        <div className="about__left">
          <img src="/images/about-pexels.jpg" alt="Studio" className="about__image" />
        </div>

        {/* Right Column - Content */}
        <div className="about__right">
          <div className="about__label">О НАС</div>

          <h2 className="about__heading" ref={headingRef}>
            Архитектура,
            <br />
            эмоции и
            <br />
            утончённая простота
          </h2>

          <p className="about__text">
            Каждый проект строится вокруг атмосферы, пропорций и того, как человек ощущает
            пространство.
          </p>

          <div className="about__metrics" ref={metricsRef}>
            {metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <div className="metric__number">{metric.number}</div>
                <div className="metric__label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
