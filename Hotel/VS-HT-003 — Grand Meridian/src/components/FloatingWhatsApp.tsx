import React from 'react';
import { MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Grand Meridian VIP Concierge, I would like to enquire about availability, corporate rates, and hotel amenities.'
  )}`;

  return (
    <aside 
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-2xl shadow-emerald-900/40 hover:shadow-emerald-600/50 transition-all duration-300 border border-emerald-400/40 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageSquare className="w-5 h-5 text-white fill-white" />

        {/* Label (Visible on small screens and desktop) */}
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          WhatsApp Concierge
        </span>
      </a>
    </aside>
  );
};
