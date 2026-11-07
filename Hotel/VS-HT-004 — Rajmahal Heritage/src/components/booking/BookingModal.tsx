import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG, ROOMS, Room } from '../../data/hotelConfig';
import { RoyalDivider } from '../common/RoyalOrnament';
import { CrestLogo } from '../common/CrestLogo';
import {
  X,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  Shield,
  CreditCard,
  Printer,
  Sparkles,
  Bed,
  Mail,
  User,
  Phone,
  FileText
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const {
    isBookingModalOpen,
    closeBookingModal,
    bookingQuery,
    setBookingQuery,
    nightsCount,
    formatPrice,
    selectedBookingRoomId,
    selectedPackageTitle,
    sendWhatsAppEnquiry
  } = useHotel();

  // Find room or default
  const [selectedRoom, setSelectedRoom] = useState<Room>(() => {
    if (selectedBookingRoomId) {
      const match = ROOMS.find(r => r.id === selectedBookingRoomId);
      if (match) return match;
    }
    return ROOMS[0];
  });

  useEffect(() => {
    if (selectedBookingRoomId) {
      const match = ROOMS.find(r => r.id === selectedBookingRoomId);
      if (match) setSelectedRoom(match);
    }
  }, [selectedBookingRoomId]);

  // Guest details form state
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentOption, setPaymentOption] = useState<'pay-at-palace' | 'card'>('pay-at-palace');

  // Confirmation state
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isBookingModalOpen) return null;

  // Calculation
  const baseRate = selectedRoom.priceINR * nightsCount;
  const taxes = Math.round(baseRate * 0.18); // 18% GST
  const grandTotal = baseRate + taxes;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `RMH-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(randomCode);
    setBookingConfirmed(true);
  };

  const handleWhatsAppBooking = () => {
    const msg = `*Namaste Rajmahal Heritage Concierge,*
I would like to reserve a stay at the palace:
• *Suite:* ${selectedRoom.name}
• *Check-in:* ${bookingQuery.checkIn}
• *Check-out:* ${bookingQuery.checkOut} (${nightsCount} Nights)
• *Guests:* ${bookingQuery.adults} Adults${bookingQuery.children ? `, ${bookingQuery.children} Children` : ''}
• *Guest Name:* ${guestName || 'Valued Guest'}
• *Phone:* ${guestPhone || 'Not provided'}
• *Package/Reference:* ${selectedPackageTitle || 'Standard Imperial Tariff'}
• *Special Requests:* ${specialRequests || 'None'}

