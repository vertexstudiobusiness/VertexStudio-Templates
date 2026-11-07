import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { WEDDING_VENUES } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  Heart,
  Users,
  Sparkles,
  Check,
  Calendar,
  Compass,
  ArrowRight
} from 'lucide-react';

export const WeddingsSection: React.FC = () => {
  const { openWeddingModal } = useHotel();

  return (
    <section id="celebrations" className="py-20 sm:py-28 bg-walnut-950 text-ivory-50 relative overflow-hidden">
      {/* Subtle gold jaali pattern */}
      <div className="absolute inset-0 bg-jaali-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-walnut-900 border border-gold-400/50 text-gold-300 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
            <span>Royal Destination Celebrations</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 font-bold tracking-tight">
            Weddings of Imperial Splendour
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-sandstone-300 font-light leading-relaxed">
            Begin your eternal union where maharajas once wed: amidst the resonance of shehnai flutes, cascading marigold arches, and fireworks illuminating 18th-century sandstone domes.
          </p>

          <div className="mt-6">
            <button
              onClick={openWeddingModal}
              className="py-3 px-6 sm:px-8 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-300 text-walnut-950 font-serif font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-royal-gold transition active:scale-[0.98]"
            >
              Plan Your Royal Wedding Dossier
            </button>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WEDDING_VENUES.map((venue) => (
            <div
              key={venue.id}
              className="bg-walnut-900/90 rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl flex flex-col justify-between group hover:border-gold-400 transition-all duration-300"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/11] overflow-hidden bg-walnut-950">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-950 via-walnut-950/30 to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-maroon-950/90 border border-gold-400/40 text-gold-300 text-[11px] font-serif uppercase tracking-widest font-bold">
                    {venue.setting}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-walnut-950/85 border border-gold-400/40 text-gold-200 text-xs font-serif flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>{venue.capacity}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <h3 className="font-display text-xl text-ivory-100 font-bold group-hover:text-gold-300 transition-colors">
                    {venue.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-sandstone-300/90 font-sans leading-relaxed line-clamp-3">
                    {venue.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 pt-3 border-t border-gold-400/10">
                    {venue.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-sandstone-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={openWeddingModal}
                  className="w-full py-2.5 px-4 rounded-lg bg-walnut-800 hover:bg-gold-500 hover:text-walnut-950 border border-gold-400/40 text-gold-300 font-serif text-xs uppercase tracking-wider font-semibold transition flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Enquire This Venue</span>
                  <ArrowRight className="w-4 h-4 text-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

