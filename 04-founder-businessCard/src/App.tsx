import About from './components/About';
import './components/App.scss';
import Cases from './components/Cases';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Перейти к контенту
      </a>
      <header className="site-header">
        <div className="site-nav container">
          <div className="brand-lockup">
            <span className="brand-mark">Q</span>
            <div className="brand-copy">
              <strong>Quantum Labs</strong>
              <span>fictional founder profile</span>
            </div>
          </div>

          <nav aria-label="Основная навигация" className="nav-links">
            <a href="#about">
              <span>01</span>
              <span>О себе</span>
            </a>
            <a href="#services">
              <span>02</span>
              <span>Услуги</span>
            </a>
            <a href="#cases">
              <span>03</span>
              <span>Кейсы</span>
            </a>
            <a href="#contact">
              <span>04</span>
              <span>Контакты</span>
            </a>
          </nav>

          <div className="header-meta">
            <span className="header-chip">Light hi-tech</span>
            <a className="btn primary nav-cta" href="#contact">
              План пилота
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Cases />
        <Contact />
        <CTA />
      </main>

      <footer className="site-footer container">
        <p>Quantum Labs — вымышленный проект для демонстрации дизайна и структуры сайта-визитки.</p>
      </footer>
    </div>
  );
}

export default App;
