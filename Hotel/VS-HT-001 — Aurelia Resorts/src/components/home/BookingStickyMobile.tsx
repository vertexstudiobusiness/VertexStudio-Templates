import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import type { CurrencyCode } from '../../types';
import { formatPrice } from '../../utils/formatters';

interface BookingStickyMobileProps {
  onOpenBooking: () => void;
  currentCurrency: CurrencyCode;
}

export const BookingStickyMobile: React.FC<BookingStickyMobileProps> = ({
  onOpenBooking,
  currentCurrency,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#061410]/95 backdrop-blur-lg border-t border-[#c5a880]/30 px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-sans">
            Luxury Rates From
          </div>
          <div className="font-serif text-lg font-semibold text-[#fcfbf9] leading-tight">
            {formatPrice(28500, currentCurrency)}
            <span className="text-[10px] text-stone-400 font-sans font-normal"> / nt</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Concierge"
            className="p-3 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="min-h-[44px] px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] text-[#05130f] font-sans text-xs tracking-[0.16em] uppercase font-bold shadow-md active:scale-95 flex items-center space-x-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Stay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
