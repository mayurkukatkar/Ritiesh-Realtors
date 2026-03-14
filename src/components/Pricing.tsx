'use client';

export default function Pricing() {
  const projects = [
    {
      id: "vijayalakshmi",
      title: "Vijayalakshmi Nagari",
      location: "Nimba Location",
      badge: "NA Sanctioned",
      badgeColor: "green",
      price: "₹1,000",
      features: [
        "Starting from 1000 sq.ft plots",
        "Gated Layout with Boundary Wall",
        "Clear Title & Documentation",
        "12m & 9m Internal CC Roads",
        "Electricity & Water Supply",
        "Immediate Possession",
        "36 Months EMI (0% Interest)",
        "Free Site Visit with Transport"
      ],
      galleryFolder: "nimba"
    },
    {
      id: "sai-samruddhi",
      title: "Sai Samruddhi",
      location: "Temasna Location",
      badge: "NA Sanctioned",
      badgeColor: "green",
      price: "₹1,300",
      popular: true,
      features: [
        "Starting from 1300 sq.ft plots",
        "Gated Layout with Boundary Wall",
        "12m & 9m Internal CC Roads",
        "Electricity & Water Supply",
        "Immediate Possession",
        "Clear Title & Documentation",
        "36 Months EMI (0% Interest)",
        "Free Site Visit with Transport"
      ],
      galleryFolder: "temasna"
    },
    {
      id: "pandharkawada",
      title: "Pandharkawada",
      location: "Yavatmal District",
      badge: "NMRDA Sanctioned",
      badgeColor: "blue",
      price: "₹1,600",
      features: [
        "Starting from 1600 sq.ft plots",
        "Gated Layout with Boundary Wall",
        "Clear Title & Documentation",
        "12m & 9m Internal CC Roads",
        "Immediate Possession",
        "Electricity & Water Supply",
        "36 Months EMI (0% Interest)",
        "Free Site Visit with Transport"
      ],
      galleryFolder: "pandharkawada"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-forest to-deep-forest relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-tag mr-2"></i>Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Transparent <span className="gold-gradient-text">Pricing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">No hidden charges. What you see is what you pay. Choose from our premium NA sanctioned plots.</p>
        </div>

        {/* 3 Column Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`property-card p-8 rounded-3xl relative reveal ${project.popular ? 'overflow-hidden transform lg:scale-105 lg:-translate-y-4 border-2 border-yellow-500' : ''}`}
            >
              {project.popular && <div className="popular-badge">POPULAR</div>}
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400">{project.location}</p>
                </div>
                <span className={`px-4 py-1 bg-${project.badgeColor}-500/10 border border-${project.badgeColor}-500/30 text-${project.badgeColor}-400 rounded-full text-sm font-semibold whitespace-nowrap`}>
                  {project.badge}
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-3xl md:text-5xl font-bold gold-gradient-text">{project.price}</span>
                <span className="text-gray-400">/sq.ft</span>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <i className="fas fa-check text-green-400"></i> {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => alert('Gallery feature will be integrated soon!')} 
                className="w-full mb-3 py-3 rounded-xl border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <i className="fas fa-images"></i>View Gallery
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
                className="btn-gold w-full py-4 rounded-xl text-estate-dark font-bold"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8">* Prices may vary based on plot size, location within layout, and facing. Contact us for exact pricing.</p>
      </div>
    </section>
  );
}
