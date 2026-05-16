import './Showcase.scss';

const outputs = [
  'Сценарий для 45-секундного Reels',
  '5 альтернативных hooks',
  'Текст поста под LinkedIn / X',
  'План нарезки на 3 Shorts',
];

const useCases = [
  {
    title: 'Solo creator',
    text: 'Быстро превращает одну идею в недельный пакет контента и помогает не выгорать на пустом листе.',
  },
  {
    title: 'Brand team',
    text: 'Держит единый голос бренда и снимает рутину с редакторов, менеджеров и SMM-команды.',
  },
  {
    title: 'Agency',
    text: 'Ускоряет выдачу вариантов для клиентов, не жертвуя качеством и прозрачностью процесса.',
  },
];

export function Showcase() {
  return (
    <section className="showcase section" id="showcase">
      <div className="shell showcase__grid">
        <div className="showcase__visual glass-panel">
          <div className="showcase__visual-head">
            <p className="section__eyebrow">Демо-сценарий</p>
            <h2 className="section__title">Когда рабочий день выглядит как контролируемый поток</h2>
          </div>

          <figure className="showcase__photo">
            <img
              src="https://images.pexels.com/photos/33759184/pexels-photo-33759184.jpeg?cs=srgb&dl=pexels-jasmin-borsig-2154982919-33759184.jpg&fm=jpg"
              alt="Креативная студия видеомонтажа с двумя мониторами"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="showcase__outputs">
            {outputs.map((output) => (
              <span key={output}>{output}</span>
            ))}
          </div>
        </div>

        <div className="showcase__stack">
          <article className="showcase__card glass-panel">
            <p className="showcase__card-label">Prompt</p>
            <h3>Сделай контент-пакет для запуска нового продукта</h3>
            <p>
              Тема: creators, AI-ассистент, запуск за 14 дней. Тон: уверенный, короткий, визуально
              сильный. Форматы: пост, сценарий, email и short-form video.
            </p>
          </article>

          <article className="showcase__card showcase__card--result glass-panel">
            <p className="showcase__card-label">Output</p>
            <div className="showcase__result">
              <strong>14</strong>
              <span>дней контент-плана</span>
            </div>
            <ul>
              <li>3 hook-цепочки для запуска</li>
              <li>8 переработанных тезисов</li>
              <li>5 готовых CTA под платформы</li>
            </ul>
          </article>

          <div className="showcase__usecases">
            {useCases.map((item) => (
              <article key={item.title} className="showcase__usecase glass-panel">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
