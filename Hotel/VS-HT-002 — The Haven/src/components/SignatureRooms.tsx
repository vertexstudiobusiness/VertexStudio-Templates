import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/hotelData';
import type { Room, Currency } from '../types/hotel';
import { RoomCard } from './RoomCard';
import { Sparkles } from 'lucide-react';

interface SignatureRoomsProps {
  currency: Currency;
  onSelectRoom: (room: Room) => void;
  onBookRoom: (room: Room) => void;
  selectedCategory?: string;
}

export const SignatureRooms: React.FC<SignatureRoomsProps> = ({
  currency,
  onSelectRoom,
  onBookRoom,
  selectedCategory = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(selectedCategory);

  const categories = [
    { id: 'all', label: 'All Sanctuary Keys', count: ROOMS_DATA.length },
    { id: 'room', label: 'Verandah Rooms', count: 1 },
    { id: 'suite', label: 'Garden Suites', count: 1 },
    { id: 'villa', label: 'Pool Villas', count: 1 },
    { id: 'residence', label: 'Private Residence', count: 1 },
  ];

  const filteredRooms =
    activeFilter === 'all'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.category === activeFilter);

  return (
    <section
      id="rooms"
      className="py-20 sm:py-28 lg:py-36 bg-haven-cream/60 border-y border-haven-stone/20 relative"
      aria-label="Signature Rooms and Suites"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
                Sanctuary Accommodations
              </span>
            </div>
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
              Fourteen Distinct Keys
            </h2>
            <p className="mt-3 text-xs xs:text-sm sm:text-base text-haven-stone-dark leading-relaxed font-sans">
              Each key has been custom designed with indigenous stone, slaked lime, and private open-air bathing spaces, oriented toward raw mountain horizons.
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs text-haven-stone-dark">
            <Sparkles className="w-4 h-4 text-haven-gold" />
            <span>Inclusive of Artisanal Farm Breakfast</span>
          </div>
        </div>

        {/* Category Filter Tabs - Mobile Scrollable & Touch-friendly */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2.5 text-xs tracking-[0.14em] uppercase transition-all duration-200 whitespace-nowrap shrink-0 border ${
                activeFilter === cat.id
                  ? 'bg-haven-charcoal text-haven-ivory border-haven-charcoal shadow-sm'
                  : 'bg-white/80 text-haven-charcoal/80 border-haven-stone/30 hover:border-haven-stone hover:bg-white'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-2 font-mono text-[10px] opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Rooms Grid: 1 col on mobile, 2 cols on lg screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              currency={currency}
              onSelectRoom={onSelectRoom}
              onBookRoom={onBookRoom}
            />
          ))}
        </div>

        {/* Bottom Direct Guarantee Note */}
        <div className="mt-12 sm:mt-16 text-center text-xs text-haven-stone-dark max-w-xl mx-auto space-y-1">
          <p className="font-serif italic text-haven-charcoal text-sm">
            “The Sanctuary Residence accommodates exclusive private buyouts for intimate family gatherings.”
          </p>
          <p className="text-[11px] uppercase tracking-widest text-haven-stone-dark">
            Custom culinary and wellness itineraries crafted upon request
          </p>
        </div>
      </div>
    </section>
  );
};
