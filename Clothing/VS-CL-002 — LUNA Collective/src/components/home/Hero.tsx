import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Gem } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Hero: React.FC = () => {
  const { setActiveCategory, setActiveView } = useShop();

  const handleShopNewArrivals = () => {
    setActiveCategory('all');
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreFestive = () => {
    setActiveCategory('ethnic-wear');
    setActiveView('festive');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5]">
      {/* Hero Visual Container */}
      <div className="relative min-h-[85vh] sm:min-h-[82vh] lg:min-h-[88vh] flex items-end sm:items-center">
        {/* Editorial Background Image with Responsive Positioning */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=85"
            alt="LUNA Collective Autumn/Festive Editorial Campaign"
            className="w-full h-full object-cover object-top sm:object-center filter brightness-95"
            fetchPriority="high"
          />
          {/* Subtle multi-layer gradient for maximum text contrast across mobile & desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#261B14]/90 via-[#261B14]/40 to-transparent sm:bg-gradient-to-r sm:from-[#261B14]/85 sm:via-[#261B14]/45 sm:to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
          <div className="max-w-xl text-left">
            {/* Seasonal Tag */}
            <div className="inline-flex items-center gap-2 bg-[#FAF8F5]/15 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1 text-white text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Sparkles className="w-3 h-3 text-[#D4A59A]" />
              <span>Autumn / Festive Collection '26</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-[1.12] tracking-wide mb-3 sm:mb-4">
              Made to Feel <br />
              <span className="italic font-normal text-[#F7EBE8]">Beautiful.</span>
            </h1>

            {/* Brand Philosophy Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[#FAF8F5]/85 leading-relaxed font-light mb-6 sm:mb-8 max-w-md">
              Contemporary silhouettes sculpted in pure European linen, handspun Chanderi silk, and artisanal textures for the modern woman.
            </p>

            {/* Shopping Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md">
              <button
                onClick={handleShopNewArrivals}
                className="bg-[#FAF8F5] hover:bg-[#E8D3CE] text-[#261B14] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-4 h-4 text-[#261B14] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleExploreFestive}
                className="bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/40 backdrop-blur-sm px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Explore Noor Festive</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Banner */}
      <div className="bg-[#FAF8F5] border-b border-[#D8CFBE]/60 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-around sm:justify-between flex-wrap gap-3 text-[#5A4232] text-xs">
          <div className="flex items-center gap-2">
            <Gem className="w-4 h-4 text-[#B77B6E] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium">100% Pure Natural Fibres</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#B77B6E] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium">Complimentary India Delivery</span>
          </div>

          <div className="flex items-center gap-2 hidden md:flex">
            <ShieldCheck className="w-4 h-4 text-[#B77B6E] shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium">Consciously Made in Small Batches</span>
          </div>
        </div>
      </div>
    </section>
  );
};
