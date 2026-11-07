import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { UtensilsCrossed, CalendarCheck, ShoppingBag, MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { totalCount, totalPrice, setIsCartOpen, setIsReservationModalOpen } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal bottom bar once user scrolls past hero
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-3 py-2 bg-[#FBF8F3]/95 backdrop-blur-lg border-t border-[#EFE8DC] shadow-[0_-4px_20px_rgba(41,31,24,0.08)] transition-all duration-300">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
        
        {/* Jump to Menu */}
        <a
          href="#menu"
          className="min-h-[46px] flex flex-col items-center justify-center text-[#5C473A] active:text-[#1C1511] active:bg-[#EFE8DC]/60 rounded transition-colors"
        >
          <UtensilsCrossed className="w-4 h-4 text-[#7E6251]" />
          <span className="text-[10px] tracking-wider font-medium mt-0.5 uppercase">Menu</span>
        </a>

        {/* Reserve Table */}
        <button
          onClick={() => setIsReservationModalOpen(true)}
          className="min-h-[46px] flex flex-col items-center justify-center text-[#5C473A] active:text-[#1C1511] active:bg-[#EFE8DC]/60 rounded transition-colors"
        >
          <CalendarCheck className="w-4 h-4 text-[#4F5E4B]" />
          <span className="text-[10px] tracking-wider font-medium mt-0.5 uppercase">Table</span>
        </button>

        {/* Live Order Bag Pill */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="min-h-[46px] relative flex flex-col items-center justify-center text-[#291F18] active:bg-[#EFE8DC]/60 rounded transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-[#CBB99F]" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#B86749] text-white text-[9px] font-bold flex items-center justify-center leading-none">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wider font-bold mt-0.5 uppercase">
            {totalCount > 0 ? `₹${totalPrice}` : 'Bag'}
          </span>
        </button>

        {/* Direct WhatsApp Action */}
        <a
          href={`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour Café Maison! I would like to place an order.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[46px] flex flex-col items-center justify-center bg-[#4F5E4B] active:bg-[#3D4A3A] text-white rounded-sm shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] tracking-wider font-medium mt-0.5 uppercase">Order</span>
        </a>

      </div>
    </div>
  );
};
