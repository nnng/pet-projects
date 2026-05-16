import { motion } from 'framer-motion';
import styles from './HeroSection.module.scss';
import { HeroLeftContent } from './components/HeroLeftContent';
import { HeroVisual } from './components/HeroVisual';

export function HeroSection() {
  return (
    <section className={`${styles.hero} section`}>
      <div className={styles.heroBackground} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.leftContent}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <HeroLeftContent />
        </motion.div>

        <motion.div
          className={styles.rightVisual}
          initial={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
