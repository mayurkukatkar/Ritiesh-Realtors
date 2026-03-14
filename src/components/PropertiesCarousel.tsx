'use client';

import { useState, useEffect } from 'react';

const properties = [
  {
    id: 1,
    title: "Vijayalakshmi Nagari",
    location: "Nimba Location",
    image: "https://i.ibb.co/Rp7BzC56/6.jpg",
    price: "₹1,000",
    highlights: ["NA Sanctioned", "Immediate Possession", "Clear Title", "36 Months EMI (0%)"]
  },
  {
    id: 2,
    title: "Sai Samruddhi",
    location: "Temasna Location",
    image: "https://i.ibb.co/XkWXmmXZ/4.jpg",
    price: "₹1,300",
    popular: true,
    highlights: ["NA Sanctioned", "Gated Community", "Main Road Touch", "36 Months EMI (0%)"]
  },
  {
    id: 3,
    title: "Pandharkawada Project",
    location: "Yavatmal District",
    image: "https://i.ibb.co/jk0dmx39/1.jpg",
    price: "₹1,600",
    highlights: ["NMRDA Approved", "Ready Possession", "Corner Plots Available", "36 Months EMI (0%)"]
  }
];

export default function PropertiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to determine card classes based on relative position
  const getCardClass = (index: number) => {
    if (index === activeIndex) return 'active';
    if (index === (activeIndex - 1 + properties.length) % properties.length) return 'prev';
    if (index === (activeIndex + 1) % properties.length) return 'next';
    return 'hidden';
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % properties.length);
    setIsExpanded(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + properties.length) % properties.length);
    setIsExpanded(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="properties" className="py-24 bg-gradient-to-b from-deep-forest to-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-home mr-2"></i>Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Our Premium <span className="gold-gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Swipe through our exclusive NA sanctioned residential plots at prime locations</p>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-container reveal">
          <div className="carousel-track h-full min-h-[500px]">
            {properties.map((property, index) => {
              const cardStatus = getCardClass(index);
              return (
                <div 
                  key={property.id}
                  className={`carousel-card ${cardStatus} ${cardStatus === 'active' && isExpanded ? 'expanded' : ''}`}
                  onClick={() => {
                    if (cardStatus === 'active') setIsExpanded(!isExpanded);
                    else if (cardStatus === 'prev') prevSlide();
                    else if (cardStatus === 'next') nextSlide();
                  }}
                >
                  {property.popular && <div className="popular-badge z-20">POPULAR</div>}
                  <img src={property.image} alt={property.title} className="carousel-card-image" />
                  <div className="carousel-card-content">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-1">{property.title}</h3>
                      <p className="text-yellow-400 text-sm font-medium mb-3"><i className="fas fa-map-marker-alt mr-2"></i>{property.location}</p>
                      
                      {/* Expanded Content Details */}
                      <div className={`transition-all duration-300 ${cardStatus === 'active' && isExpanded ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                          {property.highlights.map((highlight, idx) => (
                            <li key={idx}><i className="fas fa-check text-green-400 mr-2"></i>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Starting From</p>
                        <div className="text-xl font-bold gold-gradient-text">{property.price}<span className="text-sm text-gray-400 font-normal">/sq.ft</span></div>
                      </div>
                      <button 
                        className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center hover:bg-yellow-500 hover:text-estate-dark transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Buttons */}
          <button className="carousel-nav-btn prev-btn" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-nav-btn next-btn" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Dots */}
          <div className="carousel-dots">
            {properties.map((_, idx) => (
              <div 
                key={idx} 
                className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
