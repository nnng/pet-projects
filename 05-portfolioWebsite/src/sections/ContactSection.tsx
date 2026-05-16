import styles from './ContactSection.module.scss';

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Давайте создадим что-то сильное</h2>

        <p className={styles.lead}>Открыт для сотрудничества и разработки современных интерфейсов.</p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <input placeholder="Ваше имя" aria-label="name" />
            <input placeholder="Telegram / Контакт" aria-label="contact" />
          </div>
          <textarea placeholder="Расскажите о проекте" aria-label="message" />
          <div className={styles.actions}>
            <button className="btn btn-primary">Отправить запрос</button>
          </div>
        </form>
      </div>
    </section>
  );
}
