import { useState } from 'react';
import type { Currency, Room } from './types/hotel';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AvailabilitySearch } from './components/AvailabilitySearch';
import { Philosophy } from './components/Philosophy';
import { SignatureRooms } from './components/SignatureRooms';
import { RoomDetailModal } from './components/RoomDetailModal';
import { Architecture } from './components/Architecture';
import { Experiences } from './components/Experiences';
import { EditorialGallery } from './components/EditorialGallery';
import { Testimonials } from './components/Testimonials';
import { Journal } from './components/Journal';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export function App() {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<Room | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [preselectedBookingRoomId, setPreselectedBookingRoomId] = useState<string | undefined>(undefined);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedBookingRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleSelectRoomForDetails = (room: Room) => {
    setSelectedRoomForModal(room);
  };

  const handleBookFromCard = (room: Room) => {
    setPreselectedBookingRoomId(room.id);
    setBookingModalOpen(true);
  };

  const handleSearchAvailability = (criteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
    category: string;
  }) => {
    if (criteria.category && criteria.category !== 'all') {
      setSelectedCategoryFilter(criteria.category);
    }
    // Smooth scroll down to rooms section
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverStay = () => {
    const philosophyElem = document.getElementById('philosophy');
    if (philosophyElem) {
      philosophyElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-haven-ivory text-haven-charcoal flex flex-col selection:bg-haven-sand selection:text-haven-charcoal relative">
      {/* Primary Navigation */}
      <Navbar
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Editorial Hero */}
        <Hero
          onDiscoverClick={handleDiscoverStay}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 2. Availability Search Bar */}
        <AvailabilitySearch onSearch={handleSearchAvailability} />

        {/* 3. Our Philosophy */}
        <Philosophy />

        {/* 4. Signature Rooms & Suites */}
        <SignatureRooms
          currency={currency}
          onSelectRoom={handleSelectRoomForDetails}
          onBookRoom={handleBookFromCard}
          selectedCategory={selectedCategoryFilter}
        />

        {/* 5. Architecture & Materiality */}
        <Architecture />

        {/* 6. Curated Experiences & Immersions */}
        <Experiences
          currency={currency}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Editorial Visual Gallery with Lightbox */}
        <EditorialGallery />

        {/* 8. Guest Reviews & Testimonials */}
        <Testimonials />

        {/* 9. The Haven Journal */}
        <Journal />

        {/* 10. Location, Topography & Logistics */}
        <LocationSection />

        {/* 11. FAQ & Policies */}
        <FAQSection />

        {/* 12. Contact, Concierge & Newsletter */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Mobile Sticky Reservation Quick-Bar */}
      <MobileStickyBar
        currency={currency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Room Detail Modal (Native dialog with overscroll containment) */}
      <RoomDetailModal
        room={selectedRoomForModal}
        currency={currency}
        onClose={() => setSelectedRoomForModal(null)}
        onBookRoom={handleBookFromCard}
      />

      {/* Booking Enquiry & Confirmation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        preselectedRoomId={preselectedBookingRoomId}
        currency={currency}
        onClose={() => {
          setBookingModalOpen(false);
          setPreselectedBookingRoomId(undefined);
        }}
      />
    </div>
  );
}

export default App;
