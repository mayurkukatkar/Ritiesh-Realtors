export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-32" style={{ minHeight: '100vh' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/20 via-deep-forest/40 to-deep-forest/85 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Modern Luxury Home"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trust Badge */}
      <div className="relative z-20 flex justify-center pt-[100px]">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm animate-pulse">
          <i className="fas fa-award"></i>
          <span className="uppercase tracking-wider font-medium">Trusted by 500+ Happy Families</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-[20px] md:pt-[100px]">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
          <span className="text-white">Own Your Piece of</span><br />
          <span className="gold-gradient-text">Nagpur&apos;s Future</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Premium residential plots starting from <span className="gold-gradient-text">₹1000rs per/sq.ft.</span> Experience luxury living with modern amenities,
          strategic location, and serene surroundings at Nagpur&apos;s most promising address.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#properties" className="btn-gold px-8 py-4 rounded-full text-estate-dark font-bold text-lg flex items-center gap-2">
            Explore Layouts <i className="fas fa-arrow-right"></i>
          </a>
          <a href="tel:+919404227998" className="px-8 py-4 rounded-full border-2 border-yellow-500/50 text-yellow-400 font-semibold text-lg hover:bg-yellow-500/10 transition-all flex items-center gap-2">
            <i className="fas fa-phone"></i> Call Now
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-8 scroll-indicator">
          <a href="#properties" className="text-yellow-400 text-2xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
