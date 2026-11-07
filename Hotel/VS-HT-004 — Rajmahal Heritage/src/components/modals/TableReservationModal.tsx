import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { DINING_VENUES, DiningVenue } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import {
  X,
  Calendar,
  Clock,
  Users,
  UtensilsCrossed,
  CheckCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const TableReservationModal: React.FC = () => {
  const {
    isTableModalOpen,
    activeVenue,
    closeTableModal,
    sendWhatsAppEnquiry
  } = useHotel();

  const [selectedVenue, setSelectedVenue] = useState<DiningVenue>(() => activeVenue || DINING_VENUES[0]);
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('7:30 PM (Dinner)');
  const [guests, setGuests] = useState('2 Guests');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // Keep synced with activeVenue
  React.useEffect(() => {
    if (activeVenue) setSelectedVenue(activeVenue);
  }, [activeVenue]);

  if (!isTableModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleWhatsApp = () => {
    const msg = `*Namaste Rajmahal Culinary Desk,*
I would like to reserve a table at *${selectedVenue.name}*:
• *Date:* ${date}
• *Time:* ${timeSlot}
• *Guests:* ${guests}
• *Guest Name:* ${guestName || 'Valued Patron'}
• *Phone:* ${guestPhone || 'Not provided'}
• *Special Preferences:* ${dietaryNotes || 'None'}

Please confirm table availability and signature menu options.`;
    sendWhatsAppEnquiry(msg);
  };

  const handleClose = () => {
    setConfirmed(false);
    closeTableModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-walnut-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-lg bg-ivory-50 text-walnut-900 border border-gold-400/50 rounded-2xl shadow-2xl my-auto overflow-hidden royal-border-gold flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-maroon-950 via-maroon-900 to-walnut-950 text-ivory-50 flex items-center justify-between border-b border-gold-400/30 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <CrestLogo variant="light" size="sm" showSubtitle={false} />
            <div>
              <h2 className="font-display text-base sm:text-lg text-gold-300 font-bold">
                Royal Table Reservation
              </h2>
              <p className="text-[10px] text-sandstone-300 font-serif">
                Shahi Dastarkhwan & Imperial Lounges
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-sandstone-300 hover:text-white rounded-full hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {confirmed ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl text-maroon-950 font-bold">
                Table Reserved With Honour
              </h3>
              <p className="text-xs sm:text-sm text-walnut-600 max-w-sm mx-auto font-sans">
                A table for <strong>{guests}</strong> at <strong>{selectedVenue.name}</strong> on <strong>{date} ({timeSlot})</strong> has been registered for <strong>{guestName || 'our guest'}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center max-w-xs mx-auto">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 py-2.5 px-4 bg-emerald-800 text-ivory-50 rounded text-xs font-serif uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Concierge
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-maroon-900 text-gold-200 rounded text-xs font-serif uppercase tracking-wider font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Venue Selector */}
              <div>
                <label className="block text-xs font-serif text-walnut-700 mb-1">
                  Select Dining Venue <span className="text-maroon-700">*</span>
                </label>
                <select
                  value={selectedVenue.id}
                  onChange={(e) => {
                    const match = DINING_VENUES.find(v => v.id === e.target.value);
                    if (match) setSelectedVenue(match);
                  }}
                  className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500 font-sans"
                >
                  {DINING_VENUES.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.name} ({v.cuisine})
                    </option>
                  ))}
                </select>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Reservation Date <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Time Slot <span className="text-maroon-700">*</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  >
                    <option value="1:00 PM (Royal Lunch)">1:00 PM (Royal Lunch)</option>
                    <option value="2:00 PM (Royal Lunch)">2:00 PM (Royal Lunch)</option>
                    <option value="4:30 PM (Jharokha High Tea)">4:30 PM (Jharokha High Tea)</option>
                    <option value="7:30 PM (First Dinner Seating)">7:30 PM (First Dinner Seating)</option>
                    <option value="8:30 PM (Courtyard Candlelight)">8:30 PM (Courtyard Candlelight)</option>
                    <option value="9:30 PM (Late Imperial Feast)">9:30 PM (Late Imperial Feast)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Party Size <span className="text-maroon-700">*</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  >
                    <option value="2 Guests">2 Guests (Couple Table)</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8-12 Guests (Private Baradari)">8–12 Guests (Private Baradari)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Your Name <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Kunwar Ranveer Singh"
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-walnut-700 mb-1">
                  Contact Phone / WhatsApp <span className="text-maroon-700">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+91 98290 12345"
                  className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-xs font-serif text-walnut-700 mb-1">
                  Special Requests or Dietary Requirements
                </label>
                <input
                  type="text"
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="e.g. Pure Vegetarian, anniversary candlelight table, spice level..."
                  className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-maroon-900 to-maroon-800 text-gold-200 font-serif font-bold text-xs uppercase tracking-wider shadow-royal"
                >
                  Confirm Table Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-ivory-50 font-serif text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

