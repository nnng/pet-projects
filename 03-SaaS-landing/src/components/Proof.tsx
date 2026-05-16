import './Proof.scss';

const proofStats = [
  { value: '480+', label: 'создателей в ожидании' },
  { value: '2.7x', label: 'быстрее контент-производство' },
  { value: '91%', label: 'сохраняют tone of voice' },
];

const testimonials = [
  {
    name: 'Mila R.',
    role: 'creator / lifestyle',
    quote:
      'Я перестала начинать каждый выпуск с чистого листа. Теперь у меня есть готовый ритм на неделю вперед.',
    image:
      'https://images.pexels.com/photos/9040614/pexels-photo-9040614.jpeg?cs=srgb&dl=pexels-a-darmel-9040614.jpg&fm=jpg',
  },
  {
    name: 'Artem K.',
    role: 'video producer',
    quote:
      'Astra держит структуру и сокращает количество правок между съемкой, монтажом и публикацией.',
    image:
      'https://images.pexels.com/photos/9040615/pexels-photo-9040615.jpeg?cs=srgb&dl=pexels-a-darmel-9040615.jpg&fm=jpg',
  },
  {
    name: 'Nadia S.',
    role: 'brand lead',
    quote:
      'У нас наконец один голос в постах, в письмах и в short-form видео. Это ощущается как система.',
    image:
      'https://images.pexels.com/photos/9040528/pexels-photo-9040528.jpeg?cs=srgb&dl=pexels-a-darmel-9040528.jpg&fm=jpg',
  },
];

export function Proof() {
  return (
    <section className="proof section" id="proof">
      <div className="shell">
        <div className="proof__stats">
          {proofStats.map((stat) => (
            <article key={stat.label} className="proof__stat glass-panel">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="proof__heading">
          <p className="section__eyebrow">Социальное доказательство</p>
          <h2 className="section__title">
            Creators хотят не больше контента, а меньше ручной рутины
          </h2>
          <p className="section__lead">
            В отзывах важнее не абстрактный восторг, а конкретный эффект: меньше хаоса, быстрее
            выпуск и больше времени на идею и съемку.
          </p>
        </div>

        <div className="proof__testimonials">
          {testimonials.map((item) => (
            <article key={item.name} className="proof__testimonial glass-panel">
              <div className="proof__person">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
              <p>“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
