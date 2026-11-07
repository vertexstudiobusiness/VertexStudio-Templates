import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { X, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReservationModal: React.FC = () => {
  const { isReservationModalOpen, setIsReservationModalOpen } = useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('10:30');
  const [guests, setGuests] = useState('2 Guests');
  const [seating, setSeating] = useState('Courtyard Patio');
  const [specialRequests, setSpecialRequests] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isReservationModalOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isReservationModalOpen]);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.returnValue = '';
    }
    setIsReservationModalOpen(false);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      handleClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4F5E4B', '#B86749', '#CBB99F']
      });
    } catch {
      // ignore
    }

    const message = [
      `Bonjour Café Maison! ☕`,
      `I would like to request a table reservation:`,
      ``,
      `• Name: ${name || 'A Guest'}`,
      `• Contact: ${phone || 'Via WhatsApp'}`,
      `• Date: ${date}`,
      `• Time: ${time}`,
      `• Party Size: ${guests}`,
      `• Seating Preference: ${seating}`,
      specialRequests ? `• Special Occasion / Notes: ${specialRequests}` : ``,
      ``,
      `Please confirm if this table is available. Merci!`
    ]
      .filter(line => line !== null && line !== undefined)
      .join('\n');

    const whatsappUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  if (!isReservationModalOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="reservation-title"
      {...({ closedby: 'any' } as any)}
      className="p-0 bg-transparent text-[#291F18] border-none max-w-lg w-[94vw] max-h-[92vh] focus:outline-none backdrop:bg-[#1C1511]/85 my-auto"
    >
      <div
        className="relative bg-[#FBF8F3] rounded-sm border border-[#EFE8DC] overflow-hidden shadow-2xl p-5 sm:p-8 text-left space-y-5 sm:space-y-6 max-h-[90vh] overflow-y-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#4F5E4B]">
              <Sparkles className="w-3 h-3 text-[#B86749]" />
              <span>Café Maison Sanctuary</span>
            </div>
            <h3 id="reservation-title" className="font-serif text-2xl sm:text-3xl text-[#1C1511]">
              Reserve Your Table
            </h3>
            <p className="text-xs text-[#5C473A] font-light">
              We hold tables for 15 minutes. For same-hour tables, message us directly.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center text-[#7E6251] hover:text-[#1C1511] active:bg-[#EFE8DC] rounded-full transition-colors shrink-0"
            aria-label="Close reservation dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Éloise Dubois"
                className="w-full min-h-[44px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm px-3 py-2 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full min-h-[44px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm px-3 py-2 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full min-h-[44px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm px-3 py-2 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full min-h-[44px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm px-3 py-2 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
              >
                <option value="08:00">08:00 AM (Early Roast)</option>
                <option value="09:30">09:30 AM (Breakfast)</option>
                <option value="11:00">11:00 AM (Mid-Morning)</option>
                <option value="13:00">01:00 PM (Lunch Tartines)</option>
                <option value="15:30">03:30 PM (Afternoon Bakes)</option>
                <option value="17:00">05:00 PM (Golden Hour)</option>
                <option value="19:30">07:30 PM (Evening Ambient)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full min-h-[44px] bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm px-3 py-2 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
              >
                <option value="1 Guest">1 Person (Quiet corner)</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests</option>
                <option value="5-8 Guests">5 – 8 Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
              Seating Preference
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                'Courtyard Patio',
                'Main Hall (Oak)',
                'Terrazzo Bar',
              ].map((seat) => (
                <button
                  type="button"
                  key={seat}
                  onClick={() => setSeating(seat)}
                  className={`min-h-[40px] p-2 rounded-sm border text-[11px] text-center leading-tight transition-colors ${
                    seating === seat
                      ? 'bg-[#4F5E4B] border-[#4F5E4B] text-white font-medium'
                      : 'bg-[#F7F3EB] border-[#EFE8DC] text-[#5C473A] hover:bg-[#EFE8DC]'
                  }`}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
              Special Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="e.g. Birthday morning, high chair needed..."
              className="w-full bg-[#F7F3EB] border border-[#EFE8DC] rounded-sm p-3 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
            />
          </div>

          <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="min-h-[44px] px-4 py-2 text-xs uppercase tracking-wider text-[#7E6251] hover:text-[#1C1511] transition-colors text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB] text-xs uppercase tracking-[0.16em] font-medium rounded-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#CBB99F]" />
              <span>Confirm via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
