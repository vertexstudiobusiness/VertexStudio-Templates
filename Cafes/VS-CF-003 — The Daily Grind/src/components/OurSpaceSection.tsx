import React, { useState } from 'react';
import { Volume2, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { CAFE_ZONES } from '../data/mockData';

interface OurSpaceSectionProps {
  onSelectZoneForBooking: (zoneId: string) => void;
}

export const OurSpaceSection: React.FC<OurSpaceSectionProps> = ({ onSelectZoneForBooking }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(CAFE_ZONES[0].id);

  const activeZone = CAFE_ZONES.find((z) => z.id === activeZoneId) || CAFE_ZONES[0];

  return (
    <section id="our-space" className="py-16 sm:py-24 bg-sand-100 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ambercrema" />
            <span>Architectural Zoning</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Designed for How You Actually Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Different tasks require different acoustic and visual energy. Choose your ideal environment across our four purpose-designed zones.
          </p>
        </div>

        {/* Zone Navigation Tabs (Mobile-friendly horizontal scroll / wrap) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CAFE_ZONES.map((zone) => {
            const isSelected = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-charcoal-900 text-sand-50 shadow-md'
                    : 'bg-white text-charcoal-700 hover:bg-sand-200 border border-sand-200'
                }`}
              >
                <span>{zone.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-charcoal-800 text-ambercrema' : 'bg-sand-100 text-charcoal-500'
                }`}>
                  {zone.seatsCount} Seats
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Zone Detail Showcase Card */}
        <div className="bg-white rounded-3xl border border-sand-300/80 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] overflow-hidden bg-sand-200">
              <img
                src={activeZone.image}
                alt={activeZone.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              
              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/90 text-sand-50 backdrop-blur-md text-xs font-medium border border-charcoal-700 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-ambercrema" />
                  <span>{activeZone.acousticLevel}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-charcoal-800 backdrop-blur-md text-xs font-medium border border-sand-200 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-olive-700" />
                  <span>{activeZone.seatsCount} Total Capacity</span>
                </span>
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-4 left-4 right-4 text-sand-100 text-xs sm:text-sm">
                <p className="font-semibold text-white">{activeZone.seatingType}</p>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ambercrema-dark">
                    Featured Zone
                  </span>
                  <span className="text-xs text-olive-800 font-semibold bg-olive-50 border border-olive-200 px-2.5 py-0.5 rounded-full">
                    Active Availability
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mb-3">
                  {activeZone.name}
                </h3>

                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {activeZone.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3">
                    Recommended For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeZone.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-sand-100 text-charcoal-800 text-xs font-medium border border-sand-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-charcoal-600 pb-6 border-b border-sand-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Surge-protected universal power &amp; USB-C at seat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Unlimited filtered alkaline drinking water</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Order food &amp; pour-over directly to your desk</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onSelectZoneForBooking(activeZone.id)}
                  className="w-full py-3.5 px-5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
                >
                  <span>Reserve a Seat in {activeZone.name}</span>
                  <ArrowRight className="w-4 h-4 text-ambercrema" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
