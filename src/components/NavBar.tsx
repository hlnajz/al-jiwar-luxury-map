
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <h1 className="text-burgundy-dark font-primary text-2xl sm:text-3xl font-bold">
              <span className="text-gold-dark">Al Jiwar</span> Tayeb
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-foreground hover:text-gold-dark transition-colors">Home</a>
          <a href="#products" className="font-medium text-foreground hover:text-gold-dark transition-colors">Collections</a>
          <a href="#reviews" className="font-medium text-foreground hover:text-gold-dark transition-colors">Reviews</a>
          <a href="#contact" className="font-medium text-foreground hover:text-gold-dark transition-colors">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-gold-dark">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-gold-dark">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button className="bg-gold-dark hover:bg-gold text-white">
            Shop Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium text-foreground hover:text-gold-dark transition-colors py-2 border-b border-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="font-medium text-foreground hover:text-gold-dark transition-colors py-2 border-b border-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </a>
            <a 
              href="#reviews" 
              className="font-medium text-foreground hover:text-gold-dark transition-colors py-2 border-b border-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="font-medium text-foreground hover:text-gold-dark transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button className="bg-gold-dark hover:bg-gold text-white w-full mt-2">
                Shop Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
