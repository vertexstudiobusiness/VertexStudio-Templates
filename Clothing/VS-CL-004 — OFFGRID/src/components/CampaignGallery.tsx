import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight, X, ShoppingBag, Eye, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CampaignShot {
  id: string;
  title: string;
  location: string;
  image: string;
  aspect: string;
  productId: string;
  productName: string;
  price: number;
}

export const CampaignGallery: React.FC = () => {
  const { navigateTo, addToCart, products } = useShop();
  const [activeShot, setActiveShot] = useState<CampaignShot | null>(null);

  const campaignShots: CampaignShot[] = [
    {
      id: 'shot-01',
      title: 'MIDNIGHT CONCRETE // OVERSIZED FIT',
      location: 'Carter Road Skatepark, Mumbai',
      image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[3/4]',
      productId: 'og-hoodie-01',
      productName: 'Neo-Distortion 450GSM Hoodie',
      price: 4999
    },
    {
      id: 'shot-02',
      title: 'SECTOR ZERO BLUEPRINT',
      location: 'Sassoon Docks, Mumbai',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[4/5]',
      productId: 'og-tee-01',
      productName: 'Sector Zero Oversized Graphic Tee',
      price: 2499
    },
    {
      id: 'shot-03',
      title: 'RIPSTOP CORDURA IN TRANSIT',
      location: 'Metro Line 3 Tunnel, Bandra',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[3/4]',
      productId: 'og-cargo-01',
      productName: 'Tactical Ripstop Modular Cargo',
      price: 4499
    },
    {
      id: 'shot-04',
      title: 'SUBTERRA FLIGHT UTILITY',
      location: 'Shibuya Crossing, Tokyo',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[4/5]',
      productId: 'og-jacket-01',
      productName: 'Subterra Dual-Zip Bomber Jacket',
      price: 6499
    },
    {
      id: 'shot-05',
      title: '320 GSM MONOLITH BOX CUT',
      location: 'Indiranagar Back-Alley, Bengaluru',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[3/4]',
      productId: 'og-tee-03',
      productName: 'Monolith 320GSM Heavy Box Tee',
      price: 2199
    },
    {
      id: 'shot-06',
      title: 'TACTICAL RIG SYSTEM 01',
      location: 'Hauz Khas Village, New Delhi',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop',
      aspect: 'aspect-[4/5]',
      productId: 'og-acc-01',
      productName: 'OFFGRID Tactical Modular Chest Rig',
      price: 2799
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-black border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-14 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-brand-orange uppercase tracking-widest font-bold mb-1">
              <Camera className="w-4 h-4" />
              <span>EDITORIAL CAMPAIGN DOSSIER</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              STREETWEAR <span className="text-stroke">LOOKBOOK</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-brand-concrete max-w-xs">
            Shot on 35mm film across Mumbai, Tokyo and Berlin. Tap any frame to shop the exact garment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {campaignShots.map((shot, idx) => (
            <div
              key={shot.id}
              onClick={() => setActiveShot(shot)}
              className="group relative overflow-hidden bg-neutral-950 border border-brand-border hover:border-brand-orange transition-all duration-300 cursor-pointer"
            >
              <div className={`${shot.aspect} w-full overflow-hidden relative`}>
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter contrast-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Stencil Stamp Header */}
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm border border-brand-border px-2.5 py-1 font-mono text-[10px] text-brand-concrete">
                  FRAME 0{idx + 1} // {shot.location.split(',')[0]}
                </div>

                {/* Corner Tag */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-neutral-950/80 group-hover:bg-brand-orange group-hover:text-black text-brand-offwhite border border-brand-border flex items-center justify-center transition-colors">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Overlay with Product Link */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
                  <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-wider block mb-1">
                    FEATURED: {shot.productName}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-offwhite uppercase tracking-tight">
                    {shot.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/40 text-[11px] font-mono text-brand-concrete">
                    <span>{shot.location}</span>
                    <span className="text-brand-orange font-bold">₹{shot.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Shot Modal */}
      <AnimatePresence>
        {activeShot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveShot(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full bg-neutral-950 border border-brand-border z-10 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveShot(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-neutral-900 text-brand-offwhite hover:text-brand-orange border border-brand-border"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[3/4] bg-neutral-900 overflow-hidden">
                  <img
                    src={activeShot.image}
                    alt={activeShot.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold tracking-widest block mb-1">
                      LOOKBOOK EDITORIAL ARCHIVE
                    </span>
                    <h3 className="font-display font-black text-2xl text-brand-offwhite uppercase leading-tight">
                      {activeShot.title}
                    </h3>
                    <p className="font-mono text-xs text-brand-concrete mt-1">
                      {activeShot.location}
                    </p>

                    <div className="mt-6 p-4 bg-brand-surface border border-brand-border space-y-2">
                      <span className="text-[10px] font-mono text-brand-concrete block uppercase">
                        WEARING IN THIS CAMPAIGN
                      </span>
                      <h4 className="font-display font-bold text-base text-white">
                        {activeShot.productName}
                      </h4>
                      <div className="font-mono text-lg font-bold text-brand-orange">
                        ₹{activeShot.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        const target = products.find((p) => p.id === activeShot.productId);
                        if (target) {
                          addToCart(target, target.sizes[0] || 'L', target.colors[0]?.name || 'Standard', 1);
                        }
                        setActiveShot(null);
                      }}
                      className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-3.5 flex items-center justify-center gap-2 transition-all shadow-glow-orange"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD THIS PIECE TO BAG</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveShot(null);
                        navigateTo('product-detail', activeShot.productId);
                      }}
                      className="w-full bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>VIEW GARMENT DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

