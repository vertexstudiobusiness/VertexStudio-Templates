import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, CAFE_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-sand-100 border-t border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-ambercrema" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-600 font-normal">
            Everything you need to know about our seating, Wi-Fi speed, acoustic rules, and café credits.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-sand-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-charcoal-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-sand-100 flex items-center justify-center text-charcoal-700 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-charcoal-900 text-sand-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-sand-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-2xl bg-sand-200/80 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-charcoal-900 text-sm">Have a unique requirement or group booking?</p>
            <p className="text-xs text-charcoal-600">Our community manager is available on WhatsApp daily from 7:30 AM.</p>
          </div>
          <a
            href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20The%20Daily%20Grind,%20I%20have%20a%20specific%20question%20about%20booking%20seats.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-charcoal-900 text-sand-50 text-xs font-semibold hover:bg-charcoal-800 transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-ambercrema" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
