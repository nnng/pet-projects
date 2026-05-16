import Benefits from './components/Benefits/Benefits';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing/Pricing';
import Program from './components/Program/Program';
import Results from './components/Results/Results';
import SocialProof from './components/SocialProof/SocialProof';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Program />
        <Benefits />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
