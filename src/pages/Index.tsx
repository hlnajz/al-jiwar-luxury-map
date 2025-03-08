
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ReviewsSection from '@/components/ReviewsSection';
import ContactMap from '@/components/ContactMap';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.scroll-reveal');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    // Initial check on load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <NavBar />
      <main>
        <HeroSection />
        <ProductShowcase />
        <ReviewsSection />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
