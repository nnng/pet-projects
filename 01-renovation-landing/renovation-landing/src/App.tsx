import { useState } from 'react';
import './App.scss';
import {
  About,
  CTA,
  FeaturedProjects,
  Footer,
  Header,
  Hero,
  Process,
  Services,
  Testimonials,
} from './components';
import { useSmothScroll } from './hooks/useSmothScroll';
import './styles/global.scss';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useSmothScroll();

  return (
    <>
      <div className="grain"></div>
      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
