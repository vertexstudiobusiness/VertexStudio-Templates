import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/hotelData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-haven-ivory border-t border-haven-stone/20 relative"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-haven-stone-dark font-medium mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-haven-olive" />
            <span>Essential Guidance</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-haven-charcoal font-light">
            Stay Curations & Policies
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-haven-stone/25 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-haven-cream"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-haven-charcoal font-medium">
                    {item.question}
                  </span>
                  <span className="text-haven-stone-dark shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-[13px] text-haven-charcoal-light/85 font-sans leading-relaxed border-t border-haven-stone/15 pt-3 animate-fade-in">
                    {item.answer}
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
