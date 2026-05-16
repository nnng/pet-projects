import './Faq.scss';

const faqs = [
  {
    question: 'Подходит ли Astra Studio, если у меня уже есть свой стиль?',
    answer:
      'Да. Платформа запоминает стиль, ограничения и любимые форматы, поэтому новые варианты остаются в рамках бренда.',
  },
  {
    question: 'Какие платформы поддерживаются?',
    answer:
      'Astra помогает готовить контент под Instagram, TikTok, YouTube Shorts, newsletter, LinkedIn и рекламные сценарии.',
  },
  {
    question: 'Нужно ли долго настраивать систему?',
    answer:
      'Нет. Стартовый сценарий занимает несколько минут: короткий бриф, выбор формата, сохранение tone of voice и первый результат.',
  },
  {
    question: 'Можно ли работать командой?',
    answer:
      'Да. Есть совместные проекты, роли, комментарии и централизованный контекст для редактора, создателя и маркетолога.',
  },
  {
    question: 'Что с аналитикой?',
    answer:
      'Платформа показывает, какие форматы и hooks дают лучший отклик, чтобы вы могли масштабировать удачные паттерны.',
  },
];

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="shell faq__grid">
        <div>
          <p className="section__eyebrow">FAQ</p>
          <h2 className="section__title">Вопросы, которые обычно мешают нажать на старт</h2>
          <p className="section__lead">
            Здесь собраны ответы на самые частые сомнения: совместимость со стилем, командная
            работа, скорость онбординга и полезность аналитики.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq__item glass-panel">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <aside className="faq__cta glass-panel">
          <p className="faq__cta-label">Готовы увидеть это вживую?</p>
          <h3>Запустите Astra Studio и соберите первый контент-пакет уже сегодня.</h3>
          <p>
            Платформа спроектирована так, чтобы creator мог начать без долгой настройки и сразу
            увидеть экономию времени на каждом шаге.
          </p>
          <a href="#top">Вернуться к началу</a>
        </aside>
      </div>
    </section>
  );
}
