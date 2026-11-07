import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../data/menuData';
import type { MenuCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, UtensilsCrossed, Coffee, IceCream, Sun, Cake } from 'lucide-react';

export const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'vegan' | 'nut-free'>('all');

  const categories: { id: MenuCategory; label: string; icon: any }[] = [
    { id: 'all', label: 'All Items', icon: UtensilsCrossed },
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'cold-drinks', label: 'Cold Drinks', icon: IceCream },
    { id: 'breakfast', label: 'Breakfast', icon: Sun },
    { id: 'bakery', label: 'Bakery', icon: UtensilsCrossed },
    { id: 'desserts', label: 'Desserts', icon: Cake },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.frenchName && item.frenchName.toLowerCase().includes(query)) ||
        item.description.toLowerCase().includes(query) ||
        (item.tastingNotes && item.tastingNotes.some(n => n.toLowerCase().includes(query)));

      // Dietary match
      let matchesDietary = true;
      if (dietaryFilter === 'veg') matchesDietary = !!item.isVegetarian;
      if (dietaryFilter === 'vegan') matchesDietary = !!item.isVegan;
      if (dietaryFilter === 'nut-free') matchesDietary = !item.containsNuts;

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#4F5E4B] font-semibold block">
            The Daily Offering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
            Curated Artisanal Menu
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B86749] mx-auto mt-3" />
          <p className="text-[#5C473A] text-xs sm:text-sm md:text-base leading-relaxed font-light pt-1">
            Every roast is calibrated daily to prevailing ambient humidity; every viennoiserie baked fresh in morning batches.
          </p>
        </div>

        {/* Filter Bar & Controls (Mobile First Swiping & Tap Targets) */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          
          {/* Category Tabs: Edge-to-Edge swipe on mobile (-mx-4 px-4) */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[42px] px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.14em] font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 snap-start shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-[#291F18] text-[#F7F3EB] shadow-sm'
                      : 'bg-[#F7F3EB] text-[#5C473A] hover:bg-[#EFE8DC] hover:text-[#1C1511]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#CBB99F]' : 'text-[#7E6251]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filters Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-2 border-t border-[#EFE8DC]/80">
            
            {/* Search Input (44px height on mobile) */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#7E6251] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search coffee, pastries, notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[42px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm pl-9 pr-8 py-2 text-xs text-[#1C1511] placeholder-[#7E6251]/70 focus:outline-none focus:border-[#4F5E4B] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="w-8 h-8 flex items-center justify-center absolute right-1 top-1/2 -translate-y-1/2 text-xs text-[#7E6251] hover:text-[#1C1511]"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold flex items-center gap-1 mr-1 shrink-0">
                <SlidersHorizontal className="w-3 h-3" />
                <span>Filter:</span>
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: 'Vegetarian' },
                { id: 'vegan', label: 'Vegan' },
                { id: 'nut-free', label: 'Nut-Free' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setDietaryFilter(filter.id as any)}
                  className={`min-h-[34px] px-2.5 py-1 text-[11px] rounded-sm border whitespace-nowrap transition-colors shrink-0 ${
                    dietaryFilter === filter.id
                      ? 'bg-[#4F5E4B] border-[#4F5E4B] text-white font-medium'
                      : 'border-[#EFE8DC] text-[#5C473A] bg-[#F7F3EB] hover:bg-[#EFE8DC]/60'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Results Counter */}
        <div className="text-left text-xs text-[#7E6251] mb-5">
          Showing <span className="font-semibold text-[#1C1511]">{filteredItems.length}</span> delicious creations
          {searchQuery && <span> matching "{searchQuery}"</span>}
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-14 text-center bg-[#F7F3EB] rounded-sm border border-dashed border-[#CBB99F] p-6 space-y-3">
            <p className="font-serif text-lg text-[#291F18]">No items found</p>
            <p className="text-xs text-[#5C473A]">
              We couldn't find any creations matching your search. Try resetting your filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-2 min-h-[40px] px-4 py-2 bg-[#291F18] text-[#F7F3EB] text-xs uppercase tracking-wider rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
