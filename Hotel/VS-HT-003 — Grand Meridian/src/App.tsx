import { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { RoomsSection } from './components/RoomsSection';
import { BusinessFacilities } from './components/BusinessFacilities';
import { MeetingsEvents } from './components/MeetingsEvents';
import { DiningSection } from './components/DiningSection';
import { CorporateOffers } from './components/CorporateOffers';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { BookingVoucherModal } from './components/BookingVoucherModal';
import { CorporateRfpModal } from './components/CorporateRfpModal';
import type { CurrencyCode, ConfirmedBooking } from './types';

export function App() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('INR');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [corporateRfpModalOpen, setCorporateRfpModalOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);

  // Search parameters for booking pre-filling
  const [bookingCriteria, setBookingCriteria] = useState<{
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    roomId?: string;
    promoCode?: string;
  }>({});

  const handleSearchFromHero = (criteria: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomId: string;
    promoCode: string;
  }) => {
    setBookingCriteria(criteria);
    setBookingModalOpen(true);
  };

  const handleBookRoom = (roomId: string) => {
    setBookingCriteria(prev => ({ ...prev, roomId }));
    setBookingModalOpen(true);
  };

  const handleBookingConfirmed = (booking: ConfirmedBooking) => {
    setConfirmedBooking(booking);
    setVoucherModalOpen(true);
  };

  const handleExploreRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-50 text-navy-950 font-sans selection:bg-gold-500 selection:text-white flex flex-col">
      
      {/* Demo Notice Banner */}
      <DemoBanner />

      {/* Main Navbar */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => setBookingModalOpen(true)}
        onOpenCorporateRfp={() => setCorporateRfpModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero with Booking Bar */}
        <Hero
          onOpenBooking={() => setBookingModalOpen(true)}
          onExploreRooms={handleExploreRooms}
          onSearch={handleSearchFromHero}
        />

        {/* 2. Overview / Pillars */}
        <Overview
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenCorporateRfp={() => setCorporateRfpModalOpen(true)}
        />

        {/* 3. Accommodations / Rooms & Suites */}
        <RoomsSection
          currency={currentCurrency}
          onBookRoom={handleBookRoom}
        />

        {/* 4. Business Facilities & High-Velocity Infrastructure */}
        <BusinessFacilities
          onOpenCorporateRfp={() => setCorporateRfpModalOpen(true)}
        />

        {/* 5. Meetings & Events / Boardrooms */}
        <MeetingsEvents />

        {/* 6. Dining & Entertaining */}
        <DiningSection
          currency={currentCurrency}
        />

        {/* 7. Corporate Offers & Long-Stay Packages */}
        <CorporateOffers
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* 8. Testimonials & Enterprise Logos */}
        <Testimonials />

        {/* 9. Location & Aerocity Connectivity */}
        <LocationSection />

        {/* 10. Frequently Asked Corporate Questions */}
        <FaqSection />

        {/* 11. Contact & Corporate Message Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Interactive Reservation Flow Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currentCurrency}
        initialCriteria={bookingCriteria}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Official Voucher Confirmation Modal */}
      <BookingVoucherModal
        booking={voucherModalOpen ? confirmedBooking : null}
        currency={currentCurrency}
        onClose={() => setVoucherModalOpen(false)}
      />

      {/* Corporate RFP & Tariff Request Modal */}
      <CorporateRfpModal
        isOpen={corporateRfpModalOpen}
        onClose={() => setCorporateRfpModalOpen(false)}
      />

    </div>
  );
}

export default App;
