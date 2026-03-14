export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:left-6 md:right-auto z-50 flex flex-col gap-2 md:gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919404227998?text=Hi%20Ritiesh%20Realtors%2C%20I%20am%20interested%20in%20your%20plots.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
      >
        <i className="fab fa-whatsapp text-white text-xl md:text-2xl"></i>
        <span className="hidden md:block absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919404227998"
        aria-label="Call Us"
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
      >
        <i className="fas fa-phone-alt text-estate-dark text-lg md:text-xl"></i>
        <span className="hidden md:block absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
}
