import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Coffee, Sparkles, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-20 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Ambient Tones */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#EFE8DC]/60 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 -left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#D8DFD6]/40 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
          >
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE8DC]/90 border border-[#E2D7C5] text-[#4F5E4B] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#B86749] shrink-0" />
              <span>Parisian Pâtisserie & Copenhagen Roast</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-[38px] leading-[1.08] sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.02em] text-[#1C1511]">
              A Little Pause, <br />
              <span className="italic font-normal text-[#5C473A] font-serif">A Lot of</span>{' '}
              <span className="underline decoration-[#4F5E4B]/40 decoration-1 underline-offset-4 sm:underline-offset-8">
                Pleasure
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5C473A] max-w-xl leading-relaxed font-light">
              An independent neighborhood refuge celebrating single-origin micro-lot roasts,
              81-layer French AOP butter viennoiserie, and the timeless art of unhurried mornings.
            </p>

            {/* Action CTAs (Touch friendly on mobile, min-h-[48px]) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB] text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium rounded-sm shadow-md active:scale-[0.99] transition-all group"
              >
                <span>Explore Our Menu</span>
                <ArrowDownRight className="w-4 h-4 text-[#CBB99F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#291F18]/40 active:border-[#291F18] text-[#291F18] active:bg-[#291F18]/5 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#4F5E4B]" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Mobile Hero Visual Snippet (Visible on Mobile between CTA and Stats) */}
            <div className="block lg:hidden pt-3">
              <div className="relative rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-lg border-2 border-[#EFE8DC] bg-[#EFE8DC] aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85"
                  alt="Barista extracting single origin espresso"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#EFE8DC]/80 block font-medium">Daily Extraction</span>
                    <span className="font-serif text-sm text-white">Ethically Sourced Ethiopian Yirgacheffe</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#4F5E4B] text-white text-[9px] uppercase tracking-wider font-semibold rounded-sm">
                    Single Origin
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Highlights Stats Row */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#EFE8DC] max-w-lg">
              <div className="text-left">
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#291F18]">94.5</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7E6251] font-medium mt-0.5 leading-tight">
                  Cupping Score
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#291F18]">72h</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7E6251] font-medium mt-0.5 leading-tight">
                  Lamination
                </p>
              </div>
              <div className="text-left">
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#291F18]">100%</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#7E6251] font-medium mt-0.5 leading-tight">
                  AOP Butter
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Right Editorial Visual Cluster (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-t-full overflow-hidden shadow-2xl border-[6px] border-[#F7F3EB] bg-[#EFE8DC] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
                  alt="Barista brewing single-origin coffee at Café Maison"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#EFE8DC]/80">
                    Daily Ritual
                  </p>
                  <p className="font-serif text-lg text-white">
                    Espresso extracted at 9 bars over custom brass
                  </p>
                </div>
              </div>

              {/* Overlapping Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#FBF8F3] p-3.5 rounded-sm shadow-xl border border-[#EFE8DC] max-w-[210px] text-left">
                <div className="w-full h-24 overflow-hidden rounded-sm mb-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                    alt="Cardamom Bun"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#4F5E4B] font-semibold">Freshly Baked</p>
                    <p className="font-serif text-sm font-medium text-[#291F18] leading-tight">Kardemummabulle</p>
                  </div>
                  <span className="font-serif text-sm font-semibold text-[#B86749]">₹280</span>
                </div>
              </div>

              {/* Stamp */}
              <div className="absolute -top-5 -right-4 sm:-right-6 w-24 h-24 rounded-full bg-[#4F5E4B] text-[#F7F3EB] p-2 flex flex-col items-center justify-center text-center shadow-lg transform rotate-6 border-2 border-[#FBF8F3]">
                <Coffee className="w-4 h-4 mb-0.5 text-[#EFE8DC]" />
                <span className="text-[8px] uppercase tracking-[0.15em] font-medium">Single Origin</span>
                <span className="font-serif text-xs font-bold leading-none mt-0.5">Est. 2021</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
