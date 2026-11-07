import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { ROOMS, Room } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Maximize2,
  Users,
  Bed,
  Eye,
  Calendar,
  Sparkles,
  ChevronRight,
  Crown
} from 'lucide-react';

export const Accommodations: React.FC = () => {
  const {
    openRoomModal,
    openBookingModal,
    formatPrice
  } = useHotel();

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Chambers' },
    { id: 'heritage', label: 'Heritage Rooms' },
    { id: 'royal-suite', label: 'Royal Suites' },
    { id: 'maharaja-suite', label: 'Maharaja Suites' },
    { id: 'presidential', label: 'Presidential Residence' },
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeCategory);

  return (
    <section id="rooms" className="py-16 sm:py-28 bg-sandstone-50 text-walnut-900 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sandstone-100 border border-gold-400/40 text-maroon-900 text-[11px] sm:text-xs font-serif uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-2 sm:mb-3">
            <Crown className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Imperial Accommodations</span>
          </div>

          <h2 className="font-display text-2xl xs:text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight px-1">
            Chambers of Royal Splendour
          </h2>

          <RoyalDivider variant="gold" className="max-w-[220px] sm:max-w-xs mx-auto my-3 sm:my-4" />

          <p className="font-serif text-xs xs:text-sm sm:text-lg text-walnut-700 font-light leading-relaxed px-2">
            Each suite at Rajmahal Heritage is an original royal sanctum restored with hand-carved stone arches, heirloom teak furnishings, and private palace vistas.
          </p>

          {/* Category Filter Tabs (Horizontal scroll with touch momentum) */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 scrollbar-none px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-serif uppercase tracking-wider transition-all duration-300 min-h-[42px] active:scale-95 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-maroon-900 text-gold-200 border border-gold-400 shadow-md font-semibold'
                    : 'bg-white/90 hover:bg-white text-walnut-700 border border-sandstone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid (Mobile-First 1 col, md 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-gold-300/40 shadow-xl flex flex-col group hover:shadow-2xl transition-all duration-300 hover:border-gold-400/80 royal-border-gold"
            >
              {/* Room Image Container */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-walnut-950 cursor-pointer"
                onClick={() => openRoomModal(room)}
              >
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/85 via-transparent to-black/25" />

                {/* Badge if present */}
                {room.badge && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-maroon-950/90 border border-gold-400/60 text-gold-200 text-[10px] sm:text-xs font-serif uppercase tracking-widest font-bold shadow-md">
                    {room.badge}
                  </div>
                )}

                {/* Floor / Category Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-walnut-950/80 border border-gold-400/30 text-sandstone-200 text-[10px] sm:text-[11px] font-serif">
                  {room.categoryLabel}
                </div>

                {/* Inset Price on Mobile Banner */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-ivory-50">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gold-300 font-serif block font-semibold">
                      Starting from
                    </span>
                    <span className="font-display text-xl sm:text-3xl font-black text-ivory-50 drop-shadow">
                      {formatPrice(room.priceINR)}
                    </span>
                    <span className="text-[11px] text-sandstone-300 font-sans ml-1">/ night + taxes</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-sandstone-300 font-serif italic hidden xs:inline">
                    {room.floor}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div>
                  <h3
                    onClick={() => openRoomModal(room)}
                    className="font-display text-lg sm:text-2xl text-maroon-950 font-bold group-hover:text-maroon-800 transition-colors cursor-pointer"
                  >
                    {room.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-walnut-600 font-sans leading-relaxed mt-1.5 line-clamp-2">
                    {room.shortDesc}
                  </p>

                  {/* Room Specs Badges (2x2 on mobile for clean breathing room) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 sm:pt-4 border-t border-sandstone-200 my-3 text-xs text-walnut-700">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="truncate">{room.sizeSqFt} sq ft</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="truncate">Up to {room.maxGuests} Guests</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="truncate">{room.bedType.split(' ')[0]} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="truncate">{room.view.split(' ')[0]} View</span>
                    </div>
                  </div>

                  {/* Highlights Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {room.highlights.slice(0, 3).map((hl, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sandstone-100 border border-sandstone-200 text-[10px] sm:text-[11px] text-walnut-700 font-sans"
                      >
                        <Sparkles className="w-3 h-3 text-gold-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Mobile-first large targets) */}
                <div className="pt-3 border-t border-sandstone-200 flex flex-col xs:flex-row gap-2">
                  <button
                    onClick={() => openRoomModal(room)}
                    className="flex-1 py-3 px-4 rounded-xl bg-sandstone-100 hover:bg-sandstone-200 border border-sandstone-300 text-maroon-950 font-serif text-xs uppercase tracking-wider font-semibold active:scale-[0.98] transition flex items-center justify-center gap-1.5 min-h-[46px]"
                  >
                    <span>View Suite Lore</span>
                    <ChevronRight className="w-4 h-4 text-maroon-800" />
                  </button>

                  <button
                    onClick={() => openBookingModal(room.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-gold-200 font-serif text-xs uppercase tracking-[0.16em] font-bold shadow-royal hover:shadow-royal-gold active:scale-[0.98] transition flex items-center justify-center gap-2 min-h-[46px]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>Reserve Chamber</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
