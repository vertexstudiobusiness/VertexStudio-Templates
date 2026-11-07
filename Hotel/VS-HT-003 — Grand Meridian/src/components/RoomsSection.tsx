import React, { useState } from 'react';
import { 
  Maximize2, 
  Bed, 
  Users, 
  Wifi, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Eye, 
  VolumeX,
  Coffee,
  Calendar
} from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';
import { Room, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';
import { RoomDetailModal } from './RoomDetailModal';

interface RoomsSectionProps {
  currency: CurrencyCode;
  onBookRoom: (roomId: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ currency, onBookRoom }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const categories = [
    { id: 'all', label: 'All Rooms & Suites', count: ROOMS_DATA.length },
    { id: 'executive', label: 'Executive Rooms', count: ROOMS_DATA.filter(r => r.category === 'executive').length },
    { id: 'deluxe', label: 'Deluxe Rooms', count: ROOMS_DATA.filter(r => r.category === 'deluxe').length },
    { id: 'suite', label: 'Business Suites', count: ROOMS_DATA.filter(r => r.category === 'suite').length },
    { id: 'presidential', label: 'Presidential Suite', count: ROOMS_DATA.filter(r => r.category === 'presidential').length },
  ];

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  return (
    <section id="rooms" className="py-16 sm:py-24 bg-charcoal-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>EXECUTIVE SANCTUARY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Accommodations Crafted for <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Uninterrupted Focus</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Every room is an ergonomic workspace by day and a soundproof sleep oasis by night. 
            Enjoy posturepedic king bedding, Herman Miller chairs, 10 Gbps fiber Wi-Fi, and spa-grade marble bathrooms.
          </p>
        </div>

        {/* Category Filters (Mobile-friendly horizontal scrollbar with touch-friendly pills) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`touch-target px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-md shadow-navy-900/20'
                  : 'bg-white text-charcoal-600 hover:text-navy-950 border border-charcoal-200/90 hover:border-gold-500/50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-gold-500 text-navy-950 font-bold' : 'bg-charcoal-100 text-charcoal-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Room Cards Grid (Mobile-First 375px: 1 col, md: 2 col, xl: 3 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-charcoal-200/90 hover:border-gold-500/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-navy-900/90 text-gold-400 border border-gold-500/40 backdrop-blur-md">
                    {room.category}
                  </span>
                  {room.featured && (
                    <span className="text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 shadow">
                      Executive Choice
                    </span>
                  )}
                </div>

                {/* View indicator */}
                <div className="absolute bottom-3 left-3 text-xs text-charcoal-200 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  {room.view}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-1 group-hover:text-gold-700 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-500 font-light mb-3 line-clamp-1">
                    {room.tagline}
                  </p>

                  {/* Quick Specs Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-charcoal-100 text-[11px] text-charcoal-600 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span className="truncate">{room.sizeSqFt} sq ft</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span className="truncate">{room.bedType.split(' ')[0]} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span>{room.maxGuests} Guests</span>
                    </div>
                  </div>

                  {/* Key Amenities Chips */}
                  <div className="space-y-1.5 mb-2">
                    {room.keyAmenities.slice(0, 3).map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA Buttons */}
                <div className="pt-4 border-t border-charcoal-100">
                  
                  {/* Price Row */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-2xl font-bold text-navy-950">
                          {formatPrice(room.priceINR, currency)}
                        </span>
                        {room.originalPriceINR && (
                          <span className="text-xs line-through text-charcoal-400">
                            {formatPrice(room.originalPriceINR, currency)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-charcoal-500 uppercase tracking-wider font-semibold">
                        Per Night • Taxes Excl. (18% GST)
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Breakfast Included
                    </span>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalRoom(room)}
                      className="touch-target py-2.5 px-3 rounded-xl border border-charcoal-300 hover:border-navy-900 text-navy-950 text-xs font-semibold hover:bg-charcoal-50 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-charcoal-500" />
                      <span>View Details</span>
                    </button>

                    <button
                      onClick={() => onBookRoom(room.id)}
                      className="touch-target py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 text-xs font-bold shadow-md shadow-gold-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Stay</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Room Detail Modal */}
      {activeModalRoom && (
        <RoomDetailModal
          room={activeModalRoom}
          currency={currency}
          onClose={() => setActiveModalRoom(null)}
          onBookRoom={(roomId) => {
            setActiveModalRoom(null);
            onBookRoom(roomId);
          }}
        />
      )}

    </section>
  );
};
