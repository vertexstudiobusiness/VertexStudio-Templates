import React from 'react';
import { RESORT_CONFIG } from '../../data/resortData';
import { MapPin, Plane, Compass, Sun, Shield, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#f7f4ee] text-[#143d34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#937345] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>The Journey</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b251f] font-light tracking-tight leading-tight">
            Arriving At Your <br className="hidden sm:inline" />
            <span className="italic font-normal">Private Peninsula</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1c5246]/80 font-sans leading-relaxed">
            Secluded along the dramatic rocky cliffs of Cabo de Rama in South Goa, Aurelia offers absolute tranquility while remaining easily accessible via private luxury chauffeur or direct helicopter transfer.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Map Graphic / Interactive Styled Visual */}
          <div className="lg:col-span-7 bg-[#0b251f] rounded-3xl p-6 sm:p-8 text-[#fcfbf9] border border-[#c5a880]/30 shadow-2xl relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#dfbe85]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-sans text-[#dfbe85]">Geographic Coordinates</span>
                  <div className="font-mono text-sm text-stone-300 mt-0.5">{RESORT_CONFIG.helipadCoordinates}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 border border-[#c5a880]/30 text-xs text-[#dfbe85] flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Private Helipad Active</span>
                </div>
              </div>

              {/* Stylized Illustrated Coastal Map Canvas Placeholder */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-[#061410] border border-[#c5a880]/20 flex items-center justify-center p-6 text-center">
                {/* Visual topography contour styling */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Coastal Line Simulation */}
                <svg className="absolute inset-0 w-full h-full stroke-[#c5a880]/30 fill-none" preserveAspectRatio="none" viewBox="0 0 400 300">
                  <path d="M 0 180 Q 100 120 200 210 T 400 100" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 50 250 Q 180 180 260 270 T 400 180" strokeWidth="1.5" />
                  <circle cx="260" cy="220" r="12" fill="#c5a880" fillOpacity="0.2" />
                  <circle cx="260" cy="220" r="5" fill="#dfbe85" />
                </svg>

                <div className="relative z-10 max-w-sm space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-[#0b251f] border border-[#dfbe85] text-[#dfbe85] shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#fcfbf9] font-medium">
                    Aurelia Resorts & Spa
                  </h4>
                  <p className="text-xs text-[#dacdbd] leading-relaxed">
                    Cabo de Rama Promontory, South Goa 403703, India.<br />
                    Overlooking the secluded South Goan Arabian shoreline.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#dfbe85] hover:underline pt-1"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Climate & Seasonality Widget */}
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-2 text-[#dfbe85] mb-1">
                    <Sun className="w-4 h-4" />
                    <span className="font-semibold uppercase tracking-wider">Prime Season</span>
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    October – May: Golden sunny days with temperate 28°C coastal sea breezes.
                  </p>
                </div>

                <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-2 text-[#dfbe85] mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="font-semibold uppercase tracking-wider">Private Access</span>
                  </div>
                  <p className="text-stone-300 text-[11px]">
                    Guarded security gatehouse ensuring absolute discretion and resident-only access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Travel Options */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0b251f]">
              Seamless Arrival & Bespoke Transfers
            </h3>
            <p className="text-sm text-[#1c5246] leading-relaxed">
              Every stay at Aurelia includes complimentary private airport pick-up and drop-off in our fleet of Mercedes-Benz S-Class or BMW 7-Series luxury sedans.
            </p>

            <div className="space-y-4">
              {RESORT_CONFIG.airports.map((airport) => (
                <div
                  key={airport.code}
                  className="bg-[#fcfbf9] p-5 rounded-2xl border border-[#c5a880]/30 shadow-sm flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0b251f] text-[#dfbe85] flex items-center justify-center shrink-0 mt-0.5">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-[#c5a880]/20 text-[#0b251f]">
                        {airport.code}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-[#0b251f]">{airport.name}</h4>
                    </div>
                    <div className="text-xs text-stone-500 mt-1 flex items-center space-x-3">
                      <span>Distance: {airport.distance}</span>
                      <span>•</span>
                      <span>{airport.time}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-[#c5a880]/30 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b251f] text-[#dfbe85] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#0b251f]">
                    Helicopter Direct Charter
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Direct transfer to the on-property Aurelia cliff helipad. 22 mins from GOX Mopa, 12 mins from Dabolim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
