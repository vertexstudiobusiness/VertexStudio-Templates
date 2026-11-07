import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Flame,
  Globe
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    activePage, 
    navigateTo, 
    cartCount, 
    wishlistCount, 
    setIsCartOpen, 
    setIsWishlistOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    searchQuery,
    setSearchQuery
  } = useShop();

  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop');
      setIsSearchExpanded(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-black/95 backdrop-blur-md border-b border-brand-border">
      {/* Top Mobile-Optimized Announcement Bar */}
      <div className="bg-brand-surface border-b border-brand-border/60 py-1 px-3 text-[10px] sm:text-[11px] font-mono tracking-wider overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-brand-concrete truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping shrink-0" />
            <span className="text-brand-offwhite font-bold truncate">DROP 004 // SECTOR ZERO</span>
            <span className="hidden sm:inline text-neutral-600">//</span>
            <span className="hidden sm:inline">150 PIECES PER DROP</span>
          </div>

          <div className="flex items-center gap-3 text-brand-concrete shrink-0">
            <span className="hidden md:inline">FREE EXPRESS DELIVERY &gt; ₹1,999</span>
            <span className="text-brand-orange font-bold flex items-center gap-1">
              <Globe className="w-3 h-3" /> INR (₹)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Section: Mobile Menu Trigger + Desktop Nav */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -ml-1 text-brand-offwhite hover:text-brand-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Categories */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold tracking-widest uppercase">
            <button
              onClick={() => navigateTo('shop', undefined, 'All')}
              className={`hover:text-brand-orange transition-colors relative py-1 ${
                activePage === 'shop' ? 'text-brand-orange' : 'text-brand-offwhite'
              }`}
            >
              ALL DROPS
            </button>
            <button
              onClick={() => navigateTo('shop', undefined, 'T-Shirts')}
              className="text-brand-offwhite hover:text-brand-orange transition-colors py-1"
            >
              T-SHIRTS
            </button>
            <button
              onClick={() => navigateTo('shop', undefined, 'Hoodies')}
              className="text-brand-offwhite hover:text-brand-orange transition-colors py-1"
            >
              HOODIES
            </button>
            <button
              onClick={() => navigateTo('shop', undefined, 'Bottoms')}
              className="text-brand-offwhite hover:text-brand-orange transition-colors py-1"
            >
              CARGOS & DENIM
            </button>
            <button
              onClick={() => navigateTo('shop', undefined, 'Outerwear')}
              className="text-brand-offwhite hover:text-brand-orange transition-colors py-1"
            >
              OUTERWEAR
            </button>
            <button
              onClick={() => navigateTo('shop', undefined, 'Accessories')}
              className="text-brand-offwhite hover:text-brand-orange transition-colors py-1"
            >
              ACCESSORIES
            </button>
            <button
              onClick={() => navigateTo('lookbook')}
              className={`flex items-center gap-1.5 py-1 ${
                activePage === 'lookbook' ? 'text-brand-orange' : 'text-brand-concrete hover:text-brand-orange'
              } transition-colors`}
            >
              <Flame className="w-3.5 h-3.5 text-brand-orange" />
              LOOKBOOK
            </button>
          </nav>
        </div>

        {/* Center: Brand Wordmark */}
        <div className="flex-1 lg:flex-none text-center lg:text-left">
          <button
            onClick={() => navigateTo('home')}
            className="group inline-flex flex-col items-center lg:items-start text-left focus:outline-none"
          >
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl tracking-tighter text-brand-offwhite group-hover:text-brand-orange transition-colors">
                OFFGRID<span className="text-brand-orange">®</span>
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-brand-concrete -mt-1 uppercase hidden xs:block">
              AUTONOMOUS APPAREL
            </span>
          </button>
        </div>

        {/* Right Section: Search + Wishlist + Cart */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Mobile Search Toggle */}
          <div className="relative">
            {isSearchExpanded ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search drops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-36 xs:w-48 sm:w-64 bg-brand-surface border border-brand-orange text-xs text-brand-offwhite px-2.5 py-1.5 font-mono outline-none"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded(false)}
                  className="p-1.5 text-brand-concrete hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchExpanded(true)}
                className="p-2 text-brand-offwhite hover:text-brand-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
                title="Search"
                aria-label="Search items"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Wishlist Link */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 text-brand-offwhite hover:text-brand-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
            title="Wishlist"
            aria-label="Wishlist items"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-brand-orange text-black font-mono font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-1.5 bg-brand-surface hover:bg-brand-orange hover:text-black border border-brand-border px-2.5 sm:px-4 py-1.5 sm:py-2 text-brand-offwhite transition-all min-h-[44px] active:scale-95"
            aria-label="Shopping bag"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-black font-mono font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-black">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-mono text-xs font-bold tracking-wider">
              BAG ({cartCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
