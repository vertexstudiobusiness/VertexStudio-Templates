import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Hero: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleShopClick = () => {
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCampaignClick = () => {
    const el = document.getElementById('editorial-campaign');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-end sm:items-center justify-center overflow-hidden bg-[#0c0b0a] pt-24 pb-12 sm:py-28">
      {/* Background Editorial Visuals with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Specific Portrait Crop */}
          <source
            media="(max-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&h=1200&q=85"
          />
          {/* Tablet & Desktop Wide Editorial */}
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=85"
            alt="ÉLAN Studio Autumn Winter Editorial Collection"
            className="w-full h-full object-cover object-center scale-[1.03] animate-fade-in filter brightness-[0.78] contrast-[1.08]"
          />
        </picture>

        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/40 to-[#0c0b0a]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a]/70 via-transparent to-[#0c0b0a]/70 hidden sm:block" />
        <div className="absolute inset-0 bg-[#12100d]/25 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full text-center sm:text-left flex flex-col justify-end min-h-[75vh] sm:min-h-0">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Seasonal Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141311]/80 border border-[#c5a880]/30 backdrop-blur-md mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 text-[#c5a880]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#faf7f2] font-semibold">
              COLLECTION NO. XII • AUTUMN / WINTER
            </span>
          </motion.div>

          {/* High-Contrast Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#faf7f2] font-normal leading-[1.06] mb-4 sm:mb-6 editorial-shadow"
          >
            Elegance in <br className="hidden sm:inline" />
            <span className="italic font-light text-[#ded6c9] font-serif">Every Detail</span>
          </motion.h1>

          {/* Editorial Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-sm sm:text-base md:text-lg text-[#ded6c9]/90 font-light max-w-xl mx-auto sm:mx-0 leading-relaxed mb-8 sm:mb-10 font-sans tracking-wide"
          >
            A contemporary dialogue between Indian artisanal handlooms and Savile Row precision.
            Hand-spun Varanasi silks, wild Tussar, and double-faced Himalayan cashmere.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={handleShopClick}
              className="py-4 px-8 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] hover:text-[#0c0b0a] transition-all duration-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.24em] flex items-center justify-center gap-3 group shadow-xl active:scale-[0.98]"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={handleCampaignClick}
              className="py-4 px-8 bg-[#141311]/70 border border-[#c5a880]/40 text-[#faf7f2] hover:border-[#faf7f2] hover:bg-[#1f1d19] transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-[0.24em] backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Explore Campaign</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Editorial Details Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#948b7e] gap-4"
        >
          <div className="flex items-center gap-6">
            <span>Bespoke Tailoring</span>
            <span className="text-[#4a443c]">•</span>
            <span>Varanasi Pit-Looms</span>
            <span className="text-[#4a443c]">•</span>
            <span>Zero Plastic Atelier</span>
          </div>

          <button
            type="button"
            onClick={handleShopClick}
            className="hidden md:flex items-center gap-2 text-[#c5a880] hover:text-[#faf7f2] transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
