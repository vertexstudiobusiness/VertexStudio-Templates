import React from 'react';
import { CheckCircle2, Calendar, Users, Home, Printer, MessageSquare, ShieldCheck, RefreshCw } from 'lucide-react';
import type { BookingConfirmationDetails, Currency } from '../types/hotel';
import { formatPrice, formatDateDisplay } from '../utils/formatters';

interface BookingConfirmationProps {
  details: BookingConfirmationDetails;
  currency: Currency;
  onClose: () => void;
  onNewBooking: () => void;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  details,
  currency,
  onClose,
  onNewBooking,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppWithRef = () => {
    const phone = '919876543210';
    const message = `Hello The Haven Concierge,\n\nI have just submitted a reservation enquiry on your website.\n• Booking Reference: ${details.referenceId}\n• Sanctuary Key: ${details.roomName}\n• Dates: ${formatDateDisplay(details.checkIn)} to ${formatDateDisplay(details.checkOut)} (${details.nights} nights)\n• Guests: ${details.adults + details.children} guest(s)\n• Estimated Total: ${formatPrice(details.totalAmountINR, 'INR')}\n• Guest Name: ${details.guestName}\n\nKindly confirm availability and the next steps for securing our reservation. Thank you!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="p-6 sm:p-10 space-y-6 text-haven-charcoal animate-fade-in">
      {/* Success Badge */}
      <div className="text-center space-y-2">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-haven-olive/10 text-haven-olive mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-haven-olive" />
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-haven-olive font-medium block">
          Reservation Enquiry Confirmed
        </span>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-haven-charcoal font-light">
          Your Sanctuary Awaits
        </h2>
        <p className="text-xs sm:text-sm text-haven-stone-dark max-w-md mx-auto font-sans leading-relaxed">
          Thank you, <span className="font-medium text-haven-charcoal">{details.guestName}</span>. Your reservation request has been transmitted to our resident concierge desk.
        </p>
      </div>

      {/* Booking Reference Box */}
      <div className="p-4 bg-haven-cream border border-haven-stone/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-haven-stone-dark block font-mono">
            Booking Reference
          </span>
          <span className="font-mono text-lg sm:text-xl font-bold tracking-wider text-haven-charcoal">
            {details.referenceId}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-[11px] text-haven-olive">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span>Concierge response guaranteed within 4 hours</span>
        </div>
      </div>

      {/* Reservation Summary Details */}
      <div className="bg-white border border-haven-stone/25 p-5 space-y-4 text-xs">
        <h3 className="font-serif text-base text-haven-charcoal font-medium border-b border-haven-stone/15 pb-2">
          Enquiry Breakdown
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-haven-charcoal-light">
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-haven-olive shrink-0" />
            <span>
              <strong>Key:</strong> {details.roomName}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-haven-olive shrink-0" />
            <span>
              <strong>Stay:</strong> {formatDateDisplay(details.checkIn)} –{' '}
              {formatDateDisplay(details.checkOut)} ({details.nights} {details.nights === 1 ? 'night' : 'nights'})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-haven-olive shrink-0" />
            <span>
              <strong>Guests:</strong> {details.adults} Adults
              {details.children > 0 ? `, ${details.children} Children` : ''}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-4 h-4 text-haven-olive text-center font-bold">@</span>
            <span className="truncate">
              <strong>Contact:</strong> {details.guestEmail}
            </span>
          </div>
        </div>

        {details.airportTransfer && (
          <p className="text-[11px] text-haven-olive bg-haven-cream/60 p-2 border border-haven-stone/20">
            ✓ Luxury Chauffeur Airport Transfer requested from Udaipur Airport (UDR).
          </p>
        )}

        {details.specialRequests && (
          <div className="pt-2 border-t border-haven-stone/15">
            <span className="font-medium text-haven-charcoal block mb-0.5">Special Dietary / Preferences:</span>
            <p className="italic text-haven-stone-dark text-[11px]">“{details.specialRequests}”</p>
          </div>
        )}

        {/* Pricing Summary */}
        <div className="pt-3 border-t border-haven-stone/20 space-y-1.5 text-right">
          <div className="flex justify-between text-haven-stone-dark">
            <span>Base Room Tariff ({details.nights} nights)</span>
            <span className="font-mono">{formatPrice(details.baseAmountINR, currency)}</span>
          </div>
          <div className="flex justify-between text-haven-stone-dark">
            <span>Luxury Hospitality GST (18%)</span>
            <span className="font-mono">{formatPrice(details.taxAmountINR, currency)}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base font-semibold text-haven-charcoal pt-2 border-t border-haven-stone/20">
            <span>Estimated Total</span>
            <span className="font-mono">{formatPrice(details.totalAmountINR, currency)}</span>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="p-3 bg-haven-sand/40 border border-haven-stone/30 text-[11px] text-haven-stone-dark text-center">
        *Demo reservation mode. A copy of this confirmation has been simulated for your session.
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handlePrint}
            className="h-11 px-3 border border-haven-stone/40 hover:bg-haven-cream text-haven-charcoal text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          <button
            type="button"
            onClick={onNewBooking}
            className="h-11 px-3 border border-haven-stone/40 hover:bg-haven-cream text-haven-charcoal text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Modify</span>
          </button>
        </div>

        <div className="w-full sm:w-auto flex items-center space-x-2">
          <button
            type="button"
            onClick={handleWhatsAppWithRef}
            className="flex-1 sm:flex-initial h-11 px-4 bg-green-800 hover:bg-green-700 text-white text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 sm:flex-initial h-11 px-6 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-xs tracking-[0.2em] uppercase font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
