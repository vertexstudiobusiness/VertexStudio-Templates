import React from 'react';
import { motion } from 'framer-motion';
import { BESTSELLER_ITEMS } from '../data/menuData';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Bestsellers: React.FC = () => {
  return (
    <section id="bestsellers" className="py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#4F5E4B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#B86749]" />
              <span>House Signatures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1511] leading-tight">
              Our Most Cherished Morning Rituals & Bakes
            </h2>
            <p className="text-[#5C473A] text-sm sm:text-base leading-relaxed font-light">
              Crafted without compromise. From single-origin espresso with expressed orange oils to hand-twisted Danish cardamom buns fresh from the morning ovens.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#291F18] hover:text-[#4F5E4B] transition-colors group shrink-0"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BESTSELLER_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 bg-[#F7F3EB] rounded-sm border border-[#EFE8DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-serif text-lg text-[#1C1511]">Looking for seasonal batches or catering?</p>
            <p className="text-xs text-[#5C473A]">We curate whole pastry boxes and coffee carafes for intimate gatherings and morning events.</p>
          </div>
          <a
            href={`https://wa.me/919820144520?text=${encodeURIComponent('Bonjour Café Maison! I would like to inquire about whole cakes, pastry boxes, or catering.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#4F5E4B] hover:bg-[#3D4A3A] text-[#F7F3EB] text-xs uppercase tracking-[0.14em] font-medium rounded-sm whitespace-nowrap transition-colors shadow-sm"
          >
            Inquire via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
