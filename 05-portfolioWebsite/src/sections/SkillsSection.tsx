import styles from './SkillsSection.module.scss';

export function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Технологии и инструменты</h2>

        <div className={styles.lead}>Интерактивная экосистема навыков</div>

        <div className={styles.clusters}>
          <div className={styles.cluster} data-category="Frontend">
            <div className={styles.clusterTitle}>Frontend</div>
            <div className={styles.pill}>React</div>
            <div className={styles.pill}>TypeScript</div>
            <div className={styles.pill}>HTML/CSS</div>
          </div>

          <div className={styles.cluster} data-category="Backend">
            <div className={styles.clusterTitle}>Backend</div>
            <div className={styles.pill}>Node.js</div>
            <div className={styles.pill}>Express</div>
            <div className={styles.pill}>APIs</div>
          </div>

          <div className={styles.cluster} data-category="Design">
            <div className={styles.clusterTitle}>Design</div>
            <div className={styles.pill}>Figma</div>
            <div className={styles.pill}>Motion</div>
          </div>

          <div className={styles.cluster} data-category="AI">
            <div className={styles.clusterTitle}>AI</div>
            <div className={styles.pill}>OpenAI</div>
            <div className={styles.pill}>Agents</div>
          </div>
        </div>
      </div>
    </section>
  );
}
