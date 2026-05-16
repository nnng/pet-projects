import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="label">ОНЛАЙН-КУРС 2026</div>
          <h1 className="hero-title">
            Освой digital-навыки,
            <br />
            которые приносят
            <br />
            реальные деньги
          </h1>
          <p className="hero-desc muted">
            Практический курс по современному веб-разработке, фрилансу и созданию digital-проектов.
            Без воды. Только реальные навыки.
          </p>

          <div className="hero-cta">
            <button className="btn primary large">Начать обучение</button>
            <button className="btn glass">Смотреть программу</button>
          </div>

          <div className="stats-row">
            <div className="stat glass-card">
              {' '}
              <strong>1200+</strong>
              <span>студентов</span>{' '}
            </div>
            <div className="stat glass-card">
              {' '}
              <strong>87%</strong>
              <span>нашли заказы</span>{' '}
            </div>
            <div className="stat glass-card">
              {' '}
              <strong>4.9/5</strong>
              <span>средняя оценка</span>{' '}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="mockup">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="dashboard mockup"
            />
            <div className="glow purple"></div>
            <div className="glow cyan"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
