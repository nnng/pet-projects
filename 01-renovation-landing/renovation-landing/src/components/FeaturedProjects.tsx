import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './FeaturedProjects.scss';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  meta: string;
  description: string;
  image: string;
  layout: 'left-image' | 'right-image' | 'full-image';
}

export const FeaturedProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const projects = sectionRef.current.querySelectorAll('.project');
      projects.forEach((project) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
          },
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Penthouse Aurora',
      meta: '240м² / Современный минимализм / 2025',
      description:
        'Эксклюзивный пентхаус с панорамными видами на город, разработанный с учетом современных стандартов комфорта и минимализма.',
      image: '/images/project-1-pexels.jpg',
      layout: 'left-image',
    },
    {
      id: 2,
      title: 'Luxury Apartment Downtown',
      meta: '180м² / Классический модернизм / 2024',
      description:
        'Апартаменты в центре города с классическим интерьером, элегантными деталями и функциональностью высокого уровня.',
      image: '/images/project-2-pexels.jpg',
      layout: 'right-image',
    },
    {
      id: 3,
      title: 'Modern Villa Riverside',
      meta: '520м² / Органичный минимализм / 2025',
      description:
        'Современная вилла с фокусом на интеграцию с природной средой и максимальным использованием естественного света.',
      image: '/images/project-3-pexels.jpg',
      layout: 'full-image',
    },
  ];

  return (
    <section className="featured-projects" ref={sectionRef}>
      <div className="featured-projects__container">
        <div className="featured-projects__header">
          <h2 className="featured-projects__heading">Избранные проекты</h2>
        </div>

        <div className="featured-projects__list">
          {projects.map((project) => (
            <div key={project.id} className={`project project--${project.layout}`}>
              <div className="project__image-wrapper">
                <img src={project.image} alt={project.title} className="project__image" />
                <div className="project__overlay"></div>
              </div>

              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__meta">{project.meta}</p>
                <p className="project__description">{project.description}</p>
                <a href="#" className="project__link">
                  Посмотреть проект
                  <span className="project__arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
