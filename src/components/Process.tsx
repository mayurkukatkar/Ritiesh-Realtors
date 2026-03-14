export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Enquire & Connect",
      description: "Fill our enquiry form or call us. Our team will understand your requirements and budget."
    },
    {
      number: "02",
      title: "Site Visit",
      description: "We arrange a free site visit with transportation. See the plots, roads, and surroundings."
    },
    {
      number: "03",
      title: "Choose Plot",
      description: "Select from available plots based on size, facing, and location within the layout."
    },
    {
      number: "04",
      title: "Documentation",
      description: "Complete KYC and legal verification. We provide all documents for your review."
    },
    {
      number: "05",
      title: "Payment",
      description: "Pay lump sum or choose our 36-month EMI plan. Complete registration."
    },
    {
      number: "06",
      title: "Possession",
      description: "Get immediate possession and start building your dream home."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-forest to-deep-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-route mr-2"></i>How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Simple <span className="gold-gradient-text">Process</span></h2>
          <p className="text-gray-400 text-lg">Own your dream plot in just 6 easy steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="process-step glass-card p-6 rounded-2xl ml-4 reveal animate-fade-in fade-in transition-all">
              <div className="step-number">{step.number}</div>
              <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
