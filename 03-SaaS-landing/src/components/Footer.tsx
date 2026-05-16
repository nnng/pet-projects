import './Footer.scss';

const links = [
  { label: 'Функции', href: '#features' },
  { label: 'Сценарий', href: '#workflow' },
  { label: 'Демо', href: '#showcase' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner glass-panel">
        <div>
          <a className="site-footer__brand" href="#top">
            Astra Studio
          </a>
          <p>
            Футуристичная SaaS-платформа для creators, которая помогает быстрее думать, собирать и
            выпускать контент.
          </p>
          <p className="site-footer__demo">
            Демо-версия: данный сайт — демонстрационная работа и не представляет реального
            коммерческого продукта.
          </p>
          <p className="site-footer__disclaimer">
            (Личность или продукт вымышленные — это не коммерческий продукт и не имеет отношения к
            реальной жизни.)
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Подвал сайта">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__meta">
          <span>Фото и визуальный референс: Pexels</span>
          <span>React + TypeScript + SCSS</span>
        </div>
      </div>
    </footer>
  );
}
