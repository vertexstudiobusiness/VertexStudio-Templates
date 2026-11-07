import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { Room } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  X,
  Maximize2,
  Users,
  Bed,
  Eye,
  CheckCircle,
  Calendar,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const RoomDetailModal: React.FC = () => {
  const {
    isRoomModalOpen,
    activeRoom,
    closeRoomModal,
    openBookingModal,
    formatPrice,
    sendWhatsAppEnquiry
  } = useHotel();

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!isRoomModalOpen || !activeRoom) return null;

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % activeRoom.images.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + activeRoom.images.length) % activeRoom.images.length);
  };

  const handleBookFromModal = () => {
    const roomId = activeRoom.id;
    closeRoomModal();
    openBookingModal(roomId);
  };

  const handleWhatsAppEnquiry = () => {
    const msg = `*Namaste Concierge,*
I am interested in reserving the *${activeRoom.name}* (${formatPrice(activeRoom.priceINR)}/night) at Rajmahal Heritage.
Please share availability and package inclusions.`;
    sendWhatsAppEnquiry(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-walnut-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-ivory-50 text-walnut-900 border border-gold-400/50 rounded-2xl shadow-2xl my-auto overflow-hidden royal-border-gold flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-maroon-950 via-maroon-900 to-walnut-950 text-ivory-50 flex items-center justify-between border-b border-gold-400/30 sticky top-0 z-20">
          <div>
            <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-gold-400">
              {activeRoom.categoryLabel} • {activeRoom.floor}
            </span>
            <h2 className="font-display text-lg sm:text-2xl text-ivory-50 font-bold tracking-wide">
              {activeRoom.name}
            </h2>
          </div>
          <button
            onClick={closeRoomModal}
            className="p-1.5 text-sandstone-300 hover:text-white rounded-full hover:bg-white/10 transition"
            aria-label="Close room details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* Gallery Carousel */}
          <div className="relative rounded-xl overflow-hidden bg-walnut-950 aspect-[16/9] sm:aspect-[21/9] shadow-inner">
            <img
              src={activeRoom.images[activeImgIndex]}
              alt={`${activeRoom.name} photo ${activeImgIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Controls */}
            {activeRoom.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-walnut-950/70 hover:bg-walnut-950 text-gold-300 border border-gold-400/40 transition shadow-lg"
                  aria-label="Previous room photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-walnut-950/70 hover:bg-walnut-950 text-gold-300 border border-gold-400/40 transition shadow-lg"
                  aria-label="Next room photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Counter */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-walnut-950/80 border border-gold-400/30 text-gold-200 text-xs font-mono">
              {activeImgIndex + 1} / {activeRoom.images.length}
            </div>

            {/* Inset Badge */}
            {activeRoom.badge && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-maroon-900/90 border border-gold-400/50 text-gold-200 text-xs font-serif uppercase tracking-widest font-bold">
                {activeRoom.badge}
              </div>
            )}
          </div>

          {/* Quick Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-sandstone-100/70 p-3.5 rounded-xl border border-sandstone-300 text-xs">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <p className="text-walnut-500 font-sans">Chamber Area</p>
                <p className="font-bold text-walnut-900 font-serif">{activeRoom.sizeSqFt} sq. ft.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <p className="text-walnut-500 font-sans">Capacity</p>
                <p className="font-bold text-walnut-900 font-serif">Up to {activeRoom.maxGuests} Guests</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <p className="text-walnut-500 font-sans">Imperial Bed</p>
                <p className="font-bold text-walnut-900 font-serif">{activeRoom.bedType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <p className="text-walnut-500 font-sans">Palace View</p>
                <p className="font-bold text-walnut-900 font-serif truncate">{activeRoom.view}</p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-maroon-950 uppercase tracking-wider">
              Chamber Lore & Architecture
            </h3>
            <p className="text-sm text-walnut-700 leading-relaxed font-sans">
              {activeRoom.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold text-maroon-900 uppercase tracking-widest">
              Signature Royal Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeRoom.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-walnut-800 bg-white p-2 rounded border border-sandstone-200">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-2.5">
            <h4 className="font-display text-xs font-bold text-maroon-900 uppercase tracking-widest">
              Imperial Amenities & Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {activeRoom.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-walnut-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA & Pricing */}
        <div className="p-4 sm:p-5 bg-sandstone-100/90 border-t border-sandstone-300 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div>
            <span className="text-xs text-walnut-500 uppercase tracking-wider font-serif">Starting from</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-black text-maroon-950">
                {formatPrice(activeRoom.priceINR)}
              </span>
              <span className="text-xs text-walnut-500 font-sans">/ night + taxes</span>
            </div>
            <p className="text-[10px] text-emerald-800 flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3" />
              Includes 24/7 Imperial Butler & Daily Royal Breakfast
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppEnquiry}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-ivory-50 text-xs font-serif uppercase tracking-wider font-semibold transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleBookFromModal}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-gold-200 text-xs font-serif uppercase tracking-[0.2em] font-bold shadow-royal transition"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Reserve Suite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
