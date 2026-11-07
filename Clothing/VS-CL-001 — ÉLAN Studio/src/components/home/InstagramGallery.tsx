import React from 'react';
import { useShop } from '../../context/ShopContext';
import { LOOKBOOK_STORIES } from '../../data/products';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';

export const InstagramGallery: React.FC = () => {
  const { products, setSelectedProduct } = useShop();

  const handlePieceClick = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) setSelectedProduct(product);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0e0d0b] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>THE LIVING LOOKBOOK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight">
              Curated by the Atelier
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#faf7f2] transition-colors self-start sm:self-auto font-medium"
          >
            <span>Follow @elan.atelier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid: 2 columns on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {LOOKBOOK_STORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => handlePieceClick(item.taggedProductId)}
              className="group relative aspect-[3/4] overflow-hidden bg-[#161412] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover and Tap Scrim with Shop-The-Look Pill */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <div className="w-7 h-7 rounded-full bg-[#faf7f2] text-[#0c0b0a] flex items-center justify-center shadow-lg">
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="bg-[#0c0b0a]/90 backdrop-blur-md p-2.5 border border-[#c5a880]/30">
                  <span className="text-[8px] uppercase tracking-wider text-[#c5a880] block font-semibold">
                    SHOP THE LOOK
                  </span>
                  <p className="font-serif text-xs text-[#faf7f2] truncate">
                    {item.taggedProductName}
                  </p>
                  <p className="text-[10px] text-[#ded6c9] font-medium mt-0.5">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Discreet Instagram icon pin on corner */}
              <div className="absolute top-2.5 right-2.5 text-white/70 group-hover:opacity-0 transition-opacity">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
