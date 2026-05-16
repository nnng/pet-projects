import { useState } from 'react';
import './Services.scss';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Дизайн интерьера',
      description: 'Концепция и реализация уникального дизайна вашего пространства',
      image: '/images/service-1-pexels.jpg',
    },
    {
      id: 2,
      title: 'Ремонт под ключ',
      description: 'Полный цикл работ от проекта до финальной отделки',
      image: '/images/service-2-pexels.jpg',
    },
    {
      id: 3,
      title: 'Умный дом',
      description: 'Интеграция современных технологий в интерьер',
      image: '/images/service-3-pexels.jpg',
    },
    {
      id: 4,
      title: 'Индивидуальная мебель',
      description: 'Создание мебели, адаптированной под ваши потребности',
      image: '/images/service-4-pexels.jpg',
    },
    {
      id: 5,
      title: 'Планировка пространства',
      description: 'Оптимальное использование площади и функционала',
      image: '/images/service-5-pexels.jpg',
    },
  ];

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <div className="services__label">УСЛУГИ</div>
          <h2 className="services__heading">Комплексные интерьерные решения</h2>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`services__item ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="services__number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>
              <div className="services__image-wrapper">
                <img src={service.image} alt={service.title} className="services__image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
