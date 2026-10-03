import React from 'react';
import PixelScene from './components/PixelScene';
import Navbar from './components/Navbar';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#08120b] text-stone-100 overflow-x-hidden selection:bg-[#fbc33c] selection:text-black">
      {/* Floating Stepped Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* 1. HERO SECTION (100dvh Morning Countryside Vista) */}
      <section id="home" className="relative w-full h-[100dvh] min-h-[580px] overflow-hidden">
        <PixelScene onScrollDown={() => scrollToSection('problem')} />
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section id="problem" className="relative w-full">
        <ProblemSection />
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="relative w-full">
        <HowItWorksSection />
      </section>

      {/* 4. FEATURES SECTION */}
      <section id="features" className="relative w-full">
        <FeaturesSection />
      </section>

      {/* 5. IMPACT SECTION */}
      <section id="impact" className="relative w-full">
        <ImpactSection />
      </section>

      {/* 6. FOOTER */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
