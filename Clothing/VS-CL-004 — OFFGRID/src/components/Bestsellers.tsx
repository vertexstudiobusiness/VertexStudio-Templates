import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';
import { ShoppingBag, Heart, Eye, ArrowRight, Star } from 'lucide-react';

export const Bestsellers: React.FC = () => {
  const { 
    products, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct, 
    navigateTo 
  } = useShop();

  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    { label: 'ALL BESTSELLERS', category: 'All' },
    { label: 'HEAVYWEIGHT TEES', category: 'T-Shirts' },
    { label: 'FLEECE & HOODIES', category: 'Hoodies' },
    { label: 'BOTTOMS & CARGOS', category: 'Bottoms' },
  ];

  const filteredProducts = products.filter((p) => {
    if (!p.isBestSeller) return false;
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-16 sm:py-24 bg-brand-black border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-brand-orange uppercase tracking-widest font-bold mb-1">
              <Star className="w-3.5 h-3.5 fill-brand-orange" />
              <span>STREET VERIFIED // HIGHEST ROTATION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              THE <span className="text-stroke">CULT</span> ESSENTIALS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.category}
                onClick={() => setActiveFilter(tab.category)}
                className={`font-mono text-xs font-bold px-3 py-1.5 border whitespace-nowrap transition-all uppercase ${
                  activeFilter === tab.category
                    ? 'border-brand-orange bg-brand-orange text-black'
                    : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isWish = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                onClick={() => navigateTo('product-detail', product.id)}
                className="group flex flex-col justify-between bg-neutral-950 border border-brand-border hover:border-brand-orange transition-all duration-300 relative cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                    <span className="bg-neutral-950/90 border border-brand-border text-brand-offwhite font-mono font-bold text-[9px] px-2 py-0.5 uppercase">
                      BESTSELLER
                    </span>
                    <span className="bg-brand-surface/90 text-brand-orange border border-brand-orange/40 text-[9px] font-mono px-1.5 py-0.5">
                      ★ {product.rating} ({product.reviewCount})
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-2.5 right-2.5 z-10 p-2 backdrop-blur-md border transition-all ${
                      isWish
                        ? 'bg-neutral-950/90 border-brand-orange text-brand-orange'
                        : 'bg-neutral-950/60 border-brand-border text-white hover:text-brand-orange'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWish ? 'fill-brand-orange' : ''}`} />
                  </button>

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(product);
                    }}
                    className="absolute bottom-2.5 right-2.5 z-10 p-2 bg-neutral-950/80 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200"
                    title="Quick View"
                    aria-label="Quick View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-brand-concrete mb-1">
                      <span>{product.fit}</span>
                      <span>{product.gsm.split(' ')[0]} GSM</span>
                    </div>

                    <h3 className="font-display font-bold text-xs sm:text-sm text-brand-offwhite uppercase leading-snug line-clamp-1 group-hover:text-brand-orange transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-3 pt-3 border-t border-brand-border/40">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-sm sm:text-base font-bold text-brand-orange">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="font-mono text-xs text-neutral-500 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        IN STOCK
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const defaultSize = product.sizes[0] || 'Standard';
                        const defaultColor = product.colors[0]?.name || 'Standard';
                        addToCart(product, defaultSize, defaultColor, 1);
                      }}
                      className="w-full bg-neutral-900 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-3 flex items-center justify-center gap-2 transition-all uppercase min-h-[44px] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ADD TO BAG</span>
                    </button>
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

