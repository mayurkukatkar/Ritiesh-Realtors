export default function Testimonials() {
  const testimonials = [
    {
      text: "As a first-time buyer, I was nervous. But Ritiesh Realtors guided me through every step. The plot at Nimba is exactly what I wanted - peaceful yet connected.",
      initial: "M",
      name: "Meena Agrawal",
      role: "Teacher • Nimba"
    },
    {
      text: "Investing in Vijayalakshmi Nagari was the best decision. The NA sanctioned plots with clear titles gave me complete peace of mind.",
      initial: "R",
      name: "Rajesh Sharma",
      role: "Business Owner"
    },
    {
      text: "The location at Temasna is perfect for our dream home. Wide roads, green surroundings, and proximity to the city center. The EMI option made it affordable.",
      initial: "P",
      name: "Priya Deshmukh",
      role: "IT Professional • Temasna"
    },
    {
      text: "I purchased two plots at Sai Samruddhi for investment. The appreciation has been excellent. The team is very professional and transparent.",
      initial: "S",
      name: "Sunil Patil",
      role: "Doctor"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-deep-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-comments mr-2"></i>Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Client <span className="gold-gradient-text">Stories</span></h2>
          <p className="text-gray-400 text-lg">Hear from our satisfied customers who have invested in their dream plots</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card glass-card p-6 rounded-2xl reveal">
              <p className="text-gray-300 mb-6 relative z-10">&quot;{test.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-estate-dark font-bold text-lg">
                  {test.initial}
                </div>
                <div>
                  <h4 className="font-bold">{test.name}</h4>
                  <p className="text-xs text-gray-400">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
