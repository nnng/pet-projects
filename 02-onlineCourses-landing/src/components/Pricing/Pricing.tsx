import './Pricing.scss';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Выберите формат обучения</h2>
      <div className="pricing-grid">
        <div className="card glass-card">
          Start
          <br />
          <strong>19 990₸</strong>
        </div>
        <div className="card glass-card featured">
          Pro
          <br />
          <strong>49 990₸</strong>
        </div>
        <div className="card glass-card">
          Premium
          <br />
          <strong>99 990₸</strong>
        </div>
      </div>
    </section>
  );
}
