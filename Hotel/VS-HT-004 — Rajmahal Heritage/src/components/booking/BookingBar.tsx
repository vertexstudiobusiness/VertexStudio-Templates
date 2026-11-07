import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { ROOMS } from '../../data/hotelConfig';
import {
  Calendar,
  Users,
  Bed,
  Search,
  AlertCircle,
  Moon,
  Sparkles
} from 'lucide-react';

export const BookingBar: React.FC = () => {
  const {
    bookingQuery,
    setBookingQuery,
    nightsCount,
    openBookingModal
  } = useHotel();

  const [dateError, setDateError] = useState<string | null>(null);

  // Today in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIn = e.target.value;
    if (newIn >= bookingQuery.checkOut) {
      // automatically push checkOut by at least 1 day
      const nextDay = new Date(newIn);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayStr = nextDay.toISOString().split('T')[0];
      setBookingQuery(prev => ({ ...prev, checkIn: newIn, checkOut: nextDayStr }));
      setDateError(null);
    } else {
      setBookingQuery(prev => ({ ...prev, checkIn: newIn }));
      setDateError(null);
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOut = e.target.value;
    if (newOut <= bookingQuery.checkIn) {
      setDateError('Check-out must be at least 1 day after check-in.');
    } else {
      setDateError(null);
      setBookingQuery(prev => ({ ...prev, checkOut: newOut }));
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingQuery.checkOut <= bookingQuery.checkIn) {
      setDateError('Please select a valid check-out date.');
      return;
    }
    openBookingModal(bookingQuery.roomCategoryId !== 'all' ? bookingQuery.roomCategoryId : undefined);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3.5 sm:px-6 relative z-30 -mt-10 sm:-mt-20">
      <div className="bg-walnut-950/98 backdrop-blur-md border border-gold-400/40 rounded-2xl shadow-2xl p-4 sm:p-6 text-ivory-100 royal-border-gold">
        {/* Top Header Badge with Night Calculation */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-gold-400/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-serif uppercase tracking-[0.18em] text-gold-300 font-bold text-[11px] sm:text-xs">
              Imperial Availability & Rates
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-maroon-900/90 border border-gold-400/40 text-[10px] sm:text-[11px] font-serif text-gold-200">
              <Moon className="w-3 h-3 text-gold-400 shrink-0" />
              <span>{nightsCount} {nightsCount === 1 ? 'Night' : 'Nights'} Royal Sojourn</span>
            </span>
            <span className="text-[10px] text-sandstone-300 hidden md:inline">
              Best Rate Guarantee • Butler Included
            </span>
          </div>
        </div>

        {/* Date Validation Alert if any */}
        {dateError && (
          <div className="mb-3 px-3 py-2 rounded-lg bg-maroon-900/80 border border-maroon-500 text-gold-200 text-xs flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{dateError}</span>
          </div>
        )}

        {/* Form Grid: Optimized Mobile-First */}
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Check-In */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-widest text-sandstone-300 mb-1 flex items-center gap-1 font-serif">
              <Calendar className="w-3 h-3 text-gold-400 shrink-0" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              min={todayStr}
              value={bookingQuery.checkIn}
              onChange={handleCheckInChange}
              className="w-full bg-walnut-900 border border-gold-400/30 hover:border-gold-400/60 focus:border-gold-400 focus:outline-none rounded-xl px-3 py-2.5 text-xs sm:text-sm font-sans text-ivory-100 transition min-h-[46px]"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-widest text-sandstone-300 mb-1 flex items-center gap-1 font-serif">
              <Calendar className="w-3 h-3 text-gold-400 shrink-0" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              min={bookingQuery.checkIn}
              value={bookingQuery.checkOut}
              onChange={handleCheckOutChange}
              className="w-full bg-walnut-900 border border-gold-400/30 hover:border-gold-400/60 focus:border-gold-400 focus:outline-none rounded-xl px-3 py-2.5 text-xs sm:text-sm font-sans text-ivory-100 transition min-h-[46px]"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-widest text-sandstone-300 mb-1 flex items-center gap-1 font-serif">
              <Users className="w-3 h-3 text-gold-400 shrink-0" />
              <span>Guests</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={bookingQuery.adults}
                onChange={(e) => setBookingQuery(prev => ({ ...prev, adults: Number(e.target.value) }))}
                className="w-full bg-walnut-900 border border-gold-400/30 hover:border-gold-400/60 focus:border-gold-400 focus:outline-none rounded-xl px-2 py-2.5 text-xs font-sans text-ivory-100 min-h-[46px]"
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
              </select>
              <select
                value={bookingQuery.children}
                onChange={(e) => setBookingQuery(prev => ({ ...prev, children: Number(e.target.value) }))}
                className="w-full bg-walnut-900 border border-gold-400/30 hover:border-gold-400/60 focus:border-gold-400 focus:outline-none rounded-xl px-2 py-2.5 text-xs font-sans text-ivory-100 min-h-[46px]"
              >
                <option value={0}>0 Kids</option>
                <option value={1}>1 Kid</option>
                <option value={2}>2 Kids</option>
              </select>
            </div>
          </div>

          {/* Suite Category */}
          <div className="flex flex-col">
            <label className="text-[11px] uppercase tracking-widest text-sandstone-300 mb-1 flex items-center gap-1 font-serif">
              <Bed className="w-3 h-3 text-gold-400 shrink-0" />
              <span>Chamber Choice</span>
            </label>
            <select
              value={bookingQuery.roomCategoryId}
              onChange={(e) => setBookingQuery(prev => ({ ...prev, roomCategoryId: e.target.value }))}
              className="w-full bg-walnut-900 border border-gold-400/30 hover:border-gold-400/60 focus:border-gold-400 focus:outline-none rounded-xl px-3 py-2.5 text-xs font-sans text-ivory-100 min-h-[46px] truncate"
            >
              <option value="all">All Suites & Chambers</option>
              {ROOMS.map(r => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end pt-1 sm:pt-0">
            <button
              type="submit"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 active:scale-[0.98] text-walnut-950 font-serif font-bold uppercase tracking-[0.18em] text-xs shadow-royal-gold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <Search className="w-4 h-4 text-walnut-950 shrink-0" />
              <span>Search Suites</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
