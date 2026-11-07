import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    products,
    openProductDetail,
    formatPrice
  } = useShop();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = [
    'Linen Dress',
    'Chanderi Kurta',
    'Angrakha',
    'Co-ord Set',
    'Baroque Pearls',
    'Wide-Leg Trousers',
    'Noor Festive'
  ];

  const searchResults = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabricDetails.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsSearchOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] text-[#261B14] rounded-2xl shadow-2xl border border-[#D8CFBE] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 flex items-center gap-3 border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <Search className="w-5 h-5 text-[#B77B6E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dresses, Chanderi kurtas, co-ords, silks..."
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-[#261B14] placeholder-[#5A4232]/50 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#5A4232] hover:text-[#261B14] text-xs font-semibold"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Chips */}
        {!query && (
          <div className="p-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B77B6E] block mb-2.5">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-[#F6F3EE] hover:bg-[#EFE9E0] text-[#3D2B1F] text-xs px-3.5 py-1.5 rounded-full border border-[#D8CFBE] transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#B77B6E]" />
                  <span>{term}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5A4232] block mb-2">
              {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} for "{query}"
            </span>

            {searchResults.length > 0 ? (
              searchResults.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    openProductDetail(p);
                  }}
                  className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F6F3EE] border border-transparent hover:border-[#D8CFBE] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-12 h-16 rounded-lg object-cover object-top bg-[#EFE9E0] shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-[#B77B6E] font-medium block">
                        {p.category.replace('-', ' ')}
                      </span>
                      <h4 className="font-serif text-sm font-medium text-[#261B14] group-hover:text-[#B77B6E] transition-colors truncate">
                        {p.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#261B14] font-mono mt-0.5">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D8CFBE] group-hover:text-[#261B14] group-hover:translate-x-1 transition-all mr-2 shrink-0" />
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-[#5A4232]">
                <p className="font-serif text-base text-[#261B14] mb-1">No garments found</p>
                <p className="text-xs">Try searching for "Linen", "Kurta", "Co-ord", or "Satin"</p>
              </div>
            )}
          </div>
        )}

        {/* Footer tip */}
        <div className="p-3 bg-[#F6F3EE] border-t border-[#D8CFBE]/60 text-center text-[11px] text-[#5A4232]">
          Press <kbd className="bg-white px-1.5 py-0.5 rounded border border-[#D8CFBE] text-[10px]">Esc</kbd> anytime to dismiss search
        </div>
      </div>
    </div>
  );
};
