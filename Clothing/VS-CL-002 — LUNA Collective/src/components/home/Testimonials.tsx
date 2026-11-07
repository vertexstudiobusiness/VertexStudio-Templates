import React from 'react';
import { Star, Quote, CheckCircle2, HeartHandshake } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] mb-1">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Patron Experiences</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
            Words From Our Circle
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2 text-[#B77B6E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#B77B6E]" />
            ))}
            <span className="text-xs font-semibold text-[#261B14] ml-2">4.9 / 5</span>
            <span className="text-xs text-[#5A4232] font-light">· Across 340+ Verified Patrons</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F6F3EE] rounded-2xl p-5 sm:p-6 border border-[#D8CFBE]/60 flex flex-col justify-between hover:border-[#B77B6E]/40 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-[#B77B6E]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B77B6E]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D8CFBE]" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#3D2B1F] leading-relaxed font-light mb-4 italic">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Garment */}
              <div className="pt-3 border-t border-[#D8CFBE]/50">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#D8CFBE]"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-[#261B14] truncate">
                        {t.name}
                      </span>
                      <span title="Verified Patron" className="inline-flex">
                        <CheckCircle2 className="w-3 h-3 text-[#1E8E42] shrink-0" />
                      </span>
                    </div>
                    <span className="text-[10px] text-[#5A4232] block">
                      {t.location}
                    </span>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#D8CFBE]/30 flex items-center justify-between text-[10px] text-[#B77B6E]">
                  <span className="truncate max-w-[160px] font-medium">
                    Purchased: {t.purchasedItem}
                  </span>
                  <span className="text-[#5A4232]/60">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
