import React, { useRef, useEffect, useState } from 'react';
import { X, Check, Sparkles, MessageSquare, Shield } from 'lucide-react';
import type { Room, Currency } from '../types/hotel';
import { formatPrice, createWhatsAppUrl } from '../utils/formatters';

interface RoomDetailModalProps {
  room: Room | null;
  currency: Currency;
  onClose: () => void;
  onBookRoom: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  currency,
  onClose,
  onBookRoom,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (room) {
      if (!dialog.open) {
        dialog.showModal();
        setActiveImageIndex(0);
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [room]);

  // Handle native cancel / close
  const handleDialogClose = () => {
    onClose();
  };

  // Light dismiss fallback test for pointer position per Modern Web Guidance
  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const r = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (isOutside) {
      onClose();
    }
  };

  if (!room) return null;

  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(room.name, '', '', 2, room.priceINR);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="room-modal-title"
      className="m-auto w-[94vw] max-w-4xl max-h-[90vh] bg-haven-ivory text-haven-charcoal p-0 border border-haven-stone/30 shadow-2xl backdrop:bg-haven-charcoal/70 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex flex-col max-h-[90vh] overflow-y-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 bg-haven-ivory/95 backdrop-blur-md px-5 py-4 border-b border-haven-stone/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-haven-olive font-medium">
              {room.category} Sanctuary Key
            </span>
            <h2 id="room-modal-title" className="font-serif text-xl sm:text-2xl text-haven-charcoal font-medium">
              {room.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="p-2 text-haven-charcoal/70 hover:text-haven-charcoal hover:bg-haven-stone/20 rounded-full transition-colors"
            aria-label="Close Room Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-8">
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-haven-sand">
              <img
                src={room.images[activeImageIndex]}
                alt={`${room.name} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-haven-charcoal/80 text-haven-ivory text-xs font-mono backdrop-blur-sm">
                {activeImageIndex + 1} / {room.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[4/3] overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-haven-charcoal shadow-sm opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-haven-cream border border-haven-stone/20 text-xs">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                Dimensions
              </span>
              <span className="font-medium text-haven-charcoal">
                {room.sizeSqFt} sq.ft ({room.sizeSqM} m²)
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                Maximum Guests
              </span>
              <span className="font-medium text-haven-charcoal">Up to {room.maxGuests} Guests</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                Bed Configuration
              </span>
              <span className="font-medium text-haven-charcoal">{room.bedType}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                Outlook & View
              </span>
              <span className="font-medium text-haven-charcoal">{room.view}</span>
            </div>
          </div>

          {/* Long Editorial Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-haven-charcoal font-medium">
              Architectural Concept & Ambience
            </h3>
            <p className="text-xs sm:text-sm text-haven-charcoal-light leading-relaxed font-sans">
              {room.longDescription}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-haven-charcoal font-medium">
              Signature Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 bg-white border border-haven-stone/20 text-xs"
                >
                  <Sparkles className="w-4 h-4 text-haven-gold shrink-0 mt-0.5" />
                  <span className="text-haven-charcoal font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* In-Suite Amenities Checklist */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-haven-charcoal font-medium">
              In-Suite Amenities & Inclusions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-haven-charcoal-light">
                  <Check className="w-3.5 h-3.5 text-haven-olive shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stay Inclusions & Policies */}
          <div className="p-4 bg-haven-sand/40 border border-haven-stone/30 space-y-2 text-xs text-haven-charcoal-light">
            <div className="flex items-center space-x-2 font-medium text-haven-charcoal">
              <Shield className="w-4 h-4 text-haven-olive" />
              <span>Complimentary Haven Stay Privileges</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Includes tailored daily breakfast, morning breathwork on the ridge deck, daily yoga mat, loose-leaf herbal teas, high-speed fiber internet, and evening turndown ritual. Check-in from 14:00, check-out at 11:00.
            </p>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="sticky bottom-0 z-20 bg-white border-t border-haven-stone/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="font-mono text-xl sm:text-2xl font-semibold text-haven-charcoal">
                {formatPrice(room.priceINR, currency)}
              </span>
              <span className="text-xs text-haven-stone-dark uppercase tracking-wider">
                per night + 18% GST
              </span>
            </div>
            <p className="text-[10px] text-haven-olive">Best direct rate guaranteed</p>
          </div>

          <div className="w-full sm:w-auto flex items-center space-x-3">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial h-11 px-4 border border-haven-stone/40 hover:border-haven-olive text-haven-charcoal text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-700" />
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookRoom(room);
              }}
              className="flex-1 sm:flex-initial h-11 px-8 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-xs tracking-[0.2em] uppercase font-medium transition-colors text-center"
            >
              Reserve This Key
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
