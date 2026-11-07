import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ShieldCheck } from 'lucide-react';
import { calculateNights } from '../utils/formatters';

interface AvailabilitySearchProps {
  onSearch: (criteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
    category: string;
  }) => void;
}

export const AvailabilitySearch: React.FC<AvailabilitySearchProps> = ({ onSearch }) => {
  // Set default dates: check-in 7 days from now, check-out 9 days from now
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 7);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 2);

  const formatDateValue = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDateValue(defaultCheckIn));
  const [checkOut, setCheckOut] = useState(formatDateValue(defaultCheckOut));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [category, setCategory] = useState('all');
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [dateError, setDateError] = useState('');

  const nights = calculateNights(checkIn, checkOut);

  const handleCheckInChange = (newDate: string) => {
    setCheckIn(newDate);
    setDateError('');
    if (newDate >= checkOut) {
      const nextDay = new Date(newDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(formatDateValue(nextDay));
    }
  };

  const handleCheckOutChange = (newDate: string) => {
    if (newDate <= checkIn) {
      setDateError('Check-out must be after check-in date');
    } else {
      setDateError('');
      setCheckOut(newDate);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkOut <= checkIn) {
      setDateError('Check-out must be at least 1 day after check-in');
      return;
    }
    setDateError('');
    onSearch({
      checkIn,
      checkOut,
      guests: adults + children,
      category,
    });
  };

  return (
    <section
      id="availability"
      className="relative z-20 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 xs:px-6 sm:px-8"
      aria-label="Availability Search"
    >
      <div className="bg-white/95 backdrop-blur-md border border-haven-stone/30 p-5 sm:p-7 shadow-xl">
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Check-In Date */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="checkin-date"
                className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-haven-olive" />
                <span>Arrival</span>
              </label>
              <input
                id="checkin-date"
                type="date"
                value={checkIn}
                min={formatDateValue(today)}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="h-12 w-full px-3.5 bg-haven-ivory/60 border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal focus:bg-white transition-colors"
                required
              />
            </div>

            {/* Check-Out Date */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="checkout-date"
                className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-haven-olive" />
                <span>Departure ({nights} {nights === 1 ? 'night' : 'nights'})</span>
              </label>
              <input
                id="checkout-date"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="h-12 w-full px-3.5 bg-haven-ivory/60 border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal focus:bg-white transition-colors"
                required
              />
            </div>

            {/* Guests Selector */}
            <div className="relative flex flex-col space-y-1.5">
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-haven-olive" />
                <span>Guests</span>
              </span>
              <button
                type="button"
                onClick={() => setGuestPickerOpen(!guestPickerOpen)}
                className="h-12 w-full px-3.5 bg-haven-ivory/60 border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans flex items-center justify-between text-left focus:outline-none focus:border-haven-charcoal transition-colors"
                aria-expanded={guestPickerOpen}
              >
                <span>
                  {adults} {adults === 1 ? 'Adult' : 'Adults'}
                  {children > 0 ? `, ${children} ${children === 1 ? 'Child' : 'Children'}` : ''}
                </span>
                <span className="text-xs text-haven-stone">▼</span>
              </button>

              {/* Guest Count Stepper Popover */}
              {guestPickerOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-haven-stone/30 shadow-xl p-4 z-30 space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-haven-charcoal">Adults</p>
                      <p className="text-[10px] text-haven-stone-dark">Ages 13 and above</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-sm border border-haven-stone/40 flex items-center justify-center text-haven-charcoal text-sm hover:bg-haven-cream active:bg-haven-stone-light"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-xs font-mono font-medium">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(5, adults + 1))}
                        className="w-8 h-8 rounded-sm border border-haven-stone/40 flex items-center justify-center text-haven-charcoal text-sm hover:bg-haven-cream active:bg-haven-stone-light"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between pt-3 border-t border-haven-stone/20">
                    <div>
                      <p className="text-xs font-medium text-haven-charcoal">Children</p>
                      <p className="text-[10px] text-haven-stone-dark">Ages 10–12 (Pool suites only)</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-sm border border-haven-stone/40 flex items-center justify-center text-haven-charcoal text-sm hover:bg-haven-cream active:bg-haven-stone-light"
                      >
                        -
                      </button>
                      <span className="w-4 text-center text-xs font-mono font-medium">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(Math.min(3, children + 1))}
                        className="w-8 h-8 rounded-sm border border-haven-stone/40 flex items-center justify-center text-haven-charcoal text-sm hover:bg-haven-cream active:bg-haven-stone-light"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestPickerOpen(false)}
                    className="w-full py-2 bg-haven-charcoal text-white text-[11px] tracking-widest uppercase"
                  >
                    Apply Guests
                  </button>
                </div>
              )}
            </div>

            {/* Room Preference */}
            <div className="flex flex-col space-y-1.5">
              <label
                htmlFor="room-category-select"
                className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-haven-stone-dark font-medium flex items-center space-x-1.5"
              >
                <Home className="w-3.5 h-3.5 text-haven-olive" />
                <span>Sanctuary Key</span>
              </label>
              <select
                id="room-category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-12 w-full px-3.5 bg-haven-ivory/60 border border-haven-stone/30 text-haven-charcoal text-xs sm:text-sm font-sans focus:outline-none focus:border-haven-charcoal focus:bg-white transition-colors"
              >
                <option value="all">All Sanctuary Keys</option>
                <option value="room">Courtyard Verandah Rooms</option>
                <option value="suite">Stone Garden Suites</option>
                <option value="villa">Forest Pool Villas</option>
                <option value="residence">The Sanctuary Residence</option>
              </select>
            </div>
          </div>

          {/* Error Message if date validation fails */}
          {dateError && (
            <p className="text-xs text-red-600 font-sans tracking-wide pt-1">{dateError}</p>
          )}

          {/* Search Button and Direct Booking Perks */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-haven-stone/20">
            <div className="flex items-center space-x-2 text-[11px] text-haven-stone-dark">
              <ShieldCheck className="w-4 h-4 text-haven-olive shrink-0" />
              <span>
                Direct Booking Privileges: Complimentary Farmhouse Breakfast & Guided Morning Yoga
              </span>
            </div>

            <button
              type="submit"
              className="h-12 sm:h-11 px-8 bg-haven-charcoal hover:bg-haven-charcoal-light text-haven-ivory text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 active:scale-[0.98]"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Keys</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
