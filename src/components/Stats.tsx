export default function Stats() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "3", label: "Prime Locations" },
    { number: "100%", label: "Legal Clearance" },
    { number: "0%", label: "Interest EMI" },
    { number: "NA", label: "Sanctioned" },
    { number: "NATP", label: "Sanctioned" },
    { number: "NMRDA", label: "Sanctioned", large: true },
    { number: "RL", label: "Plots" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto -mt-20 relative z-30 px-6">
      {stats.map((stat, index) => (
        <div key={index} className="glass-card p-6 rounded-2xl text-center reveal">
          <div className={`stat-number gold-gradient-text mb-2 ${stat.large ? 'text-4xl' : ''}`}>
            {stat.number}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
