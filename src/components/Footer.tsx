
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-primary text-2xl font-bold mb-4">
              <span className="text-gold-light">Al Jiwar</span> Tayeb
            </h2>
            <p className="text-white/70 mb-6">Discover the essence of Arabian luxury with our handcrafted fragrance collection.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-primary text-lg font-semibold mb-4 text-gold-light">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">All Fragrances</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Exclusive Collections</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-primary text-lg font-semibold mb-4 text-gold-light">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Our Heritage</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Store Locations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-primary text-lg font-semibold mb-4 text-gold-light">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Subscribe form */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-primary text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-4">Be the first to know about new collections and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light text-white placeholder:text-white/50 flex-grow" 
              />
              <button className="bg-gold-dark hover:bg-gold text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Al Jiwar Tayeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
