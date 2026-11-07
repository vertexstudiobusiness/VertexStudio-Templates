import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { MobileDrawer } from './components/common/MobileDrawer';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { SizeGuideModal } from './components/common/SizeGuideModal';

// Home Views & Sections
import { Hero } from './components/home/Hero';
import { CategoryPills } from './components/home/CategoryPills';
import { NewArrivals } from './components/home/NewArrivals';
import { TrendingNow } from './components/home/TrendingNow';
import { EditorialBanner } from './components/home/EditorialBanner';
import { Bestsellers } from './components/home/Bestsellers';
import { FestiveCollection } from './components/home/FestiveCollection';
import { StyleInspiration } from './components/home/StyleInspiration';
import { Testimonials } from './components/home/Testimonials';
import { InstagramFeed } from './components/home/InstagramFeed';
import { Newsletter } from './components/home/Newsletter';

// Dedicated Views
import { CatalogView } from './components/catalog/CatalogView';
import { FestiveView } from './components/views/FestiveView';
import { LookbookView } from './components/views/LookbookView';

// Interactive Drawers & Modals
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { ImageLightbox } from './components/product/ImageLightbox';
import { CartDrawer } from './components/cart/CartDrawer';
import { WishlistDrawer } from './components/wishlist/WishlistDrawer';
import { SearchModal } from './components/search/SearchModal';
import { CheckoutModal } from './components/cart/CheckoutModal';

// Bottom Mobile Navigation Bar for One-Thumb Reachability
import { Home, Compass, Heart, ShoppingBag, Search } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const {
    activeView,
    setActiveView,
    setActiveCategory,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    cartCount,
    wishlist
  } = useShop();

  const handleBottomNav = (view: 'home' | 'catalog' | 'festive' | 'lookbook') => {
    setActiveView(view);
    if (view === 'catalog') {
      setActiveCategory('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#261B14] relative selection:bg-[#E8D3CE] selection:text-[#261B14] pb-16 sm:pb-0">
      {/* 1. Rotating Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Mobile Navigation Sheet */}
      <MobileDrawer />

      {/* 4. Active Page Content */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <CategoryPills />
            <NewArrivals />
            <TrendingNow />
            <EditorialBanner />
            <Bestsellers />
            <FestiveCollection />
            <StyleInspiration />
            <Testimonials />
            <InstagramFeed />
            <Newsletter />
          </>
        )}

        {activeView === 'catalog' && <CatalogView />}

        {activeView === 'festive' && <FestiveView />}

        {activeView === 'lookbook' && <LookbookView />}
      </main>

      {/* 5. Comprehensive Footer */}
      <Footer />

      {/* 6. Floating Concierge & WhatsApp */}
      <WhatsAppButton />

      {/* 7. Drawers & Modals */}
      <ProductDetailModal />
      <ImageLightbox />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <SizeGuideModal />
      <CheckoutModal />

      {/* 8. Mobile Bottom Navigation Bar (Optimized for 375px–430px One-Thumb Shopping) */}
      <nav
        aria-label="Mobile Navigation"
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#D8CFBE]/70 px-4 py-2 flex items-center justify-around shadow-lg"
      >
        <button
          onClick={() => handleBottomNav('home')}
          className={`flex flex-col items-center justify-center gap-0.5 text-xs ${
            activeView === 'home' ? 'text-[#3D2B1F] font-semibold' : 'text-[#5A4232]'
          }`}
        >
          <Home className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px]">Home</span>
        </button>

        <button
          onClick={() => handleBottomNav('catalog')}
          className={`flex flex-col items-center justify-center gap-0.5 text-xs ${
            activeView === 'catalog' ? 'text-[#3D2B1F] font-semibold' : 'text-[#5A4232]'
          }`}
        >
          <Compass className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px]">Shop</span>
        </button>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center justify-center gap-0.5 text-xs text-[#5A4232]"
        >
          <Search className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px]">Search</span>
        </button>

        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center justify-center gap-0.5 text-xs text-[#5A4232] relative"
        >
          <Heart className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px]">Saved</span>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 right-1.5 w-3.5 h-3.5 bg-[#B77B6E] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center gap-0.5 text-xs text-[#3D2B1F] relative"
        >
          <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
          <span className="text-[10px]">Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-0.5 w-3.5 h-3.5 bg-[#3D2B1F] text-[#FAF8F5] text-[8px] font-bold rounded-full flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainAppContent />
    </ShopProvider>
  );
}
