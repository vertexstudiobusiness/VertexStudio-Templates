import { useState } from 'react';
import type { CurrencyCode, BookingSearchParams } from './types';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { BookingSearch } from './components/home/BookingSearch';
import { AboutResort } from './components/home/AboutResort';
import { Accommodations } from './components/home/Accommodations';
import { Experiences } from './components/home/Experiences';
import { Dining } from './components/home/Dining';
import { Gallery } from './components/home/Gallery';
import { Testimonials } from './components/home/Testimonials';
import { SpecialOffers } from './components/home/SpecialOffers';
import { LocationSection } from './components/home/LocationSection';
import { Footer } from './components/common/Footer';
import { ContactBookingModal } from './components/home/ContactBookingModal';
import { BookingStickyMobile } from './components/home/BookingStickyMobile';
import './App.css';

export function App() {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('INR');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomName, setPreselectedRoomName] = useState<string | undefined>(undefined);
  const [searchParams, setSearchParams] = useState<BookingSearchParams | null>(null);

  const handleOpenBooking = (roomOrPackageName?: string) => {
    setPreselectedRoomName(roomOrPackageName);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithParams = (params: BookingSearchParams) => {
    setSearchParams(params);
    setBookingModalOpen(true);
  };

  const handleExploreStay = () => {
    const el = document.querySelector('#accommodations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#143d34] flex flex-col font-sans selection:bg-[#c5a880]/30 selection:text-[#0b251f]">
      {/* Premium Navbar */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={(curr) => setCurrentCurrency(curr)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Full-screen Cinematic Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreStay={handleExploreStay}
        />

        {/* Availability Search Bar Widget */}
        <BookingSearch
          onSearch={(params) => setSearchParams(params)}
          onOpenBookingModalWithParams={handleOpenBookingWithParams}
        />

        {/* Editorial Storytelling: About The Resort */}
        <AboutResort />

        {/* Luxury Accommodations */}
        <Accommodations
          currentCurrency={currentCurrency}
          onOpenBooking={handleOpenBooking}
          selectedCategory={searchParams?.category || 'all'}
        />

        {/* Resort Experiences */}
        <Experiences onOpenBooking={() => handleOpenBooking()} />

        {/* Dining Experiences */}
        <Dining />

        {/* Full-Width Cinematic Gallery */}
        <Gallery />

        {/* Guest Reviews & Accolades */}
        <Testimonials />

        {/* Special Offers & Exclusive Packages */}
        <SpecialOffers onOpenBooking={handleOpenBooking} />

        {/* Location & Travel Information */}
        <LocationSection />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Interactive Booking & Concierge Modal */}
      <ContactBookingModal
        key={`${preselectedRoomName || 'default'}-${searchParams?.checkIn || ''}-${searchParams?.checkOut || ''}`}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomName={preselectedRoomName}
        preselectedParams={searchParams}
        currentCurrency={currentCurrency}
      />

      {/* Touch-Friendly Sticky Mobile Booking Bar */}
      <BookingStickyMobile
        onOpenBooking={() => handleOpenBooking()}
        currentCurrency={currentCurrency}
      />
    </div>
  );
}

export default App;
