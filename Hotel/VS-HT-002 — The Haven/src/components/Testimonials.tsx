import React from 'react';
import { TESTIMONIALS_DATA } from '../data/hotelData';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 lg:py-36 bg-haven-cream/60 border-t border-haven-stone/20 relative"
      aria-label="Guest Reviews and Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
                Critique & Recollections
              </span>
            </div>
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
              Quiet Reflections
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center space-x-3 p-3 bg-white border border-haven-stone/30 self-start sm:self-auto">
            <div className="flex items-center text-haven-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="border-l border-haven-stone/20 pl-3">
              <span className="font-mono text-sm font-semibold text-haven-charcoal">4.98 / 5.0</span>
              <span className="block text-[10px] text-haven-stone-dark uppercase tracking-wider">
                180+ Verified Stays
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid: 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 border border-haven-stone/25 flex flex-col justify-between shadow-xs hover:border-haven-stone/60 transition-colors"
            >
              <div>
                {/* Source Badge & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-haven-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 bg-haven-cream text-haven-stone-dark border border-haven-stone/20">
                    {t.source}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif text-base sm:text-lg text-haven-charcoal leading-relaxed italic mb-6">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Author & Stay Details */}
              <div className="pt-4 border-t border-haven-stone/20 flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-haven-charcoal">{t.author}</p>
                  <p className="text-[11px] text-haven-stone-dark">{t.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-haven-olive block font-medium">
                    {t.roomStayed}
                  </span>
                  <span className="text-[10px] text-haven-stone-dark block">{t.stayDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
