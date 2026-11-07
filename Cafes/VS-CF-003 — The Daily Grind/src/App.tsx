import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveStatusBanner } from './components/LiveStatusBanner';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { WorkspaceFeatures } from './components/WorkspaceFeatures';
import { OurSpaceSection } from './components/OurSpaceSection';
import { PackagesSection } from './components/PackagesSection';
import { PricingSection } from './components/PricingSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConfirmationModal } from './components/ConfirmationModal';
import type { ConfirmedBooking } from './types';

export const App: React.FC = () => {
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [selectedZoneId, setSelectedZoneId] = useState<string | undefined>(undefined);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenBooking = (zoneId?: string, packageId?: string) => {
    if (zoneId) setSelectedZoneId(zoneId);
    if (packageId) setSelectedPackageId(packageId);
    scrollToSection('reservation');
  };

  const handleSelectZone = (zoneId: string) => {
    setSelectedZoneId(zoneId);
    scrollToSection('reservation');
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    scrollToSection('reservation');
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPackageId(planId);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-sand-50 text-charcoal-900 flex flex-col font-sans selection:bg-sand-300 selection:text-charcoal-950">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Live Metrics Ticker Bar */}
        <div className="pt-16 sm:pt-20">
          <LiveStatusBanner />
        </div>

        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreSpace={() => scrollToSection('our-space')}
          onViewMenu={() => scrollToSection('menu')}
        />

        {/* 2. Intro Philosophy: The Third Space */}
        <IntroSection />

        {/* 3. Workspace Features & Live Telemetry */}
        <WorkspaceFeatures />

        {/* 4. Our Space & Architectural Zones */}
        <OurSpaceSection onSelectZoneForBooking={handleSelectZone} />

        {/* 5. Study & Work Packages */}
        <PackagesSection onSelectPackageForBooking={handleSelectPackage} />

        {/* 6. Pricing & Membership Comparison + Calculator */}
        <PricingSection onSelectPlanForBooking={handleSelectPlan} />

        {/* 7. Interactive Café Menu */}
        <MenuSection />

        {/* 8. Space Visual Gallery & Lightbox */}
        <GallerySection />

        {/* 9. Customer Testimonials */}
        <TestimonialsSection />

        {/* 10. Seat Enquiry & Reservation System */}
        <ReservationSection
          initialZoneId={selectedZoneId}
          initialPackageId={selectedPackageId}
          onBookingConfirmed={(booking) => setConfirmedBooking(booking)}
        />

        {/* 11. Location, Hours, Transit & Contact */}
        <LocationContactSection />

        {/* 12. Remote Worker FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Dock (Strict Mobile-First Priority) */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
        onViewMenu={() => scrollToSection('menu')}
      />

      {/* Booking Confirmation Celebration Modal */}
      <ConfirmationModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
};

export default App;
