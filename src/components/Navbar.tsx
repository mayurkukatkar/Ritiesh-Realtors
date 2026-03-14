'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-deep-forest/90 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={scrollToTop}>
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <i className="fas fa-building text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold gold-gradient-text">Ritiesh Realtors</h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Premium Real Estates</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#properties" className="text-gray-300 hover:text-yellow-400 transition-colors">Properties</a>
            <a href="#amenities" className="text-gray-300 hover:text-yellow-400 transition-colors">Amenities</a>
            <a href="#emi-calculator" className="text-gray-300 hover:text-yellow-400 transition-colors">EMI Calculator</a>
            <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</a>
            <a href="#contact" className="btn-gold px-6 py-2 rounded-full text-estate-dark font-semibold">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-yellow-400 text-2xl focus:outline-none">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-forest border-t border-yellow-500/20`}>
        <div className="px-6 py-4 space-y-3">
          <a href="#properties" className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors" onClick={closeMobileMenu}>Properties</a>
          <a href="#amenities" className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors" onClick={closeMobileMenu}>Amenities</a>
          <a href="#emi-calculator" className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors" onClick={closeMobileMenu}>EMI Calculator</a>
          <a href="#testimonials" className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors" onClick={closeMobileMenu}>Testimonials</a>
          <a href="#faq" className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors" onClick={closeMobileMenu}>FAQ</a>
          <a href="#contact" className="block btn-gold px-6 py-2 rounded-full text-center mt-4 text-estate-dark font-semibold" onClick={closeMobileMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
