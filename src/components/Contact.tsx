'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/actions/sendContactEmail';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    message: ''
  });

  const [toast, setToast] = useState<{ show: boolean, type: 'success' | 'error', message: string }>({ 
    show: false, 
    type: 'success', 
    message: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.location) {
      setToast({ show: true, type: 'error', message: 'Please fill all required fields.' });
      setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 3000);
      return;
    }

    if (formData.phone.length < 10) {
      setToast({ show: true, type: 'error', message: 'Please enter a valid phone number.' });
      setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData object to send to the Server Action
      const submitData = new FormData(e.target as HTMLFormElement);
      
      const result = await sendContactEmail(submitData);

      if (result.success) {
        // Success State
        setToast({ show: true, type: 'success', message: 'Message sent successfully. We will contact you soon.' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          interest: '',
          message: ''
        });
      } else {
        // Handle Server Action error
        setToast({ show: true, type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (error) {
       console.error(error);
       setToast({ show: true, type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-forest to-deep-forest relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/95 to-deep-forest/90 z-10"></div>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Contact Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-envelope mr-2"></i>Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Begin Your <span className="gold-gradient-text">Journey</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Contact Ritiesh Realtors today for exclusive site visits and premium pricing</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="glass-card p-6 md:p-8 rounded-3xl reveal">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <i className="fas fa-headset text-yellow-400"></i>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-phone text-yellow-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us Anytime</p>
                  <p className="text-2xl font-bold">+91 94042 27998</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <i className="fab fa-whatsapp text-yellow-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-xl font-bold">+91 94042 27998</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope text-yellow-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-xl font-bold">riteshrealtors@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-yellow-400 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Office Address</p>
                  <p className="text-xl font-bold">Shop No 12, Vaastu Square Apartment</p>
                  <p className="text-sm text-gray-500">Pipla Phata Bus Stop, Hudkedhwar Road, Nagpur</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-gray-400 mb-1">Office Hours</p>
              <p className="font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-gray-500">Sunday: By Appointment</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-estate-dark transition-all text-yellow-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-estate-dark transition-all text-yellow-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-estate-dark transition-all text-yellow-400">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-forest rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-estate-dark transition-all text-yellow-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8 rounded-3xl reveal">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Schedule Site Visit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot for spam protection */}
              <input type="text" id="honeypot" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required 
                       className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" />
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required 
                       className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" />
              </div>
              
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required 
                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" />
              
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number (10 digits)" required 
                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors" />
              
              <select id="location" name="location" value={formData.location} onChange={handleChange} required 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-gray-300 focus:border-yellow-400 focus:outline-none transition-colors">
                <option value="" className="bg-forest">Select Location</option>
                <option value="nimba" className="bg-forest">Vijayalakshmi Nagari - Nimba</option>
                <option value="temasna" className="bg-forest">Sai Samruddhi - Temasna</option>
                <option value="pandharkawada" className="bg-forest">Pandharkawada</option>
                <option value="wadad" className="bg-forest">Green City-1 - Wadad</option>
              </select>
              
              <select id="interest" name="interest" value={formData.interest} onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-gray-300 focus:border-yellow-400 focus:outline-none transition-colors">
                <option value="" className="bg-forest">Interested In</option>
                <option value="plot" className="bg-forest">Plot Purchase</option>
                <option value="investment" className="bg-forest">Investment</option>
                <option value="sitevisit" className="bg-forest">Site Visit</option>
                <option value="emi" className="bg-forest">EMI Information</option>
              </select>
              
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message (Optional)" rows={3} 
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/30 text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition-colors"></textarea>
              
              <button type="submit" disabled={isSubmitting} className="btn-gold w-full py-4 rounded-xl text-estate-dark font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100">
                <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                {!isSubmitting && <i className="fas fa-paper-plane"></i>}
                {isSubmitting && <i className="fas fa-circle-notch fa-spin"></i>}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                <i className="fas fa-lock mr-1"></i> Your information is secure and will only be used to contact you.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-6 right-6 bg-forest border ${toast.type === 'success' ? 'border-green-500/50' : 'border-red-500/50'} text-white px-6 py-4 rounded-xl shadow-2xl transition-all duration-300 z-[100] flex items-center gap-3 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
      >
        <i className={`fas ${toast.type === 'success' ? 'fa-check-circle text-green-400' : 'fa-exclamation-circle text-red-400'} text-xl`}></i>
        <div>
          <div className="font-semibold">{toast.type === 'success' ? 'Success' : 'Error'}</div>
          <div className="text-sm text-gray-400">{toast.message}</div>
        </div>
      </div>

    </section>
  );
}
