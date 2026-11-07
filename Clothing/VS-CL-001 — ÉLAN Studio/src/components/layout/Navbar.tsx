import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
    isMobileMenuOpen,
    setActiveCategory,
    resetFilters
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (category: string, elementId?: string) => {
    if (elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActiveCategory(category as any);
    const catalogEl = document.getElementById('catalogue-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#080706] text-[#c5a880] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] py-2 px-3 border-b border-[#282521] text-center font-medium overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span className="hidden md:inline-block">HAUTE COUTURE & READY-TO-WEAR</span>
          <span className="hidden md:inline-block text-[#52493d]">•</span>
          <p className="truncate">
            Complimentary White-Glove Delivery Across India • International Express Shipping
          </p>
          <span className="hidden lg:inline-block text-[#52493d]">•</span>
          <span className="hidden lg:inline-block text-[#ded6c9]/70">DELHI & MUMBAI PRIVATE SALONS</span>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0c0b0a]/92 backdrop-blur-xl border-[#282521] shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#0c0b0a]/90 via-[#0c0b0a]/60 to-transparent border-transparent py-4 sm:py-5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Left: Mobile Hamburger or Desktop Category Links */}
            <div className="flex items-center gap-6">
              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -ml-2 text-[#faf7f2] hover:text-[#c5a880] transition-colors focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
                aria-label={isMobileMenuOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] font-medium text-[#ded6c9]">
                <button
                  onClick={() => handleNavClick('All', 'catalogue-section')}
                  className="hover:text-[#c5a880] transition-colors py-1 cursor-pointer"
                >
                  New Arrivals
                </button>
                <button
                  onClick={() => handleNavClick('Women')}
                  className="hover:text-[#c5a880] transition-colors py-1 cursor-pointer"
                >
                  Women
                </button>
                <button
                  onClick={() => handleNavClick('Men')}
                  className="hover:text-[#c5a880] transition-colors py-1 cursor-pointer"
                >
                  Men
                </button>
                <button
                  onClick={() => handleNavClick('All', 'featured-collection')}
                  className="hover:text-[#c5a880] transition-colors py-1 cursor-pointer"
                >
                  Collections
                </button>
                <button
                  onClick={() => handleNavClick('All', 'brand-philosophy')}
                  className="hover:text-[#c5a880] transition-colors py-1 cursor-pointer"
                >
                  About Atelier
                </button>
              </div>
            </div>

            {/* Center: Brand Wordmark */}
            <div className="text-center flex-1 lg:flex-none">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  resetFilters();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block group focus:outline-none"
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-[32px] tracking-[0.22em] text-[#faf7f2] font-normal uppercase transition-colors group-hover:text-[#c5a880]">
                  ÉLAN
                </span>
                <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.45em] text-[#c5a880] font-light -mt-0.5">
                  STUDIO
                </span>
              </a>
            </div>

            {/* Right: Actions (Currency, Search, Wishlist, Bag) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Currency Selector (INR) */}
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#948b7e] border border-[#282521] rounded-none">
                INR (₹)
              </span>

              {/* Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#faf7f2] hover:text-[#c5a880] transition-colors focus:outline-none"
                aria-label="Search garments and collections"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-[#faf7f2] hover:text-[#c5a880] transition-colors focus:outline-none"
                aria-label={`Wishlist with ${wishlist.length} saved pieces`}
              >
                <Heart className="w-5 h-5" aria-hidden="true" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#c5a880] text-[#0c0b0a] text-[9px] font-bold flex items-center justify-center leading-none">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#faf7f2] hover:text-[#c5a880] transition-colors focus:outline-none flex items-center gap-1.5"
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#faf7f2] text-[#0c0b0a] text-[9px] font-bold flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
                <span className="hidden xl:inline text-[11px] uppercase tracking-widest text-[#faf7f2] font-medium ml-1">
                  Bag ({cartCount})
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
