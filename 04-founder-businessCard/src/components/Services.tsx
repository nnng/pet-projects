import './Services.scss';

function ServiceCard({ title, desc, meta }: { title: string; desc: string; meta: string }) {
  return (
    <div className="service-card">
      <span className="service-index">01</span>
      <h3>{title}</h3>
      <p className="muted">{desc}</p>
      <div className="meta">{meta}</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section container">
      <p className="eyebrow">What I build</p>
      <h2 className="section-title">Что делает Quantum Labs</h2>
      <p className="section-sub">Инструменты для ускорения решений: от данных до действий</p>
      <div className="services-grid">
        <ServiceCard
          title="Decision Engine"
          desc="Автоматические правила для торговых стратегий."
          meta="Время решения — минус 70%"
        />
        <ServiceCard
          title="Integrations Hub"
          desc="Готовые коннекторы к ключевым платформам."
          meta="Внедрение за 2 недели"
        />
        <ServiceCard
          title="Analytics Stack"
          desc="Практическая аналитика и дашборды для принятия решений."
          meta="CR +18%"
        />
      </div>
      <div className="services-banner reveal">
        <div>
          <p className="banner-label">Фокус</p>
          <h3>Сначала — скорость, затем масштабирование</h3>
          <p>
            Структура решений строится так, чтобы команда быстро проверяла гипотезу, а не
            перегружалась интерфейсом.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/6969802/pexels-photo-6969802.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6969802.jpg&fm=jpg"
          alt="Финтех-рабочее пространство с картой и ноутбуком"
          width="640"
          height="420"
          loading="lazy"
        />
      </div>
      <div className="services-cta">
        <a className="btn primary" href="#contact">
          Обсудить интеграцию
        </a>
      </div>
    </section>
  );
}
