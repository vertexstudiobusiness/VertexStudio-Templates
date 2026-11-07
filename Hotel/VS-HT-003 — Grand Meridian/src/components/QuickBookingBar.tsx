import React, { useState } from 'react';
import { Calendar, Users, Bed, Tag, ArrowRight, Check } from 'lucide-react';
import { ROOMS_DATA } from '../data/hotelData';

interface QuickBookingBarProps {
  onSearch: (criteria: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomId: string;
    promoCode: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onSearch }) => {
  // Setup default dates: Tomorrow and 2 nights later
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState(formatDate(defaultCheckOut));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomId, setRoomId] = useState('executive-king');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      adults,
      children,
      roomId,
      promoCode
    });
  };

  return (
    <div className="w-full bg-navy-950/95 sm:bg-navy-900/95 backdrop-blur-md border border-gold-500/30 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl shadow-navy-950/80">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* Mobile Title indicator */}
        <div className="flex items-center justify-between pb-2 border-b border-navy-800 lg:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider">
              Instant Corporate Reservation
            </span>
          </div>
          <span className="text-[11px] text-charcoal-400">Best Rate Guarantee</span>
        </div>

        {/* Inputs Grid: 1 col on mobile (375-430px), 2 col on tablet (640px+), 5 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
          
          {/* Check-In Date */}
          <div className="lg:col-span-3">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-300 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>Check-In Date</span>
            </label>
            <div className="relative">
              <input
                type="date"
                min={formatDate(new Date())}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (e.target.value >= checkOut) {
                    const nextDay = new Date(e.target.value);
                    nextDay.setDate(nextDay.getDate() + 1);
                    setCheckOut(formatDate(nextDay));
                  }
                }}
                className="w-full bg-navy-950 border border-navy-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="lg:col-span-3">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-300 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              <span>Check-Out Date</span>
            </label>
            <div className="relative">
              <input
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-navy-950 border border-navy-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Guests: Adults & Children */}
          <div className="lg:col-span-3">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-300 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold-400" />
              <span>Guests & Occupancy</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full bg-navy-950 border border-navy-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                aria-label="Adults"
              >
                <option value={1} className="bg-navy-900">1 Adult</option>
                <option value={2} className="bg-navy-900">2 Adults</option>
                <option value={3} className="bg-navy-900">3 Adults</option>
                <option value={4} className="bg-navy-900">4 Adults</option>
              </select>

              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full bg-navy-950 border border-navy-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl px-3 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                aria-label="Children"
              >
                <option value={0} className="bg-navy-900">0 Child</option>
                <option value={1} className="bg-navy-900">1 Child</option>
                <option value={2} className="bg-navy-900">2 Children</option>
              </select>
            </div>
          </div>

          {/* Room Selection */}
          <div className="lg:col-span-3">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-300 mb-1.5 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-gold-400" />
              <span>Room Preference</span>
            </label>
            <select
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full bg-navy-950 border border-navy-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.id} className="bg-navy-900">
                  {r.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Promo code + Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-navy-800">
          
          {/* Promo / Corporate Code with inline toggle */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <div className="relative flex-1 sm:w-60">
              <Tag className="w-3.5 h-3.5 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Corporate Code (e.g. CORP2026)"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value.toUpperCase());
                  setPromoApplied(false);
                }}
                className="w-full bg-navy-950/80 border border-navy-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-charcoal-500 uppercase focus:outline-none focus:border-gold-400"
              />
            </div>
            {promoCode && !promoApplied && (
              <button
                type="button"
                onClick={handleApplyPromo}
                className="px-3 py-2 bg-navy-800 text-gold-400 text-xs font-semibold rounded-lg hover:bg-navy-700"
              >
                Apply
              </button>
            )}
            {promoApplied && (
              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                <Check className="w-3.5 h-3.5" /> Applied
              </span>
            )}
          </div>

          {/* Submit Search CTA */}
          <button
            type="submit"
            className="w-full sm:w-auto touch-target px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-bold text-sm shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Check Availability & Book</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </form>
    </div>
  );
};
