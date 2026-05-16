import { useState } from 'react';
import './Contact.scss';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  return (
    <section id="contact" className="contact-section container">
      <p className="eyebrow">Contact</p>
      <h2 className="section-title">Связаться</h2>
      <p className="muted">Email: max@quantumlabs.example</p>
      <p className="contact-note">
        Отвечаю в течение 48 часов. Если есть конкретный пилот, укажи срок и цель.
      </p>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setStatus('sent');
        }}
      >
        <label htmlFor="name">
          Имя
          <input id="name" name="name" autoComplete="name" required />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" autoComplete="email" required />
        </label>
        <label htmlFor="message">
          Сообщение
          <textarea id="message" name="message" rows={4} required />
        </label>
        <div className="form-actions">
          <button className="btn primary" type="submit">
            {status === 'sent' ? 'Отправлено' : 'Отправить'}
          </button>
        </div>
      </form>
      <p aria-live="polite" className="note success">
        {status === 'sent' ? 'Спасибо. Сообщение сохранено локально как демо-сценарий.' : ' '}
      </p>
    </section>
  );
}
