
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  arabicName: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Amber",
    arabicName: "العنبر الملكي",
    description: "A rich and sophisticated blend with notes of amber, musk, and sandalwood.",
    price: 185,
    image: "https://images.unsplash.com/photo-1595425970377-995fdcf4a411?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Midnight Oud",
    arabicName: "عود منتصف الليل",
    description: "Dark and mysterious with a heart of agarwood and oriental spices.",
    price: 210,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Desert Rose",
    arabicName: "وردة الصحراء",
    description: "A delicate floral aroma with notes of Damask rose and precious saffron.",
    price: 165,
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    name: "Sultan's Musk",
    arabicName: "مسك السلطان",
    description: "An opulent musk fragrance with hints of vanilla and exotic woods.",
    price: 195,
    image: "https://images.unsplash.com/photo-1592945403407-9cffee9a3c3f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const ProductShowcase = () => {
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
    <section id="products" className="py-24 bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 arabesque-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <p className="font-arabic text-gold-dark text-xl mb-2">مجموعتنا الحصرية</p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-burgundy-dark mb-6">Our Signature Collection</h2>
          <div className="w-24 h-0.5 bg-gold-dark mx-auto mb-6"></div>
          <p className="text-muted-foreground">Discover our handcrafted fragrances that embody the essence of Arabian luxury and tradition. Each perfume tells a unique story.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={product.id} className="product-card border-0 overflow-hidden bg-white/80 backdrop-blur-sm shadow-md scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <p className="absolute bottom-4 left-4 font-arabic text-lg text-white/90">{product.arabicName}</p>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-primary text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="font-primary text-gold-dark font-semibold">${product.price}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <Button variant="outline" className="w-full border-gold hover:bg-gold-light hover:text-gold-dark transition-colors">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center scroll-reveal">
          <Button className="bg-gold-dark hover:bg-gold text-white px-8 py-6 button-hover">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
