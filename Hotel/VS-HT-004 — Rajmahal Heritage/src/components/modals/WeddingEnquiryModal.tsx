import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { WEDDING_VENUES, WeddingVenue } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import {
  X,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  Sparkles,
  Heart,
  Phone,
  Mail,
  User
} from 'lucide-react';

export const WeddingEnquiryModal: React.FC = () => {
  const { isWeddingModalOpen, closeWeddingModal, sendWhatsAppEnquiry } = useHotel();

  const [eventType, setEventType] = useState('Royal Destination Wedding (Multi-day)');
  const [selectedVenue, setSelectedVenue] = useState(WEDDING_VENUES[0].name);
  const [estimatedGuests, setEstimatedGuests] = useState('150 - 250 Guests');
  const [tentativeDate, setTentativeDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isWeddingModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = `*Namaste Rajmahal Wedding & Royal Celebrations Desk,*
I am planning an auspicious event at Rajmahal Heritage:
• *Event Type:* ${eventType}
• *Venue Choice:* ${selectedVenue}
• *Estimated Guests:* ${estimatedGuests}
• *Tentative Date:* ${tentativeDate || 'To be finalized'}
• *Organizer Name:* ${name || 'Prospective Host'}
• *Phone:* ${phone || 'Not provided'}
• *Vision/Requirements:* ${notes || 'Palace celebration inquiry'}

Please share the bespoke royal wedding lookbook and date availability.`;
    sendWhatsAppEnquiry(msg);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeWeddingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-walnut-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-ivory-50 text-walnut-900 border border-gold-400/50 rounded-2xl shadow-2xl my-auto overflow-hidden royal-border-gold flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-maroon-950 via-maroon-900 to-walnut-950 text-ivory-50 flex items-center justify-between border-b border-gold-400/30 sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <CrestLogo variant="light" size="sm" showSubtitle={false} />
            <div>
              <h2 className="font-display text-base sm:text-lg text-gold-300 font-bold">
                Royal Wedding & Soirée Concierge
              </h2>
              <p className="text-[10px] text-sandstone-300 font-serif">
                Bespoke Palatial Celebrations
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
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 fill-emerald-800" />
              </div>
              <h3 className="font-display text-2xl text-maroon-950 font-bold">
                Wedding Dossier Initiated
              </h3>
              <p className="text-xs sm:text-sm text-walnut-600 max-w-md mx-auto">
                Congratulations, <strong>{name || 'Honoured Host'}</strong>. Our Master of Ceremonies and Senior Wedding Curator will contact you with a customized palace brochure and date availability.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center max-w-xs mx-auto">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 py-2.5 px-4 bg-emerald-800 text-ivory-50 rounded text-xs font-serif uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect with Wedding Director
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Event Celebration Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500 font-sans"
                  >
                    <option value="Royal Destination Wedding (Multi-day)">Royal Destination Wedding (Multi-day)</option>
                    <option value="Sangeet & Mehendi Celebration">Sangeet & Mehendi Celebration</option>
                    <option value="Imperial Anniversary Milestone">Imperial Anniversary Milestone</option>
                    <option value="High-Profile Royal Banquet">High-Profile Royal Banquet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Preferred Palace Venue
                  </label>
                  <select
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500 font-sans"
                  >
                    {WEDDING_VENUES.map(v => (
                      <option key={v.id} value={v.name}>
                        {v.name} ({v.capacity})
                      </option>
                    ))}
                    <option value="Full Palace Estate Buyout (All Venues)">Full Palace Estate Buyout (All Venues)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500 font-sans"
                  >
                    <option value="Intimate (Up to 50 Guests)">Intimate (Up to 50 Guests)</option>
                    <option value="50 - 150 Guests">50 – 150 Guests</option>
                    <option value="150 - 300 Guests">150 – 300 Guests</option>
                    <option value="Grand Royal (300 - 500 Guests)">Grand Royal (300 – 500 Guests)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Target Celebration Date
                  </label>
                  <input
                    type="date"
                    value={tentativeDate}
                    onChange={(e) => setTentativeDate(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Host Full Name <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Yashodhara Raje"
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Host Email <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="host@wedding.com"
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Phone / WhatsApp <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98290 00000"
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-walnut-700 mb-1">
                  Vision, Royal Themes & Special Accommodations
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Royal elephant entry, candlelit mandap over lotus pond, suites requirement for guests..."
                  className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-maroon-900 to-maroon-800 text-gold-200 font-serif font-bold text-xs uppercase tracking-wider shadow-royal"
                >
                  Submit Celebration Dossier
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-ivory-50 font-serif text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Direct WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

