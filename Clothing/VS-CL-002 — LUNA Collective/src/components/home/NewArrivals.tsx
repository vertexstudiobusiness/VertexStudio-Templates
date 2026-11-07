import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';

export const NewArrivals: React.FC = () => {
  const { products, setActiveCategory, setActiveView } = useShop();

  const newItems = products.filter((p) => p.isNew || p.id === 'luna-01' || p.id === 'luna-03').slice(0, 4);

  const handleViewAll = () => {
    setActiveCategory('all');
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-18 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Just Arrived</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
              New Arrivals Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4232] mt-1 font-light">
              Contemporary silhouettes freshly hand-cut in our seasonal autumn palette.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#3D2B1F] hover:text-[#B77B6E] group transition-colors"
          >
            <span>View All New In</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {newItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
