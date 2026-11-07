import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Clock, MapPin, Users, Coffee, CheckCircle, MessageSquare, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { CAFE_INFO, CAFE_ZONES, WORK_PACKAGES, WORKSPACE_PLANS } from '../data/mockData';
import type { ConfirmedBooking, ReservationFormData } from '../types';

interface ReservationSectionProps {
  initialZoneId?: string;
  initialPackageId?: string;
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialZoneId,
  initialPackageId,
  onBookingConfirmed,
}) => {
  // Get today's date formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: todayStr,
    timeSlot: 'Morning Sprint (7:30 AM – 11:30 AM)',
    durationHours: 4,
    guestsCount: 1,
    preferredZone: 'The Silent Mezzanine (<35 dB)',
    packageType: 'Full Day Productivity Pass (₹490)',
    specialRequests: '',
    addCoffeePass: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync external prefill triggers
  useEffect(() => {
    if (initialZoneId) {
      const match = CAFE_ZONES.find((z) => z.id === initialZoneId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          preferredZone: `${match.name} (${match.acousticLevel})`,
        }));
      }
    }
  }, [initialZoneId]);

  useEffect(() => {
    if (initialPackageId) {
      const matchPkg = WORK_PACKAGES.find((p) => p.id === initialPackageId);
      if (matchPkg) {
        setFormData((prev) => ({
          ...prev,
          packageType: `${matchPkg.name} (₹${matchPkg.price})`,
        }));
      } else {
        const matchPlan = WORKSPACE_PLANS.find((p) => p.id === initialPackageId);
        if (matchPlan) {
          setFormData((prev) => ({
            ...prev,
            packageType: `${matchPlan.title} (₹${matchPlan.price})`,
          }));
        }
      }
    }
  }, [initialPackageId]);

  // Packages list for dropdown
  const packageOptions = [
    { label: 'Full Day Productivity Pass (₹490) - Includes ₹200 Cafe Credit', basePrice: 490, credit: 200 },
    { label: 'Drop-in Half Day Pass (₹280) - Includes ₹100 Cafe Credit', basePrice: 280, credit: 100 },
    { label: 'The Deep Work Sprint (₹399) - Coffee + Pastry Included', basePrice: 399, credit: 190 },
    { label: "The Founder's Marathon (₹849) - 2 Coffees + Meal + Call Pod", basePrice: 849, credit: 400 },
    { label: 'Solo Soundproof Pod (₹250/hr)', basePrice: 250, credit: 0 },
    { label: 'The Glasshouse Meeting Pod (₹850/hr - Seats up to 6)', basePrice: 850, credit: 0 },
  ];

  const currentPackage = packageOptions.find((p) => p.label === formData.packageType) || packageOptions[0];

  // Dynamic estimated total calculation
  const guests = Number(formData.guestsCount) || 1;
  const isMeetingPod = formData.packageType.includes('Meeting Pod') || formData.packageType.includes('Soundproof Pod');
  // If it's a meeting pod, price is per room, otherwise per guest
  const baseCost = isMeetingPod ? currentPackage.basePrice : currentPackage.basePrice * guests;
  const coffeeAddonCost = formData.addCoffeePass ? 180 * guests : 0;
  const totalEstimatedAmount = baseCost + coffeeAddonCost;
  const totalCreditEarned = currentPackage.credit * (isMeetingPod ? 1 : guests);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.date) {
      errs.date = 'Please pick a reservation date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C37936', '#3A271B', '#7D957B', '#EFE9DC'],
        });
      } catch (err) {
        console.error(err);
      }

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const confirmedBooking: ConfirmedBooking = {
        ...formData,
        bookingId: `TDG-BLR-${randomSuffix}`,
        totalEstimatedAmount,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setIsSubmitting(false);
      onBookingConfirmed(confirmedBooking);
    }, 600);
  };

  const handleWhatsAppEnquiry = () => {
    const name = formData.fullName.trim() || 'Guest';
    const message = encodeURIComponent(
      `Hello The Daily Grind!\n\nI want to book a seat at your Indiranagar café:\n• Name: ${name}\n• Date: ${formData.date}\n• Time Slot: ${formData.timeSlot}\n• Zone: ${formData.preferredZone}\n• Package: ${formData.packageType}\n• Guests: ${formData.guestsCount}\n• Add-on Coffee: ${formData.addCoffeePass ? 'Yes' : 'No'}\n• Special Notes: ${formData.specialRequests || 'None'}\n\nPlease let me know if a seat is available! Thank you.`
    );
    window.open(`https://wa.me/${CAFE_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="reservation" className="py-16 sm:py-24 bg-sand-100 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ambercrema" />
            <span>Instant Seat Hold</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Reserve Your Study &amp; Work Seat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            Choose your preferred focus zone and time slot. We hold your ergonomic desk for 20 minutes from check-in time.
          </p>
        </div>

        {/* Booking Card Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-sand-300/90 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Interactive Form (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-sand-200">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-sand-200">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                  Step 1: Reservation Details
                </span>
                <span className="text-xs text-olive-800 bg-olive-50 px-2.5 py-1 rounded-full font-medium border border-olive-200">
                  Pay at Desk (Zero Advance)
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanshu Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-sand-300'
                      } text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-900`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      WhatsApp / Mobile <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98450 12345"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-sand-300'
                      } text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-900`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. priyanshu@creatives.co"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-sand-300'
                    } text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-900`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Date and Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-charcoal-500" /> Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-charcoal-500" /> Preferred Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                    >
                      <option>Morning Sprint (7:30 AM – 11:30 AM)</option>
                      <option>Afternoon Deep Flow (11:30 AM – 4:00 PM)</option>
                      <option>Evening Push (4:00 PM – 8:30 PM)</option>
                      <option>Night Owl Session (8:30 PM – 11:00 PM)</option>
                      <option>Full Day Sanctuary (7:30 AM – 11:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Zone and Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-charcoal-500" /> Focus Zone
                    </label>
                    <select
                      value={formData.preferredZone}
                      onChange={(e) => setFormData({ ...formData, preferredZone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                    >
                      <option>The Silent Mezzanine (&lt;35 dB)</option>
                      <option>The Main Roastery Floor (42–48 dB)</option>
                      <option>Solo Soundproof Phone Booth</option>
                      <option>The Glasshouse Meeting Pod (Seats up to 6)</option>
                      <option>The Sunlit Garden Verandah (Pet-friendly)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-charcoal-500" /> Number of Guests
                    </label>
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                    >
                      <option value={1}>1 Person (Solo Desk)</option>
                      <option value={2}>2 Persons (Side-by-side)</option>
                      <option value={3}>3 Persons (Collaborative Table)</option>
                      <option value={4}>4 Persons (Team Table / Pod)</option>
                      <option value={5}>5 Persons (Glasshouse Pod)</option>
                      <option value={6}>6 Persons (Glasshouse Pod)</option>
                    </select>
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Pass / Package Type
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                  >
                    {packageOptions.map((opt, i) => (
                      <option key={i} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add-on Coffee Checkbox */}
                <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="coffee-pass-checkbox"
                    checked={formData.addCoffeePass}
                    onChange={(e) => setFormData({ ...formData, addCoffeePass: e.target.checked })}
                    className="mt-0.5 rounded text-ambercrema focus:ring-ambercrema h-4 w-4"
                  />
                  <label htmlFor="coffee-pass-checkbox" className="text-xs text-charcoal-700 cursor-pointer">
                    <strong className="text-charcoal-900 block font-semibold">
                      Add-on: Single-Origin V60 Pour-over Ready Upon Arrival (+₹180/person)
                    </strong>
                    <span className="text-[11px] text-charcoal-500">
                      Slow-dripped Chikmagalur Arabica freshly dialled in by our head barista when you arrive.
                    </span>
                  </label>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Special Requests / Equipment (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Prefer corner window seat, need HDMI cable, oat milk preference"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-sand-50 border border-sand-300 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-charcoal-900"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-sand-50 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 active:scale-[0.98]"
                  >
                    <span>{isSubmitting ? 'Holding Your Seat...' : 'Confirm Seat Reservation'}</span>
                    <ArrowRight className="w-4 h-4 text-ambercrema" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="sm:w-auto py-3.5 px-4 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Reserve via WhatsApp</span>
                  </button>
                </div>

              </form>

            </div>

            {/* Right: Live Estimation Summary & House Etiquette (5 cols) */}
            <div className="lg:col-span-5 bg-sand-50 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-sand-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                    Live Booking Breakdown
                  </span>
                  <span className="text-[11px] text-ambercrema-dark font-bold font-mono">
                    Instant Calculation
                  </span>
                </div>

                {/* Breakdown list */}
                <div className="space-y-3 text-xs sm:text-sm mb-6">
                  <div className="flex justify-between items-start text-charcoal-600">
                    <div>
                      <p className="font-semibold text-charcoal-800">{formData.packageType.split('(')[0]}</p>
                      <p className="text-[11px] text-charcoal-500">
                        {isMeetingPod ? 'Private room booking' : `₹${currentPackage.basePrice} × ${guests} Guest(s)`}
                      </p>
                    </div>
                    <span className="font-mono font-bold text-charcoal-900">₹{baseCost}</span>
                  </div>

                  {formData.addCoffeePass && (
                    <div className="flex justify-between items-start text-charcoal-600">
                      <div>
                        <p className="font-semibold text-charcoal-800">Arrival V60 Pour-over</p>
                        <p className="text-[11px] text-charcoal-500">₹180 × {guests} Guest(s)</p>
                      </div>
                      <span className="font-mono font-bold text-charcoal-900">₹{coffeeAddonCost}</span>
                    </div>
                  )}

                  {totalCreditEarned > 0 && (
                    <div className="p-3 rounded-xl bg-olive-100/70 border border-olive-200 text-olive-900 text-xs">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Coffee className="w-3.5 h-3.5 text-olive-700" /> Included Café Credit:
                        </span>
                        <span className="font-mono font-bold text-emerald-800">₹{totalCreditEarned}</span>
                      </div>
                      <p className="text-[11px] text-olive-700 mt-1">
                        Deducted from your beverage/food bill when you order at the bar!
                      </p>
                    </div>
                  )}

                  {/* Total */}
                  <div className="pt-3 border-t border-sand-300/80 flex items-baseline justify-between">
                    <div>
                      <p className="text-sm font-bold text-charcoal-900">Estimated Total at Desk:</p>
                      <p className="text-[11px] text-charcoal-500">Inclusive of all local taxes</p>
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-serif text-charcoal-900">
                      ₹{totalEstimatedAmount}
                    </span>
                  </div>
                </div>

                {/* Etiquette & Amenities list */}
                <div className="p-4 rounded-2xl bg-white border border-sand-200 space-y-2.5 text-xs text-charcoal-600 mb-6">
                  <p className="font-bold text-charcoal-800 text-xs uppercase tracking-wider mb-2">
                    Our Productivity Promise:
                  </p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Universal surge-protected power &amp; USB-C at your seat.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Silent Mezzanine enforces strict whisper-only etiquette.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Free high-speed dual redundant fiber Wi-Fi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Cancellation free: just message us if your plans change.</span>
                  </div>
                </div>
              </div>

              {/* Demo note */}
              <div className="pt-4 border-t border-sand-200 text-center">
                <p className="text-[11px] text-charcoal-400 italic">
                  *Demonstration Reservation. No credit card required to test. Submitting generates an instant mock reservation token with confetti and prefilled WhatsApp text.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
