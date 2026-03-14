'use client';

import { useState } from 'react';

const faqData = [
  {
    question: "Are the plots NA sanctioned?",
    answer: "Yes, all our plots at both Vijayalakshmi Nagari (Nimba) and Sai Samruddhi (Temasna) are fully NA (Non-Agricultural) sanctioned with proper approvals from the competent authority. Pandharkawada plots are NMRDA sanctioned."
  },
  {
    question: "What is the starting price per sq.ft?",
    answer: "Our premium residential plots start from ₹1,000/sq.ft at Vijayalakshmi Nagari (Nimba), ₹1,300/sq.ft at Sai Samruddhi (Temasna), and ₹1,600/sq.ft at Pandharkawada. The exact pricing depends on the plot size, location within the layout, and facing."
  },
  {
    question: "Is EMI option available?",
    answer: "Yes, we offer a flexible EMI plan of up to 36 months. You can pay a down payment and the remaining amount in easy monthly installments without any bank involvement or interest charges."
  },
  {
    question: "What documents will I receive after purchase?",
    answer: "You will receive the registered Sale Deed, NA Order copy, 7/12 extract, property card, layout approval, and all other relevant legal documents ensuring clear and marketable title."
  },
  {
    question: "Can I visit the site before purchasing?",
    answer: "Absolutely! We encourage all prospective buyers to visit the site. You can schedule a free site visit by filling out our contact form or calling us directly. We provide transportation from Nagpur city."
  },
  {
    question: "What amenities are available at the site?",
    answer: "All sites feature wide internal roads (12m & 9m), electricity connection, water supply (borewell + municipal), plot boundary markers, street lights, garden areas, and gated entry with boundary walls."
  },
  {
    question: "Is immediate possession available?",
    answer: "Yes, all plots are ready for immediate possession. You can start construction right after completing the purchase formalities and registration."
  },
  {
    question: "What is the distance from Nagpur city center?",
    answer: "Nimba (Vijayalakshmi Nagari) is approximately 15 km from the city center with excellent connectivity via Wardha Road. Temasna (Sai Samruddhi) is about 12 km from the city center. Pandharkawada is approximately 120 km from Nagpur."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-deep-forest">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm mb-4">
            <i className="fas fa-question-circle mr-2"></i>FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Frequently Asked <span className="gold-gradient-text">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="glass-card rounded-xl overflow-hidden reveal">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-all" 
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
                  className={`px-6 text-gray-300 text-sm transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
