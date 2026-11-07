import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Compass, Search, Heart, ShoppingBag } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { 
    activePage, 
    navigateTo, 
    cartCount, 
    wishlistCount, 
    setIsCartOpen, 
    setIsWishlistOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useShop();

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-brand-border/80 px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded transition-all active:scale-95 ${
            activePage === 'home'
              ? 'text-brand-orange font-bold'
              : 'text-brand-concrete hover:text-brand-offwhite'
          }`}
          aria-label="Home"
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">HOME</span>
        </button>

        {/* Drops / Shop */}
        <button
          onClick={() => navigateTo('shop', undefined, 'All')}
          className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded transition-all active:scale-95 ${
            activePage === 'shop'
              ? 'text-brand-orange font-bold'
              : 'text-brand-concrete hover:text-brand-offwhite'
          }`}
          aria-label="Drops"
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-wider uppercase">DROPS</span>
        </button>

        {/* Menu / Categories Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded transition-all active:scale-95 ${
            isMobileMenuOpen
              ? 'text-brand-orange font-bold'
              : 'text-brand-concrete hover:text-brand-offwhite'
          }`}
          aria-label="Categories Menu"
        >
          <div className="w-5 h-5 mb-0.5 flex flex-col justify-center gap-1 items-center">
            <span className="w-4 h-0.5 bg-current" />
            <span className="w-4 h-0.5 bg-current" />
            <span className="w-2.5 h-0.5 bg-brand-orange self-start ml-0.5" />
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase">MENU</span>
        </button>

        {/* Vault / Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded text-brand-concrete hover:text-brand-offwhite transition-all active:scale-95"
          aria-label="Wishlist"
        >
          <div className="relative">
            <Heart className="w-5 h-5 mb-0.5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-brand-orange text-black font-mono font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase">SAVED</span>
        </button>

        {/* Bag / Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded text-brand-offwhite transition-all active:scale-95"
          aria-label="Shopping Bag"
        >
          <div className="relative">
            <div className="bg-brand-orange text-black p-1 rounded-sm shadow-glow-orange">
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-white text-black font-mono font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-black">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-mono font-bold text-brand-orange tracking-wider uppercase mt-0.5">
            BAG
          </span>
        </button>
      </div>
    </div>
  );
};

