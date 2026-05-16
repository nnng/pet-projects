import aiScreenshot from '../assets/AISaaSLanding.png';
import renovationScreenshot from '../assets/renovationLanding.png';
import styles from './FeaturedProjectsSection.module.scss';

export function FeaturedProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Избранные проекты</h2>

        <div className={styles.project}>
          <div className={styles.preview}>
            <img
              src={aiScreenshot}
              alt="Astra Studio — AI-платформа"
              className={styles.screenshot}
              loading="lazy"
            />
          </div>

          <div className={styles.info}>
            <h3 className={styles.projectTitle}>Astra Studio — AI-платформа для создателей</h3>
            <p className={styles.projectDesc}>
              AI-платформа для creators: генерация сценариев, адаптация форматов, автоматическая
              нарезка контента и аналитика эффективности.
            </p>
            <div className={styles.tags}>React • TypeScript • SCSS • AI</div>
            <div className={styles.actions}>
              <button className="btn btn-secondary">Смотреть кейс</button>
              <button className="btn btn-sm btn-primary">GitHub</button>
            </div>
          </div>
        </div>

        <div className={styles.projectAlt}>
          <div className={styles.info}>
            <h3 className={styles.projectTitle}>ATELIER — Renovation Landing</h3>
            <p className={styles.projectDesc}>
              Сайт премиальной архитектурно-интерьерной студии: портфолио проектов, услуги и
              избранные кейсы.
            </p>
            <div className={styles.tags}>HTML • SCSS • Interior • Architecture</div>
            <div className={styles.actions}>
              <button className="btn btn-secondary">Смотреть кейс</button>
              <button className="btn btn-sm btn-primary">GitHub</button>
            </div>
          </div>

          <div className={styles.preview}>
            <img
              src={renovationScreenshot}
              alt="ATELIER Renovation Landing"
              className={styles.screenshot}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
