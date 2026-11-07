import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, ArrowUpRight, ShoppingBag, Flame, Camera } from 'lucide-react';

export const LookbookPage: React.FC = () => {
  const { navigateTo, products, addToCart } = useShop();

  const editorialSpreads = [
    {
      title: 'SPREAD 01 // NOISE & MONOLITH',
      location: 'Carter Road Concrete Seafront, Mumbai',
      description: 'The foundation of Drop 004 explores heavy loopback cotton against coastal humidity and rough concrete. Oversized silhouettes draped intentionally to retain architectural volume.',
      image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1600&auto=format&fit=crop',
      productId: 'og-hoodie-01',
      productName: 'Neo-Distortion 450GSM Hoodie',
      price: 4999
    },
    {
      title: 'SPREAD 02 // SECTOR ZERO BLUEPRINT',
      location: 'Sassoon Docks Abandoned Ice Factory',
      description: 'High-density puff ink printed across 300 GSM combed cotton. Featuring cracked schematics that distress with skate wear and washing.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600&auto=format&fit=crop',
      productId: 'og-tee-01',
      productName: 'Sector Zero Oversized Graphic Tee',
      price: 2499
    },
    {
      title: 'SPREAD 03 // WATER-RESISTANT RIPSTOP MOBILITY',
      location: 'Bandra-Worli Sea Link Underpass',
      description: 'Tested through Mumbai monsoons. Cordura weave panels paired with quick-cinch Fidlock ankle adjusters allowing immediate conversion from wide parachute drape to tapered stack.',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1600&auto=format&fit=crop',
      productId: 'og-cargo-01',
      productName: 'Tactical Ripstop Modular Cargo',
      price: 4499
    },
    {
      title: 'SPREAD 04 // FLIGHT SATIN TACTICAL',
      location: 'Shibuya Crossing, Tokyo',
      description: 'Heavy Japanese flight satin bomber with emergency hazard lining and internal hands-free carry harness straps.',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
      productId: 'og-jacket-01',
      productName: 'Subterra Dual-Zip Bomber Jacket',
      price: 6499
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black pb-24">
      {/* Top Banner */}
      <div className="bg-brand-surface border-b border-brand-border py-8 sm:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 text-xs font-mono text-brand-concrete hover:text-white mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO FRONT</span>
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-widest font-bold">
              <Camera className="w-4 h-4" />
              <span>35MM CAMPAIGN DOSSIER</span>
            </div>
            <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-6xl text-brand-offwhite uppercase tracking-tight mt-1">
              LOOKBOOK: <span className="text-brand-orange">SECTOR ZERO</span>
            </h1>
          </div>

          <p className="font-mono text-xs text-brand-concrete max-w-sm">
            Visual journal capturing Drop 004 across Mumbai, Tokyo and Berlin. Shot exclusively on Kodak Tri-X 400 and Cinestill 800T film.
          </p>
        </div>
      </div>

      {/* Spreads List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 space-y-16 sm:space-y-24">
        {editorialSpreads.map((spread, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Photo */}
              <div className={`lg:col-span-8 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-brand-border bg-neutral-900 group">
                  <img
                    src={spread.image}
                    alt={spread.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-brand-border px-3 py-1 font-mono text-[10px] text-brand-concrete">
                    PLATE 0{idx + 1} // {spread.location}
                  </div>
                </div>
              </div>

              {/* Story & Purchase */}
              <div className={`lg:col-span-4 space-y-4 ${isEven ? '' : 'lg:order-1'}`}>
                <span className="font-mono text-[10px] text-brand-orange uppercase font-bold tracking-widest">
                  EDITORIAL FOCUS
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-offwhite uppercase leading-tight">
                  {spread.title}
                </h3>
                <p className="font-mono text-xs text-brand-concrete leading-relaxed">
                  {spread.description}
                </p>

                <div className="p-4 bg-brand-surface border border-brand-border space-y-2">
                  <span className="text-[10px] font-mono text-brand-concrete block uppercase">
                    FEATURED GARMENT
                  </span>
                  <h4 className="font-display font-bold text-sm text-white">
                    {spread.productName}
                  </h4>
                  <div className="font-mono text-base font-bold text-brand-orange">
                    ₹{spread.price.toLocaleString('en-IN')}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => {
                        const target = products.find((p) => p.id === spread.productId);
                        if (target) {
                          addToCart(target, target.sizes[0] || 'L', target.colors[0]?.name || 'Standard', 1);
                        }
                      }}
                      className="bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-2.5 flex items-center justify-center gap-1 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ADD TO BAG</span>
                    </button>

                    <button
                      onClick={() => navigateTo('product-detail', spread.productId)}
                      className="bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>SPECS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

