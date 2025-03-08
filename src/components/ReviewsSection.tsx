
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  source: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ahmed M.",
    date: "October 12, 2023",
    rating: 5,
    text: "Absolutely fantastic fragrances that last all day. The Royal Amber is my signature scent now, and I receive compliments everywhere I go. The store staff is very knowledgeable and helped me find the perfect match for my preferences.",
    source: "Google Reviews"
  },
  {
    id: 2,
    name: "Sarah J.",
    date: "September 5, 2023",
    rating: 5,
    text: "The best perfume store in the region! I've been using Midnight Oud for special occasions and it's unlike anything I've ever worn before. Elegant packaging and exceptional customer service.",
    source: "Google Reviews"
  },
  {
    id: 3,
    name: "Mohammed A.",
    date: "August 17, 2023",
    rating: 4,
    text: "A true gem for perfume enthusiasts. The selection is impressive and the quality is unmatched. I appreciate how they preserve traditional Arabian scent profiles while adding modern touches.",
    source: "Google Reviews"
  },
  {
    id: 4,
    name: "Fatima R.",
    date: "November 3, 2023",
    rating: 5,
    text: "I purchased Sultan's Musk as a gift for my husband and he absolutely loves it. The longevity is remarkable and the scent develops beautifully throughout the day. Will definitely be back for more.",
    source: "Google Reviews"
  },
  {
    id: 5,
    name: "Omar K.",
    date: "July 22, 2023",
    rating: 5,
    text: "The attention to detail in their fragrances is impressive. Each perfume tells a story and brings back memories of Arabian heritage. The bottles themselves are works of art.",
    source: "Google Reviews"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const reviewsPerView = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerView);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;
    
    if (isSwipeLeft) {
      handleNext();
    }
    
    if (isSwipeRight) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
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
  
  const visibleReviews = () => {
    const start = currentIndex * reviewsPerView;
    return reviews.slice(start, start + reviewsPerView);
  };

  return (
    <section id="reviews" className="py-24 bg-burgundy-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <p className="font-arabic text-gold-light text-xl mb-2">آراء عملائنا</p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-white mb-6">Customer Experiences</h2>
          <div className="w-24 h-0.5 bg-gold-light mx-auto mb-6"></div>
          <p className="text-white/80">Don't just take our word for it. Here's what our valued customers have to say about their experiences with Al Jiwar Tayeb.</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto scroll-reveal">
          {/* Mobile carousel controls */}
          <div className="flex justify-between items-center mb-8 md:hidden">
            <button 
              onClick={handlePrev} 
              aria-label="Previous reviews"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-gold-light' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext} 
              aria-label="Next reviews"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop carousel controls */}
          <div className="hidden md:flex justify-end space-x-2 mb-6">
            <button 
              onClick={handlePrev} 
              aria-label="Previous reviews"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNext} 
              aria-label="Next reviews"
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Reviews carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleReviews().map((review) => (
                <Card key={review.id} className="bg-white/10 backdrop-blur-md border-0 overflow-hidden shadow-lg">
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-4 right-4 h-10 w-10 text-white/10" />
                    
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating ? 'text-gold-light fill-gold-light' : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-white/60">{review.rating}.0</span>
                    </div>
                    
                    <p className="text-white/90 mb-4 line-clamp-4">{review.text}</p>
                    
                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-4">
                      <div>
                        <p className="font-medium text-white">{review.name}</p>
                        <p className="text-sm text-white/60">{review.date}</p>
                      </div>
                      <p className="text-xs text-white/60">{review.source}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Desktop pagination dots */}
          <div className="hidden md:flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-gold-light' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
