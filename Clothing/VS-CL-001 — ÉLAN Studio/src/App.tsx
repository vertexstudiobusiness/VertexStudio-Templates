import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { Hero } from './components/home/Hero';
import { NewArrivals } from './components/home/NewArrivals';
import { FeaturedCollection } from './components/home/FeaturedCollection';
import { EditorialCampaign } from './components/home/EditorialCampaign';
import { ShopByCategory } from './components/home/ShopByCategory';
import { ProductCatalog } from './components/shop/ProductCatalog';
import { Bestsellers } from './components/home/Bestsellers';
import { BrandPhilosophy } from './components/home/BrandPhilosophy';
import { CampaignBanner } from './components/home/CampaignBanner';
import { InstagramGallery } from './components/home/InstagramGallery';
import { NewsletterSection } from './components/home/NewsletterSection';
import { Footer } from './components/layout/Footer';
import { ProductDetailModal } from './components/shop/ProductDetailModal';
import { CartDrawer } from './components/shop/CartDrawer';
import { WishlistDrawer } from './components/shop/WishlistDrawer';
import { SearchModal } from './components/shop/SearchModal';
import { SizeGuideModal } from './components/shop/SizeGuideModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { OrderConfirmationModal } from './components/checkout/OrderConfirmationModal';
import { Toast } from './components/common/Toast';

export function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-[#0c0b0a] text-[#faf7f2] flex flex-col selection:bg-[#c5a880] selection:text-[#0c0b0a] font-sans antialiased overflow-x-hidden">
        {/* Navigation & Accessible Mobile Drawer */}
        <Navbar />
        <MobileMenu />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* 1. Cinematic Full-Width Fashion Hero */}
          <Hero />

          {/* 2. New Arrivals Section */}
          <NewArrivals />

          {/* 3. Featured Collection (Seasonal Capsule) */}
          <FeaturedCollection />

          {/* 4. Editorial Campaign & Storytelling */}
          <EditorialCampaign />

          {/* 5. Shop by Category */}
          <ShopByCategory />

          {/* 6. Product Catalogue (Search, Category Filters, Sort) */}
          <ProductCatalog />

          {/* 7. Bestsellers Section */}
          <Bestsellers />

          {/* 8. Brand Philosophy & Craftsmanship Ethos */}
          <BrandPhilosophy />

          {/* 9. Campaign Banner & Private Salon Booking */}
          <CampaignBanner />

          {/* 10. Living Lookbook / Instagram Gallery */}
          <InstagramGallery />

          {/* 11. The ÉLAN Gazette Newsletter */}
          <NewsletterSection />
        </main>

        {/* 12. Elegant Footer */}
        <Footer />

        {/* Interactive Modals & Slide-out Drawers */}
        <ProductDetailModal />
        <CartDrawer />
        <WishlistDrawer />
        <SearchModal />
        <SizeGuideModal />
        <CheckoutModal />
        <OrderConfirmationModal />

        {/* Global Toast Feedback */}
        <Toast />
      </div>
    </ShopProvider>
  );
}

export default App;
