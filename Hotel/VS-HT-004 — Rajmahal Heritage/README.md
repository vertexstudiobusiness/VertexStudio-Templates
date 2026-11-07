# Rajmahal Heritage | Luxury Royal Palace Hotel

An extraordinary royal heritage hotel web experience created for **Rajmahal Heritage** — inspired by the living palace hotels of Rajasthan (Udaipur & Jaipur), traditional Rajput and Mughal architecture, and contemporary imperial hospitality.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🏛️ Royal Design Direction

- **Imperial Palette:** Deep maroon (`#460A13`), antique gold (`#CFA747`, `#DCBE71`), warm ivory (`#FDFAF6`, `#FAF5ED`), yellow Jaisalmer sandstone (`#D2BFA1`), and dark walnut (`#140E0C`).
- **Typography:** Classical serif (`Cormorant Garamond`, `Cinzel`) paired with clean modern sans (`Plus Jakarta Sans`) for body readability.
- **Architectural Details:** Cusped Rajput arches, thikri convex mirror inlays (*Shish Mahal*), carved stone jharokhas, geometric stepwell pool (*Baori*), and subtle jaali lattice patterns.
- **Tone:** Authentic royal heritage reimagined as modern luxury, avoiding gaudy or dated design patterns.

---

## 📱 Mobile-First Design Architecture (375px – 430px)

Engineered from 375px up with progressive enhancement across breakpoints:
- **375px (iPhone SE, Small Androids):** Full tap target protection (≥ 44-48px), 1-column responsive layout, zero horizontal overflow (`overflow-x: hidden`), readable typography scaling.
- **390px – 430px (iPhone 14/15/16 Pro & Max):** Balanced spacing, mobile hero banner with immediate "Reserve Your Stay" and "Check Availability" widgets.
- **768px (iPad & Tablets):** Multi-column grid expansion, rich room amenities preview.
- **1024px – 1440px (Laptops & Desktop):** Cinematic wide layouts, sticky royal navbar with quick currency switcher and concierge phone.

---

## ✨ Features & Functionality

1. **Cinematic Hero:**
   - Multi-slide palace exterior and courtyard photography.
   - Headline: *"A Royal Stay. A Timeless Story."*
   - Direct Reserve CTA, Chamber explorer, and interactive Palace Film showcase modal.
2. **Interactive Availability Search Bar:**
   - Date validation (prevents past dates and invalid check-out ranges).
   - Nights calculation badge (`3 Nights Royal Sojourn`).
   - Guest count selector and room category dropdown.
3. **The Palace & Heritage Chronicles:**
   - Fictional history founded in 1742 by *Maharaja Sawai Vikramaditya Dev*.
   - Architectural inspiration (passive stone cooling, cusped arches, chuna plaster).
   - Historical timeline from 1742 to contemporary restoration.
4. **Imperial Accommodations (Rooms & Suites):**
   - Filterable categories: *All*, *Heritage Rooms*, *Royal Suites*, *Maharaja Suites*, *Presidential Residence*.
   - Starting rates in INR (and convertible to USD, EUR, GBP, AED).
   - Suite specifications: square footage, guest capacity, bed type, view, signature amenities.
   - **Room Details Modal:** High-definition photo carousel, floor plan notes, royal butler inclusions.
5. **Interactive Booking Engine Modal:**
   - Comprehensive rate calculation with luxury GST & heritage levy breakdown.
   - Settlement options: Pay upon arrival or credit card hold.
   - Simulated reservation confirmation with unique voucher ID (`RMH-XXXXXX`) and print option.
   - Direct **WhatsApp Booking Enquiry** with auto-filled dates, suite name, guest details, and preferences.
6. **Royal Experiences:**
   - Cultural welcoming ceremony with Nagada drums, rose petal shower, and sandalwood tilak.
   - Twilight Zenana Courtyard Soirée with Kalbelia & Ghoomar folk dancers.
   - Curated Palace Art & Heritage Walk led by the resident archivist.
   - Jiva Somras Royal Ayurvedic Spa with rose milk baths and Vedic oil therapies.
   - Private Candlelit Baradari Feast with live sitar accompaniment.
   - Palace Vintage Fleet car safari.
   - Interactive Experience Enquiry modal with WhatsApp integration.
7. **Architectural Showcase:**
   - Interactive showcase of *The Zenana Chowk*, *Cusped Arches*, *The Shish Mahal*, and *The Baori Lotus Pool*.
8. **Royal Dining & Lounges:**
   - *Shahi Dastarkhwan* (Mewari & Rajput royal recipes: Laal Maas, Ker Sangri, Dal Baati Churma, Zafrani Shahi Tukda).
   - *The Jharokha Tea & Patisserie* (Afternoon high tea, cardamom kahwa, gold leaf pastries).
   - *Baradari Terrace & Bar* (Rooftop sigri grill, botanical cocktails, smoked Negroni).
   - Interactive **Table Reservation Modal** with date, seating slot, party size, and WhatsApp confirmation.
9. **Royal Weddings & Celebrations:**
   - Showcasing the *Zenana Grand Courtyard* (up to 450 guests), *The Imperial Durbar Hall*, and *The Lotus Poolside*.
   - Interactive **Wedding Dossier & Enquiry Form**.
10. **Special Royal Packages & Seasonal Offers:**
    - The Royal Heritage Sojourn (3 Nights)
    - Palace Romance & Honeymoon Sanctuary (2 Nights)
    - Vedic Wellness & Rasayana Retreat (4 Nights)
11. **Palace Photo Gallery & Fullscreen Lightbox:**
    - Categorized filter tabs with keyboard navigation (Esc, Arrow keys) and zoom captions.
12. **Guest Reviews & Press Accolades:**
    - Testimonial carousel from global patrons.
    - Accolades from *Condé Nast Traveler*, *Architectural Digest*, *Travel + Leisure*, and *Michelin Guide*.
13. **Location & Royal Surroundings:**
    - Custom styled topographic map card, coordinates, airport transfer times, and nearby forts.
14. **Discreet Ambient Sitar Audio:**
    - Web Audio API harmonic drone synthesising the gentle Sa-Pa tanpura & sitar meditative tone without broken network links.
15. **Configurable Hotel Details:**
    - All data, room types, rates, images, contact phone numbers, and WhatsApp links reside in `src/data/hotelConfig.ts`.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

*Note: Rajmahal Heritage is an experiential demonstration of luxury heritage hospitality. All reservations generate interactive simulations and pre-formatted WhatsApp concierge messages.*

