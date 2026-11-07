import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import {
  Calendar,
  MessageCircle,
  Phone,
  Sparkles,
  ChevronUp
} from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { openBookingModal, formatPrice, sendWhatsAppEnquiry } = useHotel();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once user scrolls past 320px (past hero)
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick mobile booking and concierge"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden animate-slide-up"
    >
      {/* Top ornamental golden hairline */}
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="bg-walnut-950/95 backdrop-blur-lg border-t border-gold-400/30 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]">
        <div className="max-w-md mx-auto flex items-center justify-between gap-2">
          {/* Quick WhatsApp Concierge Button */}
          <button
            onClick={() => sendWhatsAppEnquiry("Namaste Concierge, I would like to enquire about room availability at Rajmahal Heritage.")}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 active:scale-95 transition min-w-[54px] min-h-[46px]"
            title="Chat with Royal Concierge on WhatsApp"
            aria-label="Chat with Royal Concierge on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span className="text-[9px] font-serif uppercase tracking-wider mt-0.5 font-bold">
              Chat
            </span>
          </button>

          {/* Quick Call Concierge Button */}
          <a
            href={`tel:${HOTEL_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-walnut-900 border border-gold-400/30 text-gold-300 active:scale-95 transition min-w-[54px] min-h-[46px]"
            title="Call Royal Concierge"
            aria-label="Call Royal Concierge"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span className="text-[9px] font-serif uppercase tracking-wider mt-0.5">
              Call
            </span>
          </a>

          {/* Primary Mobile Booking CTA Button */}
          <button
            onClick={() => openBookingModal()}
            className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 active:scale-[0.98] text-walnut-950 font-serif font-bold shadow-royal-gold transition min-h-[46px]"
          >
            <div className="flex items-center gap-1.5 text-left">
              <Calendar className="w-4 h-4 text-walnut-950 shrink-0" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider font-extrabold leading-none">
                  Book Royal Stay
                </span>
                <span className="block text-[9px] font-sans text-walnut-800 font-semibold mt-0.5 leading-none">
                  From {formatPrice(28000)}/night
                </span>
              </div>
            </div>
            <span className="w-6 h-6 rounded-full bg-walnut-950/15 flex items-center justify-center text-walnut-950 font-bold text-xs">
              →
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

