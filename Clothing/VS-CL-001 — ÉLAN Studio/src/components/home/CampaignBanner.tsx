import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export const CampaignBanner: React.FC = () => {
  const { sendWhatsAppOrder, setActiveCategory } = useShop();

  const handleBookSalon = () => {
    sendWhatsAppOrder();
  };

  const handleViewCollection = () => {
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#0c0b0a] overflow-hidden border-b border-[#201d19]">
      {/* Background Campaign Photography with Rich Cinematic Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2000&q=85"
          alt="Seasonal Luxury Campaign Banner"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a] via-[#0c0b0a]/70 to-[#0c0b0a]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141210]/90 border border-[#c5a880]/40 backdrop-blur-md mb-4">
            <Sparkles className="w-3 h-3 text-[#c5a880]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#faf7f2] font-semibold">
              EXCLUSIVE ATELIER INVITATION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#faf7f2] font-normal tracking-tight mb-4 leading-tight">
            Private Salon & <br />
            <span className="italic font-light text-[#c5a880] font-serif">Bespoke Fittings</span>
          </h2>

          <p className="text-sm sm:text-base text-[#ded6c9]/85 font-light leading-relaxed mb-8">
            Experience the full ÉLAN collection in a private one-on-one session with our master tailor.
            Available at our flagship salons in The Claridges, New Delhi and Kala Ghoda, Mumbai.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={handleBookSalon}
              className="py-4 px-8 bg-[#c5a880] text-[#0c0b0a] hover:bg-[#dfcca6] transition-colors font-semibold text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-2 shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Private Fitting via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleViewCollection}
              className="py-4 px-8 border border-white/30 text-[#faf7f2] hover:border-white hover:bg-white/10 transition-colors font-medium text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-2"
            >
              <span>Explore Lookbook</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
