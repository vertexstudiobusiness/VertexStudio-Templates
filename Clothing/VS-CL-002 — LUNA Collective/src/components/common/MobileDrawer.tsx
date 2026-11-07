import React from 'react';
import { X, ChevronRight, MessageCircle, Ruler, Sparkles, Heart, ShoppingBag, Search } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { CategoryId } from '../../types';

export const MobileDrawer: React.FC = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setActiveCategory,
    setActiveView,
    setIsSearchOpen,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSizeGuideOpen,
    wishlist,
    cartCount
  } = useShop();

  if (!isMobileMenuOpen) return null;

  const handleNavClick = (category: CategoryId, view: 'home' | 'catalog' | 'festive' | 'lookbook' = 'catalog') => {
    setActiveCategory(category);
    setActiveView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'New Arrivals', category: 'all' as CategoryId, view: 'catalog' as const, badge: 'New' },
    { label: 'Dresses', category: 'dresses' as CategoryId, view: 'catalog' as const },
    { label: 'Festive Ethnic Wear', category: 'ethnic-wear' as CategoryId, view: 'festive' as const, badge: 'Noor Edit' },
    { label: 'Co-ord Sets', category: 'co-ords' as CategoryId, view: 'catalog' as const },
    { label: 'Tops & Blouses', category: 'tops' as CategoryId, view: 'catalog' as const },
    { label: 'Bottoms & Trousers', category: 'bottoms' as CategoryId, view: 'catalog' as const },
    { label: 'Accessories', category: 'accessories' as CategoryId, view: 'catalog' as const },
    { label: 'Style Lookbook', category: 'all' as CategoryId, view: 'lookbook' as const, badge: 'Editorial' },
    { label: 'Sale Archive', category: 'sale' as CategoryId, view: 'catalog' as const, badge: 'Up to 30% Off' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Content */}
      <div className="relative w-[85%] max-w-[360px] bg-[#FAF8F5] text-[#261B14] h-full shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-[#D8CFBE]/50">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wider text-[#3D2B1F]">
              LUNA
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#5A4232] uppercase -mt-1 font-medium">
              Collective
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Icon Actions on Mobile */}
        <div className="grid grid-cols-3 divide-x divide-[#D8CFBE]/60 border-b border-[#D8CFBE]/60 bg-[#FAF8F5] text-center text-xs">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
            className="py-3 flex flex-col items-center justify-center gap-1 text-[#3D2B1F] active:bg-[#EFE9E0]"
          >
            <Search className="w-4 h-4 text-[#5A4232]" />
            <span className="text-[11px] font-medium">Search</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsWishlistOpen(true);
            }}
            className="py-3 flex flex-col items-center justify-center gap-1 text-[#3D2B1F] active:bg-[#EFE9E0] relative"
          >
            <Heart className="w-4 h-4 text-[#5A4232]" />
            <span className="text-[11px] font-medium">Saved ({wishlist.length})</span>
          </button>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
            className="py-3 flex flex-col items-center justify-center gap-1 text-[#3D2B1F] active:bg-[#EFE9E0] relative"
          >
            <ShoppingBag className="w-4 h-4 text-[#5A4232]" />
            <span className="text-[11px] font-medium">Bag ({cartCount})</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-3 px-4 overflow-y-auto divide-y divide-[#D8CFBE]/30">
          <div className="pb-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B77B6E] block mb-2 px-2">
              Collections
            </span>
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.category, item.view)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#261B14] hover:bg-[#F6F3EE] active:bg-[#EFE9E0] transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          item.badge.includes('Off') 
                            ? 'bg-[#F7EBE8] text-[#B77B6E]' 
                            : 'bg-[#3D2B1F] text-[#FAF8F5]'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#D8CFBE]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Concierge & Tools */}
          <div className="pt-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B77B6E] block mb-2 px-2">
              Boutique Services
            </span>
            <div className="space-y-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSizeGuideOpen(true);
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-[#3D2B1F] hover:bg-[#F6F3EE] active:bg-[#EFE9E0] text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Ruler className="w-4 h-4 text-[#B77B6E]" />
                  <span>Size & Fit Guide</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#D8CFBE]" />
              </button>

              <a
                href="https://wa.me/+919876543210?text=Hi%20LUNA%20Collective%2C%20I%20am%20browsing%20the%20mobile%20store%20and%20would%20love%20some%20advice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-[#3D2B1F] hover:bg-[#F6F3EE] active:bg-[#EFE9E0] text-left"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Personal Stylist on WhatsApp</span>
                </div>
                <span className="text-[10px] bg-[#E8F8EE] text-[#1E8E42] px-2 py-0.5 rounded-full font-medium">
                  Online
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-[#D8CFBE]/60 bg-[#F6F3EE] text-xs text-[#5A4232]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[#3D2B1F]">Currency: INR (₹)</span>
            <span className="text-[11px] text-[#B77B6E] flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3" /> All India Delivery
            </span>
          </div>
          <p className="text-[10px] text-[#5A4232] leading-relaxed">
            Crafted with passion in Mumbai & Jaipur. Small-batch conscious women’s fashion.
          </p>
        </div>
      </div>
    </div>
  );
};
