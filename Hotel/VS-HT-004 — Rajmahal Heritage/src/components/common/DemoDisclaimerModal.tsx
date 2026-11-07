import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { X, Sparkles, CheckCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { CrestLogo } from './CrestLogo';
import { RoyalDivider } from './RoyalOrnament';

export const DemoDisclaimerModal: React.FC = () => {
  const { isDisclaimerOpen, closeDisclaimer, sendWhatsAppEnquiry } = useHotel();

  if (!isDisclaimerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-walnut-950/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-ivory-50 text-walnut-900 border border-gold-400/40 rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden royal-border-gold"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={closeDisclaimer}
          className="absolute top-4 right-4 p-2 text-walnut-600 hover:text-maroon-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-2">
          <div className="flex justify-center mb-3">
            <CrestLogo variant="dark" size="sm" showSubtitle={false} />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-100 text-maroon-900 border border-gold-300/60 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Interactive Heritage Showcase
          </span>
          <h3 className="font-display text-2xl text-maroon-950 font-bold tracking-wide">
            Welcome to Rajmahal Heritage
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-600 font-serif">
            A Fictional Royal Palace Hospitality Project
          </p>
        </div>

        <RoyalDivider variant="gold" className="my-4" />

        <div className="space-y-3.5 text-sm text-walnut-700 leading-relaxed">
          <p>
            <strong>Rajmahal Heritage</strong> is an artistic luxury web experience meticulously crafted to evoke the majesty of Rajasthan’s historic palace hotels (such as those in Udaipur and Jaipur).
          </p>
          <ul className="space-y-2 text-xs sm:text-sm bg-sandstone-50/70 p-3.5 rounded-lg border border-sandstone-200">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>
                <strong>Realistic Demo Booking:</strong> Reservation forms calculate authentic INR rates, tax estimates, and generate simulated imperial booking vouchers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>
                <strong>Instant WhatsApp Concierge:</strong> Test real-time booking enquiries with pre-populated guest dates, guest counts, and room choices via WhatsApp.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
              <span>
                <strong>Configurable Architecture:</strong> All room types, menus, rates, and imagery are organized cleanly in configuration files for easy real-world deployment.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              sendWhatsAppEnquiry("Namaste Concierge, I am exploring Rajmahal Heritage demo website and would like to test the booking concierge!");
              closeDisclaimer();
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-ivory-50 text-xs font-semibold tracking-wider uppercase rounded shadow transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            Test WhatsApp Concierge
          </button>
          <button
            onClick={closeDisclaimer}
            className="flex-1 px-4 py-2.5 bg-maroon-900 hover:bg-maroon-950 text-gold-200 text-xs font-semibold tracking-wider uppercase rounded shadow transition"
          >
            Explore The Palace
          </button>
        </div>
      </div>
    </div>
  );
};

export const DemoBannerRibbon: React.FC = () => {
  const { openDisclaimer } = useHotel();

  return (
    <div className="bg-maroon-950 text-gold-200 border-b border-gold-400/30 text-[11px] sm:text-xs py-1.5 px-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shrink-0" />
          <span className="truncate">
            <strong className="text-gold-300 font-medium">Royal Sanctuary:</strong> Experience Rajasthan's historic palace grandeur. All bookings interactive demo.
          </span>
        </div>
        <button
          onClick={openDisclaimer}
          className="underline hover:text-ivory-50 shrink-0 text-gold-300 font-semibold tracking-wide"
        >
          Demo Details
        </button>
      </div>
    </div>
  );
};
