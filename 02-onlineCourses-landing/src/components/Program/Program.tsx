import './Program.scss';

export default function Program() {
  return (
    <section id="program" className="program-section container">
      <h2>Программа курса</h2>
      <p className="muted">8 модулей • 42 урока • Практика и реальные проекты</p>
      <div className="program-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="module glass-card">
            <h3>Модуль 0{i}</h3>
            <p className="muted">Frontend Development — 12 уроков</p>
          </div>
        ))}
      </div>
    </section>
  );
}
