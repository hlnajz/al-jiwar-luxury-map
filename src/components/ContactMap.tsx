
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize a simple map placeholder
    // In a real application, you would integrate with Google Maps or similar service
    if (mapRef.current) {
      const mapImage = document.createElement('img');
      mapImage.src = 'https://maps.googleapis.com/maps/api/staticmap?center=25.2048,55.2708&zoom=13&size=800x400&markers=color:gold|25.2048,55.2708&key=YOUR_API_KEY';
      mapImage.alt = 'Store location map';
      mapImage.className = 'w-full h-full object-cover rounded-lg';
      
      // Add placeholder image instead of actual API call
      const mapPlaceholder = document.createElement('div');
      mapPlaceholder.className = 'relative w-full h-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center';
      mapPlaceholder.style.backgroundImage = "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3')";
      mapPlaceholder.style.backgroundSize = 'cover';
      mapPlaceholder.style.backgroundPosition = 'center';
      
      // Add an overlay
      const overlay = document.createElement('div');
      overlay.className = 'absolute inset-0 bg-black/30';
      mapPlaceholder.appendChild(overlay);
      
      // Add a marker
      const marker = document.createElement('div');
      marker.className = 'absolute z-10 map-marker-pulse';
      marker.innerHTML = `<div class="bg-gold-dark p-2 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      </div>`;
      mapPlaceholder.appendChild(marker);
      
      // Add a text
      const text = document.createElement('div');
      text.className = 'absolute z-10 bottom-4 left-4 text-white font-semibold';
      text.textContent = 'Al Jiwar Tayeb - Dubai Mall';
      mapPlaceholder.appendChild(text);
      
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(mapPlaceholder);
    }
    
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
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 arabesque-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <p className="font-arabic text-gold-dark text-xl mb-2">تواصل معنا</p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-burgundy-dark mb-6">Visit Our Boutique</h2>
          <div className="w-24 h-0.5 bg-gold-dark mx-auto mb-6"></div>
          <p className="text-muted-foreground">Experience our exclusive fragrances in person. Our fragrance experts are ready to guide you to your perfect scent.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Card */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-md border-0 overflow-hidden scroll-reveal">
            <CardContent className="p-8">
              <h3 className="font-primary text-2xl font-semibold text-burgundy-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold-light/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+971 4 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-light/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@aljiwartayeb.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-light/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">The Dubai Mall, Ground Floor, <br />Near Fountain Entrance, Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-light/20 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">Sunday - Thursday: 10:00 AM - 10:00 PM<br />Friday - Saturday: 10:00 AM - 12:00 AM</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-8 bg-gold-dark hover:bg-gold text-white button-hover">
                Get Directions <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Map */}
          <div className="lg:col-span-2 scroll-reveal">
            <div ref={mapRef} className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
