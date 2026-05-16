import './Header.scss';

const links = [
  { label: 'Функции', href: '#features' },
  { label: 'Сценарий', href: '#workflow' },
  { label: 'Результат', href: '#showcase' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner glass-panel">
        <a className="site-header__brand" href="#top" aria-label="Astra Studio">
          <span className="site-header__mark" aria-hidden="true">
            A
          </span>
          <span>
            Astra <strong>Studio</strong>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="site-header__cta" href="#pricing">
          Запросить демо
        </a>
      </div>
    </header>
  );
}
