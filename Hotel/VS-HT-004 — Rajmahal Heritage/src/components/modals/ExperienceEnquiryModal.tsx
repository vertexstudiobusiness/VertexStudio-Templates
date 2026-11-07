import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { EXPERIENCES, Experience } from '../../data/hotelConfig';
import { CrestLogo } from '../common/CrestLogo';
import {
  X,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  Clock,
  Sparkles,
  User,
  Mail,
  Phone
} from 'lucide-react';

export const ExperienceEnquiryModal: React.FC = () => {
  const {
    isExperienceModalOpen,
    activeExperience,
    closeExperienceModal,
    formatPrice,
    sendWhatsAppEnquiry
  } = useHotel();

  const [selectedExp, setSelectedExp] = useState<Experience>(() => activeExperience || EXPERIENCES[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync with activeExperience if changed
  React.useEffect(() => {
    if (activeExperience) setSelectedExp(activeExperience);
  }, [activeExperience]);

  if (!isExperienceModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = `*Namaste Concierge,*
I would like to enquire about the *${selectedExp.title}* at Rajmahal Heritage.
• *Preferred Date:* ${preferredDate || 'Upcoming Stay'}
• *Party Size:* ${guestCount}
• *Name:* ${guestName || 'Valued Guest'}
• *Contact:* ${guestPhone || 'Not provided'}
Please share scheduling and personalized curations.`;
    sendWhatsAppEnquiry(msg);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeExperienceModal();
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
                Royal Experience Concierge
              </h2>
              <p className="text-[10px] text-sandstone-300 font-serif">
                Rajmahal Heritage Curations
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

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl text-maroon-950 font-bold">
                Experience Enquiry Received
              </h3>
              <p className="text-xs sm:text-sm text-walnut-600 max-w-md mx-auto">
                Thank you, <strong>{guestName || 'Honoured Guest'}</strong>. Our resident palace curator has received your interest for <strong>{selectedExp.title}</strong> and will connect via WhatsApp or phone.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center max-w-xs mx-auto">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 py-2.5 px-4 bg-emerald-800 text-ivory-50 rounded text-xs font-serif uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect WhatsApp
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 py-2.5 px-4 bg-maroon-900 text-gold-200 rounded text-xs font-serif uppercase tracking-wider font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-sandstone-100 p-3.5 rounded-xl border border-sandstone-300 flex items-center gap-3">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  className="w-16 h-16 rounded-lg object-cover border border-gold-300"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-serif tracking-widest text-gold-600 font-bold block">
                    {selectedExp.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-maroon-950">
                    {selectedExp.title}
                  </h4>
                  <p className="text-xs text-walnut-500 font-sans flex items-center gap-2 mt-0.5">
                    <Clock className="w-3 h-3 text-gold-600" />
                    <span>{selectedExp.duration} • {selectedExp.timing}</span>
                  </p>
                </div>
              </div>

              {/* Select Experience Dropdown */}
              <div>
                <label className="block text-xs font-serif text-walnut-700 mb-1">
                  Selected Experience
                </label>
                <select
                  value={selectedExp.id}
                  onChange={(e) => {
                    const match = EXPERIENCES.find(x => x.id === e.target.value);
                    if (match) setSelectedExp(match);
                  }}
                  className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                >
                  {EXPERIENCES.map(exp => (
                    <option key={exp.id} value={exp.id}>
                      {exp.title} ({exp.priceINR ? formatPrice(exp.priceINR) : 'Complimentary for Palace Guests'})
                    </option>
                  ))}
                </select>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Your Name <span className="text-maroon-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Princess Gayatri Devi"
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
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98290 12345"
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif text-walnut-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3–4 Guests</option>
                    <option value="Private Royal Group (5+)">Private Royal Group (5+)</option>
                  </select>
                </div>
              </div>

              {/* Submission buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-maroon-900 to-maroon-800 text-gold-200 font-serif font-bold text-xs uppercase tracking-wider shadow-royal"
                >
                  Send Palace Enquiry
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

