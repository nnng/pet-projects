import './SocialProof.scss';

export default function SocialProof() {
  return (
    <section className="social-section">
      <div className="container">
        <h2>
          Нам доверяют студенты
          <br />
          со всего СНГ
        </h2>
        <div className="logos">
          {['Freelance', 'Behance', 'Startup', 'Agency', 'Digital', 'Studio'].map((l) => (
            <div key={l} className="logo-item muted">
              {l}
            </div>
          ))}
        </div>
        <div className="reviews">
          <div className="review glass-card">
            «После курса взял первый заказ уже через 3 недели.»
          </div>
          <div className="review glass-card">«Практические задания как в реальной работе.»</div>
          <div className="review glass-card">«Поддержка и проверка проектов очень помогли.»</div>
        </div>
      </div>
    </section>
  );
}
