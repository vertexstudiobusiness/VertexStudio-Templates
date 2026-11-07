import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingBag, 
  Heart, 
  Ruler, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight, 
  ChevronDown, 
  Star, 
  Share2, 
  Maximize2,
  X
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export const ProductDetailPage: React.FC = () => {
  const {
    currentProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    navigateTo,
    openWhatsAppOrder,
    products,
    showToast
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(currentProduct.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(currentProduct.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<'fabric' | 'shipping' | 'care' | null>('fabric');
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const isWish = isInWishlist(currentProduct.id);

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== currentProduct.id && (p.category === currentProduct.category || p.isBestSeller))
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(currentProduct, selectedSize, selectedColor, quantity);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentProduct.name,
        text: `Check out ${currentProduct.name} on OFFGRID streetwear:`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('LINK COPIED', 'Product link copied to clipboard', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pb-36">
      {/* Breadcrumb Navigation */}
      <div className="bg-brand-surface border-b border-brand-border py-2.5 px-4 sm:px-6 text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-brand-concrete overflow-x-auto no-scrollbar">
          <button onClick={() => navigateTo('home')} className="hover:text-white shrink-0">
            HOME
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
          <button
            onClick={() => navigateTo('shop', undefined, currentProduct.category)}
            className="hover:text-white shrink-0"
          >
            {currentProduct.category.toUpperCase()}
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
          <span className="text-brand-orange truncate font-bold">
            {currentProduct.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Column: Gallery & Photography */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Primary Main Image (Optimized 3:4 aspect ratio for mobile) */}
            <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden border border-brand-border">
              <img
                src={currentProduct.images[activeImageIndex] || currentProduct.images[0]}
                alt={currentProduct.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Mobile Image Pagination Pill */}
              <div className="absolute bottom-3 right-3 bg-neutral-950/85 backdrop-blur-md border border-brand-border px-2 py-0.5 font-mono text-[10px] text-brand-concrete">
                {activeImageIndex + 1} / {currentProduct.images.length}
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                {currentProduct.isNewDrop && (
                  <span className="bg-brand-orange text-black font-mono font-black text-[10px] sm:text-xs px-2 py-0.5 uppercase tracking-wider">
                    DROP 004
                  </span>
                )}
                {currentProduct.editionNumber && (
                  <span className="bg-neutral-950/90 text-brand-concrete border border-brand-border text-[9px] sm:text-[10px] font-mono px-2 py-0.5">
                    EDITION {currentProduct.editionNumber}
                  </span>
                )}
              </div>

              {/* Zoom Trigger */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-3 right-3 z-10 p-2 min-h-[40px] min-w-[40px] flex items-center justify-center bg-neutral-950/85 hover:bg-brand-orange hover:text-black text-white border border-brand-border transition-colors"
                title="Fullscreen Zoom"
                aria-label="Zoom image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Stock Warning */}
              {currentProduct.stockCount <= 5 && (
                <div className="absolute bottom-3 left-3 bg-black/90 text-brand-orange border border-brand-orange/60 font-mono text-[10px] sm:text-xs px-2.5 py-1 font-bold">
                  ARCHIVE ALERT: ONLY {currentProduct.stockCount} UNITS REMAINING
                </div>
              )}
            </div>

            {/* Thumbnail Row (Horizontal scroll on mobile with touch targets) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {currentProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[3/4] bg-neutral-900 overflow-hidden border min-h-[64px] transition-all ${
                    activeImageIndex === idx
                      ? 'border-brand-orange ring-2 ring-brand-orange/40'
                      : 'border-brand-border opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Garment Architecture, Fit & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              {/* Category & Collection info */}
              <div className="flex items-center justify-between text-xs font-mono text-brand-concrete pb-2 border-b border-brand-border/60">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-brand-orange font-bold truncate">{currentProduct.collection}</span>
                  <span>//</span>
                  <span className="shrink-0">{currentProduct.category}</span>
                </div>
                <button
                  onClick={handleShare}
                  className="hover:text-white flex items-center gap-1 text-[11px] shrink-0 min-h-[36px] px-1"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  SHARE
                </button>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-display font-black text-xl xs:text-2xl sm:text-4xl text-brand-offwhite uppercase tracking-tight mt-2 leading-tight">
                {currentProduct.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-brand-concrete mt-1">
                {currentProduct.subtitle}
              </p>

              {/* Price & Rating */}
              <div className="flex items-baseline justify-between mt-3 pb-3 border-b border-brand-border">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-brand-orange">
                    ₹{currentProduct.price.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-sm sm:text-base text-neutral-500 line-through">
                    ₹{currentProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="bg-brand-orange/15 text-brand-orange border border-brand-orange/40 text-[10px] font-mono px-2 py-0.5 font-bold">
                    SAVE {Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100)}%
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-brand-concrete shrink-0">
                  <Star className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                  <span className="text-white font-bold">{currentProduct.rating}</span>
                  <span className="hidden xs:inline">({currentProduct.reviewCount})</span>
                </div>
              </div>

              {/* Garment Key Metrics Bar */}
              <div className="grid grid-cols-2 gap-2 my-4 text-xs font-mono">
                <div className="bg-brand-surface border border-brand-border p-2.5 sm:p-3">
                  <span className="text-brand-concrete text-[10px] block uppercase">FABRIC GSM</span>
                  <span className="text-white font-bold text-xs sm:text-sm">{currentProduct.gsm}</span>
                </div>
                <div className="bg-brand-surface border border-brand-border p-2.5 sm:p-3">
                  <span className="text-brand-concrete text-[10px] block uppercase">SILHOUETTE</span>
                  <span className="text-white font-bold text-xs sm:text-sm">{currentProduct.fit}</span>
                </div>
              </div>

              {/* Color Selector */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-brand-concrete">
                    COLORWAY: <strong className="text-white uppercase">{selectedColor}</strong>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-2 border font-mono text-xs min-h-[44px] transition-all active:scale-95 ${
                        selectedColor === c.name
                          ? 'border-brand-orange bg-brand-surface text-brand-orange font-bold'
                          : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/40"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector (Finger-friendly min-h-[46px]) */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-concrete">
                    SIZE: <strong className="text-white">{selectedSize}</strong>
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-brand-orange hover:underline flex items-center gap-1 font-bold min-h-[36px] px-1"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>SIZE CALCULATOR</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {currentProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 font-mono text-xs font-bold border min-h-[48px] flex items-center justify-center transition-all active:scale-95 ${
                        selectedSize === sz
                          ? 'bg-brand-orange text-black border-brand-orange shadow-glow-orange'
                          : 'bg-neutral-900 text-brand-offwhite border-brand-border hover:border-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>

                <p className="text-[10px] font-mono text-brand-concrete pt-1">
                  Engineered intentionally oversized. Order your standard size for designed runway drape.
                </p>
              </div>

              {/* Desktop Quantity Stepper + Add to Cart CTA */}
              <div className="space-y-2.5 pt-1 hidden lg:block">
                <div className="flex gap-3">
                  {/* Stepper */}
                  <div className="flex items-center border border-brand-border bg-neutral-900 px-2 shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 text-brand-concrete hover:text-white font-mono text-base min-h-[44px] min-w-[36px]"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-mono text-sm font-bold text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 text-brand-concrete hover:text-white font-mono text-base min-h-[44px] min-w-[36px]"
                    >
                      +
                    </button>
                  </div>

                  {/* Primary Add to Bag */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-brand-orange hover:bg-white text-black font-mono font-bold text-sm uppercase py-4 flex items-center justify-center gap-2 transition-all shadow-glow-orange min-h-[50px] active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG // ₹{(currentProduct.price * quantity).toLocaleString('en-IN')}</span>
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(currentProduct.id)}
                    className={`p-4 border transition-colors shrink-0 min-h-[50px] min-w-[50px] flex items-center justify-center ${
                      isWish
                        ? 'border-brand-orange bg-brand-orange/20 text-brand-orange'
                        : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                    }`}
                    title="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isWish ? 'fill-brand-orange' : ''}`} />
                  </button>
                </div>

                {/* WhatsApp Quick Order */}
                <button
                  onClick={() => openWhatsAppOrder(currentProduct, selectedSize)}
                  className="w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-mono text-xs font-bold py-3 flex items-center justify-center gap-2 transition-colors uppercase min-h-[46px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ORDER INSTANTLY VIA WHATSAPP (SIZE {selectedSize})</span>
                </button>
              </div>

              {/* Value Badges */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 my-4 py-3 sm:py-4 border-y border-brand-border text-[10px] sm:text-[11px] font-mono text-brand-concrete text-center">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-brand-orange" />
                  <span>FREE EXP. DELIVERY</span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-brand-border">
                  <RotateCcw className="w-4 h-4 text-brand-orange" />
                  <span>7-DAY EXCHANGES</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>CASH ON DELIVERY</span>
                </div>
              </div>

              {/* Technical Accordions */}
              <div className="space-y-2 mt-4 font-mono text-xs">
                {/* Description & Fabric */}
                <div className="border border-brand-border bg-brand-surface">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-bold text-brand-offwhite uppercase min-h-[46px]"
                  >
                    <span>FABRIC COMPOSITION & ARCHITECTURE</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'fabric' ? 'rotate-180 text-brand-orange' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'fabric' && (
                    <div className="p-3.5 pt-0 border-t border-brand-border/40 text-brand-concrete space-y-2">
                      <p>{currentProduct.description}</p>
                      <ul className="space-y-1 pt-1 list-disc list-inside text-brand-offwhite">
                        {currentProduct.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Shipping & Delivery */}
                <div className="border border-brand-border bg-brand-surface">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-bold text-brand-offwhite uppercase min-h-[46px]"
                  >
                    <span>DISPATCH TIMELINE & RETURNS</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'shipping' ? 'rotate-180 text-brand-orange' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="p-3.5 pt-0 border-t border-brand-border/40 text-brand-concrete space-y-2">
                      <p>
                        Dispatched from Bandra, Mumbai within 24-48 business hours via Bluedart / Delhivery Express.
                      </p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Metro cities: 2 to 3 business days</li>
                        <li>Rest of India: 3 to 5 business days</li>
                        <li>Doorstep size exchange within 7 days of delivery</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Wash & Care */}
                <div className="border border-brand-border bg-brand-surface">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-bold text-brand-offwhite uppercase min-h-[46px]"
                  >
                    <span>WASH & CARE DIRECTIVES</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === 'care' ? 'rotate-180 text-brand-orange' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === 'care' && (
                    <div className="p-3.5 pt-0 border-t border-brand-border/40 text-brand-concrete space-y-1">
                      {currentProduct.careInstructions.map((care, idx) => (
                        <p key={idx}>• {care}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related / Frequently Styled With */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-brand-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-black text-xl sm:text-3xl text-brand-offwhite uppercase">
              FREQUENTLY <span className="text-stroke">STYLED</span> WITH
            </h3>
            <button
              onClick={() => navigateTo('shop')}
              className="text-xs font-mono text-brand-orange hover:text-white uppercase font-bold min-h-[36px] flex items-center"
            >
              EXPLORE ALL
            </button>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigateTo('product-detail', rel.id)}
                className="group bg-neutral-950 border border-brand-border hover:border-brand-orange p-3 cursor-pointer transition-colors"
              >
                <div className="aspect-[3/4] bg-neutral-900 overflow-hidden mb-2.5">
                  <img
                    src={rel.images[0]}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-[10px] font-mono text-brand-concrete">
                  {rel.fit} • {rel.gsm.split(' ')[0]} GSM
                </div>
                <h4 className="font-display font-bold text-xs text-white uppercase truncate group-hover:text-brand-orange">
                  {rel.name}
                </h4>
                <div className="font-mono text-xs sm:text-sm font-bold text-brand-orange mt-1">
                  ₹{rel.price.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar for Mobile Shopping (CRITICAL Mobile UX requirement: sits above bottom nav dock) */}
      <div className="lg:hidden fixed bottom-[65px] inset-x-0 bg-neutral-950/95 backdrop-blur-md border-t border-brand-border p-2.5 sm:p-3 z-30 flex items-center gap-2.5 shadow-2xl">
        <div className="shrink-0">
          <span className="font-mono text-sm font-bold text-brand-orange block">
            ₹{currentProduct.price.toLocaleString('en-IN')}
          </span>
          <span className="text-[9px] font-mono text-brand-concrete">
            SIZE: <strong className="text-white">{selectedSize}</strong>
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-brand-orange text-black font-mono font-bold text-xs uppercase py-3.5 flex items-center justify-center gap-1.5 shadow-glow-orange min-h-[46px] active:scale-[0.98]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ADD TO BAG</span>
        </button>

        <button
          onClick={() => openWhatsAppOrder(currentProduct, selectedSize)}
          className="p-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] min-h-[46px] min-w-[46px] flex items-center justify-center active:scale-95"
          title="WhatsApp Order"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {/* Fullscreen Image Zoom Lightbox */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center bg-neutral-900 text-white hover:text-brand-orange border border-brand-border"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-4xl max-h-[90vh] overflow-hidden">
              <img
                src={currentProduct.images[activeImageIndex]}
                alt={currentProduct.name}
                className="max-h-[85vh] w-auto mx-auto object-contain"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
