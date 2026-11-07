import React, { useState } from 'react';
import { 
  Utensils, 
  Wine, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  Coffee, 
  Flame, 
  MessageSquare,
  Phone
} from 'lucide-react';
import { RESTAURANTS_DATA, HOTEL_INFO } from '../data/hotelData';
import { Restaurant, CurrencyCode } from '../types';
import { MenuPreviewModal } from './MenuPreviewModal';

interface DiningSectionProps {
  currency: CurrencyCode;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currency }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  return (
    <section id="dining" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Decorative backdrop */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>CULINARY EXCELLENCE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-4">
            Distinguished Dining & <br className="hidden sm:inline" />
            <span className="text-gold-600 font-serif italic">Executive Entertaining</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Whether closing a multi-million dollar agreement over single malts at Latitude 18, 
            hosting clients to authentic Cantonese dim sum at The Silk Route, or enjoying a quick 20-minute in-room business meal, 
            our Michelin-trained chefs deliver uncompromising gastronomic perfection.
          </p>
        </div>

        {/* 3 Main Restaurant Cards Grid (Mobile-First: 1 col on 375px, 3 col on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {RESTAURANTS_DATA.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-charcoal-50 rounded-3xl overflow-hidden border border-charcoal-200/90 hover:border-gold-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 bg-navy-900/90 px-2.5 py-1 rounded-md border border-gold-500/40">
                      {restaurant.cuisine.split('&')[0]}
                    </span>
                    <span className="text-[11px] text-charcoal-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-400" />
                      {restaurant.timing.includes('24 Hours') ? '24 Hours' : 'Lunch & Dinner'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2 group-hover:text-gold-700 transition-colors">
                    {restaurant.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {restaurant.description}
                  </p>

                  {/* Signature Dish Pill */}
                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-600 block">
                      Chef's Recommended Special:
                    </span>
                    <div className="font-serif text-xs sm:text-sm font-bold text-navy-950 truncate">
                      {restaurant.signatureDishes[0]?.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className="w-full touch-target py-3 rounded-xl bg-white hover:bg-navy-900 text-navy-950 hover:text-white border border-charcoal-300 hover:border-navy-900 font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <Utensils className="w-3.5 h-3.5 text-gold-600 group-hover/btn:text-gold-400" />
                  <span>View Signature Menu & Rates</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 24/7 In-Room Express Dining Feature Box */}
        <div className="bg-navy-900 rounded-3xl p-6 sm:p-10 text-white border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400 flex-shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2 py-0.5 rounded">
                  GUARANTEED TIMING
                </span>
                <span className="text-xs text-charcoal-300">Available 24 Hours</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                20-Minute In-Room Corporate Express Dining
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-300 font-light max-w-xl mt-1">
                Arriving late after an international flight or working on a confidential tender? Order from our dedicated express corporate menu guaranteed delivered hot to your room desk in under 20 minutes.
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOTEL_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="w-full md:w-auto touch-target px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Connect with In-Room Dining</span>
          </a>
        </div>

      </div>

      {/* Menu Preview Modal */}
      {selectedRestaurant && (
        <MenuPreviewModal
          restaurant={selectedRestaurant}
          currency={currency}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}

    </section>
  );
};
