import './Pricing.scss';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    description:
      'Для solo creator, который хочет выйти из хаоса и быстро собирать первые системные выпуски.',
    items: ['3 проекта', '50 AI-кредитов', 'План на 7 дней', 'Базовая аналитика'],
  },
  {
    name: 'Growth',
    price: '$49',
    recommended: true,
    description:
      'Для активной команды, которой нужен единый бренд-голос, календарь и repurpose-поток.',
    items: [
      'Неограниченные проекты',
      'Brand memory',
      'Совместная работа',
      'План на 30 дней',
      'Автоперепаковка',
    ],
  },
  {
    name: 'Studio',
    price: '$99',
    description:
      'Для агентств и брендов, которые выпускают много контента и хотят максимальную настройку.',
    items: [
      'Приоритетная поддержка',
      'Командные роли',
      'Расширенная аналитика',
      'API / интеграции',
    ],
  },
];

export function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="shell">
        <div className="pricing__heading">
          <p className="section__eyebrow">Тарифы</p>
          <h2 className="section__title">Три уровня доступа, когда нужно расти без перегруза</h2>
          <p className="section__lead">
            Стартовый план подходит для проверки гипотез, Growth — для основной контентной машины,
            Studio — для системной работы команды и агентства.
          </p>
        </div>

        <div className="pricing__grid">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`pricing__card glass-panel ${tier.recommended ? 'pricing__card--featured' : ''}`}
            >
              {tier.recommended ? <span className="pricing__badge">Самый популярный</span> : null}
              <h3>{tier.name}</h3>
              <div className="pricing__price">
                <strong>{tier.price}</strong>
                <span>/ month</span>
              </div>
              <p>{tier.description}</p>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="pricing__button" href="#faq">
                Выбрать план
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
