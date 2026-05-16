import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>NG</div>
        <div className={styles.center}>Fullstack Developer</div>
        <div className={styles.right}>GitHub • Telegram • LinkedIn</div>
      </div>
    </footer>
  );
}
