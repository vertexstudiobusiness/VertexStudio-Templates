import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onDiscoverClick: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onOpenBooking }) => {
  return (
    <section
      id="stay"
      className="relative min-h-[100svh] w-full flex items-end sm:items-center justify-center overflow-hidden bg-haven-charcoal"
      aria-label="Welcome to The Haven"
    >
      {/* Background Hero Image with Optimized Responsive Focal Cropping */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85"
          />
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=90"
            alt="The Haven luxury boutique architecture overlooking quiet water reflection pools and Aravalli hills"
            className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Multi-layered cinematic gradient for superior text contrast on mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-haven-charcoal via-haven-charcoal/55 to-haven-charcoal/30 sm:via-haven-charcoal/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-haven-charcoal/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 pt-24 pb-12 sm:pb-20 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-haven-ivory/10 backdrop-blur-md border border-white/15 text-haven-ivory mb-4 sm:mb-6 animate-fade-in">
          <Sparkles className="w-3 h-3 text-haven-gold" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans font-medium text-haven-sand">
            Aravalli Foothills • 14 Private Keys
          </span>
        </div>

        {/* Main Headline - Mobile-first scale */}
        <h1 className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-haven-ivory font-light tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl mb-4 sm:mb-6 text-balance">
          Find Your Own Kind of Somewhere
        </h1>

        {/* Narrative Subtitle */}
        <p className="font-sans text-xs xs:text-sm sm:text-base md:text-lg text-haven-stone-light/90 font-light max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 text-pretty">
          {HOTEL_INFO.subheading}
        </p>

        {/* Action Buttons - Touch optimized for mobile (min 48px height) */}
        <div className="w-full sm:w-auto flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <button
            type="button"
            onClick={onDiscoverClick}
            className="h-12 sm:h-13 px-6 sm:px-8 bg-haven-ivory text-haven-charcoal text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 active:scale-[0.98]"
          >
            <span>Discover Your Stay</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="h-12 sm:h-13 px-6 sm:px-8 bg-white/10 hover:bg-white/20 text-haven-ivory backdrop-blur-md border border-white/25 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.98]"
          >
            <span>Check Availability</span>
          </button>
        </div>

        {/* Mobile-Friendly Curated Highlights Bar */}
        <div className="w-full max-w-3xl pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-center text-haven-ivory/90">
          <div className="px-1 sm:px-2">
            <span className="block font-serif text-base sm:text-2xl text-haven-sand font-light">14</span>
            <span className="block text-[9px] sm:text-xs tracking-[0.14em] uppercase text-haven-stone-light/80">
              Secluded Keys
            </span>
          </div>
          <div className="px-1 sm:px-2 border-x border-white/10">
            <span className="block font-serif text-base sm:text-2xl text-haven-sand font-light">42</span>
            <span className="block text-[9px] sm:text-xs tracking-[0.14em] uppercase text-haven-stone-light/80">
              Wild Acres
            </span>
          </div>
          <div className="px-1 sm:px-2">
            <span className="block font-serif text-base sm:text-2xl text-haven-sand font-light">100%</span>
            <span className="block text-[9px] sm:text-xs tracking-[0.14em] uppercase text-haven-stone-light/80">
              Native Stone
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={onDiscoverClick}
          className="mt-6 sm:mt-10 p-2 text-haven-stone-light/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down to availability and philosophy"
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
};
