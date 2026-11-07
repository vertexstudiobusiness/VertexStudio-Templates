import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, ChevronDown, Search, AlertCircle, Home } from 'lucide-react';
import type { BookingSearchParams, RoomCategory } from '../../types';
import { getTodayDateString, getTomorrowDateString, calculateNights } from '../../utils/formatters';

interface BookingSearchProps {
  onSearch: (params: BookingSearchParams) => void;
  onOpenBookingModalWithParams: (params: BookingSearchParams) => void;
}

export const BookingSearch: React.FC<BookingSearchProps> = ({
  onSearch,
  onOpenBookingModalWithParams,
}) => {
  const today = getTodayDateString();
  const initialCheckOut = getTomorrowDateString(today);

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [category, setCategory] = useState<RoomCategory>('all');
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const nights = calculateNights(checkIn, checkOut);

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    if (new Date(checkOut) <= new Date(newCheckIn)) {
      setCheckOut(getTomorrowDateString(newCheckIn));
      setDateError(null);
    } else {
      setDateError(null);
    }
  };

  const handleCheckOutChange = (newCheckOut: string) => {
    if (new Date(newCheckOut) <= new Date(checkIn)) {
      setDateError('Check-out date must be after check-in date');
      return;
    }
    setDateError(null);
    setCheckOut(newCheckOut);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(checkOut) <= new Date(checkIn)) {
      setDateError('Please select a valid check-out date after check-in.');
      return;
    }
    setDateError(null);
    const params: BookingSearchParams = {
      checkIn,
      checkOut,
      adults,
      children,
      category,
    };
    onSearch(params);
    onOpenBookingModalWithParams(params);
  };

  return (
    <div id="availability-bar" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="bg-[#0b251f] rounded-2xl shadow-2xl border border-[#c5a880]/30 p-4 sm:p-6 lg:p-7 text-[#fcfbf9]">
        {/* Top Header Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#dfbe85]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#dfbe85] font-sans font-semibold">
              Check Sanctuary Availability & Best Rates
            </span>
          </div>
          <div className="text-xs text-[#dacdbd] font-sans">
            Guaranteed Best Rates • Complimentary Airport Transfers Included
          </div>
        </div>

        {dateError && (
          <div className="mb-4 p-3 bg-red-950/70 border border-red-500/40 rounded-xl text-xs text-red-200 flex items-center space-x-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{dateError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end">
          {/* Check-In */}
          <div className="space-y-1.5">
            <label htmlFor="check-in-date" className="block text-[11px] tracking-[0.16em] uppercase text-[#c5a880] font-sans font-medium">
              Check-In Date
            </label>
            <div className="relative">
              <input
                id="check-in-date"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-[#061410] border border-[#c5a880]/30 focus:border-[#dfbe85] text-[#fcfbf9] text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#dfbe85] cursor-pointer"
              />
              <CalendarIcon className="w-4 h-4 text-[#c5a880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="check-out-date" className="block text-[11px] tracking-[0.16em] uppercase text-[#c5a880] font-sans font-medium">
                Check-Out Date
              </label>
              <span className="text-[10px] text-[#dacdbd]">
                {nights} Night{nights > 1 ? 's' : ''}
              </span>
            </div>
            <div className="relative">
              <input
                id="check-out-date"
                type="date"
                min={getTomorrowDateString(checkIn)}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-[#061410] border border-[#c5a880]/30 focus:border-[#dfbe85] text-[#fcfbf9] text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#dfbe85] cursor-pointer"
              />
              <CalendarIcon className="w-4 h-4 text-[#c5a880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="space-y-1.5 relative">
            <label className="block text-[11px] tracking-[0.16em] uppercase text-[#c5a880] font-sans font-medium">
              Guests & Children
            </label>
            <button
              type="button"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-[#061410] border border-[#c5a880]/30 focus:border-[#dfbe85] text-left text-sm font-sans text-[#fcfbf9] flex items-center justify-between cursor-pointer focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#c5a880]" />
                <span>
                  {adults} Adult{adults > 1 ? 's' : ''}
                  {children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-[#c5a880]" />
            </button>

            {guestDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-[#061410] border border-[#c5a880]/40 rounded-xl p-4 shadow-2xl z-30 space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-[#fcfbf9]">Adults</div>
                    <div className="text-[11px] text-stone-400">Ages 12+</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#dfbe85] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5"
                    >
                      -
                    </button>
                    <span className="w-5 text-center font-bold text-sm">{adults}</span>
                    <button
                      type="button"
                      disabled={adults >= 8}
                      onClick={() => setAdults(Math.min(8, adults + 1))}
                      className="w-8 h-8 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#dfbe85] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div>
                    <div className="text-sm font-medium text-[#fcfbf9]">Children</div>
                    <div className="text-[11px] text-stone-400">Ages 0 - 11</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#dfbe85] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5"
                    >
                      -
                    </button>
                    <span className="w-5 text-center font-bold text-sm">{children}</span>
                    <button
                      type="button"
                      disabled={children >= 6}
                      onClick={() => setChildren(Math.min(6, children + 1))}
                      className="w-8 h-8 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#dfbe85] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGuestDropdownOpen(false)}
                  className="w-full py-2 bg-[#c5a880] text-[#061410] font-bold text-xs uppercase tracking-wider rounded-lg mt-2"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Villa Type Filter */}
          <div className="space-y-1.5">
            <label htmlFor="room-category-select" className="block text-[11px] tracking-[0.16em] uppercase text-[#c5a880] font-sans font-medium">
              Accommodation Type
            </label>
            <div className="relative">
              <select
                id="room-category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value as RoomCategory)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl bg-[#061410] border border-[#c5a880]/30 focus:border-[#dfbe85] text-[#fcfbf9] text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#dfbe85] cursor-pointer appearance-none"
              >
                <option value="all">All Accommodations</option>
                <option value="deluxe">Heritage Deluxe Rooms</option>
                <option value="suites">Oceanfront Suites</option>
                <option value="villas">Private Pool Villas</option>
                <option value="presidential">Presidential Villas</option>
              </select>
              <Home className="w-4 h-4 text-[#c5a880] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search CTA */}
          <div>
            <button
              type="submit"
              className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#dfbe85] hover:from-[#dfbe85] hover:to-[#ead8b7] text-[#05130f] font-sans text-xs sm:text-sm tracking-[0.16em] uppercase font-bold transition-all duration-300 shadow-lg shadow-black/30 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Check Rates</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
