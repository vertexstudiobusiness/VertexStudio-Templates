import React, { useState, useEffect } from 'react';
import { Menu, Search, Heart, ShoppingBag, Sparkles, ChevronDown } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CategoryId } from '../../types';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
    setIsSizeGuideOpen,
    activeCategory,
    activeView,
    setActiveCategory,
    setActiveView
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (category: CategoryId, view: 'home' | 'catalog' | 'festive' | 'lookbook' = 'catalog') => {
    setActiveCategory(category);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'New In', category: 'all' as CategoryId, view: 'catalog' as const },
    { label: 'Dresses', category: 'dresses' as CategoryId, view: 'catalog' as const },
    { label: 'Festive Noor', category: 'ethnic-wear' as CategoryId, view: 'festive' as const, isPill: true },
    { label: 'Ethnic Wear', category: 'ethnic-wear' as CategoryId, view: 'catalog' as const },
    { label: 'Co-ord Sets', category: 'co-ords' as CategoryId, view: 'catalog' as const },
    { label: 'Tops', category: 'tops' as CategoryId, view: 'catalog' as const },
    { label: 'Bottoms', category: 'bottoms' as CategoryId, view: 'catalog' as const },
    { label: 'Accessories', category: 'accessories' as CategoryId, view: 'catalog' as const },
    { label: 'Lookbook', category: 'all' as CategoryId, view: 'lookbook' as const },
    { label: 'Sale', category: 'sale' as CategoryId, view: 'catalog' as const, isSale: true }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#D8CFBE]/60 py-2.5'
          : 'bg-[#FAF8F5] border-b border-[#D8CFBE]/40 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* MOBILE LEFT: Hamburger & Search */}
          <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#261B14] hover:text-[#B77B6E] focus:outline-none transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#261B14] hover:text-[#B77B6E] focus:outline-none transition-colors"
              aria-label="Search collection"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* BRAND LOGO */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <button
              onClick={() => {
                setActiveView('home');
                setActiveCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex flex-col items-center lg:items-start text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl lg:text-3xl font-normal tracking-[0.18em] text-[#261B14] group-hover:text-[#5A4232] transition-colors uppercase">
                LUNA
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.38em] text-[#5A4232] uppercase -mt-1 font-medium font-sans">
                COLLECTIVE
              </span>
            </button>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navItems.map((item) => {
              const isActive =
                (item.view === 'catalog' && activeView === 'catalog' && activeCategory === item.category) ||
                (item.view === 'festive' && activeView === 'festive') ||
                (item.view === 'lookbook' && activeView === 'lookbook');

              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.category, item.view)}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#261B14] font-semibold'
                      : 'text-[#5A4232] hover:text-[#261B14]'
                  } ${
                    item.isPill
                      ? 'bg-[#F7EBE8] text-[#B77B6E] px-2.5 py-1 rounded-full font-semibold border border-[#D4A59A]/40 hover:bg-[#E8D3CE]'
                      : ''
                  } ${
                    item.isSale
                      ? 'text-[#B77B6E] font-semibold'
                      : ''
                  }`}
                >
                  {item.label}
                  {isActive && !item.isPill && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#3D2B1F] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT ACTION ICONS */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Desktop Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D8CFBE] text-xs text-[#5A4232] hover:border-[#3D2B1F] hover:text-[#261B14] transition-all bg-[#FAF8F5]"
              aria-label="Search dresses, kurtas, co-ords"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="tracking-wide">Search collection...</span>
              <kbd className="text-[10px] bg-[#EFE9E0] px-1.5 py-0.5 rounded text-[#5A4232]">⌘K</kbd>
            </button>

            {/* Size Guide quick link */}
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="hidden xl:inline-flex text-[11px] uppercase tracking-wider text-[#5A4232] hover:text-[#261B14] px-2 py-1 transition-colors"
            >
              Size Guide
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 text-[#261B14] hover:text-[#B77B6E] transition-colors relative"
              aria-label={`Wishlist (${wishlist.length} items)`}
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B77B6E] text-white text-[10px] font-semibold rounded-full flex items-center justify-center animate-scale">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#261B14] hover:text-[#B77B6E] transition-colors relative flex items-center gap-1.5 group"
              aria-label={`Shopping Bag (${cartCount} items)`}
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#3D2B1F] text-[#FAF8F5] text-[10px] font-semibold rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline-block text-xs font-semibold tracking-wider text-[#3D2B1F] group-hover:text-[#B77B6E]">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
