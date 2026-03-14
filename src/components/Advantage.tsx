export default function Advantage() {
  const advantages = [
    {
      icon: "fa-shield-alt",
      title: "RERA Compliant",
      description: "All projects registered under RERA for complete transparency and legal protection."
    },
    {
      icon: "fa-users",
      title: "500+ Happy Families",
      description: "Trusted by hundreds of satisfied customers who have invested in their dream plots."
    },
    {
      icon: "fa-award",
      title: "Award Winning",
      description: "Recognized for excellence in real estate development and customer service."
    },
    {
      icon: "fa-chart-line",
      title: "High Appreciation",
      description: "15-20% annual appreciation on your investment, outperforming market averages."
    }
  ];

  const highlights = [
    { value: "15-20%", label: "Annual Appreciation", margin: "" },
    { value: "₹1000", label: "Starting Price/sq.ft", margin: "mt-8" },
    { value: "0%", label: "Interest on EMI", margin: "" },
    { value: "100%", label: "Legal Compliance", margin: "mt-8" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-forest to-deep-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-6">
              <i className="fas fa-star mr-2"></i>Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">The Ritiesh <span className="gold-gradient-text">Advantage</span></h2>
            <p className="text-gray-300 mb-8 text-lg">With a commitment to transparency, quality, and customer satisfaction, we have established ourselves as one of Nagpur&apos;s most trusted real estate developers.</p>
            
            <div className="space-y-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${adv.icon} text-yellow-400 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{adv.title}</h4>
                    <p className="text-gray-400 text-sm">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className={`glass-card p-8 rounded-2xl text-center reveal ${item.margin}`}>
                <div className="text-3xl md:text-5xl font-bold gold-gradient-text mb-2">{item.value}</div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
