import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Calendar, Home, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';
import type { Currency, BookingConfirmationDetails } from '../types/hotel';
import { formatPrice, calculateNights, generateBookingReference, createWhatsAppUrl } from '../utils/formatters';
import { BookingConfirmation } from './BookingConfirmation';

interface BookingModalProps {
  isOpen: boolean;
  preselectedRoomId?: string;
  currency: Currency;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  preselectedRoomId,
  currency,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Default dates: 7 days ahead, 2 nights
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 7);
  const defaultOut = new Date(defaultIn);
  defaultOut.setDate(defaultIn.getDate() + 2);

  const formatDateValue = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(preselectedRoomId || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>(formatDateValue(defaultIn));
  const [checkOut, setCheckOut] = useState<string>(formatDateValue(defaultOut));
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [airportTransfer, setAirportTransfer] = useState<boolean>(false);
  const [dateError, setDateError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmationDetails, setConfirmationDetails] = useState<BookingConfirmationDetails | null>(null);

  // Sync preselected room
  useEffect(() => {
    if (preselectedRoomId) {
      setRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      // Reset confirmation when closed
      setConfirmationDetails(null);
    }
  }, [isOpen]);

  const selectedRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];
  const nights = calculateNights(checkIn, checkOut);

  // Financial calculations
  const transferCost = airportTransfer && selectedRoom.id !== 'sanctuary-residence' ? 4500 : 0;
  const baseAmount = selectedRoom.priceINR * nights + transferCost;
  const taxAmount = Math.round(baseAmount * 0.18);
  const totalAmount = baseAmount + taxAmount;

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const r = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (isOutside) {
      onClose();
    }
  };

  const handleCheckInChange = (newDate: string) => {
    setCheckIn(newDate);
    setDateError('');
    if (newDate >= checkOut) {
      const next = new Date(newDate);
      next.setDate(next.getDate() + 1);
      setCheckOut(formatDateValue(next));
    }
  };

  const handleCheckOutChange = (newDate: string) => {
    if (newDate <= checkIn) {
      setDateError('Check-out must be after check-in date');
    } else {
      setDateError('');
      setCheckOut(newDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkOut <= checkIn) {
      setDateError('Check-out date must be at least 1 night after check-in.');
      return;
    }

    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#5A6046', '#BFA168', '#EBE5D8', '#22211F'],
        });
      } catch (err) {
        // Safe fallback
      }

      setConfirmationDetails({
        referenceId: generateBookingReference(),
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        guestName,
        guestEmail,
        guestPhone,
        specialRequests,
        airportTransfer,
        baseAmountINR: baseAmount,
        taxAmountINR: taxAmount,
        totalAmountINR: totalAmount,
        createdAt: new Date().toISOString(),
      });
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    const url = createWhatsAppUrl(
      selectedRoom.name,
      checkIn,
      checkOut,
      adults + children,
      totalAmount
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="booking-modal-title"
      className="m-auto w-[94vw] max-w-2xl max-h-[92vh] bg-haven-ivory text-haven-charcoal p-0 border border-haven-stone/30 shadow-2xl backdrop:bg-haven-charcoal/75 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex flex-col max-h-[92vh] overflow-y-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-haven-ivory/95 backdrop-blur-md px-5 py-4 border-b border-haven-stone/20 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-haven-olive font-medium">
              The Haven Reservation Desk
            </span>
            <h2 id="booking-modal-title" className="font-serif text-xl sm:text-2xl text-haven-charcoal font-medium">
              {confirmationDetails ? 'Reservation Summary' : 'Sanctuary Stay Enquiry'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="p-2 text-haven-charcoal/70 hover:text-haven-charcoal hover:bg-haven-stone/20 rounded-full transition-colors"
            aria-label="Close Booking Window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal View Switch: Form vs Confirmed */}
        {confirmationDetails ? (
          <BookingConfirmation
            details={confirmationDetails}
            currency={currency}
            onClose={onClose}
            onNewBooking={() => setConfirmationDetails(null)}
          />
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
            {/* Demo Notice Banner */}
            <div className="p-3 bg-haven-sand/50 border border-haven-stone/30 flex items-start space-x-2 text-[11px] text-haven-charcoal-light">
              <Sparkles className="w-4 h-4 text-haven-gold shrink-0 mt-0.5" />
              <span>
                <strong>Demo Booking System:</strong> All rooms, amenities, prices, and rates are live in interactive preview mode. Instant reservation inquiries are acknowledged immediately.
              </span>
            </div>

            {/* Room Selection */}
            <div className="space-y-1.5">
              <label
                htmlFor="booking-room-select"
                className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
              >
                <Home className="w-3.5 h-3.5 text-haven-olive" />
                <span>Selected Sanctuary Key</span>
              </label>
              <select
                id="booking-room-select"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="h-12 w-full px-3.5 bg-white border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal transition-colors"
              >
                {ROOMS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} — {formatPrice(r.priceINR, currency)} / night ({r.sizeSqFt} sq.ft)
                  </option>
                ))}
              </select>
            </div>

            {/* Check-In & Check-Out Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="booking-checkin"
                  className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-haven-olive" />
                  <span>Check-In Date</span>
                </label>
                <input
                  id="booking-checkin"
                  type="date"
                  value={checkIn}
                  min={formatDateValue(today)}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  className="h-12 w-full px-3.5 bg-white border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="booking-checkout"
                  className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-haven-olive" />
                  <span>Check-Out Date ({nights} {nights === 1 ? 'night' : 'nights'})</span>
                </label>
                <input
                  id="booking-checkout"
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => handleCheckOutChange(e.target.value)}
                  className="h-12 w-full px-3.5 bg-white border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal transition-colors"
                  required
                />
              </div>
            </div>

            {dateError && (
              <p className="text-xs text-red-600 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{dateError}</span>
              </p>
            )}

            {/* Guests Counters: Touch Friendly Steppers */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-haven-cream border border-haven-stone/20">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-haven-charcoal block">Adults (13+ yrs)</label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-9 h-9 rounded-sm border border-haven-stone/40 bg-white flex items-center justify-center text-sm font-medium hover:bg-haven-sand active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-xs font-mono font-bold">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(selectedRoom.maxGuests, adults + 1))}
                    className="w-9 h-9 rounded-sm border border-haven-stone/40 bg-white flex items-center justify-center text-sm font-medium hover:bg-haven-sand active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-haven-charcoal block">Children (10–12 yrs)</label>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-9 h-9 rounded-sm border border-haven-stone/40 bg-white flex items-center justify-center text-sm font-medium hover:bg-haven-sand active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-xs font-mono font-bold">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(2, children + 1))}
                    className="w-9 h-9 rounded-sm border border-haven-stone/40 bg-white flex items-center justify-center text-sm font-medium hover:bg-haven-sand active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-haven-stone-dark font-medium border-b border-haven-stone/20 pb-1.5">
                Primary Guest Information
              </h3>

              <div className="space-y-1.5">
                <label htmlFor="guest-name" className="text-[11px] font-medium text-haven-charcoal">
                  Full Name *
                </label>
                <input
                  id="guest-name"
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Maya Sharma"
                  className="h-11 w-full px-3.5 bg-white border border-haven-stone/30 text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label htmlFor="guest-email" className="text-[11px] font-medium text-haven-charcoal">
                    Email Address *
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="maya@example.com"
                    className="h-11 w-full px-3.5 bg-white border border-haven-stone/30 text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="guest-phone" className="text-[11px] font-medium text-haven-charcoal">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="h-11 w-full px-3.5 bg-white border border-haven-stone/30 text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Airport Transfer Add-on */}
            <div className="p-3 bg-white border border-haven-stone/25 flex items-start space-x-3 text-xs">
              <input
                id="airport-transfer-check"
                type="checkbox"
                checked={airportTransfer}
                onChange={(e) => setAirportTransfer(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded-xs border-haven-stone text-haven-charcoal focus:ring-haven-olive"
              />
              <label htmlFor="airport-transfer-check" className="cursor-pointer">
                <span className="font-medium text-haven-charcoal block">
                  Add Private Chauffeur Airport Transfer from Udaipur (UDR)
                </span>
                <span className="text-[11px] text-haven-stone-dark block">
                  {selectedRoom.id === 'sanctuary-residence'
                    ? 'Complimentary with The Sanctuary Residence'
                    : '₹4,500 one-way in luxury hybrid SUV with chilled botanical towels'}
                </span>
              </label>
            </div>

            {/* Special Requests */}
            <div className="space-y-1.5">
              <label htmlFor="special-requests" className="text-[11px] font-medium text-haven-charcoal">
                Dietary & Sanctuary Preferences (Optional)
              </label>
              <textarea
                id="special-requests"
                rows={2}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="e.g., Honeymoon anniversary, vegan dietary preferences, quietest room location..."
                className="w-full p-3 bg-white border border-haven-stone/30 text-xs font-sans focus:outline-none focus:border-haven-charcoal"
              />
            </div>

            {/* Live Financial Breakdown Card */}
            <div className="p-4 bg-haven-cream border border-haven-stone/30 space-y-2 text-xs">
              <div className="flex justify-between text-haven-stone-dark">
                <span>
                  {selectedRoom.name} ({nights} {nights === 1 ? 'night' : 'nights'})
                </span>
                <span className="font-mono">
                  {formatPrice(selectedRoom.priceINR * nights, currency)}
                </span>
              </div>

              {transferCost > 0 && (
                <div className="flex justify-between text-haven-stone-dark">
                  <span>Chauffeur Airport Transfer</span>
                  <span className="font-mono">{formatPrice(transferCost, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-haven-stone-dark">
                <span>Luxury Hospitality GST (18%)</span>
                <span className="font-mono">{formatPrice(taxAmount, currency)}</span>
              </div>

              <div className="pt-2 border-t border-haven-stone/20 flex justify-between items-baseline text-haven-charcoal font-semibold text-sm sm:text-base">
                <span>Total Estimated Tariff</span>
                <span className="font-mono">{formatPrice(totalAmount, currency)}</span>
              </div>
            </div>

            {/* Actions: Direct WhatsApp & Submit */}
            <div className="space-y-2.5 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-xs tracking-[0.2em] uppercase font-medium transition-all shadow-md flex items-center justify-center space-x-2 active:scale-[0.99] disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Reservation Enquiry'}</span>
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full h-11 border border-haven-stone/40 hover:border-haven-olive bg-white text-haven-charcoal text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-green-700" />
                <span>Instant Enquiry via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};
