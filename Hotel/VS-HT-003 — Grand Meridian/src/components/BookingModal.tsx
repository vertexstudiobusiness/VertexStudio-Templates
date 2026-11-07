import React, { useState, useMemo } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Bed, 
  Tag, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CreditCard, 
  Building, 
  Plane,
  Car,
  Coffee,
  Utensils,
  Shirt,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ROOMS_DATA, ADDONS_DATA, HOTEL_INFO } from '../data/hotelData';
import { Room, Addon, BookingFormData, ConfirmedBooking, CurrencyCode } from '../types';
import { formatPrice } from '../utils/currency';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  initialCriteria?: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    roomId?: string;
    promoCode?: string;
  };
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialCriteria,
  onBookingConfirmed
}) => {
  if (!isOpen) return null;

  // Defaults
  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 1);
  const defaultOut = new Date(defaultIn);
  defaultOut.setDate(defaultIn.getDate() + 2);
  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: initialCriteria?.checkIn || formatDate(defaultIn),
    checkOut: initialCriteria?.checkOut || formatDate(defaultOut),
    adults: initialCriteria?.adults || 1,
    children: initialCriteria?.children || 0,
    roomId: initialCriteria?.roomId || 'executive-king',
    selectedAddons: [],
    promoCode: initialCriteria?.promoCode || '',
    discountPercent: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    gstin: '',
    specialRequests: '',
    flightNumber: '',
    estimatedArrivalTime: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'pay_at_hotel' | 'corporate_billing' | 'card_online'>('pay_at_hotel');
  const [promoInput, setPromoInput] = useState(initialCriteria?.promoCode || '');
  const [promoMessage, setPromoMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Current selected room object
  const currentRoom = useMemo(() => {
    return ROOMS_DATA.find((r) => r.id === formData.roomId) || ROOMS_DATA[0];
  }, [formData.roomId]);

  // Calculate nights
  const nights = useMemo(() => {
    const d1 = new Date(formData.checkIn);
    const d2 = new Date(formData.checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [formData.checkIn, formData.checkOut]);

  // Handle promo codes
  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'CORP2026') {
      setFormData(prev => ({ ...prev, promoCode: code, discountPercent: 15 }));
      setPromoMessage({ type: 'success', text: 'Corporate Agreement Code applied: 15% discount unlocked!' });
    } else if (code === 'AIRPORT10') {
      setFormData(prev => ({ ...prev, promoCode: code, discountPercent: 10 }));
      setPromoMessage({ type: 'success', text: 'Airport Special Code applied: 10% discount unlocked!' });
    } else if (code === 'GRANDVIP') {
      setFormData(prev => ({ ...prev, promoCode: code, discountPercent: 20 }));
      setPromoMessage({ type: 'success', text: 'Executive VIP Code applied: 20% discount unlocked!' });
    } else {
      setPromoMessage({ type: 'error', text: 'Invalid promo code. Try CORP2026 or AIRPORT10' });
    }
  };

  // Toggle addon
  const toggleAddon = (addonId: string) => {
    setFormData(prev => {
      const exists = prev.selectedAddons.includes(addonId);
      return {
        ...prev,
        selectedAddons: exists
          ? prev.selectedAddons.filter(id => id !== addonId)
          : [...prev.selectedAddons, addonId]
      };
    });
  };

  // Financial calculations in INR
  const baseAmountINR = currentRoom.priceINR * nights;
  
  const addonsAmountINR = useMemo(() => {
    return formData.selectedAddons.reduce((acc, addonId) => {
      const addon = ADDONS_DATA.find(a => a.id === addonId);
      if (!addon) return acc;
      return acc + (addon.perNight ? addon.priceINR * nights : addon.priceINR);
    }, 0);
  }, [formData.selectedAddons, nights]);

  const discountAmountINR = (baseAmountINR * (formData.discountPercent || 0)) / 100;
  const taxableAmountINR = baseAmountINR - discountAmountINR + addonsAmountINR;
  const taxAmountINR = Math.round(taxableAmountINR * 0.18); // 18% GST
  const totalAmountINR = taxableAmountINR + taxAmountINR;

  // Handle final submission
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C59A45', '#0B192C', '#DFBE7B', '#22c55e']
      });
    } catch (err) {
      // ignore
    }

    // Generate reference code
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const bookingId = `GM-DEL-${randomNum}`;

    const confirmed: ConfirmedBooking = {
      bookingId,
      createdAt: new Date().toISOString(),
      room: currentRoom,
      formData,
      nights,
      baseAmountINR,
      addonsAmountINR,
      discountAmountINR,
      taxAmountINR,
      totalAmountINR,
      paymentMethod
    };

    onClose();
    onBookingConfirmed(confirmed);
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
          className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden z-10 my-4 max-h-[94vh] flex flex-col border border-gold-500/30"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-charcoal-200 bg-white sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                  Step {step} of 3: {step === 1 ? 'Stay Selection' : step === 2 ? 'Executive Add-ons' : 'Guest & Corporate Billing'}
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                Reserve Your Stay at Grand Meridian
              </h2>
            </div>

            <button
              onClick={onClose}
              className="touch-target p-2 rounded-full hover:bg-charcoal-100 text-charcoal-500 hover:text-navy-950 transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="w-full bg-charcoal-100 h-1.5 flex">
            <div className={`h-full bg-gold-500 transition-all duration-300 ${
              step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'
            }`} />
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto p-5 sm:p-8 flex-1 space-y-6">
            
            {/* STEP 1: Stay Selection */}
            {step === 1 && (
              <div className="space-y-6">
                
                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-charcoal-50 p-4 sm:p-5 rounded-2xl border border-charcoal-200">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>Check-In Date</span>
                    </label>
                    <input
                      type="date"
                      min={formatDate(new Date())}
                      value={formData.checkIn}
                      onChange={(e) => {
                        const newIn = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          checkIn: newIn,
                          checkOut: newIn >= prev.checkOut ? (() => {
                            const d = new Date(newIn);
                            d.setDate(d.getDate() + 1);
                            return formatDate(d);
                          })() : prev.checkOut
                        }));
                      }}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-600" />
                      <span>Check-Out Date</span>
                    </label>
                    <input
                      type="date"
                      min={formData.checkIn}
                      value={formData.checkOut}
                      onChange={(e) => setFormData(prev => ({ ...prev, checkOut: e.target.value }))}
                      className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-600" />
                      <span>Occupancy</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={formData.adults}
                        onChange={(e) => setFormData(prev => ({ ...prev, adults: Number(e.target.value) }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-2.5 py-2.5 text-xs sm:text-sm font-medium text-navy-950 focus:border-gold-500 focus:outline-none"
                      >
                        <option value={1}>1 Adult</option>
                        <option value={2}>2 Adults</option>
                        <option value={3}>3 Adults</option>
                        <option value={4}>4 Adults</option>
                      </select>

                      <select
                        value={formData.children}
                        onChange={(e) => setFormData(prev => ({ ...prev, children: Number(e.target.value) }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-2.5 py-2.5 text-xs sm:text-sm font-medium text-navy-950 focus:border-gold-500 focus:outline-none"
                      >
                        <option value={0}>0 Child</option>
                        <option value={1}>1 Child</option>
                        <option value={2}>2 Children</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Room Selection Cards */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center justify-between">
                    <span>Select Room or Suite ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
                    <span className="text-charcoal-500 font-normal">Complimentary breakfast included with all rooms</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-1">
                    {ROOMS_DATA.map((room) => {
                      const isSelected = formData.roomId === room.id;
                      return (
                        <div
                          key={room.id}
                          onClick={() => setFormData(prev => ({ ...prev, roomId: room.id }))}
                          className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex gap-3 ${
                            isSelected
                              ? 'border-gold-500 bg-gold-50/40 shadow-md ring-2 ring-gold-400/20'
                              : 'border-charcoal-200 bg-white hover:border-gold-300'
                          }`}
                        >
                          <img
                            src={room.images[0]}
                            alt={room.name}
                            className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                          />
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase font-bold text-gold-600 bg-gold-100/60 px-1.5 py-0.2 rounded">
                                  {room.category}
                                </span>
                                {isSelected && (
                                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                  </span>
                                )}
                              </div>
                              <h4 className="font-serif font-bold text-sm sm:text-base text-navy-950 mt-1 line-clamp-1">
                                {room.name}
                              </h4>
                              <p className="text-[11px] text-charcoal-500 line-clamp-1">
                                {room.sizeSqFt} sq ft • {room.bedType.split(' ')[0]}
                              </p>
                            </div>

                            <div className="flex items-baseline justify-between pt-1">
                              <div>
                                <span className="font-serif font-bold text-base sm:text-lg text-navy-950">
                                  {formatPrice(room.priceINR, currency)}
                                </span>
                                <span className="text-[10px] text-charcoal-500"> / night</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="bg-charcoal-50 p-4 rounded-2xl border border-charcoal-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-gold-600" />
                      <span>Corporate Code / Promotional Coupon</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. CORP2026 or AIRPORT10"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                        className="flex-1 bg-white border border-charcoal-300 rounded-xl px-3 py-2 text-xs font-medium uppercase focus:border-gold-500 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-navy-900 text-white rounded-xl text-xs font-bold hover:bg-navy-800 transition-colors"
                      >
                        Apply Code
                      </button>
                    </div>
                    {promoMessage && (
                      <p className={`text-xs mt-1.5 ${promoMessage.type === 'success' ? 'text-emerald-700 font-medium' : 'text-rose-600'}`}>
                        {promoMessage.text}
                      </p>
                    )}
                  </div>

                  <div className="sm:border-l border-charcoal-200 sm:pl-4 text-xs text-charcoal-500">
                    <span className="block font-semibold text-navy-950 mb-0.5">Sample Codes:</span>
                    <span className="block font-mono text-[11px] text-gold-700">CORP2026 (15% Off)</span>
                    <span className="block font-mono text-[11px] text-gold-700">AIRPORT10 (10% Off)</span>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 2: Executive Add-ons */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gold-50/60 border border-gold-200 text-xs text-gold-950">
                  <Sparkles className="w-4 h-4 text-gold-600 inline mr-1.5" />
                  <strong>Customize Your Corporate Itinerary:</strong> Add priority airport transfers, executive lounge passes, or laundry services at special bundled rates.
                </div>

                <div className="space-y-3">
                  {ADDONS_DATA.map((addon) => {
                    const isChecked = formData.selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`cursor-pointer rounded-2xl p-4 border-2 transition-all flex items-center justify-between gap-4 ${
                          isChecked
                            ? 'border-gold-500 bg-gold-50/50 shadow-sm'
                            : 'border-charcoal-200 bg-white hover:border-gold-300'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                            isChecked ? 'bg-gold-500 border-gold-500 text-navy-950' : 'border-charcoal-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm sm:text-base text-navy-950">
                              {addon.name}
                            </h4>
                            <p className="text-xs text-charcoal-500">
                              {addon.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className="font-serif font-bold text-sm sm:text-base text-navy-950 block">
                            +{formatPrice(addon.priceINR, currency)}
                          </span>
                          <span className="text-[10px] text-charcoal-500">
                            {addon.perNight ? `per night (x${nights})` : 'one-time'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: Guest & Billing Details */}
            {step === 3 && (
              <div className="space-y-6">
                
                {/* Contact Information */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-navy-950 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold-600" />
                    <span>Primary Guest & Communication Details</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Singhania"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Corporate Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-charcoal-50 border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:bg-white focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Company & GSTIN Invoicing */}
                <div className="bg-charcoal-50 p-4 sm:p-5 rounded-2xl border border-charcoal-200 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-navy-950 flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-gold-600" />
                    <span>Corporate Invoicing & GST Tax Credit</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. McKinsey & Company India"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Company GSTIN (for 18% Input Credit)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 07AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) => setFormData(prev => ({ ...prev, gstin: e.target.value.toUpperCase() }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm uppercase focus:border-gold-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1 flex items-center gap-1">
                        <Plane className="w-3.5 h-3.5 text-charcoal-500" />
                        <span>Arrival Flight Number (For Chauffeur)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. AI-102 / BA-143"
                        value={formData.flightNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, flightNumber: e.target.value.toUpperCase() }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm uppercase focus:border-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Special Requests or Preferences
                      </label>
                      <input
                        type="text"
                        placeholder="Quiet high floor, late check-in, extra pillows"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                        className="w-full bg-white border border-charcoal-300 rounded-xl px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Option */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-navy-950 mb-3 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-gold-600" />
                    <span>Select Payment & Guarantee Method</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label 
                      onClick={() => setPaymentMethod('pay_at_hotel')}
                      className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between ${
                        paymentMethod === 'pay_at_hotel'
                          ? 'border-gold-500 bg-gold-50/40 shadow-sm'
                          : 'border-charcoal-200 bg-white hover:border-gold-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-xs text-navy-950">Pay at Check-In</span>
                        <div className={`w-4 h-4 rounded-full border ${paymentMethod === 'pay_at_hotel' ? 'bg-gold-500 border-gold-500' : 'border-charcoal-300'}`} />
                      </div>
                      <p className="text-[11px] text-charcoal-500">
                        Zero deposit required today. Guarantee with company ID or credit card at arrival.
                      </p>
                    </label>

                    <label 
                      onClick={() => setPaymentMethod('corporate_billing')}
                      className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between ${
                        paymentMethod === 'corporate_billing'
                          ? 'border-gold-500 bg-gold-50/40 shadow-sm'
                          : 'border-charcoal-200 bg-white hover:border-gold-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-xs text-navy-950">Corporate Bill-to-Company</span>
                        <div className={`w-4 h-4 rounded-full border ${paymentMethod === 'corporate_billing' ? 'bg-gold-500 border-gold-500' : 'border-charcoal-300'}`} />
                      </div>
                      <p className="text-[11px] text-charcoal-500">
                        Direct debit to your organization's approved enterprise credit line.
                      </p>
                    </label>

                    <label 
                      onClick={() => setPaymentMethod('card_online')}
                      className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between ${
                        paymentMethod === 'card_online'
                          ? 'border-gold-500 bg-gold-50/40 shadow-sm'
                          : 'border-charcoal-200 bg-white hover:border-gold-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-xs text-navy-950">Instant Card / UPI</span>
                        <div className={`w-4 h-4 rounded-full border ${paymentMethod === 'card_online' ? 'bg-gold-500 border-gold-500' : 'border-charcoal-300'}`} />
                      </div>
                      <p className="text-[11px] text-charcoal-500">
                        Simulated secure instant transaction for immediate confirmation voucher.
                      </p>
                    </label>
                  </div>
                </div>

              </div>
            )}

            {/* Live Pricing Breakdown Bar (Always visible) */}
            <div className="bg-charcoal-50 rounded-2xl p-4 sm:p-5 border border-charcoal-200 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-charcoal-600">
                <span>{currentRoom.name} ({nights} {nights === 1 ? 'night' : 'nights'})</span>
                <span className="font-semibold text-navy-950">{formatPrice(baseAmountINR, currency)}</span>
              </div>

              {addonsAmountINR > 0 && (
                <div className="flex justify-between text-charcoal-600">
                  <span>Executive Add-ons ({formData.selectedAddons.length})</span>
                  <span className="font-semibold text-navy-950">{formatPrice(addonsAmountINR, currency)}</span>
                </div>
              )}

              {discountAmountINR > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Corporate Discount ({formData.promoCode} - {formData.discountPercent}%)</span>
                  <span className="font-semibold">- {formatPrice(discountAmountINR, currency)}</span>
                </div>
              )}

              <div className="flex justify-between text-charcoal-500">
                <span>18% GST (Indian Luxury Hotel Tax)</span>
                <span className="font-semibold text-navy-950">{formatPrice(taxAmountINR, currency)}</span>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-charcoal-200 text-navy-950 font-bold text-base">
                <span>Grand Total</span>
                <span className="text-gold-700 font-serif text-xl sm:text-2xl">
                  {formatPrice(totalAmountINR, currency)}
                </span>
              </div>
            </div>

          </div>

          {/* Sticky Navigation Footer */}
          <div className="p-4 sm:p-6 border-t border-charcoal-200 bg-white flex items-center justify-between gap-3 sticky bottom-0 z-20">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
                className="touch-target px-5 py-2.5 rounded-xl border border-charcoal-300 text-navy-900 font-semibold text-xs sm:text-sm hover:bg-charcoal-50 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-xs text-charcoal-500 hidden sm:block">
                Free cancellation up to 24 hrs prior to arrival
              </div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev + 1) as 2 | 3)}
                className="touch-target px-8 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ml-auto shadow-md"
              >
                <span>Continue to {step === 1 ? 'Add-ons' : 'Billing'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitBooking}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                className="touch-target px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/25 transition-all flex items-center gap-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Reservation & Generate Voucher</span>
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
