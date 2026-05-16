import './Features.scss'

const features = [
  {
    tone: 'cyan',
    label: 'AI-идеация',
    title: 'Генерация сценариев, хуков и контент-углов',
    text: 'Задайте тему, цель и стиль, а Astra предложит десятки форматов под разные платформы и длину подачи.',
    items: ['20+ hooks для одного брифа', 'Адаптация под tone of voice', 'Выбор формата по цели'],
  },
  {
    tone: 'amber',
    label: 'Repurpose engine',
    title: 'Один длинный ролик превращается в короткую воронку',
    text: 'Платформа нарезает длинный контент на шорты, посты, письма и рекламные сообщения без потери смысла.',
    items: ['Shorts и Reels', 'Посты для соцсетей', 'Email / newsletter версии'],
  },
  {
    tone: 'lime',
    label: 'Brand memory',
    title: 'Тон бренда хранится в одном профиле',
    text: 'Сохраняйте словарь, ограничения и визуальные предпочтения, чтобы каждый новый выпуск звучал как часть системы.',
    items: ['Словарь бренда', 'Запретные формулировки', 'Повторяемый стиль ответов'],
  },
  {
    tone: 'violet',
    label: 'Content ops',
    title: 'Календарь, напоминания и авто-планирование',
    text: 'Команда видит, что опубликовано, что в работе и где нужен комментарий — без хаоса в таблицах и чатах.',
    items: ['План на 30 дней', 'Статусы публикаций', 'Визуальные дедлайны'],
  },
  {
    tone: 'sky',
    label: 'Performance',
    title: 'Аналитика подсказывает, что масштабировать',
    text: 'Понимайте, какие темы, хедлайны и длины работают лучше всего, и быстро пересобирайте контент-план.',
    items: ['Видно лучшие паттерны', 'Пороговые сигналы', 'Сравнение форматов'],
  },
  {
    tone: 'rose',
    label: 'Collaboration',
    title: 'Совместная работа без потери контекста',
    text: 'Комментарии, роли и версии живут рядом с контентом, поэтому создатели, редакторы и маркетологи двигаются в одном ритме.',
    items: ['Комментарии по блокам', 'Версии сценариев', 'Доступ по ролям'],
  },
]

export function Features() {
  return (
    <section className="features section" id="features">
      <div className="shell">
        <div className="features__heading">
          <p className="section__eyebrow">Ключевые возможности</p>
          <h2 className="section__title">Модульный стек для креативной команды</h2>
          <p className="section__lead">
            Каждый блок выстроен вокруг реального сценария creators: придумать, адаптировать,
            запланировать и выпустить контент без лишних переключений между инструментами.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <article key={feature.title} className={`feature-card feature-card--${feature.tone} glass-panel`}>
              <div className="feature-card__top">
                <span className="feature-card__index">0{index + 1}</span>
                <span className="feature-card__label">{feature.label}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <ul>
                {feature.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
