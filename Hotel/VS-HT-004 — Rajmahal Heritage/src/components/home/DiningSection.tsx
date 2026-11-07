import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { DINING_VENUES, DiningVenue } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  UtensilsCrossed,
  Clock,
  Shirt,
  Sparkles,
  ChevronRight,
  Flame,
  Wine,
  Calendar
} from 'lucide-react';

export const DiningSection: React.FC = () => {
  const { openTableModal, formatPrice } = useHotel();
  const [selectedVenueId, setSelectedVenueId] = useState(DINING_VENUES[0].id);

  const activeVenue = DINING_VENUES.find(v => v.id === selectedVenueId) || DINING_VENUES[0];

  return (
    <section id="dining" className="py-20 sm:py-28 bg-ivory-50 text-walnut-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-100 border border-gold-400/50 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold-600" />
            <span>Imperial Gastronomy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight">
            Flavours of the Royal Court
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 font-light leading-relaxed">
            Centuries-old recipes perfected in the royal kitchens of Mewar, slow-cooked in earthenware sigris, and served with hallmarked silverware under starlit canopies.
          </p>

          {/* Restaurant Selector Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {DINING_VENUES.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setSelectedVenueId(venue.id)}
                className={`whitespace-nowrap px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-300 min-h-[42px] ${
                  selectedVenueId === venue.id
                    ? 'bg-maroon-900 text-gold-200 border border-gold-400 shadow-md'
                    : 'bg-white hover:bg-sandstone-100 text-walnut-700 border border-sandstone-300'
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Dining Feature */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gold-300/40 shadow-2xl royal-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column (6 Cols) */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-walnut-950">
              <img
                src={activeVenue.image}
                alt={activeVenue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/80 via-transparent to-black/20" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-maroon-950/90 border border-gold-400/50 text-gold-200 text-xs font-serif uppercase tracking-widest font-bold">
                {activeVenue.cuisine}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-ivory-50">
                <span className="text-xs uppercase font-serif tracking-[0.2em] text-gold-400 block">
                  Atmosphere
                </span>
                <p className="text-xs sm:text-sm text-sandstone-200 font-sans italic mt-0.5">
                  "{activeVenue.atmosphere}"
                </p>
              </div>
            </div>

            {/* Content Column (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase font-serif tracking-[0.25em] text-gold-600 font-bold block mb-1">
                  {activeVenue.tagline}
                </span>

                <h3 className="font-display text-2xl sm:text-4xl text-maroon-950 font-bold leading-tight">
                  {activeVenue.name}
                </h3>

                <p className="text-xs sm:text-sm text-walnut-700 leading-relaxed font-sans mt-3">
                  {activeVenue.description}
                </p>

                {/* Practical Info Pill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 py-4 border-y border-sandstone-200 text-xs text-walnut-700">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold font-serif text-walnut-900">Operating Hours</p>
                      <p className="text-[11px] font-sans text-walnut-600">{activeVenue.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shirt className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold font-serif text-walnut-900">Dress Attire</p>
                      <p className="text-[11px] font-sans text-walnut-600">{activeVenue.attire}</p>
                    </div>
                  </div>
                </div>

                {/* Signature Dishes List */}
                <div className="space-y-3">
                  <h4 className="font-display text-xs uppercase tracking-widest text-maroon-900 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    <span>Signature Royal Masterpieces</span>
                  </h4>

                  <div className="space-y-2.5">
                    {activeVenue.signatureDishes.map((dish, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-sandstone-50 border border-sandstone-200 flex items-start justify-between gap-3"
                      >
                        <div>
                          <p className="font-serif font-bold text-sm text-maroon-950">
                            {dish.name}
                          </p>
                          <p className="text-xs text-walnut-600 font-sans mt-0.5">
                            {dish.desc}
                          </p>
                        </div>
                        <span className="font-serif font-bold text-xs sm:text-sm text-maroon-900 shrink-0 bg-gold-100/70 px-2 py-0.5 rounded border border-gold-300">
                          {formatPrice(dish.priceINR)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => openTableModal(activeVenue)}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 hover:from-maroon-800 hover:to-maroon-700 text-gold-200 font-serif font-bold text-xs uppercase tracking-[0.2em] shadow-royal hover:shadow-royal-gold transition flex items-center justify-center gap-2 min-h-[46px]"
                >
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Reserve Table at {activeVenue.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

