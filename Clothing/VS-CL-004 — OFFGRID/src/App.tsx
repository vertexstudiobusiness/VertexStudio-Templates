import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { NewDrops } from './components/NewDrops';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedEditorial } from './components/FeaturedEditorial';
import { Bestsellers } from './components/Bestsellers';
import { BrandManifesto } from './components/BrandManifesto';
import { DropCountdown } from './components/DropCountdown';
import { CampaignGallery } from './components/CampaignGallery';
import { CommunityStyling } from './components/CommunityStyling';
import { SocialFeed } from './components/SocialFeed';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { LookbookPage } from './components/LookbookPage';
import { ManifestoPage } from './components/ManifestoPage';
import { CheckoutPage } from './components/CheckoutPage';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { QuickViewModal } from './components/QuickViewModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { ToastContainer } from './components/ToastContainer';

const AppContent: React.FC = () => {
  const { activePage } = useShop();

  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite selection:bg-brand-orange selection:text-black flex flex-col justify-between overflow-x-hidden">
      {/* Header and Mobile Navigation */}
      <Header />
      <MobileMenu />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero />
            <Ticker />
            <NewDrops />
            <CategoryGrid />
            <FeaturedEditorial />
            <Bestsellers />
            <BrandManifesto />
            <DropCountdown />
            <CampaignGallery />
            <CommunityStyling />
            <SocialFeed />
            <Newsletter />
          </>
        )}

        {activePage === 'shop' && <ShopPage />}
        {activePage === 'product-detail' && <ProductDetailPage />}
        {activePage === 'lookbook' && <LookbookPage />}
        {activePage === 'manifesto' && <ManifestoPage />}
        {activePage === 'checkout' && <CheckoutPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile App Bottom Dock */}
      <MobileBottomNav />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SizeGuideModal />
      <QuickViewModal />
      <OrderConfirmationModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
