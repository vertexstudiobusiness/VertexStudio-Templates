import React, { useState } from 'react';
import { JOURNAL_DATA } from '../data/hotelData';
import type { JournalArticle } from '../types/hotel';
import { JournalModal } from './JournalModal';
import { Clock, ArrowRight } from 'lucide-react';

export const Journal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section
      id="journal"
      className="py-20 sm:py-28 lg:py-36 bg-haven-ivory text-haven-charcoal relative"
      aria-label="The Haven Journal"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 sm:w-12 bg-haven-stone/50" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-haven-stone-dark font-medium">
                The Haven Journal
              </span>
            </div>
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-haven-charcoal font-light tracking-tight">
              Stories from the Sanctuary
            </h2>
            <p className="mt-3 text-xs xs:text-sm sm:text-base text-haven-stone-dark leading-relaxed font-sans">
              Essays on architectural craft, seasonal foraging, and the quiet philosophy of slow living.
            </p>
          </div>
        </div>

        {/* Journal Cards Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer bg-white border border-haven-stone/25 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-haven-sand">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-haven-charcoal/85 backdrop-blur-md text-[10px] tracking-wider uppercase text-haven-ivory">
                    {article.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-haven-stone-dark">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-haven-olive" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-haven-charcoal font-medium group-hover:text-haven-olive transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-haven-charcoal-light/80 leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Link */}
              <div className="p-5 sm:p-6 pt-0 border-t border-haven-stone/15 mt-3 flex items-center justify-between text-xs text-haven-olive font-medium">
                <span>Read Dispatch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        <JournalModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </section>
  );
};
