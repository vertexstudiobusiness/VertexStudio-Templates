import React from 'react';
import { CheckCircle, Calendar, Clock, MapPin, Users, MessageSquare, X } from 'lucide-react';
import type { ConfirmedBooking } from '../types';
import { CAFE_INFO } from '../data/mockData';

interface ConfirmationModalProps {
  booking: ConfirmedBooking | null;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi The Daily Grind! I just made a reservation online.\n\nBooking ID: ${booking.bookingId}\nName: ${booking.fullName}\nDate: ${booking.date}\nTime Slot: ${booking.timeSlot}\nZone: ${booking.preferredZone}\nPackage: ${booking.packageType}\nGuests: ${booking.guestsCount}\nEstimated Total: ₹${booking.totalEstimatedAmount}\n\nCould you please confirm seat assignment? Thank you!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-elevated border border-sand-300 z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-sand-200/80 text-charcoal-700 flex items-center justify-center hover:bg-sand-300 transition-colors"
          aria-label="Close confirmation"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-charcoal-900 text-sand-50 p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-ambercrema/20 border border-ambercrema/40 text-ambercrema flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle className="w-8 h-8 text-ambercrema" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-ambercrema px-3 py-1 rounded-full bg-charcoal-800 border border-charcoal-700">
            Reservation Request Received
          </span>
          <h3 className="font-serif text-2xl font-bold text-sand-50 mt-2">
            Your Workspace Is Reserved!
          </h3>
          <p className="text-xs text-sand-300 mt-1 max-w-xs mx-auto">
            Booking Reference:{' '}
            <span className="font-mono font-bold text-ambercrema text-sm">{booking.bookingId}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-5">
          
          {/* Reservation Summary Card */}
          <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-2 border-b border-sand-200">
              <span className="text-charcoal-500">Reserved For:</span>
              <span className="font-semibold text-charcoal-900">{booking.fullName}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-sand-200">
              <span className="text-charcoal-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-charcoal-400" /> Date:
              </span>
              <span className="font-medium text-charcoal-900">{booking.date}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-sand-200">
              <span className="text-charcoal-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-charcoal-400" /> Time Slot:
              </span>
              <span className="font-medium text-charcoal-900">{booking.timeSlot}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-sand-200">
              <span className="text-charcoal-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-charcoal-400" /> Zone:
              </span>
              <span className="font-semibold text-charcoal-900">{booking.preferredZone}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-sand-200">
              <span className="text-charcoal-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-charcoal-400" /> Guests:
              </span>
              <span className="font-medium text-charcoal-900">{booking.guestsCount} Person(s)</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-charcoal-700 font-bold">Estimated Payable at Desk:</span>
              <span className="font-serif font-bold text-lg text-charcoal-900">
                ₹{booking.totalEstimatedAmount}
              </span>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-3.5 rounded-xl bg-olive-50 border border-olive-200 text-xs text-olive-900">
            <p className="font-medium">
              A seat hold has been placed for 20 minutes from your arrival time.
            </p>
            <p className="text-[11px] text-olive-700 mt-0.5">
              Pay upon check-in at our front host bar. We accept UPI, Cards, and Cash.
            </p>
          </div>

          {/* WhatsApp Direct Action */}
          <a
            href={`https://wa.me/${CAFE_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Confirmation to Café on WhatsApp</span>
          </a>

          {/* Close / Return Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-sand-200 hover:bg-sand-300 text-charcoal-800 text-xs font-semibold transition-colors"
          >
            Done &amp; Return to Website
          </button>

          {/* Demo disclaimer */}
          <p className="text-center text-[10px] text-charcoal-400 italic">
            *Demo booking system. Instant test confirmation simulated for preview.
          </p>

        </div>
      </div>
    </div>
  );
};
