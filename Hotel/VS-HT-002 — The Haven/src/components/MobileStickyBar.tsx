import React, { useState, useEffect } from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import type { Currency } from '../types/hotel';
import { formatPrice } from '../utils/formatters';

interface MobileStickyBarProps {
  currency: Currency;
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currency,
  onOpenBooking,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick reservation bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-haven-charcoal/95 backdrop-blur-md border-t border-white/15 px-4 py-3 shadow-2xl animate-fade-in"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-haven-stone-light/80">
            From
          </span>
          <span className="font-mono text-sm font-semibold text-haven-ivory">
            {formatPrice(22000, currency)}
            <span className="text-[10px] font-normal text-haven-stone-light/70"> / nt</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* WhatsApp Quick Chat */}
          <a
            href="https://wa.me/919876543210?text=Hello%20The%20Haven"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-sm bg-white/10 hover:bg-white/20 text-haven-sand flex items-center justify-center border border-white/15 transition-colors"
            aria-label="Chat with Concierge on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-green-400" />
          </a>

          {/* Reserve Key */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="h-10 px-5 bg-haven-ivory text-haven-charcoal text-[11px] tracking-[0.18em] uppercase font-medium hover:bg-white active:scale-95 transition-all shadow-md flex items-center space-x-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Key</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
