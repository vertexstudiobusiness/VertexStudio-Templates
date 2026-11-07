import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowDown, Award, Compass, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { cafeConfig } = useCart();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] sm:min-h-screen flex items-center justify-center pt-24 pb-12 sm:pb-16 overflow-hidden bg-coffee-950"
    >
      {/* Background Photography with Warm Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1920&auto=format&fit=crop"
          alt="Artisanal pour over coffee brewing in ceramic dripper"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.12]"
          loading="eager"
          decoding="async"
        />
        {/* Editorial Gradients & Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/70 to-coffee-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/90 via-transparent to-coffee-950/80" />
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        
        {/* Subtle Warm Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-caramel-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-coffee-900/90 border border-caramel-500/30 text-caramel-300 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-md mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-copper-400" />
            <span className="tracking-wide">Direct-Trade Single Origins • SCA 86+ Certified</span>
          </motion.div>

          {/* Headline - Carefully tuned with fluid clamp sizing for 375px mobile viewports */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-50 leading-[1.15] sm:leading-[1.12]"
          >
            Coffee, Crafted <br className="hidden xs:inline" />
            <span className="italic font-normal bg-gradient-to-r from-caramel-400 via-copper-400 to-caramel-300 bg-clip-text text-transparent">
              With Character.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-ivory-200/90 leading-relaxed max-w-2xl px-2 font-light"
          >
            Shade-grown at high altitudes in the Western Ghats, roasted in micro-batches with scientific precision, and extracted by dedicated baristas for coffee purists.
          </motion.p>

          {/* CTAs - Mobile-first stacked on small screens, row on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
          >
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => handleScrollTo('#menu')}
              className="min-h-[48px] px-7 py-3.5 rounded-full bg-gradient-to-r from-caramel-500 via-copper-500 to-caramel-600 text-coffee-950 font-semibold text-sm tracking-wider uppercase hover:brightness-110 active:scale-98 transition-all shadow-xl shadow-caramel-500/25 flex items-center justify-center gap-2"
            >
              <span>Explore Our Menu</span>
              <ArrowDown className="w-4 h-4 text-coffee-950" />
            </button>

            {/* Secondary CTA: WhatsApp */}
            <a
              href={`https://wa.me/${cafeConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${cafeConfig.cafeName}, I would like to place a quick coffee order for pickup / takeaway!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-coffee-900/90 hover:bg-coffee-850 border border-caramel-500/40 text-ivory-100 font-semibold text-sm tracking-wider uppercase backdrop-blur-md hover:border-caramel-400 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order on WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-2"
          >
            <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Compass className="w-5 h-5 text-caramel-400 mb-1.5" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">1,450m</span>
              <span className="text-[11px] sm:text-xs text-coffee-300 font-medium">Western Ghats Terroir</span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Award className="w-5 h-5 text-copper-400 mb-1.5" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">86+ SCA</span>
              <span className="text-[11px] sm:text-xs text-coffee-300 font-medium">Specialty Grade Cupped</span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <Flame className="w-5 h-5 text-caramel-400 mb-1.5" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">Small Batch</span>
              <span className="text-[11px] sm:text-xs text-coffee-300 font-medium">Fluid-Bed Air Roasted</span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="flex items-center text-amber-400 text-sm mb-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">4.9 / 5.0</span>
              <span className="text-[11px] sm:text-xs text-coffee-300 font-medium">1,800+ Verified Purists</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
