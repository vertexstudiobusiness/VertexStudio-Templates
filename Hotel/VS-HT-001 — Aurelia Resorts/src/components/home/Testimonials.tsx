import React, { useState } from 'react';
import { TESTIMONIALS, RESORT_CONFIG } from '../../data/resortData';
import { Star, Quote, ChevronLeft, ChevronRight, Award, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#f7f4ee] text-[#143d34] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#937345] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Honored Reflections</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b251f] font-light tracking-tight leading-tight">
            Words From Our <br className="hidden sm:inline" />
            <span className="italic font-normal">Cherished Guests</span>
          </h2>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-[#fcfbf9] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#c5a880]/30 shadow-xl relative">
          <Quote className="w-16 h-16 text-[#c5a880]/20 absolute top-6 left-6 -z-0" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Stars */}
            <div className="flex space-x-1.5 text-[#dfbe85]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#dfbe85]" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0b251f] font-light italic leading-relaxed max-w-2xl">
              "{current.quote}"
            </p>

            {/* Guest Details */}
            <div className="pt-4 border-t border-[#c5a880]/20 w-full max-w-md">
              <div className="font-serif text-lg font-medium text-[#0b251f]">{current.guestName}</div>
              <div className="text-xs text-[#937345] font-sans mt-0.5">{current.guestLocation}</div>
              <div className="text-[11px] text-stone-500 font-sans mt-1.5 flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Stay at {current.villaStayed} • {current.stayDate}</span>
              </div>
            </div>

            {/* Slider navigation */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous review"
                className="p-3 rounded-full border border-[#c5a880]/40 hover:bg-[#c5a880]/15 text-[#0b251f] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === idx ? 'bg-[#937345] w-6' : 'bg-[#c5a880]/30'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next review"
                className="p-3 rounded-full border border-[#c5a880]/40 hover:bg-[#c5a880]/15 text-[#0b251f] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Global Accolades Strip */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#c5a880]/20">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-[#937345] font-sans mb-8">
            Global Distinctions & Industry Honors
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESORT_CONFIG.awards.map((award, i) => (
              <div
                key={i}
                className="bg-[#fcfbf9] p-6 rounded-2xl border border-[#c5a880]/20 text-center flex flex-col items-center justify-center space-y-2"
              >
                <Award className="w-6 h-6 text-[#937345]" />
                <h4 className="font-serif text-base font-semibold text-[#0b251f]">{award.title}</h4>
                <p className="text-xs text-stone-500 font-sans tracking-wider uppercase">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
