import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, Sparkles, X, RotateCcw } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../home/ProductCard';
import { FilterDrawer } from './FilterDrawer';
import { CategoryId } from '../../types';

export const CatalogView: React.FC = () => {
  const { products, activeCategory, setActiveCategory } = useShop();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'ethnic-wear', label: 'Ethnic Wear' },
    { id: 'co-ords', label: 'Co-ord Sets' },
    { id: 'tops', label: 'Tops & Blouses' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'sale', label: 'Sale Archive' }
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory === 'sale') {
          if (!p.isSale && (!p.originalPrice || p.originalPrice <= p.price)) return false;
        } else if (activeCategory !== 'all' && p.category !== activeCategory) {
          return false;
        }

        // Size filter
        if (selectedSize && !p.sizes.includes(selectedSize)) {
          return false;
        }

        // Price range filter
        if (selectedPriceRange === 'under-3000' && p.price >= 3000) return false;
        if (selectedPriceRange === '3000-5000' && (p.price < 3000 || p.price > 5000)) return false;
        if (selectedPriceRange === 'above-5000' && p.price <= 5000) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0; // 'featured' keeps curated order
      });
  }, [products, activeCategory, selectedSize, selectedPriceRange, sortBy]);

  const activeFiltersCount =
    (activeCategory !== 'all' ? 1 : 0) +
    (selectedSize ? 1 : 0) +
    (selectedPriceRange !== 'all' ? 1 : 0) +
    (sortBy !== 'featured' ? 1 : 0);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSelectedSize('');
    setSelectedPriceRange('all');
    setSortBy('featured');
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'dresses':
        return 'Linen & Satin Dresses';
      case 'ethnic-wear':
        return 'Contemporary Ethnic Wear & Kurtas';
      case 'co-ords':
        return 'Luxury Co-ord Sets & Kimonos';
      case 'tops':
        return 'Tops & Artisanal Blouses';
      case 'bottoms':
        return 'Tailored Trousers & Bottoms';
      case 'accessories':
        return 'Handcrafted Baroque Accessories';
      case 'sale':
        return 'End of Season Sale Archive';
      default:
        return 'The Full Wardrobe Collection';
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FAF8F5] min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-1">
            Catalogue
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
            {getCategoryTitle()}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A4232] font-light mt-1">
            Showing {filteredProducts.length} handcrafted silhouettes in Indian standard sizing
          </p>
        </div>

        {/* Category Horizontal Pill Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 border-b border-[#D8CFBE]/50">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#F6F3EE] text-[#5A4232] hover:bg-[#EFE9E0] border border-[#D8CFBE]/80'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          {/* Filter Drawer Trigger */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-[#F6F3EE] hover:bg-[#EFE9E0] border border-[#D8CFBE] text-[#3D2B1F] px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B77B6E]" />
            <span>Filters & Sort</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 bg-[#3D2B1F] text-[#FAF8F5] rounded-full text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Sort Selector */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#5A4232]">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F6F3EE] border border-[#D8CFBE] rounded-xl px-3 py-1.5 text-xs text-[#261B14] font-medium focus:outline-none focus:border-[#3D2B1F]"
            >
              <option value="featured">Featured Curated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Active Filters Pill Chips */}
        {activeFiltersCount > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-6 text-xs">
            <span className="text-[11px] text-[#5A4232]">Active:</span>
            {activeCategory !== 'all' && (
              <span className="bg-[#FAF8F5] border border-[#D8CFBE] text-[#3D2B1F] px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1.5 shadow-2xs">
                <span>{categories.find((c) => c.id === activeCategory)?.label}</span>
                <button onClick={() => setActiveCategory('all')} className="hover:text-[#B77B6E]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSize && (
              <span className="bg-[#FAF8F5] border border-[#D8CFBE] text-[#3D2B1F] px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1.5 shadow-2xs">
                <span>Size: {selectedSize}</span>
                <button onClick={() => setSelectedSize('')} className="hover:text-[#B77B6E]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPriceRange !== 'all' && (
              <span className="bg-[#FAF8F5] border border-[#D8CFBE] text-[#3D2B1F] px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1.5 shadow-2xs">
                <span className="capitalize">{selectedPriceRange.replace('-', ' ')}</span>
                <button onClick={() => setSelectedPriceRange('all')} className="hover:text-[#B77B6E]">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="text-[#B77B6E] hover:underline text-[11px] ml-1 font-medium"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product Grid: 2-col on mobile (375px–430px), 3-col on tablet, 4-col on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F6F3EE] rounded-3xl border border-[#D8CFBE] p-8 max-w-md mx-auto">
            <Sparkles className="w-8 h-8 text-[#B77B6E] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#261B14] mb-2">No Matching Silhouettes</h3>
            <p className="text-xs text-[#5A4232] mb-5">
              Try adjusting your size or price filters to view other handcrafted garments in our collection.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter Drawer Component */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
        selectedPriceRange={selectedPriceRange}
        onSelectPriceRange={setSelectedPriceRange}
        sortBy={sortBy}
        onSelectSort={setSortBy}
        onReset={handleResetFilters}
        totalFilteredCount={filteredProducts.length}
      />
    </div>
  );
};
