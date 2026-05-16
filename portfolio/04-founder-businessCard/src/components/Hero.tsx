import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-copy reveal">
          <p className="eyebrow">Fictional fintech founder / strategic product operator</p>
          <h1 className="hero-title">
            Макс Вальтер — сооснователь, Head of Strategy в Quantum Labs
          </h1>
          <p className="hero-sub">Дело в скорости принятия решений</p>
          <p className="hero-body">
            Я помогаю финтех‑командам запускать продукты, которые решают реальные операционные
            задачи — быстро, прозрачно, с метрикой на рост.
          </p>
          <div className="hero-stats" aria-label="Ключевые показатели">
            <div>
              <strong>12</strong>
              <span>недель до первого MVP</span>
            </div>
            <div>
              <strong>18%</strong>
              <span>рост конверсии после внедрения</span>
            </div>
            <div>
              <strong>3</strong>
              <span>уровня воронки автоматизирую</span>
            </div>
          </div>
          <div className="hero-cta">
            <a className="btn primary" href="#contact">
              Связаться по Email
            </a>
            <a className="btn ghost" href="#cases">
              Посмотреть кейсы
            </a>
          </div>
        </div>
        <div className="hero-visual reveal delay-1">
          <div className="hero-card">
            <img
              src="https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?cs=srgb&dl=pexels-atulm0han-36645466.jpg&fm=jpg"
              alt="Вымышленный предприниматель в современном офисе"
              width="640"
              height="800"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-card-badge">fictional profile</div>
          </div>
        </div>
      </div>
    </section>
  );
}
