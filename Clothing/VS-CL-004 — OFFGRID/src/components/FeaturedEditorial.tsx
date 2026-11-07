import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight, ShoppingBag, ShieldCheck, Flame, MessageSquare } from 'lucide-react';

export const FeaturedEditorial: React.FC = () => {
  const { products, addToCart, navigateTo, openWhatsAppOrder } = useShop();
  
  // Find the iconic 450GSM hoodie
  const featuredProduct = products.find((p) => p.id === 'og-hoodie-01') || products[1];

  return (
    <section className="py-16 sm:py-24 bg-brand-surface border-b border-brand-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Editorial Visual Composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden border border-brand-border bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1600&auto=format&fit=crop"
                alt="OFFGRID Editorial Streetwear Campaign"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-115"
                loading="lazy"
              />

              {/* Stencil & Technical Watermarks */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-brand-border p-3 text-[10px] font-mono text-brand-concrete space-y-1">
                <div className="text-brand-orange font-bold">EDITORIAL // VOLUME 04</div>
                <div>FRAME: 35MM LEICA MONOCHROME</div>
                <div>LOCATION: SASSOON DOCKS, MUMBAI</div>
              </div>

              {/* Large Watermark Stamp */}
              <div className="absolute bottom-4 right-4 text-stroke font-display font-black text-4xl sm:text-6xl uppercase opacity-40 pointer-events-none select-none">
                OFFGRID
              </div>
            </div>

            {/* Inset Technical Fabric Macro Preview */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 bg-neutral-950 border-2 border-brand-orange overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop"
                alt="450 GSM Loopback Texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center">
                <span className="font-mono text-[10px] font-bold text-white bg-black/80 px-2 py-1">
                  450 GSM LOOPBACK WEAVE
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Narrative & Direct Product Purchase */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/40 text-brand-orange font-mono text-xs px-2.5 py-1 uppercase tracking-wider mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL FLEECE DOSSIER</span>
              </div>
              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-brand-offwhite uppercase leading-tight tracking-tight">
                THE 450 GSM <br />
                <span className="text-brand-orange">MONOLITH</span> SILHOUETTE
              </h2>
            </div>

            <p className="text-sm font-mono text-brand-concrete leading-relaxed">
              Standard hoodies collapse around the neckline. The <strong className="text-white">Neo-Distortion 450GSM</strong> was engineered with a custom dual-ply rigid hood that stands without cords, cut from dense French Terry spun in Coimbatore, Tamil Nadu. Pre-shrunk twice to guarantee your fit never shrinks.
            </p>

            {/* Quick Specs List */}
            <div className="space-y-2 border-y border-brand-border py-4 font-mono text-xs text-brand-offwhite">
              <div className="flex items-center justify-between">
                <span className="text-brand-concrete">MATERIAL WEIGHT</span>
                <span className="text-brand-orange font-bold">450 GSM Diagonal Terry</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-brand-concrete">PRODUCTION RUN</span>
                <span className="text-white font-bold">Strict 100 Pieces Worldwide</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-brand-concrete">PRICE IN INDIA</span>
                <span className="text-brand-orange font-bold">₹4,999 (MRP ₹6,499)</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  addToCart(featuredProduct, 'L', 'Pitch Black', 1);
                }}
                className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-3.5 flex items-center justify-center gap-2 transition-all shadow-glow-orange"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>BUY FEATURED PIECE (SIZE L) // ₹4,999</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigateTo('product-detail', featuredProduct.id)}
                  className="bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>VIEW FULL SPECS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openWhatsAppOrder(featuredProduct, 'L')}
                  className="bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP VIP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

