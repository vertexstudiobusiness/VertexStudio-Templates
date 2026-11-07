import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';
import { 
  Heart, 
  ShoppingBag, 
  Eye, 
  ArrowRight, 
  Flame, 
  Sparkles,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

export const NewDrops: React.FC = () => {
  const { 
    products, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct, 
    navigateTo 
  } = useShop();

  // Filter Drop 004 items
  const newDropProducts = products.filter((p) => p.isNewDrop).slice(0, 4);

  // Track hover/active image index per product
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [quickSizes, setQuickSizes] = useState<{ [productId: string]: string }>({});

  const handleSelectSize = (productId: string, size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const size = quickSizes[product.id] || product.sizes[0] || 'Standard';
    const color = product.colors[0]?.name || 'Standard';
    addToCart(product, size, color, 1);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-black border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-brand-orange uppercase tracking-widest mb-1.5 font-bold">
              <Flame className="w-4 h-4 fill-brand-orange" />
              <span>LIMITED QUANTITY RUN // DROP 004</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              NEW RELEASES: <span className="text-stroke">SECTOR</span> ZERO
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-xs text-brand-concrete">
              STRICT MAXIMUM OF 150 UNITS PER DESIGN
            </span>
            <button
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-brand-orange hover:text-white uppercase group transition-colors"
            >
              <span>VIEW FULL CATALOGUE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid: 1 col on xs, 2 cols on mobile/tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newDropProducts.map((product) => {
            const isWish = isInWishlist(product.id);
            const isHovered = hoveredProduct === product.id;
            const activeImage = isHovered && product.images[1] ? product.images[1] : product.images[0];
            const chosenSize = quickSizes[product.id] || product.sizes[0];

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => navigateTo('product-detail', product.id)}
                className="group flex flex-col justify-between bg-neutral-950 border border-brand-border hover:border-brand-orange transition-all duration-300 relative cursor-pointer"
              >
                {/* Image Container with Streetwear Aspect Ratio */}
                <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                    <span className="bg-brand-orange text-black font-mono font-black text-[9px] px-2 py-0.5 uppercase tracking-wider">
                      DROP 004
                    </span>
                    {product.editionNumber && (
                      <span className="bg-black/90 text-brand-concrete border border-brand-border text-[9px] font-mono px-1.5 py-0.5">
                        {product.editionNumber}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-none backdrop-blur-md border transition-all ${
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

                  {/* Subtle Stock Alarm */}
                  {product.stockCount <= 5 && (
                    <div className="absolute bottom-2.5 left-2.5 bg-black/90 text-brand-orange border border-brand-orange/60 font-mono text-[9px] px-2 py-0.5">
                      ONLY {product.stockCount} LEFT
                    </div>
                  )}
                </div>

                {/* Card Details */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* GSM and Fit Specs */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-brand-concrete mb-1">
                      <span>{product.fit}</span>
                      <span>{product.gsm.split(' ')[0]} GSM</span>
                    </div>

                    <h3 className="font-display font-bold text-xs sm:text-sm text-brand-offwhite uppercase leading-snug line-clamp-1 group-hover:text-brand-orange transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price & Quick Size Selector */}
                  <div className="mt-3 pt-3 border-t border-brand-border/40 space-y-2.5">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-sm sm:text-base font-bold text-brand-orange">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="font-mono text-xs text-neutral-500 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-concrete">
                        INCL. TAXES
                      </span>
                    </div>

                    {/* Finger-friendly Quick Size Badges */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={(e) => handleSelectSize(product.id, sz, e)}
                          className={`text-[10px] font-mono font-bold px-2.5 py-1.5 min-h-[34px] min-w-[32px] border transition-all active:scale-95 ${
                            chosenSize === sz
                              ? 'border-brand-orange bg-brand-orange text-black'
                              : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>

                    {/* Direct Add Button */}
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="w-full bg-neutral-900 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-3 flex items-center justify-center gap-2 transition-all uppercase min-h-[44px] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ADD {chosenSize} TO BAG</span>
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

