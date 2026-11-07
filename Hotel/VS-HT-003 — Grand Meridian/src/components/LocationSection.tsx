import React, { useState } from 'react';
import { 
  MapPin, 
  Plane, 
  PlaneTakeoff, 
  Train, 
  Briefcase, 
  Shield, 
  Building, 
  Clock, 
  ExternalLink, 
  Car, 
  Navigation,
  Sparkles,
  Phone
} from 'lucide-react';
import { LOCATION_DISTANCES, HOTEL_INFO } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState(LOCATION_DISTANCES[0]);

  const iconMap: Record<string, React.ElementType> = {
    Plane,
    PlaneTakeoff,
    Train,
    Briefcase,
    Shield,
    Building
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-charcoal-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>STRATEGIC CONNECTIVITY HUB</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              At the Epicenter of <br className="hidden sm:inline" />
              <span className="text-gold-600 font-serif italic">Delhi-NCR's Aerotropolis</span>
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-light leading-relaxed">
              Situated in Asset Area 8 within the high-security Aerocity hospitality district. 
              Enjoy seamless proximity to Indira Gandhi International Airport, the diplomatic enclave, 
              and the Fortune 500 corporate corridor of DLF Cyber City.
            </p>
          </div>

          <a
            href={HOTEL_INFO.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target self-start md:self-end px-5 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 group shadow-md"
          >
            <Navigation className="w-4 h-4 text-gold-400" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-white" />
          </a>
        </div>

        {/* Interactive Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Distance Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-charcoal-500 mb-2">
              Key Transport Hubs & Business Enclaves
            </h3>

            {LOCATION_DISTANCES.map((item, idx) => {
              const Icon = iconMap[item.icon] || MapPin;
              const isSelected = selectedDest.destination === item.destination;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedDest(item)}
                  className={`cursor-pointer rounded-2xl p-4 border-2 transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'border-gold-500 bg-white shadow-md ring-2 ring-gold-400/20'
                      : 'border-charcoal-200 bg-white/70 hover:bg-white hover:border-gold-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-navy-900 text-gold-400' : 'bg-charcoal-100 text-navy-900'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-navy-950 line-clamp-1">
                        {item.destination}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 line-clamp-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-serif font-bold text-sm sm:text-base text-navy-950 block">
                      {item.travelTime}
                    </span>
                    <span className="text-[10px] text-charcoal-500">
                      {item.distance}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Aerocity District Map Visualizer (7 cols) */}
          <div className="lg:col-span-7 bg-navy-950 rounded-3xl p-6 sm:p-8 text-white border border-gold-500/30 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[460px]">
            
            {/* Geometric Aerocity Radial Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(#c59a45_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

            {/* Simulated Aerocity District Radar / Map */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-wider">
                    Aerocity Masterplan Radar View
                  </span>
                </div>

                <span className="text-[11px] font-mono text-charcoal-400">
                  GPS: 28.5528° N, 77.1219° E
                </span>
              </div>

              {/* Graphic Vector Representation of the Aerocity Hub */}
              <div className="py-8 my-auto relative">
                
                {/* Central Hotel Node */}
                <div className="relative mx-auto w-36 h-36 rounded-full border-2 border-gold-500/40 bg-navy-900/90 flex flex-col items-center justify-center text-center p-3 shadow-2xl shadow-gold-500/20">
                  <div className="w-3 h-3 rounded-full bg-gold-400 animate-ping absolute -top-1 right-1/2" />
                  <Building className="w-7 h-7 text-gold-400 mb-1" />
                  <span className="font-serif font-bold text-xs text-white uppercase tracking-wider">
                    Grand Meridian
                  </span>
                  <span className="text-[9px] text-gold-300 font-mono">Asset Area 8</span>
                </div>

                {/* Satellite Nodes around the center */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                  <div className="bg-navy-900/80 border border-navy-700 p-2.5 rounded-xl text-center">
                    <Plane className="w-4 h-4 text-gold-400 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-white block">Terminal 3</span>
                    <span className="text-[10px] text-emerald-400 font-mono">12 mins / 4.2 km</span>
                  </div>

                  <div className="bg-navy-900/80 border border-navy-700 p-2.5 rounded-xl text-center">
                    <Train className="w-4 h-4 text-gold-400 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-white block">Metro Express</span>
                    <span className="text-[10px] text-emerald-400 font-mono">3 mins / 800 m</span>
                  </div>

                  <div className="bg-navy-900/80 border border-navy-700 p-2.5 rounded-xl text-center col-span-2 sm:col-span-1">
                    <Briefcase className="w-4 h-4 text-gold-400 mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-white block">DLF Cyber City</span>
                    <span className="text-[10px] text-emerald-400 font-mono">18 mins / 11.5 km</span>
                  </div>
                </div>

              </div>

              {/* Bottom Chauffeur Instructions Info Box */}
              <div className="pt-4 border-t border-navy-800 text-xs text-charcoal-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gold-400 flex items-center gap-1.5">
                    <Car className="w-4 h-4" />
                    <span>Complimentary Terminal 3 Shuttles</span>
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-400">Departures every 30 mins</span>
                </div>
                <p className="text-[11px] font-light text-charcoal-400">
                  Arriving guests: Our chauffeur meets you at Pillar 17 with an electronic tablet displaying your name. Call dispatch directly at {HOTEL_INFO.contact.phoneDisplay}.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
