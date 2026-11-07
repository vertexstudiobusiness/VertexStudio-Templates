import React from 'react';
import { Calendar, Compass, Star, ChevronDown, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreStay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreStay }) => {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#061410]">
      {/* Background Cinematic Image with Eager Loading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=85"
          alt="Aurelia Resorts secluded infinity pool overlooking cliff and Arabian Sea"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms]"
        />
        {/* Multi-layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061410] via-[#061410]/55 to-[#061410]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#061410]/40 to-[#061410]/85" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c5a880]/40 text-[#dfbe85] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-sans mb-5 shadow-lg"
        >
          <Award className="w-3.5 h-3.5 text-[#dfbe85]" />
          <span>Private Coastal Sanctuary • South Goa</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fcfbf9] font-light tracking-tight leading-[1.08] max-w-4xl"
        >
          Escape Into <br className="hidden sm:inline" />
          <span className="italic font-normal gold-gradient-text">Extraordinary</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#f7f4ee]/85 font-sans font-light max-w-2xl leading-relaxed mx-auto px-2"
        >
          Where secluded cliffside villas embrace emerald coconut canopy and the endless horizon of the Arabian Sea. A tailored world of quiet splendor.
        </motion.p>

        {/* Action CTAs (Mobile-First, large touch targets) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none"
        >
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a880] via-[#dfbe85] to-[#c5a880] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#061410] font-sans text-xs sm:text-sm tracking-[0.18em] uppercase font-bold transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#c5a880]/30 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#061410]" />
            <span>Book Your Stay</span>
          </button>

          <button
            type="button"
            onClick={onExploreStay}
            className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#fcfbf9] border border-[#c5a880]/50 hover:border-[#dfbe85] font-sans text-xs sm:text-sm tracking-[0.18em] uppercase font-medium transition-all duration-300 backdrop-blur-sm active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#dfbe85]" />
            <span>Explore Accommodations</span>
          </button>
        </motion.div>

        {/* Prestigious Recognition Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/15 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-[#dacdbd] text-xs font-sans tracking-wider"
        >
          <div className="flex items-center space-x-2">
            <div className="flex text-[#dfbe85]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#dfbe85]" />
              ))}
            </div>
            <span>Five-Star International Luxury</span>
          </div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>Condé Nast Traveler Gold List 2025</div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>Prix Versailles Architectural Laureate</div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#availability-bar"
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('#availability-bar');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        aria-label="Scroll to Availability Search"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#dfbe85]/70 hover:text-[#dfbe85] transition-colors p-2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
