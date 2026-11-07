import React from 'react';
import { ArrowRight, Sparkles, Feather } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const EditorialBanner: React.FC = () => {
  const { setActiveCategory, setActiveView } = useShop();

  const handleDiscover = () => {
    setActiveCategory('all');
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#261B14] text-[#FAF8F5] shadow-2xl border border-[#3D2B1F]">
          {/* Background editorial image with responsive focal crop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[520px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between z-10 bg-gradient-to-t lg:bg-gradient-to-r from-[#261B14] via-[#261B14]/95 to-transparent">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#3D2B1F] border border-[#5A4232] rounded-full px-3 py-1 text-[#D4A59A] text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-4">
                  <Feather className="w-3 h-3 text-[#D4A59A]" />
                  <span>Artisanal Manifesto · Autumn 2026</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] text-[#FAF8F5] tracking-wide mb-4">
                  The Raw Linen & <br />
                  <span className="italic font-normal text-[#F7EBE8]">Silk Story.</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#D8CFBE]/90 font-light leading-relaxed max-w-lg mb-6">
                  “We envision clothing that moves effortlessly between peaceful morning solitudes and dusk celebration. Handwoven European flax meets Indian Mulberry silk, celebrating natural slubs and soft tactile imperfections.”
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-[#3D2B1F] pt-6 mb-8 max-w-sm">
                  <div>
                    <span className="font-serif text-2xl font-normal text-[#FAF8F5] block">100%</span>
                    <span className="text-[11px] text-[#D4A59A] uppercase tracking-wider">Biodegradable Fibres</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl font-normal text-[#FAF8F5] block">42+ Hrs</span>
                    <span className="text-[11px] text-[#D4A59A] uppercase tracking-wider">Hand-Finishing Per Piece</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleDiscover}
                  className="bg-[#D4A59A] hover:bg-[#B77B6E] text-[#261B14] px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 group cursor-pointer active:scale-98"
                >
                  <span>Explore The Campaign</span>
                  <ArrowRight className="w-4 h-4 text-[#261B14] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Editorial Visual */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
                alt="LUNA Collective Campaign Story Model"
                className="w-full h-full object-cover object-center filter brightness-95 transform hover:scale-103 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#261B14]/80 pointer-events-none" />

              {/* Floating aesthetic stamp */}
              <div className="absolute bottom-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md text-[#261B14] p-3 rounded-2xl shadow-lg border border-[#D8CFBE] max-w-[190px] hidden sm:block">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B77B6E] font-bold block mb-0.5">
                  Featured Garment
                </span>
                <p className="font-serif text-xs font-semibold leading-snug">
                  Siena Relaxed Linen-Silk Co-ord
                </p>
                <span className="text-[11px] text-[#5A4232] font-mono">₹5,290</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
