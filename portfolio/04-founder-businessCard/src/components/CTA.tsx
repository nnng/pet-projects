import './CTA.scss';

export default function CTA() {
  return (
    <aside className="cta-bar">
      <div className="container cta-inner">
        <div>
          <h3>Готов обсудить быстрый пилот</h3>
          <p className="muted">
            Если хотите проверить идею в двухнедельном MVP — оставьте запрос, и я пришлю план
            действий и примерную оценку.
          </p>
        </div>
        <div>
          <a className="btn primary" href="#contact">
            Запросить пилот
          </a>
        </div>
      </div>
    </aside>
  );
}
