import styles from './ProcessSection.module.scss';

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как строится разработка проекта</h2>

        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.node}>1</div>
            <div className={styles.stepTitle}>Исследование</div>
            <div className={styles.stepDesc}>Анализ задач, целей и структуры продукта.</div>
          </div>

          <div className={styles.step}>
            <div className={styles.node}>2</div>
            <div className={styles.stepTitle}>Дизайн системы</div>
            <div className={styles.stepDesc}>Создание визуального языка и UX-архитектуры.</div>
          </div>

          <div className={styles.step}>
            <div className={styles.node}>3</div>
            <div className={styles.stepTitle}>Разработка</div>
            <div className={styles.stepDesc}>Frontend и backend реализация продукта.</div>
          </div>

          <div className={styles.step}>
            <div className={styles.node}>4</div>
            <div className={styles.stepTitle}>Полировка</div>
            <div className={styles.stepDesc}>Оптимизация, анимации и финальная сборка.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
