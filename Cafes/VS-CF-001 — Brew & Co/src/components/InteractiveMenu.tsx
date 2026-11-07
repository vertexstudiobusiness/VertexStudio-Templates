import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Utensils, SlidersHorizontal, Flame } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import type { MenuItem } from '../types';

export const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const { addToCart, cafeConfig, setActiveItemForCustomization } = useCart();

  const dietaryFilterTags = ['all', 'Signature', 'Vegan', 'Gluten-Free', 'House Favorite', 'Bestseller'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const nameMatch = item.name.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const notesMatch = item.tastingNotes?.some((n) => n.toLowerCase().includes(query));
      const searchMatch = !query || nameMatch || descMatch || notesMatch;

      // Tag match
      const tagMatch =
        selectedTag === 'all' ||
        item.tags?.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

      return categoryMatch && searchMatch && tagMatch;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const handleQuickAdd = (item: MenuItem) => {
    const isCold = item.category === 'iced-coffee';
    const isCoffee = item.category === 'hot-coffee' || item.category === 'iced-coffee';
    
    addToCart({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      milkChoice: isCoffee && !item.name.includes('Americano') && !item.name.includes('Aeropress') ? 'Whole Milk' : undefined,
      temperature: isCold ? 'Iced' : (isCoffee ? 'Hot' : undefined)
    });
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-coffee-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-900 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Café & Roastery Fare</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            The Interactive Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
            Every item is prepared fresh to order using single-origin estates, farm-fresh dairy and nut milks, and artisanal bakeries.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10 sm:mb-12">
          {/* Search Input (Complies with Modern Web Guidance: accessible label, clear on input, min 48px touch target) */}
          <div className="max-w-md mx-auto relative">
            <label htmlFor="menu-search-input" className="sr-only">
              Search menu by coffee, flavor notes, or breakfast items
            </label>
            <div className="relative">
              <input
                id="menu-search-input"
                name="menuSearch"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search espresso, cold brew, matcha, avocado..."
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="w-full min-h-[48px] pl-11 pr-4 rounded-2xl bg-coffee-900 border border-coffee-750 text-ivory-50 placeholder:text-coffee-400 text-sm focus:border-caramel-500 transition-colors shadow-inner"
              />
              <Search className="w-4 h-4 text-caramel-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded bg-coffee-800 text-coffee-300 hover:text-ivory-50"
                  aria-label="Clear search query"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs: Mobile friendly horizontal scrolling with no awkward shrink */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 py-1">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-caramel-500 to-copper-500 text-coffee-950 shadow-md shadow-caramel-500/25'
                    : 'bg-coffee-900 hover:bg-coffee-850 text-coffee-300 hover:text-ivory-100 border border-coffee-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-1.5 py-1">
            <span className="text-[11px] uppercase tracking-wider text-coffee-400 font-mono mr-1 hidden sm:inline">
              Filter:
            </span>
            {dietaryFilterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`min-h-[36px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-caramel-500/20 text-caramel-300 border border-caramel-500/40'
                    : 'bg-coffee-900/60 text-coffee-300 hover:text-ivory-200 border border-coffee-800/80'
                }`}
              >
                {tag === 'all' ? 'All Tags' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-3xl max-w-md mx-auto">
            <Flame className="w-10 h-10 text-caramel-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-ivory-50">No Menu Items Found</h3>
            <p className="text-xs text-coffee-300 mt-1 max-w-xs mx-auto">
              We couldn't find items matching "{searchQuery}". Try searching for 'espresso', 'cold brew', or clear your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedTag('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-caramel-500 text-coffee-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-3xl p-4 sm:p-5 flex flex-col justify-between border border-coffee-800/90 hover:border-caramel-500/35 transition-all shadow-lg group"
                >
                  <div className="flex gap-4">
                    {/* Square Image Thumbnail */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-coffee-900 shrink-0 border border-coffee-750">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {item.isSignature && (
                        <div className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-caramel-400 ring-2 ring-coffee-950" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-ivory-50 group-hover:text-caramel-300 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-serif font-bold text-base sm:text-lg text-caramel-400 shrink-0">
                          {cafeConfig.currencySymbol}{item.price}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-coffee-200 line-clamp-2 font-light leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-coffee-850 text-coffee-300 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                          {item.calories && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-coffee-850/60 text-coffee-400 font-mono">
                              {item.calories} kcal
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-4 pt-3 border-t border-coffee-800/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-coffee-300 truncate">
                      {item.tastingNotes ? (
                        <span className="truncate">Notes: {item.tastingNotes.join(', ')}</span>
                      ) : (
                        <span>Freshly prepared</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {/* Customize button */}
                      {(item.category === 'hot-coffee' || item.category === 'iced-coffee') && (
                        <button
                          type="button"
                          onClick={() => setActiveItemForCustomization(item)}
                          className="p-2 rounded-xl bg-coffee-850 hover:bg-coffee-800 text-coffee-300 hover:text-caramel-400 transition-colors"
                          title="Customize Options"
                          aria-label={`Customize ${item.name}`}
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {/* Quick Add Button */}
                      <button
                        type="button"
                        onClick={() => handleQuickAdd(item)}
                        className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-caramel-500 hover:bg-caramel-400 active:scale-95 text-coffee-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                        aria-label={`Add ${item.name} to order`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
