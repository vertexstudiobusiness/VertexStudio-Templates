import React, { useState, useMemo } from 'react';
import { Coffee, Search, X } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import type { MenuItem, MenuCategory, DietaryTag } from '../types';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'tea', label: 'Tea & Matcha' },
    { id: 'breakfast', label: 'Breakfast & Bowls' },
    { id: 'sandwiches', label: 'Artisan Sandwiches' },
    { id: 'snacks', label: 'Brain Snacks' },
    { id: 'desserts', label: 'Bakery & Sweets' },
  ];

  const dietaryTags: { id: string; label: string }[] = [
    { id: 'all', label: 'All Diets' },
    { id: 'veg', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'high-protein', label: 'High-Protein' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      // Tag match
      const tagMatch = selectedTag === 'all' || item.tags.includes(selectedTag as DietaryTag);
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.origin && item.origin.toLowerCase().includes(query));

      return categoryMatch && tagMatch && searchMatch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Coffee className="w-3.5 h-3.5 text-ambercrema" />
            <span>Farm-to-Cup Artisanal Kitchen</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Specialty Café &amp; Fuel Bar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Heirloom Arabica roasted in small batches, ceremonial Uji matcha, and slow-fermented sourdough designed to nourish cognitive clarity without energy spikes.
          </p>
        </div>

        {/* Filter Bar: Category Tabs + Dietary Filters + Search */}
        <div className="space-y-4 mb-10">
          
          {/* Search and Dietary Row */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search single-origin, pour-over, sourdough..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-white border border-sand-300 text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-900 focus:border-transparent transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Tags Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              <span className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider mr-1 hidden md:inline">
                Diet:
              </span>
              {dietaryTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTag === tag.id
                      ? 'bg-olive-800 text-sand-50'
                      : 'bg-sand-200/80 text-charcoal-700 hover:bg-sand-300'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Horizontal Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-sand-200/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal-900 text-sand-50 shadow-sm'
                    : 'bg-white text-charcoal-700 hover:bg-sand-200/70 border border-sand-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-sand-200 p-8">
            <Coffee className="w-10 h-10 text-charcoal-300 mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-charcoal-900">No menu items found</h4>
            <p className="text-xs text-charcoal-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or dietary filters to explore our full roastery kitchen.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTag('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-sand-200 text-charcoal-800 text-xs font-semibold hover:bg-sand-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItemModal(item)}
                className="bg-white rounded-2xl border border-sand-200/90 overflow-hidden shadow-sm hover:shadow-card hover:border-sand-300 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Image */}
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-sand-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Top tags */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                      {item.isPopular && (
                        <span className="px-2.5 py-0.5 rounded-md bg-ambercrema text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                          House Favorite
                        </span>
                      )}
                      {item.caffeine && (
                        <span className="px-2 py-0.5 rounded-md bg-charcoal-900/80 backdrop-blur-md text-sand-50 text-[10px] font-medium">
                          {item.caffeine}
                        </span>
                      )}
                    </div>

                    {/* Price tag on image */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-charcoal-900/90 backdrop-blur-md text-sand-50 text-xs font-bold font-mono">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-4 sm:p-5">
                    {item.origin && (
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ambercrema-dark mb-1">
                        {item.origin}
                      </p>
                    )}
                    <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-900 mb-1.5 group-hover:text-ambercrema-dark transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Dietary tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-sand-100 text-charcoal-700 capitalize"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2.5 sm:px-5 sm:py-3 bg-sand-50 border-t border-sand-100 flex items-center justify-between text-xs text-charcoal-600">
                  <span className="text-[11px] font-medium">Redeemable with Workspace Pass</span>
                  <span className="text-ambercrema font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Item Details Modal */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm"
              onClick={() => setActiveItemModal(null)}
            />
            <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-elevated border border-sand-300 z-10 animate-in zoom-in-95 duration-200">
              <button
                type="button"
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-charcoal-900/70 text-sand-50 flex items-center justify-center hover:bg-charcoal-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src={activeItemModal.image}
                  alt={activeItemModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    {activeItemModal.origin && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ambercrema">
                        {activeItemModal.origin}
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-bold">{activeItemModal.name}</h3>
                  </div>
                  <span className="text-xl font-bold font-mono">₹{activeItemModal.price}</span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-charcoal-700 leading-relaxed mb-4">
                  {activeItemModal.description}
                </p>

                <div className="p-3.5 rounded-xl bg-sand-100 border border-sand-200 text-xs text-charcoal-700 mb-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Dietary Profile:</span>
                    <span className="font-medium capitalize">{activeItemModal.tags.join(', ')}</span>
                  </div>
                  {activeItemModal.caffeine && (
                    <div className="flex justify-between">
                      <span className="text-charcoal-500">Caffeine Intensity:</span>
                      <span className="font-medium">{activeItemModal.caffeine}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Workspace Pass Credit:</span>
                    <span className="font-medium text-emerald-800">100% Eligible</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  className="w-full py-3 rounded-xl bg-charcoal-900 text-sand-50 font-semibold text-xs sm:text-sm hover:bg-charcoal-800 transition-colors"
                >
                  Close &amp; Back to Menu
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
