import React, { useState } from 'react';
import { Maximize2, Users, Eye, Sparkles, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Room, Currency } from '../types/hotel';
import { formatPrice, createWhatsAppUrl } from '../utils/formatters';

interface RoomCardProps {
  room: Room;
  currency: Currency;
  onSelectRoom: (room: Room) => void;
  onBookRoom: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  currency,
  onSelectRoom,
  onBookRoom,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleWhatsAppEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = createWhatsAppUrl(room.name, '', '', 2, room.priceINR);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      className="group bg-white border border-haven-stone/30 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl"
      aria-labelledby={`room-title-${room.id}`}
    >
      {/* Image Carousel / Visual Container */}
      <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-haven-sand">
        <img
          src={room.images[activeImageIndex]}
          alt={`${room.name} at The Haven`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Badge & Key Count */}
        <div className="absolute top-3 left-3 flex items-center space-x-2">
          <span className="px-2.5 py-1 bg-haven-charcoal/85 backdrop-blur-md text-[10px] tracking-[0.18em] uppercase text-haven-ivory font-medium">
            {room.category}
          </span>
          <span className="px-2 py-0.5 bg-white/80 backdrop-blur-md text-[10px] text-haven-charcoal font-mono">
            {activeImageIndex + 1}/{room.images.length}
          </span>
        </div>

        {/* Carousel Navigation Arrows */}
        {room.images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={prevImage}
              className="w-8 h-8 rounded-full bg-haven-charcoal/70 text-white flex items-center justify-center hover:bg-haven-charcoal transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="w-8 h-8 rounded-full bg-haven-charcoal/70 text-white flex items-center justify-center hover:bg-haven-charcoal transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Highlight Feature Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 bg-haven-ivory/95 backdrop-blur-md text-[10px] font-sans tracking-wide text-haven-charcoal font-medium border border-haven-stone/30">
            {room.highlight}
          </span>
        </div>
      </div>

      {/* Room Details & Pricing Content */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Price */}
          <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-2 mb-3">
            <div>
              <h3
                id={`room-title-${room.id}`}
                className="font-serif text-xl sm:text-2xl text-haven-charcoal font-medium"
              >
                {room.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-haven-olive tracking-wide italic">
                {room.tagline}
              </p>
            </div>

            <div className="text-left xs:text-right shrink-0">
              <span className="block font-mono text-base sm:text-lg font-semibold text-haven-charcoal">
                {formatPrice(room.priceINR, currency)}
              </span>
              <span className="block text-[10px] text-haven-stone-dark uppercase tracking-wider">
                per night + taxes
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-haven-charcoal-light/80 leading-relaxed font-sans mb-4 line-clamp-3">
            {room.description}
          </p>

          {/* Key Specs Pill Strip */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-haven-stone/20 text-[11px] text-haven-stone-dark mb-4">
            <div className="flex items-center space-x-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-haven-olive shrink-0" />
              <span>{room.sizeSqFt} sq.ft</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-haven-olive shrink-0" />
              <span>Up to {room.maxGuests}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Eye className="w-3.5 h-3.5 text-haven-olive shrink-0" />
              <span className="truncate">{room.view.split('&')[0]}</span>
            </div>
          </div>

          {/* Key Features Bullet Points */}
          <ul className="space-y-1.5 mb-6">
            {room.features.slice(0, 2).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2 text-[11px] sm:text-xs text-haven-charcoal/80"
              >
                <Sparkles className="w-3 h-3 text-haven-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons: Touch-friendly (min 44px) */}
        <div className="space-y-2 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelectRoom(room)}
              className="h-11 px-3 bg-haven-cream hover:bg-haven-sand text-haven-charcoal border border-haven-stone/30 text-[11px] tracking-[0.16em] uppercase font-medium transition-colors text-center"
            >
              Details
            </button>

            <button
              type="button"
              onClick={() => onBookRoom(room)}
              className="h-11 px-3 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-[11px] tracking-[0.16em] uppercase font-medium transition-colors text-center"
            >
              Reserve
            </button>
          </div>

          {/* WhatsApp Direct Enquiry Quick Trigger */}
          <button
            type="button"
            onClick={handleWhatsAppEnquire}
            className="w-full py-2 flex items-center justify-center space-x-1.5 text-[11px] text-haven-stone-dark hover:text-haven-olive transition-colors border border-dashed border-haven-stone/30 hover:border-haven-olive"
          >
            <MessageSquare className="w-3 h-3 text-green-700" />
            <span>Enquire via WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
};
