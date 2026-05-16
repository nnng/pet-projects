import './About.scss';

export default function About() {
  return (
    <section id="about" className="about-section container">
      <p className="eyebrow">Позиционирование</p>
      <h2 className="section-title">Кто я и как работаю</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Я фокусируюсь на том, чтобы данные и процессы работали на рост: гипотезы быстро проходят
            валидацию, а решения в продукте — быстро дают эффект. Ранее запускал B2B‑инструменты для
            трейдинга и платежных платформ.
          </p>
          <div className="skills-list">
            <span>Стратегия и GTM</span>
            <span>MVP и быстрые интеграции</span>
            <span>Команды под результат</span>
          </div>
          <div className="about-quote">
            <p>
              «Я не продаю шум. Я выстраиваю решения, которые улучшают принятие решений и дают
              видимый эффект в срок»
            </p>
          </div>
        </div>
        <div className="about-visual reveal delay-1">
          <img
            src="https://images.pexels.com/photos/7681746/pexels-photo-7681746.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7681746.jpg&fm=jpg"
            alt="Аналитика финансовых данных на экране"
            width="640"
            height="740"
            loading="lazy"
          />
          <div className="about-floating-card">
            <strong>+18%</strong>
            <span>средний рост ключевой метрики после запуска</span>
          </div>
        </div>
      </div>
    </section>
  );
}
