import styles from './App.module.scss';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { HeroSection } from './sections/HeroSection';
import { ProcessSection } from './sections/ProcessSection';
import { SkillsSection } from './sections/SkillsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';

function App() {
  return (
    <>
      <CustomCursor />
      <div className={styles.app}>
        <div className={styles.backgroundLayer} aria-hidden="true" />
        <HeroSection />

        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />

        <Footer />
      </div>
    </>
  );
}

export default App;
