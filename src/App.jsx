import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Partners from './components/Partners';
import CaseStudies from './components/CaseStudies';
import WhyIntech from './components/WhyIntech';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import BackToTop from './components/BackToTop';

export function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f6f6f8] text-[#0F172A] font-[Inter,sans-serif] min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustMetrics />
        <Solutions />
        <Industries />
        <Partners />
        <CaseStudies />
        <WhyIntech />
        <Testimonials />
        <FAQ />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
      {showBackToTop && <BackToTop />}
    </div>
  );
}
