import styles from './TestimonialsSection.module.scss';

export function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы</h2>

        <div className={styles.slider}>
          <div className={styles.testimonial}>
            <p className={styles.quote}>
              «Очень сильный визуальный подход, качественная архитектура и внимание к деталям. Проект выглядит значительно дороже своей стоимости.»
            </p>
            <div className={styles.author}>Александр • Founder</div>
          </div>

          <div className={styles.testimonial}>
            <p className={styles.quote}>
              «Профессионально, быстро и с вниманием к визуалу — рекомендую.»
            </p>
            <div className={styles.author}>Екатерина • Product</div>
          </div>

          <div className={styles.testimonial}>
            <p className={styles.quote}>
              «Глубокое понимание продукта и отличная реализация анимаций и UX.»
            </p>
            <div className={styles.author}>Игорь • CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
