import React from 'react';
import { X, Check, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { CategoryId } from '../../types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
  selectedPriceRange: string;
  onSelectPriceRange: (range: string) => void;
  sortBy: string;
  onSelectSort: (sort: string) => void;
  onReset: () => void;
  totalFilteredCount: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  selectedSize,
  onSelectSize,
  selectedPriceRange,
  onSelectPriceRange,
  sortBy,
  onSelectSort,
  onReset,
  totalFilteredCount
}) => {
  if (!isOpen) return null;

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

  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-3000', label: 'Under ₹3,000' },
    { id: '3000-5000', label: '₹3,000 – ₹5,000' },
    { id: 'above-5000', label: 'Above ₹5,000' }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'newest', label: 'Newest Arrivals' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-sm bg-[#FAF8F5] text-[#261B14] h-full shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-[#D8CFBE]/60">
        {/* Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#B77B6E]" />
            <h3 className="font-serif text-lg font-semibold text-[#261B14]">Filter & Sort</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Filters */}
        <div className="flex-1 p-5 overflow-y-auto space-y-6 divide-y divide-[#D8CFBE]/40">
          {/* Sort By */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] block mb-3">
              Sort By
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {sortOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onSelectSort(opt.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors text-left ${
                    sortBy === opt.id
                      ? 'bg-[#3D2B1F] text-[#FAF8F5] font-semibold'
                      : 'hover:bg-[#EFE9E0] text-[#5A4232]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {sortBy === opt.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="pt-5">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] block mb-3">
              Category
            </label>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectCategory(c.id)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-[#3D2B1F] text-[#FAF8F5] font-semibold'
                      : 'bg-[#F6F3EE] text-[#5A4232] hover:bg-[#EFE9E0] border border-[#D8CFBE]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="pt-5">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] block mb-3">
              Size Selection
            </label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => onSelectSize(s === 'All' ? '' : s)}
                  className={`w-11 h-9 rounded-xl text-xs font-medium flex items-center justify-center transition-all ${
                    (s === 'All' && selectedSize === '') || selectedSize === s
                      ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                      : 'bg-[#F6F3EE] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="pt-5">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] block mb-3">
              Price Range (INR)
            </label>
            <div className="space-y-1.5">
              {priceRanges.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onSelectPriceRange(r.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors text-left ${
                    selectedPriceRange === r.id
                      ? 'bg-[#3D2B1F] text-[#FAF8F5] font-semibold'
                      : 'hover:bg-[#EFE9E0] text-[#5A4232]'
                  }`}
                >
                  <span>{r.label}</span>
                  {selectedPriceRange === r.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#D8CFBE]/60 bg-[#F6F3EE] flex items-center gap-3">
          <button
            onClick={onReset}
            className="p-3 text-xs text-[#5A4232] hover:text-[#261B14] flex items-center gap-1.5 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] py-3 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-md text-center"
          >
            Show {totalFilteredCount} Results
          </button>
        </div>
      </div>
    </div>
  );
};
