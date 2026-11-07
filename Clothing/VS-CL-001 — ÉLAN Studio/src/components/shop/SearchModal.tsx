import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

const TRENDING_SEARCHES = [
  'Mulberry Silk',
  'Matka Silk Bandhgala',
  'Cashmere Overcoat',
  'Chanderi Slip',
  'Pleated Linen Trousers',
  'Pashmina Stole'
];

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    products,
    setSelectedProduct
  } = useShop();

  const [term, setTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTerm('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = term.trim()
    ? products.filter((p) => {
        const q = term.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabricDetails.composition.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[140] flex flex-col justify-start items-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Search ÉLAN Studio Archive"
      >
        {/* Dimmed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Search Panel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl bg-[#0e0d0b] border border-[#2b2721] shadow-2xl z-10 mt-12 sm:mt-20 overflow-hidden"
        >
          {/* Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#201d19] flex items-center gap-3">
            <Search className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search garments, noble fabrics, silhouettes..."
              className="flex-1 bg-transparent text-base sm:text-lg text-[#faf7f2] placeholder-[#736a5f] focus:outline-none"
            />
            {term && (
              <button
                type="button"
                onClick={() => setTerm('')}
                className="text-xs text-[#948b7e] hover:text-white px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="text-[#ded6c9] hover:text-[#c5a880] p-1"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions when empty */}
          {!term.trim() && (
            <div className="p-6 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#948b7e] font-semibold block">
                FREQUENTLY EXPLORED BY CLIENTS
              </span>
              <div className="flex flex-wrap gap-2">
                {TRENDING_SEARCHES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTerm(item)}
                    className="py-1.5 px-3 bg-[#141210] border border-[#24211d] text-xs text-[#ded6c9] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {term.trim() && (
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#1e1c18]">
              {results.length > 0 ? (
                <>
                  <p className="text-xs text-[#948b7e] pb-3">
                    Found <strong className="text-[#faf7f2]">{results.length}</strong> matching creations:
                  </p>
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSelectedProduct(product);
                      }}
                      className="py-3 flex items-center gap-4 cursor-pointer group hover:bg-[#141210] px-2 -mx-2 transition-colors"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-14 aspect-[3/4] object-cover bg-[#161412] border border-[#26231e]"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase tracking-wider text-[#c5a880]">
                          {product.category} • {product.gender}
                        </span>
                        <h4 className="font-serif text-base text-[#faf7f2] group-hover:text-[#c5a880] transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-[#948b7e] truncate font-light">
                          {product.fabricDetails.composition}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-[#faf7f2]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <div className="text-[10px] text-[#c5a880] flex items-center justify-end gap-1 mt-1 group-hover:translate-x-1 transition-transform">
                          <span>View Piece</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="py-12 text-center text-[#948b7e] space-y-2">
                  <p className="text-sm">No atelier pieces matched &ldquo;{term}&rdquo;</p>
                  <p className="text-xs">
                    Try searching for &quot;Silk&quot;, &quot;Bandhgala&quot;, &quot;Cashmere&quot;, or &quot;Linen&quot;.
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
