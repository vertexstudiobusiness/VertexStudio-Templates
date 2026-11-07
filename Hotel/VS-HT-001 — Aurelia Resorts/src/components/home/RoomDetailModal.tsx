import React, { useState } from 'react';
import type { Room, CurrencyCode } from '../../types';
import { ModalDialog } from '../common/ModalDialog';
import { formatPrice, generateWhatsAppLink } from '../../utils/formatters';
import {
  Bath,
  Coffee,
  Wifi,
  Sparkles,
  Volume2,
  Wine,
  Sun,
  ConciergeBell,
  Wind,
  Waves,
  Car,
  Home,
  Check,
  MessageSquare,
  Calendar,
  Users,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  onReserveRoom: (roomName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  currentCurrency,
  onReserveRoom,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'bath': return <Bath className="w-4 h-4 text-[#c5a880]" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-[#c5a880]" />;
      case 'wifi': return <Wifi className="w-4 h-4 text-[#c5a880]" />;
      case 'sparkles': return <Sparkles className="w-4 h-4 text-[#c5a880]" />;
      case 'volume-2': return <Volume2 className="w-4 h-4 text-[#c5a880]" />;
      case 'wine': return <Wine className="w-4 h-4 text-[#c5a880]" />;
      case 'sun': return <Sun className="w-4 h-4 text-[#c5a880]" />;
      case 'concierge-bell': return <ConciergeBell className="w-4 h-4 text-[#c5a880]" />;
      case 'wind': return <Wind className="w-4 h-4 text-[#c5a880]" />;
      case 'waves': return <Waves className="w-4 h-4 text-[#c5a880]" />;
      case 'car': return <Car className="w-4 h-4 text-[#c5a880]" />;
      default: return <Home className="w-4 h-4 text-[#c5a880]" />;
    }
  };

  const whatsappUrl = generateWhatsAppLink({
    roomName: room.name,
    checkIn: '',
    checkOut: '',
    adults: room.maxGuests.adults,
    children: room.maxGuests.children,
  });

  return (
    <ModalDialog
      isOpen={isOpen}
      onClose={onClose}
      titleId="room-detail-modal-title"
      title={room.name}
      maxWidthClass="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Image Gallery Showcase */}
        <div className="relative rounded-xl overflow-hidden bg-black/10">
          <img
            src={room.galleryImages[activeImageIndex] || room.featuredImage}
            alt={room.name}
            className="w-full h-64 sm:h-96 object-cover transition-all duration-500"
          />

          {/* Navigation buttons for gallery */}
          {room.galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? room.galleryImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === room.galleryImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Thumbnails strip */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 px-4 overflow-x-auto py-1">
            {room.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-[#dfbe85] scale-105' : 'border-white/50 opacity-70'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Room Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#c5a880]/20 gap-4">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-sans text-[#937345] font-semibold">
              {room.categoryLabel} • {room.view}
            </span>
            <p className="font-serif italic text-base text-[#1c5246] mt-1">{room.tagline}</p>
          </div>

          <div className="text-left sm:text-right">
            <div className="text-xs uppercase tracking-wider text-stone-500 font-sans">Starting from</div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#0b251f]">
              {formatPrice(room.pricePerNightINR, currentCurrency)}
              <span className="text-xs font-sans text-stone-500 font-normal"> / night + taxes</span>
            </div>
          </div>
        </div>

        {/* Quick Specs Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f7f4ee] p-4 rounded-xl border border-[#c5a880]/20">
          <div className="flex items-center space-x-2 text-xs text-[#143d34]">
            <Maximize2 className="w-4 h-4 text-[#c5a880]" />
            <span>{room.sizeSqFt} sq ft ({room.sizeSqM} m²)</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#143d34]">
            <Users className="w-4 h-4 text-[#c5a880]" />
            <span>Up to {room.maxGuests.adults} Adults, {room.maxGuests.children} Child</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#143d34]">
            <Sun className="w-4 h-4 text-[#c5a880]" />
            <span>{room.view}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#143d34]">
            <Home className="w-4 h-4 text-[#c5a880]" />
            <span>{room.bedConfiguration}</span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-medium text-[#0b251f]">Sanctuary Overview</h4>
          <p className="text-sm text-[#1c5246] leading-relaxed">{room.description}</p>
        </div>

        {/* Inclusions & Highlights */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-medium text-[#0b251f]">Exclusive Privileges & Inclusions</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {room.highlights.map((h, i) => (
              <div key={i} className="flex items-start space-x-2.5 text-xs text-[#143d34]">
                <Check className="w-4 h-4 text-[#937345] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Curated Amenities */}
        <div className="space-y-3">
          <h4 className="font-serif text-lg font-medium text-[#0b251f]">Tailored Amenities</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {room.amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center space-x-2.5 text-xs text-[#1c5246] bg-white p-2.5 rounded-lg border border-[#c5a880]/15">
                {renderAmenityIcon(amenity.iconName)}
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking CTAs */}
        <div className="pt-6 border-t border-[#c5a880]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-emerald-600/40 text-emerald-800 hover:bg-emerald-50 text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Enquire via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onReserveRoom(room.name);
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] font-sans text-xs tracking-[0.18em] uppercase font-bold shadow-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve {room.name}</span>
          </button>
        </div>
      </div>
    </ModalDialog>
  );
};
