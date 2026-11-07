import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { LOOKBOOK_LOOKS } from '../../data/lookbook';
import { useShop } from '../../context/ShopContext';

export const StyleInspiration: React.FC = () => {
  const { products, openProductDetail, formatPrice, setActiveView } = useShop();
  const [activeLookIndex, setActiveLookIndex] = useState(0);

  const currentLook = LOOKBOOK_LOOKS[activeLookIndex];

  const featuredProducts = products.filter((p) =>
    currentLook.featuredProductIds.includes(p.id)
  );

  return (
    <section className="py-14 sm:py-20 bg-[#F6F3EE] border-y border-[#D8CFBE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Editorial Lookbook</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
              Style Inspiration
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4232] mt-1 font-light">
              Explore how our atelier styles versatile separates into complete occasion looks.
            </p>
          </div>

          {/* Lookbook Selectors */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0 overflow-x-auto no-scrollbar pb-1">
            {LOOKBOOK_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => setActiveLookIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  activeLookIndex === idx
                    ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
                }`}
              >
                {look.title}
              </button>
            ))}
          </div>
        </div>

        {/* Lookbook Featured Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] rounded-3xl p-5 sm:p-8 border border-[#D8CFBE]/60 shadow-lg">
          {/* Main Look Editorial Image */}
          <div className="lg:col-span-7 relative aspect-4/5 sm:aspect-16/11 lg:aspect-4/3 rounded-2xl overflow-hidden bg-[#EFE9E0] shadow-md">
            <img
              src={currentLook.image}
              alt={currentLook.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#261B14]/80 via-transparent to-transparent sm:hidden" />
            <div className="absolute bottom-4 left-4 right-4 text-white sm:hidden">
              <h3 className="font-serif text-xl font-normal">{currentLook.title}</h3>
              <p className="text-xs text-[#FAF8F5]/80 mt-1">{currentLook.subtitle}</p>
            </div>
          </div>

          {/* Featured Pieces in this Look */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="hidden sm:block">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-1">
                  Styling Notes
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14] mb-2">
                  {currentLook.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4232] leading-relaxed font-light mb-4">
                  {currentLook.lookDescription}
                </p>
              </div>

              <div className="border-t border-[#D8CFBE]/50 pt-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] mb-3 flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#B77B6E]" />
                  <span>Shop The Pieces ({featuredProducts.length})</span>
                </h4>

                <div className="space-y-3">
                  {featuredProducts.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openProductDetail(item)}
                      className="group/item flex items-center gap-3.5 p-2 rounded-xl border border-[#D8CFBE]/50 bg-[#F6F3EE] hover:bg-[#FAF8F5] hover:border-[#B77B6E] transition-all cursor-pointer shadow-2xs"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-14 h-18 rounded-lg object-cover object-top shrink-0 bg-[#EFE9E0]"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase tracking-wider text-[#B77B6E] font-medium block">
                          {item.category.replace('-', ' ')}
                        </span>
                        <h5 className="font-serif text-xs sm:text-sm font-medium text-[#261B14] group-hover/item:text-[#B77B6E] transition-colors truncate">
                          {item.name}
                        </h5>
                        <p className="text-xs font-semibold text-[#261B14] mt-0.5 font-mono">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="p-2 text-[#5A4232] group-hover/item:text-[#261B14]">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveView('lookbook');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-[#FAF8F5] border border-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-[#FAF8F5] text-[#261B14] py-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore All Seasonal Looks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
