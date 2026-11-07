import React, { useState } from 'react';
import { Heart, MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../../data/instagram';
import { InstagramPost } from '../../types';
import { useShop } from '../../context/ShopContext';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramFeed: React.FC = () => {
  const { products, openProductDetail, formatPrice } = useShop();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const handleOpenPost = (post: InstagramPost) => {
    setSelectedPost(post);
  };

  const handleShopTagged = (productId: string) => {
    const item = products.find((p) => p.id === productId);
    if (item) {
      setSelectedPost(null);
      openProductDetail(item);
    }
  };

  return (
    <section className="py-12 sm:py-18 bg-[#FAF8F5] border-t border-[#D8CFBE]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#B77B6E] mb-1">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@luna.collective</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#261B14]">
              Follow Our Visual Journey
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5A4232] font-light mt-2 sm:mt-0">
            Tag <span className="font-medium text-[#261B14]">#MadeToFeelBeautiful</span> to be featured in our salon gallery.
          </p>
        </div>

        {/* 2-col on mobile, 3-col on tablet, 6-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => handleOpenPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#EFE9E0] cursor-pointer shadow-xs border border-[#D8CFBE]/40"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Hover overlay with likes and comment count */}
              <div className="absolute inset-0 bg-[#261B14]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-2 text-center">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    {post.comments}
                  </span>
                </div>
                {post.taggedProduct && (
                  <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full text-white/90">
                    Tap to shop
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#FAF8F5] text-[#261B14] rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl border border-[#D8CFBE] relative grid grid-cols-1 sm:grid-cols-2 max-h-[85vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 p-1.5 text-white sm:text-[#5A4232] bg-black/50 sm:bg-[#EFE9E0] hover:bg-[#D8CFBE] rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Post Image */}
            <div className="aspect-square sm:aspect-auto sm:h-full bg-[#EFE9E0] overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Post Details & Shoppable Tag */}
            <div className="p-5 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-[#D8CFBE]/60">
                  <div className="w-7 h-7 rounded-full bg-[#3D2B1F] text-[#FAF8F5] flex items-center justify-center text-[10px] font-bold">
                    LN
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#261B14]">{selectedPost.handle}</p>
                    <span className="text-[10px] text-[#5A4232]">LUNA Collective Journal</span>
                  </div>
                </div>

                <p className="text-xs text-[#3D2B1F] leading-relaxed font-light my-4">
                  {selectedPost.caption}
                </p>

                <div className="flex items-center gap-4 text-xs text-[#5A4232] pb-3 border-b border-[#D8CFBE]/50">
                  <span className="flex items-center gap-1 font-medium text-[#B77B6E]">
                    <Heart className="w-4 h-4 fill-[#B77B6E]" /> {selectedPost.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> {selectedPost.comments} comments
                  </span>
                </div>
              </div>

              {/* Tagged Product Box */}
              {selectedPost.taggedProduct && (
                <div className="mt-4 pt-3 border-t border-[#D8CFBE]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B77B6E] block mb-2">
                    Tagged in this photo
                  </span>
                  <div className="bg-[#F6F3EE] p-3 rounded-xl flex items-center justify-between border border-[#D8CFBE]/70">
                    <div className="min-w-0 pr-2">
                      <p className="font-serif text-xs font-semibold text-[#261B14] truncate">
                        {selectedPost.taggedProduct.name}
                      </p>
                      <p className="text-xs text-[#5A4232] font-mono mt-0.5">
                        {formatPrice(selectedPost.taggedProduct.price)}
                      </p>
                    </div>
                    <button
                      onClick={() => handleShopTagged(selectedPost.taggedProduct!.id)}
                      className="bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span>Shop</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
