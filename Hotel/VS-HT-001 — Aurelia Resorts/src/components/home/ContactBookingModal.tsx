import React, { useState } from 'react';
import { ModalDialog } from '../common/ModalDialog';
import { ROOMS } from '../../data/resortData';
import {
  calculateNights,
  formatPrice,
  getTodayDateString,
  getTomorrowDateString,
  generateReferenceId,
  generateWhatsAppLink,
} from '../../utils/formatters';
import type { CurrencyCode, BookingSearchParams } from '../../types';
import {
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  Info,
} from 'lucide-react';

interface ContactBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomName?: string;
  preselectedParams?: BookingSearchParams | null;
  currentCurrency: CurrencyCode;
}

export const ContactBookingModal: React.FC<ContactBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomName,
  preselectedParams,
  currentCurrency,
}) => {
  const today = getTodayDateString();

  const [roomName, setRoomName] = useState<string>(preselectedRoomName || ROOMS[0].name);
  const [checkIn, setCheckIn] = useState<string>(preselectedParams?.checkIn || today);
  const [checkOut, setCheckOut] = useState<string>(
    preselectedParams?.checkOut || getTomorrowDateString(today)
  );
  const [adults, setAdults] = useState<number>(preselectedParams?.adults || 2);
  const [children, setChildren] = useState<number>(preselectedParams?.children || 0);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedRefId, setGeneratedRefId] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const selectedRoomObj = ROOMS.find((r) => r.name === roomName) || ROOMS[0];
  const nights = calculateNights(checkIn, checkOut);
  const estimatedTotalINR = (selectedRoomObj ? selectedRoomObj.pricePerNightINR : 28500) * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!guestEmail.trim() || !guestEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!guestPhone.trim()) {
      setFormError('Please provide a contact phone number.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setFormError('Check-out date must be after check-in date.');
      return;
    }

    setFormError(null);
    const refId = generateReferenceId();
    setGeneratedRefId(refId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setGeneratedRefId('');
    onClose();
  };

  const whatsappDirectUrl = generateWhatsAppLink({
    roomName,
    checkIn,
    checkOut,
    adults,
    children,
    guestName,
    phone: guestPhone,
  });

  return (
    <ModalDialog
      isOpen={isOpen}
      onClose={isSubmitted ? handleReset : onClose}
      titleId="contact-booking-title"
      title={isSubmitted ? 'Reservation Enquiry Received' : 'Reserve Your Sanctuary Experience'}
      maxWidthClass="max-w-3xl"
    >
      {/* Demo Disclaimer Banner (Mandatory Requirement) */}
      <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs flex items-start space-x-2.5">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-amber-950">Demonstration Luxury Showcase:</strong> All rates and enquiries are interactive demo previews. Submitted enquiries provide an instant reference confirmation and can be tested live via WhatsApp.
        </div>
      </div>

      {isSubmitted ? (
        /* Confirmation State */
        <div className="text-center py-6 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h4 className="font-serif text-2xl sm:text-3xl text-[#0b251f]">
              Namaste, {guestName}
            </h4>
            <p className="text-xs sm:text-sm text-[#1c5246] max-w-lg mx-auto">
              Your bespoke reservation inquiry has been registered with the Private Butler & Concierge team at Aurelia Resorts & Spa.
            </p>
          </div>

          {/* Booking Summary Card */}
          <div className="bg-[#f7f4ee] p-5 sm:p-6 rounded-2xl border border-[#c5a880]/30 text-left max-w-xl mx-auto space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#c5a880]/20 text-xs">
              <span className="text-stone-500 uppercase tracking-wider">Booking Reference</span>
              <span className="font-mono font-bold text-sm text-[#0b251f] bg-white px-2.5 py-1 rounded border border-[#c5a880]/40">
                {generatedRefId}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-stone-500">Accommodation:</span>
                <div className="font-semibold text-[#0b251f] mt-0.5">{roomName}</div>
              </div>
              <div>
                <span className="text-stone-500">Duration:</span>
                <div className="font-semibold text-[#0b251f] mt-0.5">
                  {nights} Night{nights > 1 ? 's' : ''} ({checkIn} to {checkOut})
                </div>
              </div>
              <div>
                <span className="text-stone-500">Guests:</span>
                <div className="font-semibold text-[#0b251f] mt-0.5">
                  {adults} Adult(s), {children} Child(ren)
                </div>
              </div>
              <div>
                <span className="text-stone-500">Estimated Total:</span>
                <div className="font-semibold text-[#0b251f] text-sm mt-0.5">
                  {formatPrice(estimatedTotalINR, currentCurrency)}
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-500 italic">
              Includes round-trip private airport chauffeur transfers and daily champagne breakfast at The Verandah.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward to Concierge via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#0b251f]/30 hover:bg-[#0b251f]/5 text-[#0b251f] text-xs font-sans tracking-wider uppercase font-semibold cursor-pointer"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      ) : (
        /* Booking Form */
        <form onSubmit={handleSubmit} className="space-y-5">
          {formError && (
            <div className="p-3 bg-red-50 border border-red-300 rounded-xl text-xs text-red-800 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Room Selection */}
          <div className="space-y-1.5">
            <label htmlFor="modal-room-select" className="block text-xs font-sans font-medium uppercase tracking-wider text-[#937345]">
              Select Sanctuary Villa or Suite
            </label>
            <select
              id="modal-room-select"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-white border border-[#c5a880]/30 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#937345] cursor-pointer"
            >
              {ROOMS.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} — {formatPrice(r.pricePerNightINR, currentCurrency)} / night
                </option>
              ))}
            </select>
          </div>

          {/* Dates & Guests Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="modal-check-in" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Check-In Date
              </label>
              <input
                id="modal-check-in"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-check-out" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Check-Out Date
              </label>
              <input
                id="modal-check-out"
                type="date"
                min={getTomorrowDateString(checkIn)}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-adults" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Adults (Ages 12+)
              </label>
              <select
                id="modal-adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-children" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Children (0-11)
              </label>
              <select
                id="modal-children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>{num} Child{num > 1 ? 'ren' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guest Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="space-y-1">
              <label htmlFor="modal-guest-name" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Full Guest Name *
              </label>
              <input
                id="modal-guest-name"
                type="text"
                required
                placeholder="e.g. Lord & Lady Ashton"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-guest-email" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Email Address *
              </label>
              <input
                id="modal-guest-email"
                type="email"
                required
                placeholder="ashton@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="modal-guest-phone" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
                Telephone / WhatsApp *
              </label>
              <input
                id="modal-guest-phone"
                type="tel"
                required
                placeholder="+91 / +44 / +1 ..."
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345]"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-1">
            <label htmlFor="modal-special-requests" className="block text-[11px] font-sans uppercase tracking-wider text-stone-600 font-medium">
              Dietary Preferences & Bespoke Arranging Requests (Optional)
            </label>
            <textarea
              id="modal-special-requests"
              rows={2}
              placeholder="e.g. Anniversary celebration, preferred Ayurvedic dosha consult, vegan dining, late night arrival..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full p-3 rounded-xl bg-white border border-[#c5a880]/30 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#937345] resize-none"
            />
          </div>

          {/* Live Price Estimation Strip */}
          <div className="p-4 rounded-xl bg-[#f7f4ee] border border-[#c5a880]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-xs text-[#143d34]">
              <span className="font-semibold">{selectedRoomObj.name}</span>
              <div className="text-stone-500">{nights} Night{nights > 1 ? 's' : ''} • Luxury Chauffeur & Breakfast Included</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Estimated Stay Total</div>
              <div className="font-serif text-xl sm:text-2xl font-semibold text-[#0b251f]">
                {formatPrice(estimatedTotalINR, currentCurrency)}
              </div>
            </div>
          </div>

          {/* Form Submit & WhatsApp Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-emerald-600/40 text-emerald-800 hover:bg-emerald-50 text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <button
              type="submit"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] font-sans text-xs tracking-[0.18em] uppercase font-bold shadow-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Reservation Request</span>
            </button>
          </div>
        </form>
      )}
    </ModalDialog>
  );
};
