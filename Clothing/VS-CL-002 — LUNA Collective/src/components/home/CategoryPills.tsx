import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useShop } from '../../context/ShopContext';
import { CategoryId } from '../../types';

export const CategoryPills: React.FC = () => {
  const { activeCategory, setActiveCategory, setActiveView } = useShop();

  const handleCategoryClick = (id: CategoryId) => {
    setActiveCategory(id);
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 sm:py-16 bg-[#FAF8F5] border-b border-[#D8CFBE]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] block mb-1">
              Curated Wardrobe
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5A4232] max-w-sm mt-2 sm:mt-0 font-light">
            Designed for fluidity, quiet luxury, and contemporary festive occasions.
          </p>
        </div>

        {/* Visual Category Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-[#F6F3EE] border transition-all duration-300 hover:shadow-md ${
                  isSelected
                    ? 'border-[#3D2B1F] ring-1 ring-[#3D2B1F]'
                    : 'border-[#D8CFBE]/60 hover:border-[#B77B6E]/60'
                }`}
              >
                {/* Category Image */}
                <div className="relative aspect-4/5 w-full overflow-hidden bg-[#EFE9E0]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261B14]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Floating Action Arrow */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-[#FAF8F5]/90 backdrop-blur-xs flex items-center justify-center text-[#261B14] group-hover:bg-[#FAF8F5] group-hover:scale-110 transition-all shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Title overlay on image for clean mobile aesthetic */}
                  <div className="absolute bottom-2.5 left-2.5 right-10 text-left">
                    <h3 className="font-serif text-sm sm:text-base font-medium text-[#FAF8F5] leading-tight drop-shadow-2xs">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] text-[#FAF8F5]/80 font-light">
                      {cat.productCount} items
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
