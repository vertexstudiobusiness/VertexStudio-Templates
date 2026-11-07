import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../../data/products';
import type { CategoryType } from '../../types';
import { ArrowUpDown, Search, RotateCcw, Sparkles } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const {
    filteredProducts,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedGender,
    setSelectedGender,
    resetFilters
  } = useShop();

  return (
    <section id="catalogue-section" className="py-16 sm:py-24 bg-[#0c0b0a] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE PERMANENT ARCHIVE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight mb-3">
            Atelier Catalogue
          </h2>
          <p className="text-xs sm:text-sm text-[#948b7e] font-light max-w-xl mx-auto">
            Discover modern ready-to-wear crafted from handloom silks, raw Tussar, fine linens, and cashmere.
          </p>
        </div>

        {/* Mobile-Friendly Category Navigation Bar (Scrollable without scrollbar) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 border-b border-[#201d19]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as CategoryType)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#faf7f2] text-[#0c0b0a] font-semibold shadow-md'
                  : 'bg-[#141210] text-[#948b7e] border border-[#26231e] hover:text-[#faf7f2] hover:border-[#38332b]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search, Filter & Sort Toolbar */}
        <div className="bg-[#12100e] border border-[#201d19] p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#736a5f] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by garment, fabric, or color..."
              className="w-full pl-9 pr-4 py-2 bg-[#171512] border border-[#2b2721] text-xs text-[#faf7f2] placeholder-[#736a5f] focus:outline-none focus:border-[#c5a880]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#948b7e] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Controls: Gender, Sort & Reset */}
          <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-between sm:justify-end">
            {/* Gender Toggle */}
            <div className="flex items-center border border-[#2b2721] bg-[#171512] text-[11px] uppercase tracking-wider">
              {(['All', 'Women', 'Men'] as const).map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => setSelectedGender(gender)}
                  className={`px-3 py-1.5 transition-colors ${
                    selectedGender === gender
                      ? 'bg-[#c5a880] text-[#0c0b0a] font-semibold'
                      : 'text-[#948b7e] hover:text-[#faf7f2]'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 border border-[#2b2721] bg-[#171512] px-3 py-1.5 text-xs text-[#ded6c9]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#c5a880]" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as 'featured' | 'price-low' | 'price-high' | 'newest'
                  )
                }
                className="bg-transparent text-[#faf7f2] text-xs focus:outline-none cursor-pointer"
                aria-label="Sort Garments"
              >
                <option value="featured" className="bg-[#141210]">
                  Featured Editions
                </option>
                <option value="newest" className="bg-[#141210]">
                  Newest First
                </option>
                <option value="price-low" className="bg-[#141210]">
                  Price: Low to High
                </option>
                <option value="price-high" className="bg-[#141210]">
                  Price: High to Low
                </option>
              </select>
            </div>

            {/* Reset Filters */}
            {(activeCategory !== 'All' || searchQuery || selectedGender !== 'All' || sortBy !== 'featured') && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 text-[11px] text-[#c5a880] hover:text-[#faf7f2] uppercase tracking-wider px-2 py-1 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#948b7e] mb-6">
          <span>
            Displaying <strong className="text-[#faf7f2]">{filteredProducts.length}</strong> creations
            {activeCategory !== 'All' && <span> in {activeCategory}</span>}
          </span>
          {searchQuery && (
            <span>
              Searching for: &ldquo;<span className="text-[#c5a880]">{searchQuery}</span>&rdquo;
            </span>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center bg-[#141210] border border-[#24211d] max-w-xl mx-auto p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#faf7f2]">
              No Creations Match Your Selection
            </h3>
            <p className="text-xs text-[#948b7e] leading-relaxed">
              We could not find any garments matching your current filters. Try relaxing your search terms or exploring our complete archival catalogue.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="py-3 px-6 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
