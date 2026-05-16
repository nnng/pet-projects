import './Workflow.scss';

const steps = [
  {
    title: '1. Бриф без лишнего шума',
    text: 'Коротко опишите цель, аудиторию и формат. Astra сразу понимает, для чего нужен контент и какой ритм подачи выбрать.',
  },
  {
    title: '2. AI строит каркас',
    text: 'Система предлагает hooks, тезисы, CTA и структуру, а затем подстраивает стиль под ваш бренд и платформу.',
  },
  {
    title: '3. Команда дорабатывает',
    text: 'Редактор, дизайнер и creator видят один общий контекст, комментируют слои и собирают финальную версию без потери смысла.',
  },
  {
    title: '4. Публикация и анализ',
    text: 'Контент уходит в календарь, а аналитика показывает, что повторить, укоротить или усилить в следующем цикле.',
  },
];

export function Workflow() {
  return (
    <section className="workflow section" id="workflow">
      <div className="shell workflow__grid">
        <div>
          <p className="section__eyebrow">Рабочий сценарий</p>
          <h2 className="section__title">Путь от идеи к публикации без лишних переключений</h2>
          <p className="section__lead">
            Вместо хаоса из заметок, табличек и чатов команда получает один ритм работы: бриф,
            генерация, правка, выпуск и обучение на результате.
          </p>

          <div className="workflow__steps">
            {steps.map((step) => (
              <article key={step.title} className="workflow__step glass-panel">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="workflow__panel glass-panel" aria-label="Пример рабочего пространства">
          <div className="workflow__panel-top">
            <span>Live pipeline</span>
            <strong>Prompt to publish</strong>
          </div>

          <figure className="workflow__photo">
            <img
              src="https://images.pexels.com/photos/17147713/pexels-photo-17147713.jpeg?cs=srgb&dl=pexels-cmrcn-17147713.jpg&fm=jpg"
              alt="Монитор с интерфейсом монтажа и таймлайном"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <ul className="workflow__notes">
            <li>AI предлагает 3 разных угла подачи</li>
            <li>Контент автоматически адаптируется под канал</li>
            <li>Готовый материал можно отправить на ревью в один клик</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
