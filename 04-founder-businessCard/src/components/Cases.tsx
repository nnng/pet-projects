import './Cases.scss';

function CaseItem({ title, sol, result }: { title: string; sol: string; result: string }) {
  return (
    <div className="case-item">
      <span className="case-label">Case</span>
      <h4>{title}</h4>
      <p className="muted">{sol}</p>
      <div className="case-result">{result}</div>
    </div>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="cases-section container">
      <p className="eyebrow">Proof</p>
      <h2 className="section-title">Что получилось</h2>
      <div className="cases-grid">
        <CaseItem title="Платформа A" sol="Сделали Decision Engine" result="TTR −40%" />
        <CaseItem
          title="Маркет‑маркетплейс B"
          sol="Интеграции и оптимизация флоу"
          result="CR +18%"
        />
        <CaseItem
          title="Финсервис C"
          sol="Автоматизация процессов"
          result="Операц. издержки −22%"
        />
      </div>
      <div className="partners reveal">
        <span>Nova Bank</span>
        <span>Pulse Exchange</span>
        <span>LedgerOne</span>
        <span>Orbit Pay</span>
      </div>
    </section>
  );
}
