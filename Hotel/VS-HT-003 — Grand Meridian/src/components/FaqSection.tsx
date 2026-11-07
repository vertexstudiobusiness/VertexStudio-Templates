import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/hotelData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>CORPORATE TRAVEL INTELLIGENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Frequently Answered Inquiries
          </h2>
          <p className="text-sm text-charcoal-600 mt-2 font-light">
            Everything you need to know about corporate billing, GST credit, airport logistics, and executive privileges.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-charcoal-200 rounded-2xl overflow-hidden transition-all duration-200 bg-charcoal-50/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full touch-target text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-navy-950 hover:text-gold-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full bg-white border border-charcoal-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-500 text-navy-950 border-gold-500' : 'text-charcoal-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed border-t border-charcoal-200/40 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
