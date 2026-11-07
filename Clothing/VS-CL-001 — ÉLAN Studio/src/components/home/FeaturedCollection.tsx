import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, ShieldCheck, Feather } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  const { setActiveCategory, setSelectedProduct, products } = useShop();

  const featuredPiece1 = products.find((p) => p.id === 'elan-01') || products[0];
  const featuredPiece2 = products.find((p) => p.id === 'elan-07') || products[6];

  const handleExplore = () => {
    setActiveCategory('Dresses');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured-collection" className="py-16 sm:py-24 bg-[#0e0d0b] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#c5a880] font-semibold mb-2">
            AUTUMN / WINTER 2026 CAPSULE
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#faf7f2] font-normal tracking-tight mb-4">
            The Royal Minimalist
          </h2>
          <p className="text-sm sm:text-base text-[#ded6c9]/80 font-light leading-relaxed">
            Stripped of superfluous ornament, this capsule investigates purity of silhouette.
            Unembellished Varanasi silks cut with sculptural precision.
          </p>
        </div>

        {/* Featured Look Grid: Asymmetrical Luxury Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Large Editorial Image & Look Tag */}
          <div className="lg:col-span-7 relative group overflow-hidden">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-[#161412]">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1400&q=85"
                alt="ÉLAN Studio Royal Minimalist Editorial"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tagged Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-[#0c0b0a]/90 backdrop-blur-md p-4 sm:p-5 border border-[#c5a880]/30">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                  RUNWAY LOOK 04
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#faf7f2] font-normal">
                  Mulberry Silk Column Gown
                </h3>
                <p className="text-xs text-[#ded6c9]/80 mt-1 mb-3">
                  Woven on Varanasi pit-looms with fluted trailing hemline.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#faf7f2]">₹34,500</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(featuredPiece1)}
                    className="text-xs uppercase tracking-widest text-[#c5a880] hover:text-white flex items-center gap-1.5 font-medium underline underline-offset-4"
                  >
                    <span>View Piece</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story & Secondary Feature */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="border-l-2 border-[#c5a880] pl-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#948b7e] font-semibold">
                  ATELIER CRAFTSMANSHIP NOTE
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#faf7f2] italic mt-2 leading-relaxed">
                  "We sought to eliminate the boundary between Indian heritage weaving and international eveningwear."
                </p>
              </div>

              <p className="text-sm text-[#ded6c9]/80 leading-relaxed font-light">
                Each piece in this collection takes an average of 48 artisan hours. The warp and weft are hand-reeled Mulberry silk, washed three times in mineral spring water to achieve a soft liquid luster that never wrinkles under heat.
              </p>

              {/* Craftsmanship Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#141210] border border-[#24211d]">
                  <Feather className="w-4 h-4 text-[#c5a880] mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                    85 GSM Featherweight
                  </h4>
                  <p className="text-[11px] text-[#948b7e] mt-1">
                    Unrivalled natural cooling and liquid drape.
                  </p>
                </div>

                <div className="p-4 bg-[#141210] border border-[#24211d]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                    Lifetime Alterations
                  </h4>
                  <p className="text-[11px] text-[#948b7e] mt-1">
                    Complimentary in Delhi and Mumbai salons.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Highlight Card */}
            <div
              onClick={() => setSelectedProduct(featuredPiece2)}
              className="p-4 sm:p-5 bg-[#141210] border border-[#2e2a24] hover:border-[#c5a880]/50 transition-all cursor-pointer flex items-center gap-4 group"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                alt="Cashmere Cocoon Overcoat"
                className="w-16 h-20 object-cover border border-[#26231e]"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                  PAIR WITH
                </span>
                <h4 className="font-serif text-base text-[#faf7f2] group-hover:text-[#c5a880] transition-colors truncate">
                  Cashmere Cocoon Overcoat
                </h4>
                <p className="text-xs text-[#948b7e] mt-0.5">₹68,000 • Double-Faced Cashmere</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#c5a880] group-hover:translate-x-1 transition-transform" />
            </div>

            <div>
              <button
                type="button"
                onClick={handleExplore}
                className="w-full sm:w-auto py-3.5 px-8 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-xs uppercase tracking-[0.22em] font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore the Seasonal Lookbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
