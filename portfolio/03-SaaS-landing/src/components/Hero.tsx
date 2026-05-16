import './Hero.scss'

const stats = [
  { value: '3x', label: 'быстрее цикл контента' },
  { value: '87%', label: 'экономия ручной рутины' },
  { value: '24/7', label: 'новые идеи и варианты' },
]

const chips = ['Shorts', 'Reels', 'Posts', 'Newsletter', 'Ads', 'Scripts']

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="shell hero__grid">
        <div className="hero__content">
          <p className="section__eyebrow">AI-платформа для creators</p>
          <h1 className="hero__title">
            Одна идея.
            <span>Десятки форматов.</span>
            Готово за минуты.
          </h1>
          <p className="hero__lead">
            Astra Studio превращает сырой бриф в готовую контент-систему: сценарии,
            визуальные подсказки, адаптации под платформы и трекинг результата — в одном
            месте.
          </p>

          <div className="hero__actions">
            <a className="hero__primary" href="#pricing">
              Начать бесплатно
            </a>
            <a className="hero__secondary" href="#showcase">
              Смотреть демо
            </a>
          </div>

          <div className="hero__chips" aria-label="Поддерживаемые форматы">
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <article key={stat.label} className="hero__stat glass-panel">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <figure className="hero__photo hero__photo--large glass-panel">
            <img
              src="https://images.pexels.com/photos/11063288/pexels-photo-11063288.jpeg?cs=srgb&dl=pexels-amar-11063288.jpg&fm=jpg"
              alt="Футуристичное домашнее рабочее место с подсветкой и несколькими мониторами"
              loading="eager"
              decoding="async"
            />
          </figure>

          <figure className="hero__photo hero__photo--small glass-panel">
            <img
              src="https://images.pexels.com/photos/9040614/pexels-photo-9040614.jpeg?cs=srgb&dl=pexels-a-darmel-9040614.jpg&fm=jpg"
              alt="Creator снимает контент в студии"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="hero__card hero__card--top glass-panel">
            <span>Prompt</span>
            <strong>Сделай из этого брифа 5 hooks и 3 CTA.</strong>
            <em>AI предложит варианты под Instagram, TikTok и YouTube Shorts.</em>
          </div>

          <div className="hero__card hero__card--bottom glass-panel">
            <span>Workflow</span>
            <strong>Сценарий → съемка → монтаж → публикация</strong>
            <ul>
              <li>Brand voice memory</li>
              <li>Авто-репап: longform to shorts</li>
              <li>План публикаций на 14 дней</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
