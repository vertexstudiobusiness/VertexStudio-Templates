import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Plane, Car, Compass, Mountain, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const nearbyAttractions = [
    {
      name: "Kumbhalgarh Fort Citadel",
      distance: "42 km • 50 mins",
      description: "A monumental 15th-century UNESCO mountain fortress featuring the world's second-longest continuous wall (36km).",
    },
    {
      name: "Ranakpur Jain Temples",
      distance: "58 km • 65 mins",
      description: "A 15th-century architectural masterpiece with 1,444 individually hand-carved marble pillars, no two alike.",
    },
    {
      name: "Lake Pichola & Udaipur Old City",
      distance: "36 km • 45 mins",
      description: "Historic island palaces, narrow haveli alleys, miniature painting ateliers, and sunset boat journeys.",
    },
  ];

  return (
    <section
      id="location"
      className="py-20 sm:py-28 lg:py-36 bg-haven-cream/60 border-t border-haven-stone/20 relative"
      aria-label="Location and Arrival"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
              Location & Logistics
            </span>
          </div>
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
            Hidden Within the Foothills
          </h2>
          <p className="mt-4 text-xs xs:text-sm sm:text-base text-haven-charcoal-light leading-relaxed font-sans">
            Tucked into a protected valley 45 minutes west of Udaipur, The Haven balances deep remoteness with effortless connectivity.
          </p>
        </div>

        {/* Location Grid: Topographic Map & Arrival Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Topographic Visual Map Card (Left / 7 cols) */}
          <div className="lg:col-span-7 bg-haven-ivory border border-haven-stone/30 overflow-hidden shadow-sm">
            {/* Minimalist Topographic Styled Visual */}
            <div className="relative aspect-[16/10] bg-haven-sand/70 overflow-hidden flex items-center justify-center p-6 sm:p-8">
              {/* Topographic Contours SVG Pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25 text-haven-stone-dark pointer-events-none"
                viewBox="0 0 800 500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M 0 100 Q 200 40 400 120 T 800 80" />
                <path d="M 0 160 Q 250 90 450 180 T 800 140" />
                <path d="M 0 240 Q 300 170 500 250 T 800 220" />
                <path d="M 0 320 Q 350 240 550 330 T 800 300" />
                <path d="M 0 400 Q 400 320 600 410 T 800 380" />
                <circle cx="420" cy="230" r="80" strokeDasharray="3 3" />
                <circle cx="420" cy="230" r="140" strokeDasharray="4 4" />
              </svg>

              {/* Haven Sanctuary Central Pin */}
              <div className="relative z-10 text-center animate-float-slow">
                <div className="w-12 h-12 rounded-full bg-haven-charcoal text-haven-ivory mx-auto flex items-center justify-center shadow-2xl border-2 border-white">
                  <MapPin className="w-6 h-6 text-haven-gold" />
                </div>
                <div className="mt-3 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-haven-stone/30 shadow-md">
                  <span className="font-serif text-sm text-haven-charcoal font-medium block">
                    The Haven Sanctuary
                  </span>
                  <span className="font-mono text-[10px] text-haven-stone-dark block">
                    {HOTEL_INFO.coordinates}
                  </span>
                </div>
              </div>

              {/* Surrounding Landmark Markers */}
              <div className="absolute top-6 left-6 text-left hidden xs:block">
                <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-dark block">
                  To Kumbhalgarh
                </span>
                <span className="text-[11px] font-sans text-haven-charcoal">42 km North</span>
              </div>

              <div className="absolute bottom-6 right-6 text-right hidden xs:block">
                <span className="text-[10px] uppercase font-mono tracking-wider text-haven-stone-dark block">
                  Udaipur Airport (UDR)
                </span>
                <span className="text-[11px] font-sans text-haven-charcoal">48 km Southeast</span>
              </div>
            </div>

            {/* Coordinates & Climate Bar */}
            <div className="p-4 sm:p-5 bg-haven-cream border-t border-haven-stone/20 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                  Elevation
                </span>
                <span className="font-medium text-haven-charcoal">{HOTEL_INFO.altitude}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-haven-stone-dark">
                  Current Climate
                </span>
                <span className="font-medium text-haven-charcoal">23°C • Clear Air</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center sm:justify-end">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-haven-olive hover:text-haven-charcoal text-[11px] font-medium"
                >
                  <span>Open Coordinates</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Arrival Logistics & Nearby Excursions (Right / 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* How to Reach Us */}
            <div className="bg-white p-5 sm:p-7 border border-haven-stone/30 space-y-4">
              <h3 className="font-serif text-lg text-haven-charcoal font-medium flex items-center space-x-2">
                <Car className="w-4 h-4 text-haven-olive" />
                <span>Arrival & Transfers</span>
              </h3>

              <div className="space-y-3 text-xs text-haven-charcoal-light">
                <div className="flex items-start space-x-3">
                  <Plane className="w-4 h-4 text-haven-stone-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-haven-charcoal block">
                      Maharana Pratap Airport, Udaipur (UDR)
                    </span>
                    <p className="text-[11px] text-haven-stone-dark">
                      48 kilometers (55 minutes). Private chauffeur service available in luxury hybrid SUVs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Car className="w-4 h-4 text-haven-stone-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-haven-charcoal block">
                      Udaipur City Center & Railway
                    </span>
                    <p className="text-[11px] text-haven-stone-dark">
                      36 kilometers (45 minutes scenic mountain pass road).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mountain className="w-4 h-4 text-haven-stone-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-haven-charcoal block">
                      Private Estate Helipad
                    </span>
                    <p className="text-[11px] text-haven-stone-dark">
                      Available for chartered landings with 48-hour prior clearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Curated Excursions */}
            <div className="bg-white p-5 sm:p-7 border border-haven-stone/30 space-y-4">
              <h3 className="font-serif text-lg text-haven-charcoal font-medium flex items-center space-x-2">
                <Compass className="w-4 h-4 text-haven-olive" />
                <span>Curated Day Excursions</span>
              </h3>

              <div className="space-y-3.5">
                {nearbyAttractions.map((att, i) => (
                  <div key={i} className="border-b border-haven-stone/15 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-haven-charcoal">{att.name}</span>
                      <span className="text-[10px] font-mono text-haven-stone-dark">{att.distance}</span>
                    </div>
                    <p className="text-[11px] text-haven-stone-dark leading-relaxed">
                      {att.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
