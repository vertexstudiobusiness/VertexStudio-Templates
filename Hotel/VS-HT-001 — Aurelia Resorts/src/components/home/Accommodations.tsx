import React, { useState } from 'react';
import type { Room, RoomCategory, CurrencyCode } from '../../types';
import { ROOMS } from '../../data/resortData';
import { formatPrice } from '../../utils/formatters';
import { RoomDetailModal } from './RoomDetailModal';
import {
  Users,
  Maximize2,
  Calendar,
  Eye,
  Waves,
  Sun,
  Sparkles,
  Bath,
} from 'lucide-react';

interface AccommodationsProps {
  currentCurrency: CurrencyCode;
  onOpenBooking: (roomName?: string) => void;
  selectedCategory?: RoomCategory;
}

export const Accommodations: React.FC<AccommodationsProps> = ({
  currentCurrency,
  onOpenBooking,
  selectedCategory = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState<RoomCategory>(selectedCategory);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories: { key: RoomCategory; label: string }[] = [
    { key: 'all', label: 'All Sanctuaries' },
    { key: 'deluxe', label: 'Deluxe Rooms' },
    { key: 'suites', label: 'Ocean Suites' },
    { key: 'villas', label: 'Private Pool Villas' },
    { key: 'presidential', label: 'Presidential Villas' },
  ];

  const filteredRooms = activeCategory === 'all'
    ? ROOMS
    : ROOMS.filter((room) => room.category === activeCategory);

  const handleOpenDetail = (room: Room) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  return (
    <section id="accommodations" className="py-20 sm:py-28 bg-[#fcfbf9] text-[#143d34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#937345] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Private Sanctuaries</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b251f] font-light tracking-tight leading-tight">
            Curated Living Amidst <br className="hidden sm:inline" />
            <span className="italic font-normal">Untouched Nature</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1c5246]/80 font-sans leading-relaxed">
            Each villa and suite is an intimate architectural retreat, thoughtfully positioned to offer uncompromised coastal vistas, private plunge pools, and open-sky bathing.
          </p>
        </div>

        {/* Category Filter Tabs (Touch friendly horizontally scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 space-x-2 sm:space-x-3 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#0b251f] text-[#dfbe85] shadow-lg border border-[#c5a880]/40 font-semibold'
                  : 'bg-[#f7f4ee] text-[#143d34]/70 hover:bg-[#ede4d3] border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#f7f4ee] rounded-2xl overflow-hidden border border-[#c5a880]/20 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black/10">
                <img
                  src={room.featuredImage}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#061410]/80 backdrop-blur-md border border-[#c5a880]/40 text-[#dfbe85] text-[10px] font-sans tracking-[0.18em] uppercase font-semibold">
                    {room.categoryLabel}
                  </span>
                </div>

                {/* Highlights Pill */}
                {room.features.privatePool && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#1b4d41]/90 backdrop-blur-md text-[#fcfbf9] text-[10px] font-sans tracking-wider">
                      <Waves className="w-3 h-3 text-[#dfbe85]" />
                      <span>Private Pool</span>
                    </span>
                  </div>
                )}

                {/* Bottom Overlay Specs */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-sans">
                  <span className="flex items-center space-x-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#dfbe85]" />
                    <span>{room.sizeSqFt} sq ft</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-[#dfbe85]" />
                    <span>Up to {room.maxGuests.adults + room.maxGuests.children} Guests</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#0b251f] font-medium group-hover:text-[#937345] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-[#1c5246] font-sans italic mt-1">{room.tagline}</p>
                  <p className="mt-3 text-xs sm:text-sm text-[#143d34]/80 font-sans line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Curated Key Highlights */}
                <div className="space-y-1.5 py-2 border-y border-[#c5a880]/20 text-[11px] text-[#1c5246]">
                  <div className="flex items-center space-x-2">
                    <Sun className="w-3.5 h-3.5 text-[#937345] shrink-0" />
                    <span className="truncate">{room.view}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-3.5 h-3.5 text-[#937345] shrink-0" />
                    <span className="truncate">{room.amenities[0]?.name || 'Luxury Soaking Tub'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#937345] shrink-0" />
                    <span className="truncate">Airport Chauffeur Transfer Included</span>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="pt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-sans">From</span>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-semibold text-[#0b251f]">
                        {formatPrice(room.pricePerNightINR, currentCurrency)}
                      </span>
                      <span className="text-[11px] text-stone-500 font-sans"> / night</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(room)}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl border border-[#0b251f]/20 hover:border-[#0b251f] text-[#0b251f] hover:bg-white text-[11px] font-sans tracking-[0.14em] uppercase font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(room.name)}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] text-[11px] font-sans tracking-[0.14em] uppercase font-bold shadow transition-all flex items-center justify-center space-x-1.5 cursor-pointer active:scale-95"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal Dialog */}
      <RoomDetailModal
        room={selectedRoom}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        currentCurrency={currentCurrency}
        onReserveRoom={(roomName) => onOpenBooking(roomName)}
      />
    </section>
  );
};
