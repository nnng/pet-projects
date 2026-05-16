import { motion } from 'framer-motion';
import styles from './AboutSection.module.scss';

const hardSkills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Framer Motion',
  'CSS/SCSS',
  'Node.js',
  'APIs',
  'Design Systems',
];

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.portrait} />
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.panel}>
              <div className={styles.label}>ОБО МНЕ</div>
              <h3 className={styles.heading}>Разработчик, ориентированный на качество продукта</h3>
              <p className={styles.text}>
                Создаю современные веб-интерфейсы и digital-продукты с упором на архитектуру,
                производительность, анимации и визуальную эстетику. Работаю с React, TypeScript и
                современными UI-системами.
              </p>

              <div className={styles.skillLabel}>Hard skills</div>
              <div className={styles.skillsGrid}>
                {hardSkills.map((skill) => (
                  <div key={skill} className={styles.skillChip}>
                    {skill}
                  </div>
                ))}
              </div>

              <div className={styles.stats}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Frontend focus</div>
                  <div className={styles.cardBody}>UX interfaces</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>Delivery style</div>
                  <div className={styles.cardBody}>Design-first engineering</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
