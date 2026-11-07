import React from 'react';
import { Sparkles, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { LOOKBOOK_LOOKS } from '../../data/lookbook';
import { useShop } from '../../context/ShopContext';

export const LookbookView: React.FC = () => {
  const { products, openProductDetail, formatPrice, setActiveCategory, setActiveView } = useShop();

  return (
    <div className="py-10 sm:py-16 bg-[#FAF8F5] min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F7EBE8] border border-[#D4A59A]/40 rounded-full px-3.5 py-1 text-[#B77B6E] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Editorial Journal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#261B14] mb-3">
            Style Inspiration Lookbook
          </h1>
          <p className="text-xs sm:text-sm text-[#5A4232] font-light leading-relaxed">
            Curated outfits from our Mumbai & Jaipur ateliers. Discover how to transition fluid linens, raw silks, and heritage jewellery across everyday salon wear and festive gatherings.
          </p>
        </div>

        {/* Looks List */}
        <div className="space-y-16 sm:space-y-24">
          {LOOKBOOK_LOOKS.map((look, index) => {
            const lookPieces = products.filter((p) => look.featuredProductIds.includes(p.id));
            const isReversed = index % 2 === 1;

            return (
              <div
                key={look.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Look Photo */}
                <div className={`lg:col-span-7 rounded-3xl overflow-hidden shadow-xl bg-[#EFE9E0] aspect-4/5 sm:aspect-16/11 ${
                  isReversed ? 'lg:order-2' : ''
                }`}>
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Styling Details & Shoppable Pieces */}
                <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                  isReversed ? 'lg:order-1' : ''
                }`}>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-1">
                      Look #{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14] mb-2">
                      {look.title}
                    </h2>
                    <p className="text-xs text-[#5A4232] mb-3 font-medium">
                      {look.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5A4232] leading-relaxed font-light mb-6 border-l-2 border-[#D4A59A] pl-3 italic">
                      "{look.lookDescription}"
                    </p>

                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] mb-3 flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5 text-[#B77B6E]" />
                      <span>Featured Garments in this Edit</span>
                    </h3>

                    <div className="space-y-2.5">
                      {lookPieces.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => openProductDetail(p)}
                          className="flex items-center justify-between p-2.5 bg-[#F6F3EE] hover:bg-[#FAF8F5] border border-[#D8CFBE]/60 hover:border-[#B77B6E] rounded-xl transition-all cursor-pointer shadow-2xs group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={p.images[0]}
                              alt={p.name}
                              className="w-12 h-16 rounded-lg object-cover object-top bg-[#EFE9E0] shrink-0"
                            />
                            <div className="min-w-0">
                              <h4 className="font-serif text-xs sm:text-sm font-medium text-[#261B14] group-hover:text-[#B77B6E] truncate">
                                {p.name}
                              </h4>
                              <p className="text-xs font-semibold text-[#261B14] font-mono mt-0.5">
                                {formatPrice(p.price)}
                              </p>
                            </div>
                          </div>
                          <Eye className="w-4 h-4 text-[#5A4232] group-hover:text-[#261B14] mr-2 shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              setActiveCategory('all');
              setActiveView('catalog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
          >
            <span>Explore Entire Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
