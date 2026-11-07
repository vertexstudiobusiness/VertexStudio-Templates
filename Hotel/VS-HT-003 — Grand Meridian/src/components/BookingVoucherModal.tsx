import React from 'react';
import { 
  X, 
  Printer, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Car, 
  Download, 
  Share2, 
  Building, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { ConfirmedBooking, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingVoucherModalProps {
  booking: ConfirmedBooking | null;
  currency: CurrencyCode;
  onClose: () => void;
}

export const BookingVoucherModal: React.FC<BookingVoucherModalProps> = ({
  booking,
  currency,
  onClose
}) => {
  if (!booking) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Grand Meridian! Here is my reservation confirmation #${booking.bookingId} for ${booking.room.name} (${booking.formData.checkIn} to ${booking.formData.checkOut}). Guest: ${booking.formData.firstName} ${booking.formData.lastName}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
        
        {/* Backdrop */}
        <div className="fixed inset-0 print:hidden" onClick={onClose} />

        {/* Modal Window / Voucher Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden z-10 my-4 max-h-[94vh] flex flex-col border border-gold-500/40 print:max-w-none print:shadow-none print:border-none print:rounded-none print:max-h-none"
        >
          {/* Action Header (Hidden in print) */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-charcoal-200 bg-navy-950 text-white print:hidden">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold text-gold-300">
                Official Booking Voucher Generated
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="touch-target px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-charcoal-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Print Voucher</span>
              </button>

              <button
                onClick={onClose}
                className="touch-target p-1.5 rounded-lg hover:bg-navy-800 text-charcoal-400 hover:text-white transition-colors"
                aria-label="Close voucher"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Voucher Content */}
          <div className="overflow-y-auto p-6 sm:p-10 flex-1 space-y-6 text-navy-950 print:p-6" id="printable-voucher">
            
            {/* Top Brand & Booking Reference Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-gold-500/40 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-500 p-1.5 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    <rect x="8" y="8" width="84" height="84" rx="14" stroke="#C59A45" strokeWidth="4" />
                    <path d="M28 72 L28 28 L50 54 L72 28 L72 72" stroke="#E2C47E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="20" r="5" fill="#C59A45" />
                  </svg>
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-bold tracking-wide text-navy-950">
                    GRAND MERIDIAN
                  </h1>
                  <p className="text-[10px] tracking-widest uppercase text-charcoal-500 font-semibold">
                    Hotel & Residences • Aerocity, New Delhi
                  </p>
                </div>
              </div>

              <div className="bg-charcoal-50 border border-charcoal-200 rounded-2xl p-3.5 text-right sm:text-right">
                <div className="text-[10px] text-charcoal-500 uppercase font-bold tracking-wider">
                  Reservation Confirmation ID
                </div>
                <div className="font-mono text-lg sm:text-xl font-bold text-gold-700 tracking-wider">
                  {booking.bookingId}
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center justify-end gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Confirmed & Guaranteed
                </div>
              </div>
            </div>

            {/* Guest & Corporate Profile Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-charcoal-50 p-4 sm:p-5 rounded-2xl border border-charcoal-200/80 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <span className="text-[10px] text-charcoal-500 uppercase tracking-wider font-bold block">
                  Lead Guest Information
                </span>
                <div className="font-bold text-navy-950 text-base">
                  {booking.formData.firstName} {booking.formData.lastName}
                </div>
                <div className="text-charcoal-600 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-charcoal-400" />
                  <span>{booking.formData.email}</span>
                </div>
                <div className="text-charcoal-600 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-charcoal-400" />
                  <span>{booking.formData.phone}</span>
                </div>
              </div>

              <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-charcoal-200 sm:pl-4 pt-3 sm:pt-0">
                <span className="text-[10px] text-charcoal-500 uppercase tracking-wider font-bold block">
                  Corporate Invoicing Details
                </span>
                <div className="font-bold text-navy-950">
                  {booking.formData.companyName || 'Individual Corporate Guest'}
                </div>
                {booking.formData.gstin ? (
                  <div className="text-charcoal-700 font-mono text-xs">
                    GSTIN: <span className="font-bold text-navy-900">{booking.formData.gstin}</span> (Input Tax Credit Eligible)
                  </div>
                ) : (
                  <div className="text-charcoal-500 italic text-xs">No GSTIN provided (Standard B2C invoice)</div>
                )}
                {booking.formData.flightNumber && (
                  <div className="text-charcoal-600 flex items-center gap-1 text-xs">
                    <Car className="w-3.5 h-3.5 text-gold-600" />
                    <span>Flight: <strong>{booking.formData.flightNumber}</strong> (Tarmac pickup scheduled)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stay Itinerary Summary */}
            <div className="border border-charcoal-200 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-charcoal-100 gap-2">
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-950">
                    {booking.room.name}
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    {booking.room.sizeSqFt} sq ft • {booking.room.bedType} • {booking.room.view}
                  </p>
                </div>
                <div className="text-xs bg-navy-100/70 text-navy-900 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
                  {booking.nights} {booking.nights === 1 ? 'Night' : 'Nights'} Stay
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-charcoal-50 p-2.5 rounded-xl">
                  <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">Check-In</span>
                  <strong className="text-navy-950">{booking.formData.checkIn}</strong>
                  <span className="text-[10px] text-charcoal-500 block">From 2:00 PM</span>
                </div>

                <div className="bg-charcoal-50 p-2.5 rounded-xl">
                  <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">Check-Out</span>
                  <strong className="text-navy-950">{booking.formData.checkOut}</strong>
                  <span className="text-[10px] text-charcoal-500 block">Until 12:00 PM</span>
                </div>

                <div className="bg-charcoal-50 p-2.5 rounded-xl">
                  <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">Occupancy</span>
                  <strong className="text-navy-950">
                    {booking.formData.adults} {booking.formData.adults === 1 ? 'Adult' : 'Adults'}
                    {booking.formData.children > 0 ? `, ${booking.formData.children} Child` : ''}
                  </strong>
                  <span className="text-[10px] text-charcoal-500 block">Breakfast Included</span>
                </div>

                <div className="bg-charcoal-50 p-2.5 rounded-xl">
                  <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">Payment Mode</span>
                  <strong className="text-navy-950 capitalize">
                    {booking.paymentMethod.replace(/_/g, ' ')}
                  </strong>
                  <span className="text-[10px] text-emerald-600 block">Guarantee On File</span>
                </div>
              </div>

              {/* Special Requests if any */}
              {booking.formData.specialRequests && (
                <div className="text-xs text-charcoal-600 bg-amber-50/60 border border-amber-200/80 p-2.5 rounded-xl">
                  <strong>Guest Note / Request:</strong> {booking.formData.specialRequests}
                </div>
              )}
            </div>

            {/* Financial Statement & Tax Calculation Table */}
            <div className="border border-charcoal-200 rounded-2xl overflow-hidden text-xs sm:text-sm">
              <div className="bg-navy-900 text-white px-4 py-2.5 font-semibold text-xs tracking-wider uppercase flex justify-between">
                <span>Description / Itemized Tariff</span>
                <span>Amount ({currency})</span>
              </div>

              <div className="divide-y divide-charcoal-100 p-4 space-y-2">
                <div className="flex justify-between text-charcoal-700 py-1">
                  <span>Room Tariff ({booking.nights} nights x {formatPrice(booking.room.priceINR, currency)})</span>
                  <span className="font-semibold text-navy-950">{formatPrice(booking.baseAmountINR, currency)}</span>
                </div>

                {booking.addonsAmountINR > 0 && (
                  <div className="flex justify-between text-charcoal-700 py-1">
                    <span>Selected Addons & Corporate Services</span>
                    <span className="font-semibold text-navy-950">{formatPrice(booking.addonsAmountINR, currency)}</span>
                  </div>
                )}

                {booking.discountAmountINR > 0 && (
                  <div className="flex justify-between text-emerald-700 py-1">
                    <span>Corporate / Promo Discount ({booking.formData.promoCode})</span>
                    <span className="font-semibold">- {formatPrice(booking.discountAmountINR, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between text-charcoal-600 py-1">
                  <span>Goods & Services Tax (18% Luxury Hotel GST)</span>
                  <span className="font-semibold text-navy-950">{formatPrice(booking.taxAmountINR, currency)}</span>
                </div>

                <div className="flex justify-between text-navy-950 font-bold text-base pt-3 border-t-2 border-charcoal-200">
                  <span>Total Amount Payable</span>
                  <span className="text-gold-700 font-serif text-lg sm:text-xl">
                    {formatPrice(booking.totalAmountINR, currency)}
                  </span>
                </div>
              </div>
            </div>

            {/* Check-In Protocols & Hotel Coordinates */}
            <div className="bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200/80 text-[11px] sm:text-xs text-charcoal-600 space-y-1.5">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>Executive Check-in Instructions</span>
              </div>
              <p>
                • Government-issued photo identification (Passport for foreign nationals; Aadhaar, Voter ID, or Driving License for Indian residents) is mandatory at check-in.
              </p>
              <p>
                • Airport pickup location: Terminal 3 arrival pillar number 17. Our chauffeur holds a Grand Meridian crest tablet with your name.
              </p>
              <p>
                • Need to amend this reservation? Contact our 24/7 Corporate Concierge at {HOTEL_INFO.contact.phoneDisplay} or reply directly on WhatsApp.
              </p>
            </div>

          </div>

          {/* Action Bar (Print / WhatsApp / Close) */}
          <div className="px-6 py-4 bg-charcoal-50 border-t border-charcoal-200 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
            <a
              href={`https://wa.me/${HOTEL_INFO.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto touch-target px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Voucher to WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none touch-target px-5 py-2.5 rounded-xl border border-charcoal-300 text-navy-900 font-semibold text-xs sm:text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 sm:flex-none touch-target px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
