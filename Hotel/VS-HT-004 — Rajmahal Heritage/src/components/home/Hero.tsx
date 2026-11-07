import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Calendar,
  Compass,
  Play,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  X,
  MapPin,
  Clock
} from 'lucide-react';

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=85",
    alt: "Rajmahal Heritage illuminated palace courtyard and arches at dusk",
    title: "Imperial Sandstone Facade",
    subtitle: "Built 1742 AD • Rajasthan"
  },
  {
    url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=85",
    alt: "Rajput cusped arches overlooking marble fountain courtyards",
    title: "The Zenana Marble Courtyard",
    subtitle: "Living Heritage of Mewar"
  },
  {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85",
    alt: "Restored royal stepwell pool pavilion surrounded by gardens",
    title: "Baori Stepwell Sanctuary",
    subtitle: "Turquoise Waters & Chhatris"
  }
];

export const Hero: React.FC = () => {
  const { openBookingModal } = useHotel();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-walnut-950 text-ivory-50 pt-20 pb-20 sm:pt-28 sm:pb-32"
    >
      {/* Background Image Carousel with Responsive Focal Points */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={img.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[8000ms]`}
          style={{ willChange: 'transform, opacity' }}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          {/* Multi-layered cinematic gradient: guarantees razor-sharp text contrast on all mobile screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-walnut-950 via-walnut-950/65 to-walnut-950/75" />
          <div className="absolute inset-0 bg-maroon-950/35 mix-blend-multiply" />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(20,10,8,0.85)]" />
        </div>
      ))}

      {/* Decorative Corner Filigree (Responsive sizing, hidden on ultra-compact 375px to save space) */}
      <div className="hidden sm:block absolute top-24 left-4 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-l-2 border-gold-400/30 pointer-events-none z-10" />
      <div className="hidden sm:block absolute top-24 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-r-2 border-gold-400/30 pointer-events-none z-10" />

      {/* Main Content Container (Mobile-First 375px to 1440px) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Top Heritage Badge: Compact & beautiful on 375px */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-walnut-900/85 border border-gold-400/50 backdrop-blur-md mb-3 sm:mb-6 shadow-royal-gold">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-200 font-semibold truncate">
            Rajputana Palace Sanctuary • Estd 1742
          </span>
          <div className="flex items-center gap-0.5 text-gold-400 pl-1 border-l border-gold-400/30 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-gold-400 text-gold-400" />
            ))}
          </div>
        </div>

        {/* Primary Headline: Mobile optimized line-height and letter-spacing */}
        <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.12] sm:leading-[1.08] text-ivory-50 max-w-4xl drop-shadow-md px-1">
          <span className="block">A Royal Stay.</span>
          <span className="block gold-gradient-text italic font-serif font-normal mt-1 sm:mt-2">
            A Timeless Story.
          </span>
        </h1>

        {/* Traditional Filigree Divider */}
        <div className="max-w-[200px] xs:max-w-xs sm:max-w-md w-full my-2.5 sm:my-5">
          <RoyalDivider variant="gold" />
        </div>

        {/* Subtitle: High legibility on mobile font sizes */}
        <p className="font-serif text-xs xs:text-sm sm:text-lg text-ivory-200/90 max-w-xl font-light leading-relaxed tracking-wide drop-shadow mb-5 sm:mb-8 px-2">
          Experience the regal grandeur of 18th-century Rajasthan—where cusped sandstone arches, lotus courtyards, and dedicated royal butler service welcome you like royalty.
        </p>

        {/* Action CTAs: Mobile-First Stacking with touch feedback */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-6 sm:mb-8 max-w-md sm:max-w-none">
          <button
            onClick={() => openBookingModal()}
            className="group relative px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 active:scale-[0.98] text-walnut-950 font-serif font-bold uppercase tracking-[0.18em] text-xs sm:text-sm shadow-royal-gold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Calendar className="w-4 h-4 text-walnut-950 group-hover:scale-110 transition-transform shrink-0" />
            <span>Reserve Your Stay</span>
          </button>

          <a
            href="#rooms"
            className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-walnut-900/80 active:bg-walnut-800 border border-gold-400/40 text-gold-200 font-serif uppercase tracking-[0.18em] text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Compass className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Explore Chambers</span>
          </a>

          <button
            onClick={() => setIsVirtualTourOpen(true)}
            className="px-4 py-2.5 sm:py-4 text-sandstone-300 hover:text-ivory-50 text-xs sm:text-sm font-serif tracking-wider flex items-center justify-center gap-2 transition min-h-[44px]"
          >
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0">
              <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-gold-400 ml-0.5" />
            </span>
            <span className="underline decoration-gold-400/40 underline-offset-4">Watch Palace Tour</span>
          </button>
        </div>

        {/* Slide Indicators: Mobile-Optimized */}
        <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm pt-3 sm:pt-4 border-t border-gold-400/20 text-xs text-sandstone-300">
          <button
            onClick={prevSlide}
            className="p-2 text-gold-300/80 hover:text-gold-200 active:scale-95 transition"
            aria-label="Previous palace image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex flex-col items-center px-2 truncate">
            <span className="text-[10px] sm:text-[11px] font-serif text-gold-300 uppercase tracking-widest font-semibold truncate">
              {HERO_IMAGES[currentSlide].title}
            </span>
            <span className="text-[9px] text-sandstone-400 tracking-wider truncate">
              {HERO_IMAGES[currentSlide].subtitle}
            </span>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 text-gold-300/80 hover:text-gold-200 active:scale-95 transition"
            aria-label="Next palace image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      {isVirtualTourOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-walnut-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-walnut-900 border border-gold-400/50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-3 sm:p-4 bg-maroon-950 flex items-center justify-between border-b border-gold-400/30">
              <h3 className="font-display text-sm sm:text-base text-gold-300 font-bold truncate">
                Cinematic Palace Film • Rajmahal Heritage
              </h3>
              <button
                onClick={() => setIsVirtualTourOpen(false)}
                className="p-1.5 text-sandstone-300 hover:text-white rounded-full"
                aria-label="Close tour"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
                alt="Palace Tour Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-walnut-950/60">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold-500/95 flex items-center justify-center shadow-royal-gold mb-2.5">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 text-walnut-950 fill-walnut-950 ml-0.5" />
                </div>
                <h4 className="font-display text-lg sm:text-xl text-ivory-50 font-bold">
                  The Living Heritage Film
                </h4>
                <p className="text-[11px] sm:text-xs text-sandstone-200 max-w-sm mt-1 font-serif">
                  A visual tour of the Zenana Chowk, Thikri mirror inlays, and sunset over the Baori lotus pool.
                </p>
                <button
                  onClick={() => setIsVirtualTourOpen(false)}
                  className="mt-3 sm:mt-4 px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-gold-500 text-walnut-950 font-serif text-xs font-bold uppercase tracking-wider"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
