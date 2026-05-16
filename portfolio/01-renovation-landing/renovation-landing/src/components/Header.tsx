import { useEffect, useState } from 'react';
import './Header.scss';

interface HeaderProps {
  isMenuOpen?: boolean;
  onMenuToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen = false, onMenuToggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = ['Проекты', 'Услуги', 'Процесс', 'Контакты'];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        {/* Left Side - Logo */}
        <div className="header__logo">
          <div className="logo">
            <h1 className="logo__main">ATELIER</h1>
            <p className="logo__subtitle">Interior Architecture</p>
          </div>
        </div>

        {/* Center - Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          {navigationItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav__item">
              {item}
              <span className="nav__underline"></span>
            </a>
          ))}
        </nav>

        {/* Right Side - CTA Button */}
        <div className="header__cta">
          <button className="btn btn--primary">Обсудить проект</button>
          <button
            className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
