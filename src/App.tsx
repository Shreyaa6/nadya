import { useState } from 'react';

// Component Imports
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  // Smooth Scroll handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black/10 relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Preloader Intro */}
      <Preloader onComplete={() => setIsPreloaderFinished(true)} />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero isPreloaderFinished={isPreloaderFinished} />

        {/* 2. About Nadya Section ("How I work") */}
        <About />

        {/* 3. Featured Properties & Yield List */}
        <Properties />
      </main>

      {/* 6. Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
