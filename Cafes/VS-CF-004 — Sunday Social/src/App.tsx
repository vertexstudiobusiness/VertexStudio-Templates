import { CartProvider } from "./context/CartContext";
import { AnnouncementStrip } from "./components/AnnouncementStrip";
import { CartDrawer } from "./components/CartDrawer";
import { ComboOffers } from "./components/ComboOffers";
import { Favourites } from "./components/Favourites";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { LifestyleBreak } from "./components/LifestyleBreak";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { Story } from "./components/Story";
import { Testimonials } from "./components/Testimonials";
import { Toast } from "./components/Toast";
import { VisitUs } from "./components/VisitUs";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  return (
    <CartProvider>
      <div className="relative min-h-dvh overflow-x-clip bg-cream">
        <Navbar />

        <main>
          <Hero />
          <AnnouncementStrip />
          <Favourites />
          <MenuSection />
          <ComboOffers />
          <Story />
          <LifestyleBreak />
          <Gallery />
          <Testimonials />
          <VisitUs />
        </main>

        <Footer />

        {/* overlays & floating pieces */}
        <CartDrawer />
        <Toast />
        <WhatsAppFab />
      </div>
    </CartProvider>
  );
}
