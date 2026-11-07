import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES_LIST } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-brand-black border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 pb-4 border-b border-brand-border">
          <div>
            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest font-bold block mb-1">
              ARCHIVE CLASSIFICATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              SHOP BY <span className="text-stroke">SILHOUETTE</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-concrete">
            ENGINEERED TO MIX, MATCH & LAYER
          </span>
        </div>

        {/* Asymmetrical Streetwear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES_LIST.map((cat, idx) => {
            // Give first card or third card a larger presence on desktop
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={cat.name}
                onClick={() => navigateTo('shop', undefined, cat.categoryKey)}
                className={`group relative overflow-hidden bg-neutral-950 border border-brand-border hover:border-brand-orange transition-all duration-300 cursor-pointer ${
                  isFeatured ? 'sm:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-75 contrast-110 group-hover:brightness-90"
                    loading="lazy"
                  />
                  
                  {/* Subtle Grunge/Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                  {/* Corner Index Tag */}
                  <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm border border-brand-border px-2 py-1 font-mono text-[10px] text-brand-concrete">
                    0{idx + 1} // {cat.count}
                  </div>

                  {/* Corner Arrow Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-neutral-950/80 group-hover:bg-brand-orange group-hover:text-black text-brand-offwhite border border-brand-border flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end">
                    <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider mb-1">
                      {cat.tagline}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-brand-offwhite uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

