import { motion } from 'framer-motion';
import styles from './HeroLeftContent.module.scss';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '↗' },
  { name: 'Telegram', url: 'https://t.me', icon: '✈' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function HeroLeftContent() {
  return (
    <motion.div
      className={styles.content}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Label */}
      <motion.div className={styles.label} variants={itemVariants}>
        FULLSTACK DEVELOPER • REACT • TYPESCRIPT • AI
      </motion.div>

      {/* Main Heading */}
      <motion.h1 className={styles.heading} variants={itemVariants}>
        Создаю современные
        <br />
        цифровые продукты
        <br />с <span className={styles.accent}>премиальным UI</span>
      </motion.h1>

      {/* Description */}
      <motion.p className={styles.description} variants={itemVariants}>
        Разрабатываю интерфейсы, SaaS-платформы,
        <br />
        AI-сервисы и современные веб-приложения
        <br />с акцентом на визуал, анимации и UX.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div className={styles.buttons} variants={itemVariants}>
        <motion.button
          className={`${styles.btn} ${styles.btnPrimary}`}
          whileHover={{
            y: -4,
            boxShadow: '0 0 48px rgba(161, 18, 18, 0.32)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          Обсудить проект
        </motion.button>

        <motion.button
          className={`${styles.btn} ${styles.btnSecondary}`}
          whileHover={{
            borderColor: '#A11212',
            boxShadow: '0 0 24px rgba(161, 18, 18, 0.16)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          Смотреть проекты
        </motion.button>
      </motion.div>

      {/* Social Links */}
      <motion.div className={styles.socials} variants={itemVariants}>
        {socialLinks.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.url}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              color: '#A11212',
              textShadow: '0 0 16px rgba(161, 18, 18, 0.4)',
            }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.icon}>{link.icon}</span>
            <span>{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
