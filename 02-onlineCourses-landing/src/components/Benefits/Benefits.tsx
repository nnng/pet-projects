import './Benefits.scss';

export default function Benefits() {
  return (
    <section className="benefits container">
      <h2>Что вы получите после обучения</h2>
      <div className="benefit-grid">
        {[
          'Реальные проекты',
          'Поддержка',
          'Фриланс',
          'Практика',
          'Комьюнити',
          'Современный стек',
        ].map((t) => (
          <div key={t} className="benefit glass-card">
            <div className="icon" />
            <h4>{t}</h4>
            <p className="muted">
              Добавите сильные работы в портфолио и сможете показывать их клиентам.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