Please confirm availability and bespoke royal arrangements.`;
    sendWhatsAppEnquiry(msg);
  };

  const resetAndClose = () => {
    setBookingConfirmed(false);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-walnut-950/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-ivory-50 text-walnut-900 border border-gold-400/40 rounded-2xl shadow-2xl my-auto overflow-hidden royal-border-gold flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-maroon-950 via-maroon-900 to-walnut-950 text-ivory-50 flex items-center justify-between border-b border-gold-400/30 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <CrestLogo variant="light" size="sm" showSubtitle={false} />
            <div>
              <h2 className="font-display text-base sm:text-lg text-gold-300 tracking-wide font-bold">
                {bookingConfirmed ? 'Imperial Reservation Confirmed' : 'Reserve Your Royal Sanctuary'}
              </h2>
              <p className="text-[10px] sm:text-xs text-sandstone-300 font-serif">
                Rajmahal Heritage • {HOTEL_CONFIG.location.city}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-sandstone-300 hover:text-ivory-50 rounded-full hover:bg-white/10 transition"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {bookingConfirmed ? (
            /* Confirmation View */
            <div className="text-center py-4 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-500/40 text-emerald-800 mx-auto flex items-center justify-center shadow-md animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-serif font-bold">
                  Reservation Voucher Generated
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-maroon-950 font-bold mt-1">
                  Khammaghani & Welcome!
                </h3>
                <p className="text-sm text-walnut-600 max-w-md mx-auto mt-2 font-sans">
                  Your reservation request for <strong>{guestName || 'Honoured Guest'}</strong> has been registered with the royal chambers.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="max-w-md mx-auto bg-sandstone-50 border border-gold-300/60 rounded-xl p-5 text-left text-xs sm:text-sm space-y-3 royal-card-shadow">
                <div className="flex justify-between items-center pb-2 border-b border-sandstone-200">
                  <span className="text-walnut-500 font-serif">Booking Voucher Code</span>
                  <span className="font-mono font-bold text-maroon-900 bg-gold-100 px-2 py-0.5 rounded border border-gold-300">
                    {confirmationCode}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-walnut-500 font-serif">Selected Suite</span>
                  <span className="font-semibold text-walnut-900">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-walnut-500 font-serif">Stay Dates</span>
                  <span className="font-semibold text-walnut-900">
                    {bookingQuery.checkIn} to {bookingQuery.checkOut} ({nightsCount} Nights)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-walnut-500 font-serif">Total Est. Tariff</span>
                  <span className="font-bold text-maroon-900">{formatPrice(grandTotal)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-sandstone-200 text-xs text-walnut-600">
                  <span>Settlement Mode:</span>
                  <span className="font-medium capitalize">{paymentOption.replace(/-/g, ' ')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-ivory-50 text-xs font-serif uppercase tracking-wider font-semibold rounded-lg shadow transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  Forward to WhatsApp Concierge
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-walnut-200 hover:bg-walnut-300 text-walnut-900 text-xs font-serif uppercase tracking-wider font-semibold rounded-lg transition"
                >
                  <Printer className="w-4 h-4 text-walnut-700" />
                  Print Voucher
                </button>
              </div>

              <p className="text-[11px] text-walnut-500 max-w-sm mx-auto">
                *Demo Simulation: A confirmation email copy has been simulated to {guestEmail || 'your email'}. Our royal butler will contact you upon arrival.
              </p>
            </div>
          ) : (
            /* Booking Form View */
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Top Banner Notice if a package was selected */}
              {selectedPackageTitle && (
                <div className="bg-gold-100/70 border border-gold-400/50 rounded-lg p-3 flex items-center gap-2 text-xs text-maroon-950 font-serif">
                  <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>
                    Package Selected: <strong>{selectedPackageTitle}</strong>. Special inclusions applied to this reservation.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Guest & Stay Details (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-display text-sm uppercase tracking-widest text-maroon-900 font-bold border-b border-sandstone-300 pb-2">
                    1. Guest Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-serif text-walnut-700 mb-1">
                        Full Name <span className="text-maroon-700">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-walnut-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          placeholder="e.g. Maharaja Vikram Singh"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif text-walnut-700 mb-1">
                        Contact Email <span className="text-maroon-700">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-walnut-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          placeholder="vikram@heritage.in"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif text-walnut-700 mb-1">
                        Phone / WhatsApp <span className="text-maroon-700">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-walnut-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          placeholder="+91 98290 00000"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-serif text-walnut-700 mb-1">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="w-3.5 h-3.5 text-walnut-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          readOnly
                          value={`${bookingQuery.adults} Adults${bookingQuery.children ? `, ${bookingQuery.children} Children` : ''}`}
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-sandstone-100 border border-sandstone-300 rounded-lg text-walnut-700"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-sm uppercase tracking-widest text-maroon-900 font-bold border-b border-sandstone-300 pb-2 pt-2">
                    2. Choose Suite or Chamber
                  </h3>

                  <div className="space-y-2">
                    {ROOMS.map((room) => (
                      <label
                        key={room.id}
                        className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${
                          selectedRoom.id === room.id
                            ? 'bg-gold-50 border-gold-500 shadow-sm'
                            : 'bg-white border-sandstone-200 hover:border-gold-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="selectedRoom"
                            checked={selectedRoom.id === room.id}
                            onChange={() => setSelectedRoom(room)}
                            className="text-maroon-800 focus:ring-gold-500"
                          />
                          <div>
                            <p className="font-serif font-bold text-xs sm:text-sm text-walnut-900">
                              {room.name}
                            </p>
                            <p className="text-[11px] text-walnut-500 font-sans">
                              {room.sizeSqFt} sq ft • {room.bedType} • {room.view}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-serif font-bold text-xs sm:text-sm text-maroon-900">
                            {formatPrice(room.priceINR)}
                          </p>
                          <p className="text-[10px] text-walnut-400">per night</p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-serif text-walnut-700 mb-1">
                      Bespoke Royal Preferences & Dietary Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Vegetarian Mewari dining, airport arrival time, anniversary flower arrangement..."
                      className="w-full p-2.5 text-xs sm:text-sm bg-white border border-sandstone-300 rounded-lg focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                {/* Right Column: Reservation Summary & Guarantee (5 Cols) */}
                <div className="lg:col-span-5 bg-sandstone-100/70 border border-sandstone-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-display text-sm uppercase tracking-widest text-maroon-950 font-bold border-b border-sandstone-300 pb-2">
                      Stay Summary
                    </h4>

                    <div className="rounded-lg overflow-hidden border border-sandstone-300">
                      <img
                        src={selectedRoom.images[0]}
                        alt={selectedRoom.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-2.5 bg-white text-xs">
                        <p className="font-serif font-bold text-walnut-900">{selectedRoom.name}</p>
                        <p className="text-[11px] text-walnut-500">{selectedRoom.floor}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-sans">
                      <div className="flex justify-between text-walnut-600">
                        <span>Check-In:</span>
                        <span className="font-medium text-walnut-900">{bookingQuery.checkIn}</span>
                      </div>
                      <div className="flex justify-between text-walnut-600">
                        <span>Check-Out:</span>
                        <span className="font-medium text-walnut-900">{bookingQuery.checkOut}</span>
                      </div>
                      <div className="flex justify-between text-walnut-600">
                        <span>Duration:</span>
                        <span className="font-medium text-walnut-900">{nightsCount} Nights</span>
                      </div>
                      <div className="flex justify-between text-walnut-600">
                        <span>Tariff ({nightsCount} nights):</span>
                        <span className="font-medium text-walnut-900">{formatPrice(baseRate)}</span>
                      </div>
                      <div className="flex justify-between text-walnut-600">
                        <span>Luxury GST & Heritage Levy (18%):</span>
                        <span className="font-medium text-walnut-900">{formatPrice(taxes)}</span>
                      </div>
                      <div className="border-t border-sandstone-300 pt-2 flex justify-between items-baseline">
                        <span className="font-serif font-bold text-sm text-maroon-950">Total Est. Payable:</span>
                        <span className="font-display font-bold text-base text-maroon-900">
                          {formatPrice(grandTotal)}
                        </span>
                      </div>
                    </div>

                    {/* Settlement Guarantee Choice */}
                    <div className="pt-2 border-t border-sandstone-300 space-y-2">
                      <p className="text-[11px] font-serif uppercase tracking-wider text-walnut-700 font-semibold">
                        Settlement Guarantee
                      </p>
                      <label className="flex items-center gap-2 text-xs text-walnut-800 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentOption"
                          checked={paymentOption === 'pay-at-palace'}
                          onChange={() => setPaymentOption('pay-at-palace')}
                        />
                        <span>Pay upon Arrival at Palace (Complimentary Hold)</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-walnut-800 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentOption"
                          checked={paymentOption === 'card'}
                          onChange={() => setPaymentOption('card')}
                        />
                        <span>Credit / Debit Card Hold (Instant Confirmation)</span>
                      </label>
                    </div>

                    <div className="text-[10px] text-walnut-500 bg-white/70 p-2.5 rounded border border-sandstone-300 flex items-start gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>
                        Complimentary cancellation up to 48 hours prior to check-in. Includes 24/7 Imperial Butler Service and daily Royal Breakfast.
                      </span>
                    </div>
                  </div>

                  {/* Submission CTA Buttons */}
                  <div className="pt-4 space-y-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-gold-200 font-serif font-bold uppercase tracking-[0.2em] text-xs shadow-royal hover:shadow-royal-gold transition flex items-center justify-center gap-2"
                    >
                      <span>Complete Royal Reservation</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full py-2.5 px-4 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-ivory-50 font-serif text-xs uppercase tracking-wider font-semibold transition flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-300" />
                      <span>Direct WhatsApp Enquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
