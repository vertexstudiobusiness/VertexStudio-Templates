import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';

export const FestiveCollection: React.FC = () => {
  const { products, setActiveCategory, setActiveView } = useShop();

  const festiveProducts = products.filter((p) => p.isFestive).slice(0, 4);

  const handleOpenFestive = () => {
    setActiveCategory('ethnic-wear');
    setActiveView('festive');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F7EBE8]/40 to-[#FAF8F5] border-t border-[#D8CFBE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Festive Editorial Banner Card */}
        <div className="relative rounded-3xl overflow-hidden bg-[#3D2B1F] text-[#FAF8F5] mb-12 shadow-xl border border-[#5A4232]/40">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-6 sm:p-10 md:p-12 lg:p-14 z-10">
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5]/15 backdrop-blur-md rounded-full px-3 py-1 text-[#F7EBE8] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                <Sparkles className="w-3 h-3 text-[#D4A59A]" />
                <span>The Festive Edit ’26</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#FAF8F5] mb-3">
                The Noor Collection.
              </h2>

              <p className="text-xs sm:text-sm text-[#D8CFBE]/90 font-light leading-relaxed max-w-lg mb-6">
                Luminous handcrafted Chanderi angrakhas, scalloped tissue organza dupattas, and delicate metallic pita zari work. Silhouettes that flow with quiet regal radiance.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleOpenFestive}
                  className="bg-[#FAF8F5] hover:bg-[#E8D3CE] text-[#261B14] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2"
                >
                  <span>Explore Festive Noor Edit</span>
                  <ArrowRight className="w-4 h-4 text-[#261B14]" />
                </button>
                <span className="text-xs text-[#D8CFBE]/70 italic hidden sm:inline-block">
                  Hand-embroidered in Jaipur & Chanderi
                </span>
              </div>
            </div>

            <div className="md:col-span-5 relative h-64 md:h-full min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                alt="Noor Festive Edit Garment"
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#3D2B1F] via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Festive Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {festiveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
