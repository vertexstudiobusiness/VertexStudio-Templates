import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Car, Bike, Train, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/mockData';

export const LocationContactSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '1048 12th Main Road HAL 2nd Stage Indiranagar Bengaluru'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-ambercrema" />
            <span>Visit Our Studio</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Find Us on 12th Main, Indiranagar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Nestled in Bengaluru's creative core, surrounded by leafy gulmohar trees and minutes away from the metro.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact & Operating Hours Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-sand-100 flex items-center justify-center text-charcoal-900">
                  <Clock className="w-5 h-5 text-wood-700" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900">Hours of Operation</h3>
                  <p className="text-xs text-charcoal-500">Early morning focus to late night sprints</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-sand-100">
                  <span className="text-charcoal-700 font-medium">Monday – Friday:</span>
                  <span className="font-bold text-charcoal-900 font-mono">{CAFE_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sand-100">
                  <span className="text-charcoal-700 font-medium">Saturday – Sunday:</span>
                  <span className="font-bold text-charcoal-900 font-mono">{CAFE_INFO.hours.weekends}</span>
                </div>
                <div className="flex justify-between items-center pt-1 text-olive-800 text-xs">
                  <span>Silent Mezzanine Protocol:</span>
                  <span className="font-semibold">Whisper-quiet all day</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">Connect Directly</h3>

              {/* Phone */}
              <a
                href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-sand-50 hover:bg-sand-100 text-charcoal-800 text-xs sm:text-sm font-medium transition-colors border border-sand-200"
              >
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <Phone className="w-4 h-4 text-charcoal-700" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-charcoal-500 uppercase font-semibold">Front Host Desk</p>
                  <p className="font-bold text-charcoal-900 font-mono">{CAFE_INFO.phone}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-charcoal-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CAFE_INFO.whatsapp}?text=Hi%20The%20Daily%20Grind,%20I%20have%20a%20question%20regarding%20workspace%20facilities.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-medium transition-colors border border-emerald-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center text-emerald-900 flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-emerald-700 uppercase font-semibold">Instant WhatsApp Desk</p>
                  <p className="font-bold text-emerald-950 font-mono">{CAFE_INFO.whatsappFormatted}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${CAFE_INFO.email}`}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-sand-50 hover:bg-sand-100 text-charcoal-800 text-xs sm:text-sm font-medium transition-colors border border-sand-200"
              >
                <div className="w-8 h-8 rounded-lg bg-sand-200 flex items-center justify-center text-charcoal-900 flex-shrink-0">
                  <Mail className="w-4 h-4 text-charcoal-700" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-charcoal-500 uppercase font-semibold">Partnerships &amp; Events</p>
                  <p className="font-bold text-charcoal-900">{CAFE_INFO.email}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-charcoal-400" />
              </a>
            </div>

            {/* Commute & Transit Highlights */}
            <div className="p-5 rounded-2xl bg-sand-100 border border-sand-200 text-xs text-charcoal-700 space-y-2.5">
              <div className="flex items-center gap-2 font-semibold text-charcoal-900">
                <Navigation className="w-4 h-4 text-ambercrema" />
                <span>Getting Here:</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 rounded-xl bg-white border border-sand-200">
                  <Train className="w-4 h-4 text-olive-700 mx-auto mb-1" />
                  <p className="font-bold text-charcoal-900">600m</p>
                  <p className="text-[10px] text-charcoal-500">Indiranagar Metro</p>
                </div>
                <div className="p-2 rounded-xl bg-white border border-sand-200">
                  <Bike className="w-4 h-4 text-ambercrema-dark mx-auto mb-1" />
                  <p className="font-bold text-charcoal-900">EV Slots</p>
                  <p className="text-[10px] text-charcoal-500">2-Wheeler Charging</p>
                </div>
                <div className="p-2 rounded-xl bg-white border border-sand-200">
                  <Car className="w-4 h-4 text-charcoal-700 mx-auto mb-1" />
                  <p className="font-bold text-charcoal-900">Valet</p>
                  <p className="text-[10px] text-charcoal-500">Assisted Parking</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Architectural Location & Map Canvas (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-sand-300 shadow-card bg-sand-200 flex flex-col justify-between relative min-h-[420px]">
            
            {/* Map Imagery & Styling */}
            <div className="relative flex-1 min-h-[300px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80"
                alt="Indiranagar neighborhood aerial view"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/30 to-transparent" />

              {/* Pin Callout Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sand-300 shadow-elevated text-center max-w-xs w-full">
                <div className="w-10 h-10 rounded-full bg-charcoal-900 text-ambercrema flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <MapPin className="w-5 h-5 text-ambercrema" />
                </div>
                <h4 className="font-serif font-bold text-charcoal-900 text-base">The Daily Grind</h4>
                <p className="text-xs text-charcoal-600 mt-0.5">
                  1048, 12th Main Road, HAL 2nd Stage, Indiranagar
                </p>
                <p className="text-[11px] text-olive-800 font-semibold mt-1">
                  Bengaluru 560038
                </p>
              </div>

              {/* Live Status Chip on Map */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-charcoal-900/90 text-sand-50 backdrop-blur-md text-xs font-medium border border-charcoal-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Now • 18 Desks Available</span>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-6 bg-white border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-charcoal-900">
                  1048, 12th Main Rd, Indiranagar, Bengaluru
                </p>
                <p className="text-[11px] text-charcoal-500">
                  Opposite 12th Main Park, Landmark: Near Corner House Ice Cream
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-[0.98] shadow-sm flex-shrink-0"
              >
                <Navigation className="w-4 h-4 text-ambercrema" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
