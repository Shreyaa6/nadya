import { useState } from 'react';

// Component Imports
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';
import Process from './components/Process';
import WhyDubai from './components/WhyDubai';
import ClientTypes from './components/ClientTypes';
import Trust from './components/Trust';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Luxury Gold Cursor Trail for Desktop

function App() {
  const [preferredProperty, setPreferredProperty] = useState<string | undefined>(undefined);
  const [preferredLocation, setPreferredLocation] = useState<string | undefined>(undefined);

  // Smooth Scroll handler
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Callback when a user clicks "Request Details" on a Property Card
  const handleRequestDetails = (propertyName: string, locationName: string) => {
    setPreferredProperty(propertyName);
    setPreferredLocation(locationName);
    handleNavigate('contact');
  };

  const handleClearPreference = () => {
    setPreferredProperty(undefined);
    setPreferredLocation(undefined);
  };

  return (
    <div className="min-h-screen bg-luxury-black text-ivory selection:bg-gold-muted/30 selection:text-white relative">
      {/* Preloader Intro */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About Nadya Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Featured Properties Section */}
        <Properties onRequestDetails={handleRequestDetails} />

        {/* 6. Process Section */}
        <Process />

        {/* 7. Why Dubai Section */}
        <WhyDubai />

        {/* 8. Client Types ("Who I Help") Section */}
        <ClientTypes />

        {/* 9. Trust Pillars & Testimonials Section */}
        <Trust />

        {/* 10. Lead Capture Section */}
        <ContactForm 
          preferredProperty={preferredProperty}
          preferredLocation={preferredLocation}
          onClearPreference={handleClearPreference}
        />
      </main>

      {/* 11 & 12. Final CTA Section & Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
