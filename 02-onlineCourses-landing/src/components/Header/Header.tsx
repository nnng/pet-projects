import './Header.scss';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">NEXORA</div>
        <nav className="nav">
          <a href="#program">Программа</a>
          <a href="#cases">Кейсы</a>
          <a href="#reviews">Отзывы</a>
          <a href="#pricing">Тарифы</a>
        </nav>
        <div className="cta">
          <button className="btn primary">Записаться</button>
        </div>
      </div>
    </header>
  );
}
