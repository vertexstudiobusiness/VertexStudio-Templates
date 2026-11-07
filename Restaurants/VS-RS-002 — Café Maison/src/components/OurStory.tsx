import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Clock } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#F7F3EB] border-t border-[#EFE8DC] relative overflow-hidden">
      {/* Decorative subtle texture circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D8DFD6]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Asymmetrical Image Composition (Left Column) */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-md mx-auto lg:max-w-none pb-8 sm:pb-12">
              {/* Primary High Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-[85%] aspect-[3/4] overflow-hidden rounded-sm border-2 sm:border-4 border-[#FBF8F3] shadow-xl sm:shadow-2xl bg-[#EFE8DC]"
              >
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
                  alt="Interior of Café Maison with sunlight and travertine counters"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Secondary Overlapping Image (Bottom Right Offset, carefully bounded) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="absolute bottom-0 right-0 w-[58%] aspect-square overflow-hidden rounded-sm border-2 sm:border-4 border-[#FBF8F3] shadow-2xl bg-[#EFE8DC]"
              >
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85"
                  alt="Laminated French butter croissants cooling on rack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-white text-left">
                  <p className="text-[9px] uppercase tracking-widest text-[#EFE8DC]/80">The Kitchen</p>
                  <p className="font-serif text-xs sm:text-sm">81 Layers of AOP Butter</p>
                </div>
              </motion.div>

              {/* Heritage Badge */}
              <div className="absolute -top-3 left-4 sm:left-6 bg-[#291F18] text-[#F7F3EB] px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm shadow-md flex items-center gap-1.5 sm:gap-2">
                <Compass className="w-3.5 h-3.5 text-[#CBB99F]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium">Paris × København</span>
              </div>
            </div>
          </div>

          {/* Editorial Narrative (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#4F5E4B] font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#B86749]" />
              <span>Our Heritage</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1C1511] leading-tight">
              A confluence of French culinary discipline and Nordic calm.
            </h2>

            <p className="text-[#5C473A] text-sm sm:text-base leading-relaxed font-light">
              Café Maison was born out of a shared obsession. When pastry chef Éloise Dubois met roaster Soren Lindqvist in Copenhagen, they noticed that most cafés either served brilliant coffee with indifferent pastries, or exquisite bakes alongside dark, scorched roasts.
            </p>

            <p className="text-[#5C473A] text-sm sm:text-base leading-relaxed font-light">
              We asked: <em>What if both were treated with equal devotion?</em>
            </p>

            {/* Asymmetrical Quote Box */}
            <div className="p-4 sm:p-6 bg-[#FBF8F3] border-l-2 border-[#4F5E4B] rounded-r-sm space-y-2">
              <p className="font-serif italic text-base sm:text-xl text-[#1C1511] leading-relaxed">
                "True luxury in gastronomy isn't extravagant ornament; it is the time spent waiting for sourdough to rise, butter to chill, and water to drip gently through coffee grounds."
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#7E6251] font-medium">
                — Soren Lindqvist, Head of Coffee
              </p>
            </div>

            {/* Timeline & Craft Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4 border-t border-[#EFE8DC]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F5E4B] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>3-Day Cold Ferment</span>
                </div>
                <p className="text-xs text-[#5C473A] leading-relaxed">
                  Allows wild yeasts to develop complex aromatic esters and digestible, airy texture.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4F5E4B] uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Direct Farm Partnerships</span>
                </div>
                <p className="text-xs text-[#5C473A] leading-relaxed">
                  We purchase directly from family-run estates with full price transparency above Fairtrade.
                </p>
              </div>
            </div>

            {/* Founders Signature Block */}
            <div className="pt-2 flex items-center gap-3 sm:gap-4">
              <div className="font-serif italic text-lg sm:text-xl text-[#291F18]">
                Éloise & Soren
              </div>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#7E6251]">
                Founders, Café Maison
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
