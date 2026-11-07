import React, { useState } from 'react';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { useCart } from '../context/CartContext';
import { MapPin, Clock, Phone, MessageCircle, Mail, Copy, Check, Navigation, CalendarCheck, Wifi, Car } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const { setIsReservationModalOpen } = useCart();
  const [copied, setCopied] = useState(false);

  const fullAddress = `${CAFE_CONFIG.address.street}, ${CAFE_CONFIG.address.neighborhood}, ${CAFE_CONFIG.address.city} - ${CAFE_CONFIG.address.postalCode}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F7F3EB] border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#4F5E4B] font-semibold block">
            Visit Our Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
            Hours & Location
          </h2>
          <div className="w-12 h-[1.5px] bg-[#B86749] mx-auto mt-3" />
          <p className="text-[#5C473A] text-xs sm:text-sm md:text-base leading-relaxed font-light pt-1">
            Find us tucked behind the olive trees on Pali Hill. Walk-ins are always warmly welcomed; table reservations available for parties of two or more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Details & Information Card (Left 5 cols) */}
          <div className="lg:col-span-5 bg-[#FBF8F3] p-5 sm:p-10 rounded-sm border border-[#EFE8DC] flex flex-col justify-between text-left space-y-6 sm:space-y-8 shadow-sm">
            
            {/* Address */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#4F5E4B]">
                <MapPin className="w-4 h-4 text-[#B86749]" />
                <span>Our Address</span>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#1C1511] leading-snug">
                {CAFE_CONFIG.address.street}
              </p>
              <p className="text-xs sm:text-sm text-[#5C473A] font-light">
                {CAFE_CONFIG.address.neighborhood}, {CAFE_CONFIG.address.city} — {CAFE_CONFIG.address.postalCode}
              </p>
              <p className="text-[11px] sm:text-xs text-[#7E6251] italic">
                {CAFE_CONFIG.address.landmark}
              </p>

              {/* Action Buttons: 2-columns on mobile, min-h-[44px] */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F7F3EB] active:bg-[#EFE8DC] border border-[#EFE8DC] rounded-sm text-xs font-medium text-[#291F18] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4F5E4B]" />
                      <span className="truncate">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7E6251]" />
                      <span className="truncate">Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={CAFE_CONFIG.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#4F5E4B] active:bg-[#3D4A3A] text-white rounded-sm text-xs font-medium transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="truncate">Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-[#EFE8DC]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#4F5E4B]">
                <Clock className="w-4 h-4 text-[#B86749]" />
                <span>Operating Hours</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#291F18]">
                <div className="flex justify-between py-1 border-b border-[#EFE8DC]/60">
                  <span className="text-[#5C473A]">Monday – Friday</span>
                  <span className="font-medium">07:30 AM – 09:30 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFE8DC]/60">
                  <span className="text-[#5C473A]">Saturday – Sunday</span>
                  <span className="font-medium">08:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#5C473A]">Fresh Bake Batches</span>
                  <span className="font-medium">07:30 AM & 02:00 PM</span>
                </div>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#7E6251] italic">
                * {CAFE_CONFIG.hours.kitchenCloses}
              </p>
            </div>

            {/* Direct Connect & Table Reservation CTA (min-h-[48px] on mobile) */}
            <div className="pt-5 sm:pt-6 border-t border-[#EFE8DC] space-y-3">
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="w-full min-h-[48px] py-3 bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB] text-xs uppercase tracking-[0.16em] font-medium rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.99]"
              >
                <CalendarCheck className="w-4 h-4 text-[#CBB99F]" />
                <span>Reserve a Table</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#5C473A] pt-1">
                <a
                  href={`tel:${CAFE_CONFIG.phone}`}
                  className="flex items-center gap-1.5 hover:text-[#1C1511] transition-colors min-h-[38px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4F5E4B]" />
                  <span>{CAFE_CONFIG.phone}</span>
                </a>
                <a
                  href={`mailto:${CAFE_CONFIG.email}`}
                  className="flex items-center gap-1.5 hover:text-[#1C1511] transition-colors min-h-[38px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#4F5E4B]" />
                  <span>{CAFE_CONFIG.email}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Aesthetic Map Placeholder (Right 7 cols) */}
          <div className="lg:col-span-7 bg-[#EFE8DC] rounded-sm overflow-hidden border border-[#EFE8DC] flex flex-col justify-between relative shadow-sm min-h-[340px] sm:min-h-[420px]">
            
            {/* Visual Neighborhood Graphic Map */}
            <div className="relative flex-1 w-full bg-[#E8DFD1] p-4 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Map grid lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#291F18" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M 0 100 Q 250 80 500 220 T 1000 300" fill="none" stroke="#D1C3B2" strokeWidth="18" />
                  <path d="M 180 0 L 320 600" fill="none" stroke="#D1C3B2" strokeWidth="14" />
                </svg>
              </div>

              {/* Map Top Amenities Badges (Compact flex on mobile) */}
              <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBF8F3]/90 backdrop-blur-sm rounded-sm text-[10px] sm:text-[11px] font-medium text-[#291F18] shadow-sm">
                  <Wifi className="w-3 h-3 text-[#4F5E4B]" />
                  <span>Fiber Wi-Fi</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBF8F3]/90 backdrop-blur-sm rounded-sm text-[10px] sm:text-[11px] font-medium text-[#291F18] shadow-sm">
                  <Car className="w-3 h-3 text-[#4F5E4B]" />
                  <span>Valet Parking</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FBF8F3]/90 backdrop-blur-sm rounded-sm text-[10px] sm:text-[11px] font-medium text-[#291F18] shadow-sm">
                  🌿 Pet Patio
                </span>
              </div>

              {/* Central Pin Motif */}
              <div className="relative z-10 my-auto py-6 sm:py-8 text-center flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#291F18] text-[#F7F3EB] flex items-center justify-center shadow-xl border-4 border-[#FBF8F3] animate-bounce">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#CBB99F]" />
                  </div>
                  <div className="w-8 h-2.5 bg-[#1C1511]/20 rounded-full blur-sm mx-auto mt-1.5" />
                </div>
                <div className="mt-3 sm:mt-4 bg-[#FBF8F3] px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm shadow-md border border-[#EFE8DC] inline-block">
                  <p className="font-serif text-base sm:text-lg font-medium text-[#1C1511]">Café Maison</p>
                  <p className="text-[10px] sm:text-[11px] text-[#7E6251]">Pali Hill • Bandra West</p>
                </div>
              </div>

              {/* Bottom Interactive Directions Link */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#D1C3B2]/80 text-[11px] sm:text-xs text-[#5C473A]">
                <span>Pali Hill, Mumbai</span>
                <a
                  href={CAFE_CONFIG.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4F5E4B] hover:text-[#293327] hover:underline flex items-center gap-1 min-h-[36px]"
                >
                  <span>Open Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Bottom Photo Snippet Banner */}
            <div className="p-3.5 sm:p-4 bg-[#291F18] text-[#F7F3EB] flex items-center justify-between text-left gap-2">
              <div className="min-w-0">
                <p className="font-serif text-xs sm:text-sm text-[#EFE8DC] truncate">Stepping by this morning?</p>
                <p className="text-[10px] sm:text-[11px] text-[#CBB99F] truncate">Warm croissants at 07:30 AM.</p>
              </div>
              <a
                href={`https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Bonjour Café Maison! Are you currently open for walk-ins?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[38px] px-3 py-1.5 bg-[#4F5E4B] active:bg-[#3D4A3A] text-white text-[10px] sm:text-[11px] uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
