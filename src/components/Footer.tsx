export default function Footer() {
  return (
    <footer className="bg-deep-forest border-t border-yellow-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                <i className="fas fa-building text-white"></i>
              </div>
              <span className="text-2xl font-serif font-bold gold-gradient-text">Ritiesh Realtors</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">Premium NA sanctioned residential plots at Nimba, Temasna, and Pandharkawada, Nagpur. Clear titles, easy EMI options, and immediate possession. Your trusted partner in real estate investment.</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs">NA Sanctioned</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs">Clear Title</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-xs">RERA Registered</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#properties" className="hover:text-white transition-colors">Our Properties</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Site Amenities</a></li>
              <li><a href="#emi-calculator" className="hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt mt-1 text-yellow-400"></i>
                <span>Shop No 12, Vaastu Square Apartment<br/>Pipla Phata Bus Stop, Hudkedhwar Road, Nagpur</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-yellow-400"></i>
                <span>+91 94042 27998</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-yellow-400"></i>
                <span>riteshrealtors@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ritiesh Realtors. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
