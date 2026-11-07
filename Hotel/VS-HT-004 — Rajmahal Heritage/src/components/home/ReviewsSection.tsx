import React, { useState } from 'react';
import { TESTIMONIALS, PRESS_ACCOLADES } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Quote,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-walnut-950 text-ivory-50 relative overflow-hidden">
      {/* Subtle lattice pattern */}
      <div className="absolute inset-0 bg-jaali-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accolades Banner Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-walnut-900/80 border border-gold-400/30 mb-16 shadow-royal">
          {PRESS_ACCOLADES.map((accolade, i) => (
            <div key={i} className="text-center py-2 px-3 border-r last:border-r-0 border-gold-400/20">
              <Award className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
              <p className="font-display font-bold text-xs sm:text-sm text-gold-300">
                {accolade.award}
              </p>
              <p className="text-[10px] text-sandstone-300 font-serif mt-0.5 line-clamp-1">
                {accolade.title}
              </p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-walnut-900 border border-gold-400/40 text-gold-300 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Quote className="w-3.5 h-3.5 text-gold-400" />
            <span>Honoured Patrons</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 font-bold tracking-tight">
            Reflections of Royalty
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-walnut-900/90 to-walnut-950 border border-gold-400/40 rounded-3xl p-6 sm:p-12 shadow-2xl relative royal-border-gold">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-1 text-gold-400">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400" />
              ))}
            </div>
          </div>

          <p className="font-serif text-base sm:text-2xl text-ivory-100 font-light italic text-center leading-relaxed max-w-2xl mx-auto">
            "{activeTestimonial.quote}"
          </p>

          <div className="text-center mt-6 pt-6 border-t border-gold-400/20">
            <h4 className="font-display text-lg text-gold-300 font-bold">
              {activeTestimonial.author}
            </h4>
            <p className="text-xs text-sandstone-300 font-serif mt-0.5">
              {activeTestimonial.role} • {activeTestimonial.location}
            </p>
            <p className="text-[11px] text-sandstone-400 font-sans mt-1">
              Stayed in {activeTestimonial.suiteType} ({activeTestimonial.stayDate})
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-walnut-800">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-walnut-800 hover:bg-gold-500 hover:text-walnut-950 text-gold-300 border border-gold-400/40 transition"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIdx === idx ? 'w-8 bg-gold-400' : 'bg-walnut-700 hover:bg-sandstone-400'
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-walnut-800 hover:bg-gold-500 hover:text-walnut-950 text-gold-300 border border-gold-400/40 transition"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

