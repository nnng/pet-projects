import './App.scss';
import { Faq } from './components/Faq';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Proof } from './components/Proof';
import { Showcase } from './components/Showcase';
import { Workflow } from './components/Workflow';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Showcase />
        <Proof />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
