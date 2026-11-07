import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/hotelData';
import type { Experience, Currency } from '../types/hotel';
import { formatPrice } from '../utils/formatters';
import { Clock, Calendar, Check, MessageSquare } from 'lucide-react';

interface ExperiencesProps {
  currency: Currency;
  onOpenBooking: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ currency, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Curated Encounters' },
    { id: 'culinary', label: 'Culinary' },
    { id: 'wellness', label: 'Wellness & Spa' },
    { id: 'discoveries', label: 'Heritage Treks' },
    { id: 'artisanal', label: 'Masterclass' },
  ];

  const filteredExperiences =
    activeCategory === 'all'
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((e) => e.category === activeCategory);

  const handleWhatsAppExperience = (exp: Experience) => {
    const phone = '919876543210';
    const message = `Hello The Haven Concierge,\n\nI would like to enquire about reserving the experience:\n• ${exp.title} (${exp.subtitle})\n• Duration: ${exp.duration}\n• Pricing: ${exp.priceINR ? formatPrice(exp.priceINR, 'INR') + ' per guest' : 'Complimentary with select suites'}\n\nPlease let me know availability. Thank you!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="experiences"
      className="py-20 sm:py-28 lg:py-36 bg-haven-cream/40 border-y border-haven-stone/20 relative"
      aria-label="Curated Experiences"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
                Curated Immersions
              </span>
            </div>
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
              Moments Beyond Time
            </h2>
            <p className="mt-3 text-xs xs:text-sm sm:text-base text-haven-stone-dark leading-relaxed font-sans">
              Designed to connect you with the rhythms of Rajasthan’s wilderness, ancient crafts, and sensory rejuvenation.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="self-start sm:self-auto text-xs tracking-[0.16em] uppercase text-haven-olive hover:text-haven-charcoal underline underline-offset-4 font-medium transition-colors"
          >
            Request Bespoke Itinerary →
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase transition-all duration-200 whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-haven-charcoal text-haven-ivory border-haven-charcoal'
                  : 'bg-white text-haven-charcoal/80 border-haven-stone/30 hover:border-haven-stone'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-haven-stone/30 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-haven-sand">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-haven-charcoal/85 backdrop-blur-md text-[10px] tracking-[0.18em] uppercase text-haven-ivory font-medium">
                    {exp.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-7 space-y-4">
                  <div className="flex items-center space-x-4 text-[11px] text-haven-stone-dark">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-haven-olive" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-haven-olive" />
                      <span>{exp.timing}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-haven-charcoal font-medium">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-haven-olive italic mt-0.5">{exp.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-haven-charcoal-light/80 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* What is included */}
                  <div className="pt-2 border-t border-haven-stone/20 space-y-1.5">
                    <p className="text-[10px] uppercase tracking-wider text-haven-stone-dark font-medium">
                      Inclusions
                    </p>
                    <div className="space-y-1">
                      {exp.included.map((inc, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2 text-[11px] text-haven-charcoal-light"
                        >
                          <Check className="w-3 h-3 text-haven-olive shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action / Price Bar */}
              <div className="p-5 sm:p-7 pt-0 border-t border-haven-stone/15 mt-4 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase text-haven-stone-dark tracking-wider block">
                    Investment
                  </span>
                  <span className="font-mono text-base font-semibold text-haven-charcoal">
                    {exp.priceINR ? formatPrice(exp.priceINR, currency) : 'Included'}
                  </span>
                  <span className="text-[10px] text-haven-stone-dark block">per guest</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleWhatsAppExperience(exp)}
                  className="h-10 px-4 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-[11px] tracking-[0.16em] uppercase font-medium flex items-center space-x-1.5 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
