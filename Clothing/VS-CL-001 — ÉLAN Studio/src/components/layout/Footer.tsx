import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveCategory, setIsSizeGuideOpen, sendWhatsAppOrder } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategory = (category: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActiveCategory(category as any);
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080706] text-[#ded6c9] pt-16 sm:pt-24 pb-12 border-t border-[#1f1d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[#1c1a17]">
          {/* Brand & Atelier Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-[0.22em] uppercase text-[#faf7f2] font-normal">
                ÉLAN
              </span>
              <span className="block text-[9px] uppercase tracking-[0.45em] text-[#c5a880] -mt-0.5">
                STUDIO • HAUTE COUTURE
              </span>
            </div>

            <p className="text-xs text-[#948b7e] leading-relaxed font-light max-w-sm pt-2">
              Contemporary luxury ready-to-wear rooted in Indian artisanal heritage.
              Hand-spun Varanasi Mulberry silks, wild Matka slubs, and Savile Row bespoke tailoring.
            </p>

            <div className="pt-2 text-xs text-[#ded6c9] space-y-1.5 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>The Claridges Atelier, 12 APJ Abdul Kalam Road, New Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Kala Ghoda Heritage Precinct, Fort, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Quick Departments */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf7f2]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#948b7e]">
              <li>
                <button
                  onClick={() => handleCategory('All')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  All Editions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory('Women')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Women Ready-to-Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory('Men')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Men Sartorial Tailoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory('Dresses')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Evening Gowns & Slips
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory('Jackets')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Bandhgalas & Coats
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategory('Accessories')}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Pashmina & Fine Bags
                </button>
              </li>
            </ul>
          </div>

          {/* Client Care */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf7f2]">
              Concierge & Client Care
            </h4>
            <ul className="space-y-2 text-xs text-[#948b7e]">
              <li>
                <button
                  onClick={() => sendWhatsAppOrder()}
                  className="hover:text-[#c5a880] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>WhatsApp Styling Concierge</span>
                  <span className="text-[9px] bg-[#c5a880]/20 text-[#c5a880] px-1 py-0.2">
                    24/7
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Bespoke Size & Measurement Guide
                </button>
              </li>
              <li>
                <span className="text-[#ded6c9]/70">
                  Complimentary White-Glove Delivery (2–4 Days)
                </span>
              </li>
              <li>
                <span className="text-[#ded6c9]/70">
                  14-Day Atelier Exchanges & Fit Guarantees
                </span>
              </li>
              <li>
                <span className="text-[#ded6c9]/70">
                  Private Salon Appointments
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#faf7f2]">
              Direct Inquiries
            </h4>
            <p className="text-xs text-[#948b7e] leading-relaxed">
              For private styling, bridal capsules, or custom commission orders, connect with our salon directors:
            </p>
            <div className="pt-1 space-y-2 text-xs">
              <a
                href="mailto:concierge@elan-studio.in"
                className="text-[#c5a880] hover:underline flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>concierge@elan-studio.in</span>
              </a>
              <a
                href="tel:+919876543210"
                className="text-[#faf7f2] hover:text-[#c5a880] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>+91 98765 43210 (Salon Hotline)</span>
              </a>
            </div>

            <div className="pt-3">
              <span className="text-[10px] uppercase tracking-wider text-[#736a5f] block mb-1">
                SALON HOURS (IST)
              </span>
              <p className="text-xs text-[#ded6c9]/80 font-light">
                Monday – Saturday: 11:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Currencies & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#736a5f] gap-4">
          <p>© 2026 ÉLAN STUDIO ATELIER PVT. LTD. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#ded6c9]">India (INR ₹)</span>
            <span>•</span>
            <span className="hover:text-[#faf7f2] cursor-pointer">Privacy Charter</span>
            <span>•</span>
            <span className="hover:text-[#faf7f2] cursor-pointer">Terms of Service</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#faf7f2] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
