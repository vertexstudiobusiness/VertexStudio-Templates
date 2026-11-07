import React, { useState } from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';
import { CategoryId } from '../../types';

export const TrendingNow: React.FC = () => {
  const { products, setActiveCategory, setActiveView } = useShop();
  const [filter, setFilter] = useState<'all' | 'dresses' | 'co-ords' | 'ethnic-wear'>('all');

  const filteredTrending = products
    .filter((p) => p.isTrending || p.isBestseller)
    .filter((p) => (filter === 'all' ? true : p.category === filter))
    .slice(0, 4);

  const handleExploreAll = () => {
    setActiveCategory(filter === 'all' ? 'all' : (filter as CategoryId));
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-18 bg-[#F6F3EE] border-y border-[#D8CFBE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with pill tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Most Coveted</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
              Trending Now
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4232] mt-1 font-light">
              The seasonal pieces our patrons are wearing and re-styling most.
            </p>
          </div>

          {/* Touch-Friendly Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
              }`}
            >
              All Trending
            </button>
            <button
              onClick={() => setFilter('dresses')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                filter === 'dresses'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
              }`}
            >
              Dresses
            </button>
            <button
              onClick={() => setFilter('co-ords')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                filter === 'co-ords'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
              }`}
            >
              Co-ords
            </button>
            <button
              onClick={() => setFilter('ethnic-wear')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                filter === 'ethnic-wear'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-xs'
                  : 'bg-[#FAF8F5] text-[#5A4232] border border-[#D8CFBE] hover:border-[#3D2B1F]'
              }`}
            >
              Ethnic Silhouettes
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {filteredTrending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={handleExploreAll}
            className="w-full bg-[#FAF8F5] border border-[#3D2B1F] text-[#261B14] py-3 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
          >
            <span>Explore Entire Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
