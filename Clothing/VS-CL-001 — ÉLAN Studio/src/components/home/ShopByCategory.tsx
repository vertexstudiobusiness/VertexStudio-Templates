import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';
import type { CategoryType } from '../../types';

interface CategoryCard {
  id: CategoryType;
  title: string;
  count: number;
  image: string;
  description: string;
}

const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: 'Dresses',
    title: 'Dresses & Gowns',
    count: 2,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    description: 'Varanasi Mulberry silk & Chanderi eveningwear'
  },
  {
    id: 'Jackets',
    title: 'Jackets & Bandhgalas',
    count: 5,
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    description: 'Sartorial structured coats & wild Matka silks'
  },
  {
    id: 'Shirts',
    title: 'Shirts & Tunics',
    count: 3,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Sandwashed silks & 100-count Supima poplins'
  },
  {
    id: 'Trousers',
    title: 'Trousers & Palazzos',
    count: 2,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'High-waisted tailored linens & fluid silk crepe'
  },
  {
    id: 'Accessories',
    title: 'Accessories & Fine Wraps',
    count: 3,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-spun Pashmina cashmere & brass minaudières'
  },
  {
    id: 'Footwear',
    title: 'Footwear & Mules',
    count: 2,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    description: 'Goodyear-welted calf loafers & sculpted jutti-mules'
  }
];

export const ShopByCategory: React.FC = () => {
  const { setActiveCategory } = useShop();

  const handleCategorySelect = (catId: CategoryType) => {
    setActiveCategory(catId);
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0e0d0b] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#c5a880] font-semibold block mb-2">
              CURATED WARDROBE DEPARTMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#948b7e] max-w-md font-light">
            Every department reflects our commitment to noble natural fibres and uncompromising sartorial cut.
          </p>
        </div>

        {/* 6 Category Tiles: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#161412] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/30 to-transparent group-hover:via-[#0c0b0a]/40 transition-colors" />

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                    {cat.count} PIECES
                  </span>
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#c5a880] group-hover:text-[#c5a880] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-base sm:text-xl md:text-2xl text-[#faf7f2] font-normal mt-1 leading-snug group-hover:text-[#c5a880] transition-colors">
                  {cat.title}
                </h3>

                <p className="hidden sm:block text-[11px] text-[#ded6c9]/70 mt-1 line-clamp-1 font-light">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
