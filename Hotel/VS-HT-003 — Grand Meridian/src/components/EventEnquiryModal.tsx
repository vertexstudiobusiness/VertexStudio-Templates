import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Building, 
  CheckCircle, 
  Send, 
  Sparkles, 
  Phone, 
  Mail,
  Video,
  Utensils
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MEETING_VENUES, HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'framer-motion';

interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVenueId?: string;
}

export const EventEnquiryModal: React.FC<EventEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedVenueId
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [formData, setFormData] = useState({
    eventType: 'Conference & Summit',
    venueId: selectedVenueId || 'grand-ballroom',
    eventDate: '',
    durationDays: '1 Day',
    attendees: '100 - 250 Pax',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    avRequirements: ['4K LED Display / Projection', 'Simultaneous Audio Translation'],
    cateringPreference: 'Gourmet Executive Buffet & High Tea',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const ref = `EVT-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(ref);
    setSubmitted(true);
  };

  const toggleAv = (item: string) => {
    setFormData(prev => ({
      ...prev,
      avRequirements: prev.avRequirements.includes(item)
        ? prev.avRequirements.filter(i => i !== item)
        : [...prev.avRequirements, item]
    }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
        
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col border border-gold-500/30"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-200 bg-white sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-1.5 text-gold-600 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MICE & Corporate Event Services</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                Request Event Proposal (RFP)
              </h2>
            </div>

            <button
              onClick={onClose}
              className="touch-target p-2 rounded-full hover:bg-charcoal-100 text-charcoal-500 hover:text-navy-950 transition-colors"
              aria-label="Close RFP modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Content */}
          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Event Proposal Request Received
                </h3>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.contactName}</strong>. Our Senior Events Director will prepare a customized quotation, floor plan simulation, and catering proposal for <strong>{formData.companyName}</strong> within 3 business hours.
                </p>
                <div className="bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200 inline-block font-mono text-sm text-navy-900">
                  RFP Tracking Reference: <strong className="text-gold-700">{ticketId}</strong>
                </div>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="touch-target px-8 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm"
                  >
                    Close & Return
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Event Type & Preferred Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal-700 mb-1">
                      Event Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      <option>Conference & Summit</option>
                      <option>Annual General Meeting (AGM)</option>
                      <option>Board of Directors Meeting</option>
                      <option>Product Launch & Media Preview</option>
                      <option>Gala Dinner & Awards Night</option>
                      <option>Training Workshop & Seminar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal-700 mb-1">
                      Venue Preference
                    </label>
                    <select
                      value={formData.venueId}
                      onChange={(e) => setFormData(prev => ({ ...prev, venueId: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      {MEETING_VENUES.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.name} (Max {v.capacities.theater} pax)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Expected Attendees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal-700 mb-1">
                      Target Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium focus:bg-white focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal-700 mb-1">
                      Duration
                    </label>
                    <select
                      value={formData.durationDays}
                      onChange={(e) => setFormData(prev => ({ ...prev, durationDays: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      <option>Half Day (4 Hours)</option>
                      <option>Full Day (8 Hours)</option>
                      <option>2 Days</option>
                      <option>3+ Days Residential</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-charcoal-700 mb-1">
                      Attendees
                    </label>
                    <select
                      value={formData.attendees}
                      onChange={(e) => setFormData(prev => ({ ...prev, attendees: e.target.value }))}
                      className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium focus:bg-white focus:border-gold-500 focus:outline-none"
                    >
                      <option>Up to 25 Pax</option>
                      <option>25 - 75 Pax</option>
                      <option>75 - 150 Pax</option>
                      <option>150 - 350 Pax</option>
                      <option>350 - 650 Pax</option>
                    </select>
                  </div>
                </div>

                {/* Organizer Contact Details */}
                <div className="pt-2 border-t border-charcoal-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-950 block mb-3">
                    Corporate Organizer Information
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Company / Organization <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Deloitte India"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Contact Person Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alistair Campbell"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Official Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alistair@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Direct Phone / Mobile <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98111 22334"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* AV & Tech checklist */}
                <div className="bg-charcoal-50 p-3.5 rounded-2xl border border-charcoal-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-gold-600" />
                    <span>Audio-Visual & Tech Inclusions</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      '4K LED Display / Projection',
                      'Polycom / Cisco Hybrid Zoom Feed',
                      'Simultaneous Audio Translation',
                      'Dedicated IT & Sound Engineer',
                      'High-Speed 10 Gbps Event Wi-Fi'
                    ].map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.avRequirements.includes(item)}
                          onChange={() => toggleAv(item)}
                          className="rounded text-gold-600 focus:ring-gold-500"
                        />
                        <span className="text-charcoal-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Special Inclusions, Dietary or Stage Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Residential room block requirements, VIP security protocol, customized menu..."
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full touch-target py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Proposal</span>
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2">
                    Guaranteed response from Aerocity Events Directorate within 3 business hours.
                  </p>
                </div>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
