import './Footer.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1 - Logo & Description */}
        <div className="footer__column">
          <h3 className="footer__logo">ATELIER</h3>
          <p className="footer__description">
            Премиальная студия интерьера и архитектуры, создающая вневременные пространства для
            современной жизни.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div className="footer__column">
          <h4 className="footer__title">Навигация</h4>
          <ul className="footer__links">
            <li>
              <a href="#projects">Проекты</a>
            </li>
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#process">Процесс</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social */}
        <div className="footer__column">
          <h4 className="footer__title">Соцсети</h4>
          <ul className="footer__links">
            <li>
              <a href="#instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="#behance" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </li>
            <li>
              <a href="#pinterest" target="_blank" rel="noopener noreferrer">
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer__column">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__links">
            <li>
              <a href="tel:+77001234567">+7 (700) 123-45-67</a>
            </li>
            <li>
              <a href="mailto:hello@atelier.studio">hello@atelier.studio</a>
            </li>
            <li>
              <p>Алматы, Казахстан</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© {currentYear} Atelier Studio. Все права защищены.</p>
        <p className="footer__disclaimer">
          (Личность или продукт вымышленные — это не коммерческий продукт и не имеет отношения к
          реальной жизни.)
        </p>
      </div>
    </footer>
  );
};
