import React, { useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Heart, ShoppingBag, ArrowRight, PhoneCall, Sparkles, MapPin } from 'lucide-react';
import type { CategoryType } from '../../types';

interface NavItem {
  name: string;
  category?: CategoryType;
  sectionId?: string;
  badge?: string;
  image?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    name: 'New Arrivals',
    category: 'All',
    sectionId: 'catalogue-section',
    badge: 'Edition XII',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Women Haute Ready-to-Wear',
    category: 'Women',
    sectionId: 'catalogue-section',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Men Sartorial Tailoring',
    category: 'Men',
    sectionId: 'catalogue-section',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dresses & Column Gowns',
    category: 'Dresses',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Bandhgalas & Tailored Jackets',
    category: 'Jackets',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Handloom Silk & Pima Shirts',
    category: 'Shirts',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Pleated Trousers & Palazzos',
    category: 'Trousers',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Pashmina & Fine Accessories',
    category: 'Accessories',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Handmade Footwear & Mules',
    category: 'Footwear',
    sectionId: 'catalogue-section'
  },
  {
    name: 'Autumn/Winter Lookbook',
    sectionId: 'featured-collection',
    badge: 'Editorial'
  },
  {
    name: 'Artisan Heritage & Atelier',
    sectionId: 'brand-philosophy'
  }
];

export const MobileMenu: React.FC = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setActiveCategory,
    setIsSearchOpen,
    setIsWishlistOpen,
    setIsCartOpen,
    cartCount,
    wishlist,
    sendWhatsAppOrder
  } = useShop();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleItemClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    if (item.category) {
      setActiveCategory(item.category);
    }
    if (item.sectionId) {
      setTimeout(() => {
        const el = document.getElementById(item.sectionId!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-[100] lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Dimmed backdrop with light-dismiss */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="relative w-[85%] max-w-[390px] h-full bg-[#0e0d0b] text-[#faf7f2] border-r border-[#282521] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#24211d]">
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#faf7f2]">
                  ÉLAN
                </span>
                <span className="block text-[8px] uppercase tracking-[0.4em] text-[#c5a880] -mt-0.5">
                  ATELIER MENU
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-[#2e2a24] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Access Bar */}
            <div className="grid grid-cols-3 border-b border-[#24211d] bg-[#141210]/60 text-center py-2.5 text-[11px] uppercase tracking-wider text-[#ded6c9]">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex flex-col items-center gap-1 hover:text-[#c5a880] transition-colors py-1"
              >
                <Search className="w-4 h-4 text-[#c5a880]" />
                <span>Search</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWishlistOpen(true);
                }}
                className="flex flex-col items-center gap-1 hover:text-[#c5a880] transition-colors py-1 relative"
              >
                <Heart className="w-4 h-4 text-[#c5a880]" />
                <span>Saved ({wishlist.length})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex flex-col items-center gap-1 hover:text-[#c5a880] transition-colors py-1 relative"
              >
                <ShoppingBag className="w-4 h-4 text-[#c5a880]" />
                <span>Bag ({cartCount})</span>
              </button>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#948b7e] font-semibold mb-2">
                Curated Collections
              </p>

              {NAV_ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left py-2.5 px-3 -mx-3 flex items-center justify-between group hover:bg-[#1a1815] transition-colors border-b border-[#1c1a17]/50"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="w-9 h-11 object-cover border border-[#2b2721]"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <span className="font-serif text-base tracking-wide text-[#faf7f2] group-hover:text-[#c5a880] transition-colors">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="ml-2 inline-block text-[9px] uppercase tracking-wider text-[#c5a880] bg-[#c5a880]/15 px-1.5 py-0.5 font-sans font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#595247] group-hover:text-[#c5a880] group-hover:translate-x-1 transition-all" />
                </button>
              ))}

              {/* Private Salon & Concierge Section */}
              <div className="pt-6 pb-2">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#948b7e] font-semibold mb-3">
                  Private Salon & Concierge
                </p>

                <div className="p-3.5 bg-[#171512] border border-[#2b2721] space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                        VIP WhatsApp Concierge
                      </h4>
                      <p className="text-[11px] text-[#948b7e] mt-0.5 leading-relaxed">
                        Connect with our master styling team for personalized fit consultations.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sendWhatsAppOrder();
                    }}
                    className="w-full mt-2 py-2.5 px-4 bg-[#c5a880] text-[#0c0b0a] text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#dfcca6] transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Message Concierge</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer with Currency & Location */}
            <div className="p-4 border-t border-[#24211d] bg-[#0c0b0a] text-[11px] text-[#948b7e] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#ded6c9]">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Delhi • Mumbai • London</span>
              </div>
              <div className="text-[#c5a880] font-medium tracking-wider">
                INR ₹ (India)
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
