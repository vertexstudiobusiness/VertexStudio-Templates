import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-coffee-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coffee-900 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Community Voices</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            Loved by Coffee Purists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
            Read what daily patrons, specialty baristas, and culinary critics say about their visits to Brew & Co.
          </p>
        </div>

        {/* Featured Testimonial Hero Slider (Great for mobile & desktop) */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-coffee-800 shadow-2xl relative">
            <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-caramel-500/20 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-coffee-300">
                    5.0 Verified Score
                  </span>
                </div>

                {/* Review Quote */}
                <p className="font-serif text-base sm:text-xl lg:text-2xl text-ivory-100 font-normal leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].review}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-coffee-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={TESTIMONIALS[currentIndex].avatar}
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-caramel-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-base text-ivory-50">
                          {TESTIMONIALS[currentIndex].name}
                        </span>
                        {TESTIMONIALS[currentIndex].verifiedVisit && (
                          <span title="Verified Regular Patron">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-coffee-300 block">
                        {TESTIMONIALS[currentIndex].role}
                      </span>
                    </div>
                  </div>

                  {/* Favorite Drink Tag */}
                  <div className="flex items-center gap-2 self-start sm:self-auto bg-coffee-900 px-3 py-1.5 rounded-xl border border-coffee-750">
                    <span className="text-[10px] uppercase font-mono text-caramel-400">Go-To:</span>
                    <span className="text-xs text-ivory-200 font-medium">{TESTIMONIALS[currentIndex].favoriteItem}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots & Buttons */}
            <div className="mt-8 pt-4 border-t border-coffee-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'w-8 bg-caramel-500' : 'w-2 bg-coffee-700 hover:bg-coffee-600'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-coffee-850 hover:bg-coffee-800 text-ivory-100 border border-coffee-700 active:scale-95 transition-all"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-coffee-850 hover:bg-coffee-800 text-ivory-100 border border-coffee-700 active:scale-95 transition-all"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
