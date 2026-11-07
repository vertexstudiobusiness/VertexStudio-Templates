import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { SignatureCollection } from './components/SignatureCollection';
import { Craftsmanship } from './components/Craftsmanship';
import { InteractiveMenu } from './components/InteractiveMenu';
import { SeasonalSpecials } from './components/SeasonalSpecials';
import { BeansAndMerch } from './components/BeansAndMerch';
import { CafeGallery } from './components/CafeGallery';
import { Testimonials } from './components/Testimonials';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { BrewCalculatorModal } from './components/BrewCalculatorModal';
import { ConfigModal } from './components/ConfigModal';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="relative min-h-screen bg-coffee-950 text-ivory-100 flex flex-col selection:bg-caramel-500 selection:text-coffee-950">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Cinematic Hero */}
          <Hero />

          {/* 2. Brand Introduction & Philosophy */}
          <BrandStory />

          {/* 3. Signature Coffee Collection */}
          <SignatureCollection />

          {/* 4. Coffee Craftsmanship */}
          <Craftsmanship />

          {/* 5. Interactive Menu */}
          <InteractiveMenu />

          {/* 6. Featured Seasonal Drinks */}
          <SeasonalSpecials />

          {/* 7. Whole Beans & Merchandise */}
          <BeansAndMerch />

          {/* 8. Cafe Interior Gallery */}
          <CafeGallery />

          {/* 9. Customer Testimonials */}
          <Testimonials />

          {/* 10. Visit Us & Table Reservation */}
          <VisitUs />
        </main>

        {/* 11. Premium Footer with Instagram, WhatsApp & Newsletter */}
        <Footer />

        {/* Interactive Drawers, Modals & Floating Tools */}
        <CartDrawer />
        <ItemCustomizerModal />
        <BrewCalculatorModal />
        <ConfigModal />
        <BackToTop />
      </div>
    </CartProvider>
  );
};

export default App;
