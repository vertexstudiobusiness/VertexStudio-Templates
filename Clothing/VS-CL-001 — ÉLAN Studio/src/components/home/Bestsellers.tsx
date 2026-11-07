import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../shop/ProductCard';
import { Crown, ArrowRight } from 'lucide-react';

export const Bestsellers: React.FC = () => {
  const { products, setActiveCategory } = useShop();

  const bestsellerProducts = products.filter((p) => p.isBestseller).slice(0, 4);

  const handleExploreAll = () => {
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0c0b0a] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold mb-2">
              <Crown className="w-3.5 h-3.5" />
              <span>TIMELESS ICONS & ATELIER CLASSICS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight">
              Bestsellers
            </h2>
          </div>
          <button
            type="button"
            onClick={handleExploreAll}
            className="text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#faf7f2] flex items-center gap-1.5 font-medium transition-colors self-start sm:self-auto"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
