import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const VisitUs: React.FC = () => {
  const { cafeConfig } = useCart();

  // Form State with Modern Web Guidance validation
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '11:00',
    guests: '2',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error as user types (Modern Web Guidance Validation Matrix)
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    if (field === 'name' && !value.trim()) {
      error = 'Please enter your name.';
    } else if (field === 'phone' && !/^[0-9+\-\s]{8,15}$/.test(value.trim())) {
      error = 'Please provide a valid contact number.';
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      error = 'Please enter a valid email address.';
    } else if (field === 'date' && !value) {
      error = 'Please select a preferred date.';
    }
    return error;
  };

  const handleBlur = (field: string) => {
    const error = validateField(field, (formData as any)[field]);
    if (error) {
      setFormErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};
    ['name', 'phone', 'email', 'date'].forEach((field) => {
      const err = validateField(field, (formData as any)[field]);
      if (err) errors[field] = err;
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reservation booking
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c67d3b', '#db8262', '#f7f4ec']
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${cafeConfig.cafeName}, ${cafeConfig.addressLine1}, ${cafeConfig.city}`
  )}`;

  return (
    <section id="visit" className="py-20 sm:py-28 bg-coffee-900 relative overflow-hidden border-t border-coffee-800">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-800 border border-caramel-500/25 text-caramel-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit the Café</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory-50 tracking-tight">
            Join Us for Coffee
          </h2>
          <p className="mt-3 text-sm sm:text-base text-coffee-300 font-light">
            Located in the heart of Bengaluru's historic Lavelle Road district. Drop in for quiet pour-overs or reserve a cupping table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Info & Map Visualization */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-coffee-800">
                <div className="w-9 h-9 rounded-xl bg-coffee-800 text-caramel-400 flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-ivory-50 text-base mb-1">Our Location</h3>
                <p className="text-xs text-coffee-200 leading-relaxed font-light">
                  {cafeConfig.addressLine1}<br />
                  {cafeConfig.addressLine2}<br />
                  {cafeConfig.city} {cafeConfig.pincode}
                </p>
                <span className="inline-block mt-2 text-[11px] text-caramel-400 font-medium">
                  Landmark: 600m from MG Road Metro
                </span>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-coffee-800">
                <div className="w-9 h-9 rounded-xl bg-coffee-800 text-copper-400 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-ivory-50 text-base mb-1">Café Hours</h3>
                <div className="text-xs text-coffee-200 space-y-1 font-light">
                  <div className="flex justify-between">
                    <span>Mon – Fri:</span>
                    <span className="text-ivory-100 font-mono">7:30 AM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat – Sun:</span>
                    <span className="text-ivory-100 font-mono">7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-caramel-400 font-medium pt-1">
                    <span>Public Cuppings:</span>
                    <span>Sat 11:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Visualization Card with interactive Directions button */}
            <div className="glass-card rounded-3xl overflow-hidden border border-coffee-800 relative group shadow-xl">
              {/* Map background illustration */}
              <div className="relative h-60 sm:h-72 w-full bg-[#15110e] overflow-hidden">
                {/* SVG Stylized Map Layout */}
                <svg className="w-full h-full opacity-65" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Roads & grid lines */}
                  <path d="M-50 120 L650 180" stroke="#33241b" strokeWidth="18" />
                  <path d="M-50 240 L650 200" stroke="#291d16" strokeWidth="12" />
                  <path d="M220 -20 L300 380" stroke="#382920" strokeWidth="22" />
                  <path d="M420 -20 L400 380" stroke="#281c15" strokeWidth="14" />
                  <path d="M80 -20 L140 380" stroke="#241912" strokeWidth="10" />
                  {/* Blocks */}
                  <rect x="30" y="30" width="160" height="70" rx="10" fill="#1e1611" />
                  <rect x="250" y="40" width="140" height="90" rx="10" fill="#221913" />
                  <rect x="450" y="20" width="120" height="130" rx="10" fill="#1b130e" />
                  <rect x="40" y="160" width="150" height="140" rx="10" fill="#201712" />
                  <rect x="260" y="210" width="110" height="100" rx="10" fill="#1f1611" />
                  <rect x="450" y="230" width="130" height="80" rx="10" fill="#231a14" />
                </svg>

                {/* Animated Café Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-caramel-500/30 animate-ping absolute inset-0" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-caramel-500 to-copper-600 border-2 border-ivory-50 flex items-center justify-center text-coffee-950 shadow-2xl">
                      <MapPin className="w-6 h-6 fill-coffee-950" />
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-coffee-950/90 border border-caramel-500/40 text-ivory-50 font-serif font-bold text-xs shadow-lg backdrop-blur-md">
                    Brew & Co. Roastery
                  </div>
                </div>

                {/* Bottom Overlay with Action */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-coffee-950/85 backdrop-blur-md border border-coffee-750">
                  <div className="text-xs">
                    <span className="font-semibold text-ivory-50 block">Valet Parking Available</span>
                    <span className="text-coffee-300 text-[11px]">Free WiFi & Outdoor Pet-Friendly Patio</span>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[38px] px-3.5 rounded-xl bg-caramel-500 hover:bg-caramel-400 active:scale-95 text-coffee-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${cafeConfig.phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-coffee-850 hover:bg-coffee-800 border border-coffee-750 text-xs text-ivory-200"
              >
                <Phone className="w-3.5 h-3.5 text-caramel-400" />
                <span>{cafeConfig.phoneNumber}</span>
              </a>
              <a
                href={`mailto:${cafeConfig.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-coffee-850 hover:bg-coffee-800 border border-coffee-750 text-xs text-ivory-200"
              >
                <Mail className="w-3.5 h-3.5 text-copper-400" />
                <span>{cafeConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Table Reservation & Tasting Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-coffee-800 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-caramel-400 block mb-1">
                  Table & Tasting Flights
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-50">
                  Reserve a Tasting Experience
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-coffee-300 font-light">
                  Complimentary reservation for coffee tastings, cupping sessions, and quiet workspace tables.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-ivory-50">
                    Reservation Requested!
                  </h4>
                  <p className="text-xs sm:text-sm text-coffee-200 max-w-sm mx-auto font-light">
                    Thank you, <span className="font-semibold text-ivory-50">{formData.name}</span>. We've reserved your table for <span className="text-caramel-400 font-medium">{formData.guests} guests</span> on <span className="text-caramel-400 font-medium">{formData.date} at {formData.time}</span>. A confirmation has been sent to your WhatsApp and email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        date: '',
                        time: '11:00',
                        guests: '2',
                        notes: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-coffee-800 hover:bg-coffee-750 text-xs font-semibold text-caramel-300 border border-coffee-700"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="res-name" className="block text-xs font-medium text-coffee-200 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Vikram Malhotra"
                      className={`w-full min-h-[48px] px-3.5 rounded-xl bg-coffee-950/80 border text-sm text-ivory-50 placeholder:text-coffee-500 focus:outline-none transition-colors ${
                        formErrors.name ? 'border-red-400' : 'border-coffee-750 focus:border-caramel-500'
                      }`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'res-name-error' : undefined}
                    />
                    {formErrors.name && (
                      <span id="res-name-error" className="text-[11px] text-red-400 mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="res-phone" className="block text-xs font-medium text-coffee-200 mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+91 98765 43210"
                        className={`w-full min-h-[48px] px-3.5 rounded-xl bg-coffee-950/80 border text-sm text-ivory-50 placeholder:text-coffee-500 focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-red-400' : 'border-coffee-750 focus:border-caramel-500'
                        }`}
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? 'res-phone-error' : undefined}
                      />
                      {formErrors.phone && (
                        <span id="res-phone-error" className="text-[11px] text-red-400 mt-1 block">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="res-email" className="block text-xs font-medium text-coffee-200 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="vikram@example.com"
                        className={`w-full min-h-[48px] px-3.5 rounded-xl bg-coffee-950/80 border text-sm text-ivory-50 placeholder:text-coffee-500 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-400' : 'border-coffee-750 focus:border-caramel-500'
                        }`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'res-email-error' : undefined}
                      />
                      {formErrors.email && (
                        <span id="res-email-error" className="text-[11px] text-red-400 mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Date, Time & Guests Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="res-date" className="block text-xs font-medium text-coffee-200 mb-1.5">
                        Date *
                      </label>
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        onBlur={() => handleBlur('date')}
                        className={`w-full min-h-[48px] px-3 rounded-xl bg-coffee-950/80 border text-xs text-ivory-50 focus:outline-none transition-colors ${
                          formErrors.date ? 'border-red-400' : 'border-coffee-750 focus:border-caramel-500'
                        }`}
                      />
                      {formErrors.date && (
                        <span className="text-[11px] text-red-400 mt-1 block">{formErrors.date}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="res-time" className="block text-xs font-medium text-coffee-200 mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        id="res-time"
                        name="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="w-full min-h-[48px] px-3 rounded-xl bg-coffee-950/80 border border-coffee-750 text-xs text-ivory-50 focus:border-caramel-500"
                      >
                        <option value="08:00">08:00 AM (Morning Brew)</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM (Cupping Table)</option>
                        <option value="14:00">02:00 PM (Afternoon Focus)</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="18:30">06:30 PM (Evening Unwind)</option>
                        <option value="20:00">08:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="res-guests" className="block text-xs font-medium text-coffee-200 mb-1.5">
                        Party Size
                      </label>
                      <select
                        id="res-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        className="w-full min-h-[48px] px-3 rounded-xl bg-coffee-950/80 border border-coffee-750 text-xs text-ivory-50 focus:border-caramel-500"
                      >
                        <option value="1">1 Person (Quiet Bar)</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests (Community)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="res-notes" className="block text-xs font-medium text-coffee-200 mb-1.5">
                      Special Tasting Preferences / Dietary Requests (Optional)
                    </label>
                    <textarea
                      id="res-notes"
                      name="specialNotes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="e.g. Interested in trying anaerobic single origins; oat milk preference..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950/80 border border-coffee-750 text-xs text-ivory-50 placeholder:text-coffee-500 focus:border-caramel-500 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-caramel-500 via-copper-500 to-caramel-600 hover:brightness-110 active:scale-98 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Confirming Experience...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-coffee-950" />
                        <span>Reserve Table & Cupping Flight</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-coffee-400 font-light">
                    Instant confirmation via WhatsApp. No booking fees required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
