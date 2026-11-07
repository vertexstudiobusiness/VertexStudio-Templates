import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Signature } from "./components/Signature";
import { MenuSection } from "./components/MenuSection";
import { Heritage } from "./components/Heritage";
import { ChefSpecial } from "./components/ChefSpecial";
import { Gallery } from "./components/Gallery";
import { Reservation } from "./components/Reservation";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Signature />
        <MenuSection />
        <Heritage />
        <ChefSpecial />
        <Gallery />
        <Reservation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}
