import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/testimonialsData';
import { Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#4F5E4B] font-semibold">
            <Award className="w-3.5 h-3.5 text-[#B86749]" />
            <span>Accolades & Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
            Loved by Connoisseurs & Morning Seekers
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B86749] mx-auto mt-4" />
          <p className="text-[#5C473A] text-sm sm:text-base leading-relaxed font-light pt-2">
            The greatest compliments are quiet mornings spent reading here, accompanied by the gentle clink of ceramic spoons.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#F7F3EB] p-8 sm:p-10 rounded-sm border border-[#EFE8DC] flex flex-col justify-between text-left relative group hover:border-[#4F5E4B]/40 transition-colors shadow-sm"
            >
              <div>
                {/* Star Ratings & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#B86749]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#CBB99F]/60" />
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-lg sm:text-xl text-[#291F18] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#EFE8DC] flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FBF8F3] shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#1C1511] leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#7E6251] font-sans mt-0.5">
                    {t.role}
                    {t.publication && (
                      <span className="text-[#4F5E4B] font-medium"> • {t.publication}</span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Badges Strip */}
        <div className="mt-16 pt-10 border-t border-[#EFE8DC] flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-serif text-lg sm:text-xl tracking-wider text-[#5C473A]">
            The European Epicure
          </span>
          <span className="font-serif text-lg sm:text-xl tracking-wider text-[#5C473A]">
            Nordic Bread Guild
          </span>
          <span className="font-serif text-lg sm:text-xl tracking-wider text-[#5C473A]">
            Terroir Quarterly
          </span>
          <span className="font-serif text-lg sm:text-xl tracking-wider text-[#5C473A]">
            Architectural Digest Café Edition
          </span>
        </div>

      </div>
    </section>
  );
};
