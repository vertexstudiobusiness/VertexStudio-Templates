import React from 'react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import {
  MapPin,
  Compass,
  Plane,
  Car,
  Navigation,
  Sparkles,
  Phone,
  ExternalLink
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-sandstone-50 text-walnut-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sandstone-200 border border-gold-400/50 text-maroon-900 text-xs font-serif uppercase tracking-[0.25em] mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Palace Environs</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-maroon-950 font-bold tracking-tight">
            Surroundings & Arrival
          </h2>

          <RoyalDivider variant="gold" className="max-w-xs mx-auto my-4" />

          <p className="font-serif text-base sm:text-lg text-walnut-700 font-light leading-relaxed">
            Nestled in the ancient Aravali foothills with commanding vistas over imperial lakes, secluded yet minutes from royal forts and monuments.
          </p>
        </div>

        {/* Location Grid: Map Card & Proximity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Styled Map Representation (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-gold-300/50 shadow-2xl royal-card-shadow">
            {/* Map Visual Component */}
            <div className="relative aspect-[16/10] bg-sandstone-200 overflow-hidden group">
              {/* Stylized vintage topographic palace map visual */}
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
                alt="Rajasthan Palace Heritage Surroundings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/85 via-walnut-950/40 to-transparent" />

              {/* Pin Center Marker */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-col items-center animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-maroon-900 border-2 border-gold-400 text-gold-300 flex items-center justify-center shadow-2xl">
                    <MapPin className="w-6 h-6 fill-gold-400" />
                  </div>
                  <div className="mt-2 bg-walnut-950/90 text-ivory-50 px-3 py-1 rounded-full border border-gold-400/50 text-[11px] font-serif font-bold uppercase tracking-wider shadow-lg">
                    Rajmahal Heritage
                  </div>
                </div>
              </div>

              {/* Inset coordinates */}
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-walnut-950/80 border border-gold-400/30 text-gold-200 text-xs font-mono">
                {HOTEL_CONFIG.location.coordinates.lat}° N, {HOTEL_CONFIG.location.coordinates.lng}° E
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={`https://maps.google.com/?q=${HOTEL_CONFIG.location.coordinates.lat},${HOTEL_CONFIG.location.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-walnut-950 text-xs font-serif font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions</span>
                </a>
              </div>
            </div>

            {/* Address Banner */}
            <div className="p-5 sm:p-6 bg-sandstone-50 border-t border-sandstone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif font-bold text-sm text-maroon-950">
                  {HOTEL_CONFIG.location.address}
                </p>
                <p className="text-xs text-walnut-600 font-sans mt-0.5">
                  {HOTEL_CONFIG.location.city}, {HOTEL_CONFIG.location.state} — {HOTEL_CONFIG.location.pinCode}, {HOTEL_CONFIG.location.country}
                </p>
              </div>
              <a
                href={`tel:${HOTEL_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="px-4 py-2 rounded-lg bg-maroon-900 hover:bg-maroon-950 text-gold-200 text-xs font-serif uppercase tracking-wider font-semibold flex items-center gap-2 shrink-0 transition"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Chauffeur Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Nearby Royal Attractions & Transfer Times (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-xl text-maroon-950 font-bold border-b border-sandstone-300 pb-2">
              Royal Proximity & Sights
            </h3>

            <div className="space-y-2.5">
              {HOTEL_CONFIG.location.nearbyAttractions.map((sight, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-sandstone-200 shadow-sm flex items-center justify-between gap-3 hover:border-gold-400 transition"
                >
                  <div className="flex items-center gap-2.5">
                    {sight.name.includes('Airport') ? (
                      <Plane className="w-4 h-4 text-gold-600 shrink-0" />
                    ) : sight.name.includes('Helipad') ? (
                      <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                    ) : (
                      <Car className="w-4 h-4 text-gold-600 shrink-0" />
                    )}
                    <span className="font-serif font-bold text-xs sm:text-sm text-walnut-900">
                      {sight.name}
                    </span>
                  </div>
                  <span className="text-xs font-sans text-maroon-900 font-medium shrink-0 bg-sandstone-100 px-2.5 py-1 rounded">
                    {sight.distance}
                  </span>
                </div>
              ))}
            </div>

            {/* Chauffeur Service Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-maroon-950 to-walnut-950 text-ivory-50 border border-gold-400/40 shadow-royal">
              <h4 className="font-display text-sm font-bold text-gold-300 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-gold-400" />
                <span>Complimentary Imperial Fleet Transfers</span>
              </h4>
              <p className="text-xs text-sandstone-300 font-sans mt-1 leading-relaxed">
                Suites and residences include roundtrip airport limousine transfers in our air-conditioned Mercedes sedan or vintage heritage motorcar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

