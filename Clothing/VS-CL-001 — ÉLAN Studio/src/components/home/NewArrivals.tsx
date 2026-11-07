import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../shop/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const NewArrivals: React.FC = () => {
  const { products, setActiveCategory } = useShop();
  const [activeTab, setActiveTab] = useState<'All' | 'Women' | 'Men'>('All');

  const newPieces = products
    .filter((p) => p.isNew)
    .filter((p) => (activeTab === 'All' ? true : p.gender === activeTab || p.gender === 'Unisex'))
    .slice(0, 4);

  const handleViewAll = () => {
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0c0b0a] border-b border-[#201d19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.26em] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRESH FROM THE ATELIER</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf7f2] font-normal tracking-tight">
              New Arrivals
            </h2>
          </div>

          {/* Gender Filter Tabs */}
          <div className="flex items-center gap-2 self-start sm:self-auto border-b border-[#282521] pb-1">
            {(['All', 'Women', 'Men'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-[0.2em] px-3 py-1.5 transition-colors ${
                  activeTab === tab
                    ? 'text-[#c5a880] font-semibold border-b-2 border-[#c5a880] -mb-[5px]'
                    : 'text-[#948b7e] hover:text-[#faf7f2]'
                }`}
              >
                {tab === 'All' ? 'All Editions' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {newPieces.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleViewAll}
            className="inline-flex items-center gap-3 py-3.5 px-8 border border-[#c5a880]/50 text-[#faf7f2] hover:bg-[#c5a880] hover:text-[#0c0b0a] transition-all text-xs uppercase tracking-[0.24em] font-medium group"
          >
            <span>Explore All New Editions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
