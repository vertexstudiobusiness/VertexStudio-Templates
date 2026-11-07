import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  Maximize2, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Video, 
  FileSpreadsheet,
  Layers,
  Calendar
} from 'lucide-react';
import { MEETING_VENUES } from '../data/hotelData';
import { EventEnquiryModal } from './EventEnquiryModal';

interface MeetingsEventsProps {
  onOpenRfp?: (venueId?: string) => void;
}

export const MeetingsEvents: React.FC<MeetingsEventsProps> = () => {
  const [selectedVenue, setSelectedVenue] = useState(MEETING_VENUES[0]);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [filterPax, setFilterPax] = useState<number | 'all'>('all');

  const filteredVenues = filterPax === 'all'
    ? MEETING_VENUES
    : MEETING_VENUES.filter(v => v.capacities.theater >= Number(filterPax));

  return (
    <section id="meetings" className="py-16 sm:py-24 bg-charcoal-50 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>CORPORATE SUMMITS & CONFERENCES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight">
              State-of-the-Art <br className="hidden sm:inline" />
              <span className="text-gold-600 font-serif italic">Meeting & Event Spaces</span>
            </h2>

            <p className="text-sm sm:text-base text-charcoal-600 mt-3 font-light leading-relaxed">
              From pillarless ballrooms hosting 650 global delegates to 4K hybrid boardrooms equipped with Cisco Webex Room Kit Pro, 
              Grand Meridian is Delhi-NCR's premier venue for high-stakes corporate summits.
            </p>
          </div>

          <button
            onClick={() => setEnquiryModalOpen(true)}
            className="touch-target self-start md:self-end px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Request Event Proposal (RFP)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Venue Selector Tabs (Mobile Scrollable) */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {MEETING_VENUES.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setSelectedVenue(venue)}
              className={`touch-target px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                selectedVenue.id === venue.id
                  ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                  : 'bg-white text-charcoal-700 hover:text-navy-950 border-charcoal-200'
              }`}
            >
              <Building className={`w-3.5 h-3.5 ${selectedVenue.id === venue.id ? 'text-gold-400' : 'text-charcoal-400'}`} />
              <span>{venue.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Venue Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-charcoal-200/90 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Photo (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[480px] bg-navy-950">
              <img
                src={selectedVenue.image}
                alt={selectedVenue.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 bg-navy-900/90 px-2.5 py-1 rounded-md border border-gold-500/40">
                  {selectedVenue.idealFor}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-2">
                  {selectedVenue.name}
                </h3>
              </div>
            </div>

            {/* Content & Capacity Matrix (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-light mb-6">
                  {selectedVenue.description}
                </p>

                {/* Dimensions Strip */}
                <div className="grid grid-cols-3 gap-3 bg-charcoal-50 p-3.5 rounded-2xl border border-charcoal-200 text-xs mb-6">
                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase font-bold block">Floor Area</span>
                    <strong className="text-navy-950 text-sm">{selectedVenue.areaSqFt.toLocaleString()} sq ft</strong>
                    <span className="text-[10px] text-charcoal-500 block">({selectedVenue.areaSqM} m²)</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase font-bold block">Ceiling Clearance</span>
                    <strong className="text-navy-950 text-sm">{selectedVenue.ceilingHeightM} Meters</strong>
                    <span className="text-[10px] text-charcoal-500 block">High clearance</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-charcoal-500 uppercase font-bold block">Maximum Capacity</span>
                    <strong className="text-navy-950 text-sm">{selectedVenue.capacities.theater} Pax</strong>
                    <span className="text-[10px] text-charcoal-500 block">Theater style</span>
                  </div>
                </div>

                {/* Capacity Matrix Grid */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase font-bold tracking-wider text-navy-950 flex items-center justify-between">
                    <span>Capacity By Layout Style</span>
                    <span className="text-[11px] text-charcoal-500 font-normal">Seating configurations</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                    <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl p-2.5">
                      <span className="text-[10px] text-charcoal-500 block font-semibold">Theater</span>
                      <strong className="text-base font-bold text-navy-950">{selectedVenue.capacities.theater}</strong>
                    </div>

                    <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl p-2.5">
                      <span className="text-[10px] text-charcoal-500 block font-semibold">Classroom</span>
                      <strong className="text-base font-bold text-navy-950">{selectedVenue.capacities.classroom}</strong>
                    </div>

                    <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl p-2.5">
                      <span className="text-[10px] text-charcoal-500 block font-semibold">U-Shape</span>
                      <strong className="text-base font-bold text-navy-950">{selectedVenue.capacities.uShape}</strong>
                    </div>

                    <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl p-2.5">
                      <span className="text-[10px] text-charcoal-500 block font-semibold">Banquet</span>
                      <strong className="text-base font-bold text-navy-950">{selectedVenue.capacities.banquet}</strong>
                    </div>

                    <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl p-2.5 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-charcoal-500 block font-semibold">Boardroom</span>
                      <strong className="text-base font-bold text-navy-950">{selectedVenue.capacities.boardroom}</strong>
                    </div>
                  </div>
                </div>

                {/* Key AV & Rigging Features */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                    Key Venue Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700">
                    {selectedVenue.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-charcoal-500">
                  Dedicated in-house AV engineer & catering banquet team assigned.
                </span>

                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="w-full sm:w-auto touch-target px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book This Space / Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Event Enquiry Modal */}
      <EventEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedVenueId={selectedVenue.id}
      />

    </section>
  );
};
