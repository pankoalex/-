import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Calculator from './components/Calculator';
import SocialProof from './components/SocialProof';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-anthracite font-sans text-gray-100">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Calculator />
      <SocialProof />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
