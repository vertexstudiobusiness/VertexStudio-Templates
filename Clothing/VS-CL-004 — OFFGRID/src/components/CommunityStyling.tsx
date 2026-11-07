import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { COMMUNITY_LOOKS } from '../data/products';
import { Heart, ShoppingBag, ArrowRight, Check, UploadCloud } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

export const CommunityStyling: React.FC = () => {
  const { navigateTo, addToCart, products, showToast } = useShop();
  const [likes, setLikes] = useState<{ [id: string]: number }>(() => {
    const init: { [id: string]: number } = {};
    COMMUNITY_LOOKS.forEach((l) => (init[l.id] = l.likes));
    return init;
  });
  const [userLiked, setUserLiked] = useState<{ [id: string]: boolean }>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleLike = (id: string) => {
    if (userLiked[id]) {
      setLikes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setUserLiked((prev) => ({ ...prev, [id]: false }));
    } else {
      setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setUserLiked((prev) => ({ ...prev, [id]: true }));
      showToast('LOOK UPVOTED', 'Added to community styling leaderboard', 'info');
    }
  };

  const handleQuickBuy = (productId: string) => {
    const p = products.find((prod) => prod.id === productId);
    if (p) {
      addToCart(p, p.sizes[0] || 'L', p.colors[0]?.name || 'Standard', 1);
    }
  };

  const handleSubmitLook = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    showToast('LOOK SUBMITTED', 'Your outfit submission is in editorial review!', 'success');
    setTimeout(() => {
      setIsSubmitModalOpen(false);
      setSubmitSuccess(false);
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-14 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-brand-orange uppercase tracking-widest font-bold mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>COMMUNITY VAULT // #OFFGRIDPACK</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              STYLED BY THE <span className="text-brand-orange">PACK</span>
            </h2>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="bg-neutral-900 hover:bg-white hover:text-black border border-brand-border text-brand-offwhite font-mono text-xs font-bold px-4 py-3 uppercase transition-all duration-200 self-start sm:self-auto flex items-center gap-2 min-h-[44px] active:scale-95"
          >
            <UploadCloud className="w-4 h-4 text-brand-orange" />
            <span>SUBMIT YOUR FIT</span>
          </button>
        </div>

        {/* 4-Card Street Community Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMMUNITY_LOOKS.map((look) => {
            const hasLiked = userLiked[look.id];

            return (
              <div
                key={look.id}
                className="bg-neutral-950 border border-brand-border hover:border-brand-orange/60 transition-colors flex flex-col justify-between group"
              >
                {/* Photo */}
                <div className="aspect-[3/4] w-full overflow-hidden relative bg-neutral-900">
                  <img
                    src={look.image}
                    alt={look.handle}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Corner Handle Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm border border-brand-border px-2 py-0.5 font-mono text-[11px] text-white font-bold">
                    {look.handle}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => handleLike(look.id)}
                    className={`absolute top-2.5 right-2.5 p-2 backdrop-blur-md border transition-all ${
                      hasLiked
                        ? 'bg-neutral-950/90 border-brand-orange text-brand-orange'
                        : 'bg-neutral-950/60 border-brand-border text-white hover:text-brand-orange'
                    }`}
                    title="Like look"
                  >
                    <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-brand-orange' : ''}`} />
                  </button>

                  {/* Location badge */}
                  <div className="absolute bottom-2.5 left-2.5 bg-black/80 text-brand-concrete border border-brand-border px-2 py-0.5 font-mono text-[9px]">
                    {look.location}
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-4 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-brand-concrete block uppercase">
                      TAGGED GARMENT:
                    </span>
                    <h4
                      onClick={() => navigateTo('product-detail', look.productId)}
                      className="font-display font-bold text-xs sm:text-sm text-brand-offwhite hover:text-brand-orange cursor-pointer transition-colors truncate"
                    >
                      {look.wearing}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-brand-border/40">
                    <span className="text-[11px] font-mono text-brand-concrete">
                      ★ {likes[look.id]} UPVOTES
                    </span>

                    <button
                      onClick={() => handleQuickBuy(look.productId)}
                      className="flex items-center gap-1.5 bg-neutral-900 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-[10px] font-bold px-2.5 py-1.5 transition-colors uppercase"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>GET THIS FIT</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagging Callout */}
        <div className="mt-10 p-4 sm:p-6 bg-neutral-950 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider">
              JOIN THE OFFGRID SYNDICATE
            </span>
            <p className="font-display font-bold text-sm sm:text-base text-brand-offwhite uppercase">
              Tag @offgrid.india on Instagram or TikTok with #OFFGRIDPACK to be featured & receive a ₹1,000 drop voucher.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-brand-surface hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-xs font-bold px-5 py-2.5 uppercase transition-colors shrink-0 flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@OFFGRID.INDIA</span>
          </a>
        </div>
      </div>

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-neutral-950 border border-brand-border p-6 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  LOOK RECEIVED!
                </h3>
                <p className="font-mono text-xs text-brand-concrete">
                  Our creative director will review your photo for the community gallery.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitLook} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                  <h3 className="font-display font-black text-lg text-white uppercase">
                    SUBMIT YOUR STREET STYLE
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="text-brand-concrete hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    YOUR INSTAGRAM HANDLE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourhandle"
                    className="w-full bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    CITY & LOCATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bandra, Mumbai or Connaught Place, Delhi"
                    className="w-full bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    OFFGRID PIECE YOU'RE WEARING
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Neo-Distortion 450GSM Hoodie in L"
                    className="w-full bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-brand-concrete mb-1">
                    IMAGE LINK OR UPLOAD PHOTO
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900"
                    className="w-full bg-neutral-900 border border-brand-border px-3 py-2 text-xs font-mono text-white outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-3 transition-colors shadow-glow-orange"
                >
                  TRANSMIT TO EDITORIAL TEAM
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
