import React, { useState } from 'react';
import { HotelProvider } from './context/HotelContext';
import { DemoBannerRibbon, DemoDisclaimerModal } from './components/common/DemoDisclaimerModal';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { Hero } from './components/home/Hero';
import { BookingBar } from './components/booking/BookingBar';
import { HeritageStory } from './components/home/HeritageStory';
import { Accommodations } from './components/home/Accommodations';
import { RoomDetailModal } from './components/home/RoomDetailModal';
import { Experiences } from './components/home/Experiences';
import { ArchitectureShowcase } from './components/home/ArchitectureShowcase';
import { DiningSection } from './components/home/DiningSection';
import { WeddingsSection } from './components/home/WeddingsSection';
import { PackagesSection } from './components/home/PackagesSection';
import { GallerySection } from './components/home/GallerySection';
import { ReviewsSection } from './components/home/ReviewsSection';
import { LocationSection } from './components/home/LocationSection';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';
import { TableReservationModal } from './components/modals/TableReservationModal';
import { WeddingEnquiryModal } from './components/modals/WeddingEnquiryModal';
import { ExperienceEnquiryModal } from './components/modals/ExperienceEnquiryModal';
import { LightboxModal } from './components/modals/LightboxModal';

function PalaceApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-walnut-900 selection:bg-maroon-800 selection:text-gold-200">
      {/* Top Demo Notification Ribbon */}
      <DemoBannerRibbon />

      {/* Main Navigation */}
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Drawer (375px - 430px priority) */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <BookingBar />
        <HeritageStory />
        <Accommodations />
        <Experiences />
        <ArchitectureShowcase />
        <DiningSection />
        <WeddingsSection />
        <PackagesSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Dedicated Mobile Quick-Booking Sticky Dock */}
      <MobileStickyBar />

      {/* Premium Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <BookingModal />
      <RoomDetailModal />
      <TableReservationModal />
      <WeddingEnquiryModal />
      <ExperienceEnquiryModal />
      <LightboxModal />
      <DemoDisclaimerModal />
    </div>
  );
}

export default function App() {
  return (
    <HotelProvider>
      <PalaceApp />
    </HotelProvider>
  );
}
