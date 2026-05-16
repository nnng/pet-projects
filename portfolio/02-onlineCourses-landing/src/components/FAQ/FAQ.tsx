import './FAQ.scss';

export default function FAQ() {
  return (
    <section className="faq ">
      <h2>Частые вопросы</h2>
      <div className="faq-list">
        <details className="glass-card">
          <summary>Подойдёт ли курс новичкам?</summary>
          <p className="muted">Да, курс содержит базовые модули и практику.</p>
        </details>
        <details className="glass-card">
          <summary>Сколько времени нужно?</summary>
          <p className="muted">Около 3-4 месяцев при средней загрузке.</p>
        </details>
        <details className="glass-card">
          <summary>Будет ли поддержка?</summary>
          <p className="muted">Да, закрытый чат и проверка домашних заданий.</p>
        </details>
      </div>
    </section>
  );
}
