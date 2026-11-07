# Café Maison — Artisanal Coffee & Viennoiserie

A European-inspired café website crafted with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**, developed with a strict **Mobile-First Priority Architecture**.

Designed for 375px–430px viewports first and progressively enhanced for tablets and desktops, capturing the quiet luxury of an independent café in Paris or Copenhagen: warm ivory, cream, deep coffee brown, and muted olive green, paired with editorial serif typography and responsive micro-interactions.

---

## 📱 Mobile-First Design Architecture (375px–430px Priority)

1. **Mobile First Viewport Optimization**
   - Configured with `viewport-fit=cover` and iOS safe area awareness.
   - Strict `overflow-x-hidden` guarantees zero horizontal scrolling or clipping.
   - Form inputs, selects, and textareas calibrated to prevent automatic iOS font zooming.

2. **Touch-Engineered Targets (Min 44×44px)**
   - All buttons, CTAs, selects, quantity adjusters, and navigation items meet or exceed mobile accessibility standards.
   - Prominent thumb-friendly actions on mobile drawer, bag checkout, and reservation forms.

3. **Mobile Editorial Hero Fold**
   - Headline scaled dynamically (`text-[38px]` on 375px to `text-[76px]` on large displays) with balanced line-height.
   - Integrated mobile visual card placed directly in the initial viewport flow.
   - Full-width touch CTAs: *Explore Our Menu* and *Order via WhatsApp*.
   - Compact 3-column craft metric bar (*94.5 Cupping Score*, *72h Lamination*, *100% AOP Butter*).

4. **Edge-to-Edge Category Swiper**
   - Menu categories feature fluid horizontal touch scrolling with negative margins (`-mx-4 px-4`) and zero scrollbar clutter.
   - Full-width instant search bar with one-tap clear button (`✕`).
   - Touch filter chips for *Vegetarian*, *Vegan*, and *Nut-Free*.

5. **2-Column Mobile Masonry Photo Feed**
   - Clean 2-column photo gallery on mobile delivering an editorial magazine visual experience.
   - Lightbox modal with native `<dialog>`, `Esc` dismissal, and backdrop scroll containment.

6. **Mobile Bottom Floating Quick Action Bar**
   - Activates automatically upon scrolling on mobile viewports.
   - Instant 1-tap shortcuts: *Menu, Table Reservation, Live Order Bag with real-time INR total, and WhatsApp Order*.
   - Frosted glass backdrop blur (`backdrop-blur-lg`) with safe padding.

---

## ☕ Full Features Breakdown

- **Minimal Editorial Navbar** ([`Navbar.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/Navbar.tsx)): Monogram crest, desktop navigation, order bag pill, and mobile hamburger toggle.
- **Mobile Navigation Drawer** ([`MobileNav.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/MobileNav.tsx)): Full-screen sheet with navigation links, bag & table shortcuts, operating hours, and one-tap call & WhatsApp links.
- **Atmosphere & Philosophy** ([`IntroAtmosphere.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/IntroAtmosphere.tsx)): Three craft pillars (*Single Origin Ritual*, *72-Hour Fermentation*, *Hygge Sanctuary*).
- **Bestselling Creations** ([`Bestsellers.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/Bestsellers.tsx)): High-end cards with INR prices, tasting notes, and quick WhatsApp triggers.
- **Our Story** ([`OurStory.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/OurStory.tsx)): Asymmetrical layered photo layout without mobile overflow, founders' narrative, and craft timeline.
- **Interactive Menu** ([`InteractiveMenu.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/InteractiveMenu.tsx)): Category filtering (*Coffee*, *Cold Drinks*, *Breakfast*, *Bakery*, *Desserts*), search, and dietary chips.
- **Photo Gallery** ([`PhotoGallery.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/PhotoGallery.tsx)): Masonry layout with category filtering and native dialog lightbox.
- **Connoisseur Testimonials** ([`Testimonials.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/Testimonials.tsx)): Food critic reviews with star ratings and press citations.
- **Location & Hours** ([`LocationHours.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/LocationHours.tsx)): Pali Hill address, bake batch times, one-tap copy address, Google Maps directions, and custom neighborhood map.
- **WhatsApp Bag & Checkout** ([`WhatsAppCartDrawer.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/WhatsAppCartDrawer.tsx)): Real-time bag management, takeaway vs. dine-in toggle, custom instructions, and celebration confetti.
- **Table Reservation Modal** ([`ReservationModal.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/ReservationModal.tsx)): Booking form for date, time, party size, and seating preference dispatched via WhatsApp.
- **Curated Footer** ([`Footer.tsx`](file:///d:/Templetes/VS-RS-002%20—%20Café%20Maison/src/components/Footer.tsx)): Instagram link, newsletter subscription, operating hours, and back-to-top floating button.

---

## 🛠️ Configuration & Customization

Centralized configuration files make rebranding and updating content effortless:

| File | Purpose |
| --- | --- |
| `src/data/cafeConfig.ts` | Café name, tagline, address, hours, phone number, WhatsApp number, social URLs |
| `src/data/menuData.ts` | Menu items, prices in INR, French names, descriptions, tasting notes, and options |
| `src/data/galleryData.ts` | Photo gallery images, titles, and subtitles |
| `src/data/testimonialsData.ts` | Customer reviews, author names, roles, and avatars |

To configure the WhatsApp ordering number, simply edit `src/data/cafeConfig.ts`:
```typescript
export const CAFE_CONFIG = {
  whatsappNumber: "919820144520", // International format without + or spaces
  whatsappDisplayNumber: "+91 98201 44520",
  // ...
};
```

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```
