import React from 'react';
import { Coffee, MessageSquare, ArrowRight } from 'lucide-react';
import { CAFE_INFO } from '../data/mockData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onViewMenu: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking, onViewMenu }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden px-3 py-2.5 bg-sand-50/95 backdrop-blur-lg border-t border-sand-300 shadow-elevated safe-bottom-padding">
      <div className="max-w-md mx-auto flex items-center gap-2">
        
        {/* WhatsApp Quick Icon Button */}
        <a
          href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20The%20Daily%20Grind,%20I%20would%20like%20to%20check%20seat%20availability%20for%20today.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex flex-col items-center justify-center hover:bg-emerald-100 transition-colors flex-shrink-0 active:scale-95"
          aria-label="WhatsApp Host"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span className="text-[9px] font-bold text-emerald-900 mt-0.5">Chat</span>
        </a>

        {/* View Menu Button */}
        <button
          type="button"
          onClick={onViewMenu}
          className="w-14 h-12 rounded-xl bg-sand-200/90 border border-sand-300 text-charcoal-800 flex flex-col items-center justify-center hover:bg-sand-300 transition-colors flex-shrink-0 active:scale-95"
        >
          <Coffee className="w-5 h-5 text-wood-700" />
          <span className="text-[9px] font-bold text-charcoal-800 mt-0.5">Menu</span>
        </button>

        {/* Primary Action: Book Desk Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 h-12 px-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 font-semibold text-xs sm:text-sm flex items-center justify-between shadow-md active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <span className="block text-xs font-bold leading-none">Reserve a Seat</span>
            <span className="text-[10px] text-ambercrema font-normal mt-0.5 block">
              ₹200 Café Credit Incl.
            </span>
          </div>
          <div className="w-7 h-7 rounded-lg bg-charcoal-800 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-ambercrema" />
          </div>
        </button>

      </div>
    </div>
  );
};
