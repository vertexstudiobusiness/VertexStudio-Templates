import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Grid3X3,
  Grid2X2,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filterFit,
    setFilterFit,
    priceRange,
    setPriceRange,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateTo
  } = useShop();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  // On mobile: 'compact' is 2-col, 'large' is 1-col editorial!
  const [gridMode, setGridMode] = useState<'compact' | 'large'>('large');
  const [quickSizes, setQuickSizes] = useState<{ [productId: string]: string }>({});

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Bottoms', 'Outerwear', 'Accessories'];
  const fits = ['all', 'Boxy Oversized', 'Drop Shoulder Relaxed', 'Straight Technical', 'Wide Parachute'];

  // Filtering & Sorting
  const filteredProducts = products
    .filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Fit filter
      if (filterFit !== 'all' && product.fit !== filterFit) {
        return false;
      }
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSub = product.subtitle.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesGsm = product.gsm.toLowerCase().includes(q);
        const matchesCol = product.collection.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesDesc && !matchesGsm && !matchesCol) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewDrop ? 1 : 0) - (a.isNewDrop ? 1 : 0);
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // default featured
    });

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setFilterFit('all');
    setPriceRange([1000, 10000]);
    setSearchQuery('');
    setSortBy('featured');
  };

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
    <div className="min-h-screen bg-brand-black pb-28">
      {/* Category / Banner Header - Mobile-First Spacing */}
      <div className="bg-brand-surface border-b border-brand-border py-6 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-brand-orange uppercase tracking-widest font-bold mb-1.5">
            <span>DROP ARCHIVE // CATEGORY</span>
            <span>//</span>
            <span>{selectedCategory.toUpperCase()}</span>
          </div>

          <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-brand-offwhite uppercase tracking-tight">
            {selectedCategory === 'All' ? 'ALL RELEASES' : selectedCategory.toUpperCase()}
          </h1>

          <p className="font-mono text-xs sm:text-sm text-brand-concrete max-w-2xl mt-1.5 leading-relaxed">
            300–450 GSM pure loopback French Terry, technical Cordura ripstop, and precision utilitarian hardware.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-8">
        {/* Controls Bar: Category Pills + Search + Sort + Layout */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-brand-border pb-4 sm:pb-6">
          {/* Top row: Horizontal Swipeable Categories on Mobile */}
          <div className="-mx-3 sm:mx-0 px-3 sm:px-0 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs font-bold px-3.5 py-2.5 border whitespace-nowrap transition-all uppercase min-h-[44px] flex items-center justify-center shrink-0 ${
                  selectedCategory === cat
                    ? 'border-brand-orange bg-brand-orange text-black'
                    : 'border-brand-border bg-brand-surface text-brand-concrete hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Second row: Search input + Filters + Sorting + View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[170px] sm:max-w-xs">
              <input
                type="text"
                placeholder="Search drops, 450gsm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-surface border border-brand-border text-xs text-white pl-8 pr-7 py-2.5 font-mono outline-none focus:border-brand-orange min-h-[44px]"
              />
              <Search className="w-3.5 h-3.5 text-brand-concrete absolute left-2.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2.5 p-1 text-brand-concrete hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Sheet Button */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-1.5 bg-brand-surface border border-brand-border text-xs font-mono text-brand-offwhite px-3 py-2.5 min-h-[44px] active:scale-95"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-orange" />
              <span>FILTERS</span>
              {(filterFit !== 'all' || priceRange[1] < 10000) && (
                <span className="w-2 h-2 rounded-full bg-brand-orange ml-1" />
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-surface border border-brand-border text-xs font-mono text-brand-offwhite px-2.5 py-2.5 outline-none focus:border-brand-orange min-h-[44px]"
              >
                <option value="featured">Featured Drops</option>
                <option value="newest">Newest Releases</option>
                <option value="bestseller">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile View Toggle: 1-col Editorial vs 2-col Grid */}
            <div className="flex items-center border border-brand-border bg-brand-surface shrink-0">
              <button
                onClick={() => setGridMode('large')}
                className={`p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
                  gridMode === 'large'
                    ? 'bg-neutral-800 text-brand-orange'
                    : 'text-brand-concrete hover:text-white'
                }`}
                title="Single Column Editorial Layout"
                aria-label="Editorial View"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridMode('compact')}
                className={`p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
                  gridMode === 'compact'
                    ? 'bg-neutral-800 text-brand-orange'
                    : 'text-brand-concrete hover:text-white'
                }`}
                title="Multi Column Grid Layout"
                aria-label="Grid View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(selectedCategory !== 'All' || filterFit !== 'all' || searchQuery || sortBy !== 'featured') && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono">
              <span className="text-brand-concrete">FILTERS:</span>
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-neutral-900 border border-brand-border text-brand-orange px-2 py-0.5">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              {filterFit !== 'all' && (
                <span className="inline-flex items-center gap-1 bg-neutral-900 border border-brand-border text-brand-orange px-2 py-0.5">
                  {filterFit}
                  <button onClick={() => setFilterFit('all')}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-neutral-900 border border-brand-border text-brand-orange px-2 py-0.5">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}>
                    <X className="w-3 h-3 hover:text-white" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="text-brand-concrete hover:text-white underline text-[10px] ml-1 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>
          )}
        </div>

        {/* Mobile Filter Drawer / Bottom Sheet */}
        {isMobileFilterOpen && (
          <div className="bg-brand-surface border border-brand-border p-4 sm:p-5 my-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-brand-border">
              <span className="font-display font-bold text-xs uppercase text-brand-offwhite">
                FILTER BY SILHOUETTE & PRICE
              </span>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-brand-concrete hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-brand-concrete mb-1.5 uppercase font-bold">
                SILHOUETTE / FIT
              </label>
              <div className="grid grid-cols-2 gap-2">
                {fits.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterFit(f)}
                    className={`text-xs font-mono p-2.5 border text-left truncate min-h-[44px] flex items-center transition-all ${
                      filterFit === f
                        ? 'bg-brand-orange text-black border-brand-orange font-bold'
                        : 'bg-neutral-900 text-brand-concrete border-brand-border'
                    }`}
                  >
                    {f === 'all' ? 'All Fits' : f}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-brand-concrete">MAX BUDGET:</span>
                <span className="text-brand-orange font-bold">
                  ₹{priceRange[1].toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-brand-orange h-6"
              />
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs py-3.5 uppercase min-h-[48px] shadow-glow-orange"
            >
              APPLY FILTERS ({filteredProducts.length} PIECES)
            </button>
          </div>
        )}

        {/* Results Counter */}
        <div className="py-3 flex items-center justify-between text-[11px] font-mono text-brand-concrete">
          <span>{filteredProducts.length} GARMENTS AVAILABLE</span>
          <span>INR PRICING (₹)</span>
        </div>

        {/* Products Grid - Mobile Tuned (1-col or 2-col) */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center border border-brand-border bg-brand-surface p-6 sm:p-8">
            <h3 className="font-display font-black text-xl sm:text-2xl text-brand-offwhite uppercase">
              NO PIECES MATCH YOUR FILTER
            </h3>
            <p className="font-mono text-xs text-brand-concrete max-w-sm mx-auto mt-2 mb-6">
              Adjust your silhouette or clear search terms to view other drops.
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-brand-orange text-black font-mono font-bold text-xs px-6 py-3.5 uppercase hover:bg-white transition-colors min-h-[44px]"
            >
              VIEW ALL DROPS
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-3 sm:gap-6 ${
              gridMode === 'large'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {filteredProducts.map((product) => {
              const isWish = isInWishlist(product.id);
              const chosenSize = quickSizes[product.id] || product.sizes[0];

              return (
                <div
                  key={product.id}
                  onClick={() => navigateTo('product-detail', product.id)}
                  className="group flex flex-col justify-between bg-neutral-950 border border-brand-border hover:border-brand-orange transition-all duration-300 relative cursor-pointer"
                >
                  {/* Image Container with Streetwear Aspect Ratio */}
                  <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Corner Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                      {product.isNewDrop && (
                        <span className="bg-brand-orange text-black font-mono font-black text-[9px] px-1.5 py-0.5 uppercase tracking-wider">
                          DROP 004
                        </span>
                      )}
                      {product.editionNumber && (
                        <span className="bg-black/90 text-brand-concrete border border-brand-border text-[8px] font-mono px-1 py-0.5 hidden xs:inline">
                          {product.editionNumber}
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button - comfortable 40px touch target */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className={`absolute top-2 right-2 z-10 p-2 min-h-[38px] min-w-[38px] flex items-center justify-center backdrop-blur-md border transition-all ${
                        isWish
                          ? 'bg-neutral-950/90 border-brand-orange text-brand-orange'
                          : 'bg-neutral-950/60 border-brand-border text-white hover:text-brand-orange'
                      }`}
                      aria-label="Save to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWish ? 'fill-brand-orange' : ''}`} />
                    </button>

                    {/* Quick View Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="absolute bottom-2 right-2 z-10 p-2 min-h-[36px] min-w-[36px] flex items-center justify-center bg-neutral-950/85 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all"
                      title="Quick View"
                      aria-label="Quick View"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {/* Stock Alert */}
                    {product.stockCount <= 5 && (
                      <div className="absolute bottom-2 left-2 bg-black/90 text-brand-orange border border-brand-orange/60 font-mono text-[8px] sm:text-[9px] px-1.5 py-0.5">
                        {product.stockCount} LEFT
                      </div>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-brand-concrete mb-1">
                        <span className="truncate max-w-[120px]">{product.fit}</span>
                        <span className="shrink-0">{product.gsm.split(' ')[0]} GSM</span>
                      </div>

                      <h3 className="font-display font-bold text-xs sm:text-sm text-brand-offwhite uppercase leading-snug line-clamp-1 group-hover:text-brand-orange transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-brand-border/40 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-mono text-xs sm:text-base font-bold text-brand-orange">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="font-mono text-[10px] sm:text-xs text-neutral-500 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Finger-friendly Quick Size Selector */}
                      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                        {product.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={(e) => handleSelectSize(product.id, sz, e)}
                            className={`text-[9px] sm:text-[10px] font-mono font-bold px-2 py-1 min-h-[30px] border transition-all ${
                              chosenSize === sz
                                ? 'border-brand-orange bg-brand-orange text-black'
                                : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>

                      {/* Direct Add to Bag CTA */}
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="w-full bg-neutral-900 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-[10px] sm:text-xs font-bold py-2.5 sm:py-3 flex items-center justify-center gap-1.5 transition-all uppercase min-h-[42px] active:scale-[0.98]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ADD {chosenSize}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
