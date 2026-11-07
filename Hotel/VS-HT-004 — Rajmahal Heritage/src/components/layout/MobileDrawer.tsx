import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  X,
  Phone,
  MessageCircle,
  Calendar,
  Volume2,
  VolumeX,
  MapPin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const {
    currentCurrency,
    setCurrency,
    openBookingModal,
    isAudioPlaying,
    toggleAudio,
    sendWhatsAppEnquiry,
  } = useHotel();

  if (!isOpen) return null;

  const navLinks = [
    { name: 'The Palace & Heritage', href: '#palace-heritage', subtitle: 'History & Architectural Lore' },
    { name: 'Rooms & Suites', href: '#rooms', subtitle: 'Imperial Sanctuaries' },
    { name: 'Royal Experiences', href: '#experiences', subtitle: 'Curated Cultural Moments' },
    { name: 'Royal Dining', href: '#dining', subtitle: 'Authentic Mewari Gastronomy' },
    { name: 'Palace Architecture', href: '#architecture', subtitle: 'Courtyards & Cusped Arches' },
    { name: 'Weddings & Celebrations', href: '#celebrations', subtitle: 'Regal Destination Venues' },
    { name: 'Special Stay Packages', href: '#packages', subtitle: 'Curated Palace Offers' },
    { name: 'Palace Gallery', href: '#gallery', subtitle: 'Visual Grandeur' },
    { name: 'Guest Accolades', href: '#testimonials', subtitle: 'Words from Honoured Patrons' },
    { name: 'Location & Arrival', href: '#contact', subtitle: 'Foothills of Aravali, Rajasthan' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-walnut-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Drawer (Designed specifically for 375px - 430px phones) */}
      <div className="absolute inset-y-0 right-0 max-w-full w-full sm:w-96 bg-gradient-to-b from-maroon-950 via-walnut-950 to-walnut-950 text-ivory-100 shadow-2xl flex flex-col border-l border-gold-400/30 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gold-400/20 bg-walnut-950/60 sticky top-0 z-20 backdrop-blur-sm">
          <CrestLogo variant="light" size="sm" showSubtitle={false} />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gold-300 hover:text-ivory-50 rounded-full hover:bg-white/10 transition"
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Currency & Audio Quick Bar */}
        <div className="px-5 py-3 bg-walnut-900/50 border-b border-gold-400/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-sandstone-300 text-[11px] uppercase tracking-wider">Currency:</span>
            <div className="flex items-center gap-1 bg-maroon-950/80 p-0.5 rounded border border-gold-400/30">
              {HOTEL_CONFIG.currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-serif transition ${
                    currentCurrency === curr.code
                      ? 'bg-gold-500 text-walnut-950 font-bold'
                      : 'text-sandstone-300 hover:text-ivory-50'
                  }`}
                >
                  {curr.code}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={toggleAudio}
            className="flex items-center gap-1.5 text-gold-300 hover:text-ivory-50 text-[11px] tracking-wide"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span>Music: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-sandstone-400" />
                <span className="text-sandstone-400">Music: Off</span>
              </>
            )}
          </button>
        </div>

        {/* Primary CTA Button for Mobile */}
        <div className="p-4 bg-maroon-900/30 border-b border-gold-400/20">
          <button
            onClick={() => {
              onClose();
              openBookingModal();
            }}
            className="w-full py-3 px-4 rounded bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-walnut-950 font-serif font-bold uppercase tracking-[0.2em] text-xs shadow-royal-gold flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] transition"
          >
            <Calendar className="w-4 h-4 text-walnut-950" />
            <span>Check Availability & Rates</span>
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 py-4 px-4 space-y-1">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-maroon-900/40 border border-transparent hover:border-gold-400/20 transition-all group min-h-[48px]"
            >
              <div>
                <span className="block font-serif text-base text-ivory-100 group-hover:text-gold-200 transition-colors">
                  {item.name}
                </span>
                <span className="block text-[11px] text-sandstone-400/90 tracking-wide font-sans mt-0.5">
                  {item.subtitle}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gold-400/50 group-hover:text-gold-300 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Drawer Footer with Immediate Concierge Connect */}
        <div className="p-5 border-t border-gold-400/20 bg-walnut-950 text-xs space-y-3">
          <p className="font-serif text-gold-300 uppercase tracking-widest text-center text-[11px]">
            Palace Royal Concierge
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${HOTEL_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-walnut-900 border border-gold-400/30 text-sandstone-200 hover:text-gold-200 hover:border-gold-400 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Concierge</span>
            </a>
            <button
              onClick={() => {
                sendWhatsAppEnquiry("Namaste Concierge, I am interested in reserving an imperial stay at Rajmahal Heritage.");
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-emerald-900/80 border border-emerald-600/40 text-emerald-200 hover:bg-emerald-800 min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </button>
          </div>

          <div className="text-center text-[10px] text-sandstone-400/80 pt-2 border-t border-walnut-800">
            {HOTEL_CONFIG.location.address}, {HOTEL_CONFIG.location.city}
          </div>
        </div>
      </div>
    </div>
  );
};
