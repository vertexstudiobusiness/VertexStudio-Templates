import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { IntroAtmosphere } from './components/IntroAtmosphere';
import { Bestsellers } from './components/Bestsellers';
import { OurStory } from './components/OurStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { PhotoGallery } from './components/PhotoGallery';
import { Testimonials } from './components/Testimonials';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { WhatsAppCartDrawer } from './components/WhatsAppCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FBF8F3] text-[#291F18] flex flex-col font-sans selection:bg-[#4F5E4B]/20 selection:text-[#1C1511] overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar onOpenMobileNav={() => setIsMobileNavOpen(true)} />

        {/* Mobile Navigation Drawer */}
        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
        />

        {/* Main Sections */}
        <main className="flex-1">
          {/* 1. Large Editorial Hero (Optimized for Mobile First) */}
          <Hero />

          {/* 2. Atmosphere & Philosophy */}
          <IntroAtmosphere />

          {/* 3. Bestselling Products */}
          <Bestsellers />

          {/* 4. Our Story (Asymmetrical Layout without Mobile Overflow) */}
          <OurStory />

          {/* 5. Interactive Menu (Horizontal Swiper Categories, Search, Dietary Chips) */}
          <InteractiveMenu />

          {/* 6. Aesthetic Photo Gallery (2-column mobile magazine grid + Lightbox) */}
          <PhotoGallery />

          {/* 7. Customer Testimonials */}
          <Testimonials />

          {/* 8. Location, Operating Hours & Styled Map */}
          <LocationHours />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Quick-Action Bar */}
        <MobileBottomBar />

        {/* Overlays & Drawers */}
        <WhatsAppCartDrawer />
        <ReservationModal />
        <ScrollToTop />
      </div>
    </CartProvider>
  );
}

export default App;
