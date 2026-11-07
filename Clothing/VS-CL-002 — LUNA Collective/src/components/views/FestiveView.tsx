import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../home/ProductCard';

export const FestiveView: React.FC = () => {
  const { products, setActiveCategory, setActiveView } = useShop();

  const festiveProducts = products.filter((p) => p.isFestive || p.category === 'ethnic-wear');

  return (
    <div className="py-8 sm:py-14 bg-gradient-to-b from-[#FAF8F5] via-[#F7EBE8]/30 to-[#FAF8F5] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Campaign Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-[#261B14] text-[#FAF8F5] p-6 sm:p-12 md:p-16 mb-12 shadow-2xl border border-[#3D2B1F]">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#3D2B1F] border border-[#5A4232] rounded-full px-3.5 py-1 text-[#D4A59A] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Festive Edition ’26</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-tight mb-4">
              The Noor Collection.
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#D8CFBE]/90 font-light leading-relaxed mb-6">
              An ode to enduring Indian romance. Featherlight handspun Chanderi silks, scalloped tissue organza dupattas, and delicate metallic rose-gold pita zari. Tailored for radiant twilight soirees, Diwali celebrations, and intimate winter nuptials.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#D8CFBE]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4A59A]" /> Handwoven by Chanderi Master Artisans
              </span>
              <span className="hidden sm:inline-block">·</span>
              <span className="hidden sm:inline-block">Limited Batch Atelier Run</span>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-30 sm:opacity-50 pointer-events-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
              alt="Noor Festive Edit"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Collection Products */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14]">
              Noor Festive Silhouettes
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4232] font-light mt-0.5">
              Featuring {festiveProducts.length} festive tunics, flared anarkalis, and artisanal accessories
            </p>
          </div>

          <button
            onClick={() => {
              setActiveCategory('all');
              setActiveView('catalog');
            }}
            className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] hover:text-[#B77B6E] flex items-center gap-1"
          >
            <span>View All Garments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {festiveProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
