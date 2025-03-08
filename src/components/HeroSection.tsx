
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617339860293-8c1b58e7c86b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        
        {/* Arabic pattern overlay */}
        <div className="absolute inset-0 arabesque-pattern opacity-10"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Arabic subtitle */}
          <p className="font-arabic text-xl text-gold-light opacity-90 mb-2 scroll-reveal">العطور الفاخرة</p>
          
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 leading-tight scroll-reveal">
            Discover <span className="text-gold-light">Luxury</span> Arabian Fragrance
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto scroll-reveal">
            Immerse yourself in the rich heritage of Arabian perfumery with our exclusive collection of handcrafted fragrances.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal">
            <Button className="bg-gold-dark hover:bg-gold text-white px-8 py-6 text-lg button-hover">
              Explore Collection
            </Button>
            <Button variant="outline" className="border-white/70 text-white hover:bg-white/10 px-8 py-6 text-lg button-hover">
              Our Story <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="w-40 ornamental-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;
