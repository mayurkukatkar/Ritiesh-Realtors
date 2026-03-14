'use client';

import { useState } from 'react';

const amenities = [
  // Infrastructure
  {
    id: 1,
    category: "infrastructure",
    image: "https://i.ibb.co/mFqTVjBC/wide-road.jpg",
    icon: "fa-road",
    title: "Wide Internal Roads",
    description: "12m & 9m wide concrete roads with proper drainage system for smooth connectivity throughout the layout.",
    highlight: "CC Road Construction"
  },
  {
    id: 2,
    category: "infrastructure",
    image: "https://i.ibb.co/278g2YzJ/streetlight.jpg",
    icon: "fa-lightbulb",
    title: "Street Lighting",
    description: "Solar-powered LED street lights along all internal roads for energy-efficient illumination and safety.",
    highlight: "Solar LED Systems"
  },
  {
    id: 3,
    category: "infrastructure",
    image: "https://i.ibb.co/5Xh608mN/Clear-Plot-Marking.jpg",
    icon: "fa-map-pin",
    title: "Clear Plot Marking",
    description: "Professional boundary marking with concrete pillars and numbering for easy identification.",
    highlight: "GPS Surveyed Boundaries"
  },
  // Utilities
  {
    id: 4,
    category: "utilities",
    image: "https://i.ibb.co/99Fh7rQT/Water-Supply.jpg",
    icon: "fa-water",
    title: "Water Supply",
    description: "Dedicated borewell with overhead tank and provision for municipal water connection to each plot.",
    highlight: "24/7 Water Availability"
  },
  {
    id: 5,
    category: "utilities",
    image: "https://i.ibb.co/21W9hFKb/Electricity.jpg",
    icon: "fa-bolt",
    title: "Electricity",
    description: "Underground electrical cabling with transformer and meter room. Ready connection for all plots.",
    highlight: "Underground Cabling"
  },
  // Security
  {
    id: 6,
    category: "security",
    image: "https://www.proptia.com/wp-content/uploads/2023/06/pexels-erik-mclean-7635126.jpg",
    icon: "fa-video",
    title: "24/7 CCTV Surveillance",
    description: "High-definition CCTV cameras at all entry points and common areas with central monitoring.",
    highlight: "Night Vision Cameras"
  },
  {
    id: 7,
    category: "security",
    image: "https://assets.site-static.com/userFiles/2398/image/gated-community-security.jpg",
    icon: "fa-shield-alt",
    title: "Gated Security",
    description: "Manned security gate with boom barriers and visitor management system for controlled access.",
    highlight: "Trained Security Personnel"
  },
  // Lifestyle
  {
    id: 8,
    category: "lifestyle",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2025/09/23133702/Untitled-design-72-compressed.jpg",
    icon: "fa-building",
    title: "Premium Clubhouse",
    description: "State-of-the-art clubhouse with indoor games, banquet hall, and community gathering spaces.",
    highlight: "Air Conditioned Hall"
  },
  {
    id: 9,
    category: "lifestyle",
    image: "https://camdenparkwestchase.com/wp-content/uploads/2025/04/77.jpg",
    icon: "fa-tree",
    title: "Landscape Gardens",
    description: "Beautifully landscaped gardens with walking paths, gazebo, and meditation areas for relaxation.",
    highlight: "Theme Gardens"
  }
];

const additionalFeatures = [
  "Rainwater Harvesting",
  "Sewage Treatment Plant",
  "Fire Fighting System",
  "Amphitheatre",
  "Yoga & Meditation Deck",
  "Senior Citizen Corner",
  "Pet Park",
  "EV Charging Points"
];

export default function Amenities() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAmenities = activeFilter === 'all' 
    ? amenities 
    : amenities.filter(a => a.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Amenities' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'utilities', label: 'Utilities' },
    { id: 'security', label: 'Security' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];

  return (
    <section id="amenities" className="py-12 md:py-24 bg-gradient-to-b from-forest to-deep-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-gem mr-2"></i>Premium Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">World-Class <span className="gold-gradient-text">Amenities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Experience luxury living with our comprehensive range of modern amenities designed for your comfort and convenience</p>
        </div>

        {/* Amenity Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`amenity-tab ${activeFilter === filter.id ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => (
            <div key={amenity.id} className="amenity-card group rounded-2xl overflow-hidden glass-card border border-yellow-500/20 animate-fade-in fade-in">
              <div className="relative h-48 overflow-hidden">
                <img src={amenity.image} alt={amenity.title} className="amenity-image w-full h-full object-cover" />
                <div className="absolute inset-0 amenity-overlay"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-2">
                    <i className={`fas ${amenity.icon} text-estate-dark text-xl`}></i>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{amenity.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{amenity.description}</p>
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <i className="fas fa-check-circle"></i>
                  <span>{amenity.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features List */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-yellow-500/20 reveal">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional <span className="gold-gradient-text">Features</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <i className="fas fa-check-circle text-yellow-400 text-xl"></i>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
