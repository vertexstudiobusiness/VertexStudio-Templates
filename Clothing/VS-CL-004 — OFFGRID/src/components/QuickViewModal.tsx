import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  ExternalLink, 
  Ruler, 
  Check, 
  MessageSquare,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    navigateTo,
    openWhatsAppOrder
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!quickViewProduct) return null;

  const currentSize = selectedSize || quickViewProduct.sizes[0] || 'Standard';
  const currentColor = selectedColor || quickViewProduct.colors[0]?.name || 'Standard';
  const isWish = isInWishlist(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, currentSize, currentColor, 1);
    setQuickViewProduct(null);
  };

  const handleGoToFullPage = () => {
    setQuickViewProduct(null);
    navigateTo('product-detail', quickViewProduct.id);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-neutral-950 border border-brand-border z-10 max-h-[92vh] overflow-y-auto shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 p-2 bg-neutral-900/80 hover:bg-white text-white hover:text-black border border-brand-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">
            {/* Left: Gallery */}
            <div className="space-y-3">
              <div className="aspect-[3/4] w-full bg-neutral-900 overflow-hidden relative border border-brand-border">
                <img
                  src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover object-center"
                />
                {quickViewProduct.isNewDrop && (
                  <span className="absolute top-3 left-3 bg-brand-orange text-black font-mono font-black text-[10px] px-2 py-0.5 uppercase tracking-wider">
                    DROP 004
                  </span>
                )}
                {quickViewProduct.stockCount <= 5 && (
                  <span className="absolute bottom-3 left-3 bg-neutral-950/90 text-brand-orange border border-brand-orange/60 font-mono text-[10px] px-2 py-1">
                    ONLY {quickViewProduct.stockCount} LEFT IN ARCHIVE
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-square overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-brand-orange ring-1 ring-brand-orange'
                        : 'border-brand-border/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Garment Specs & Ordering */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-brand-concrete">
                  <span>{quickViewProduct.collection}</span>
                  <span>//</span>
                  <span className="text-brand-orange font-bold">{quickViewProduct.category}</span>
                </div>

                <h2 className="font-display font-black text-xl sm:text-2xl text-brand-offwhite uppercase mt-1 leading-tight">
                  {quickViewProduct.name}
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="font-mono text-2xl font-bold text-brand-orange">
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-sm text-neutral-500 line-through">
                    ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="bg-brand-orange/15 text-brand-orange border border-brand-orange/40 text-[10px] font-mono px-2 py-0.5">
                    SAVE {Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Badges / Specs */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                  <div className="bg-neutral-900 border border-brand-border p-2">
                    <span className="text-brand-concrete block text-[9px]">FABRIC SPEC</span>
                    <span className="text-white font-bold">{quickViewProduct.gsm}</span>
                  </div>
                  <div className="bg-neutral-900 border border-brand-border p-2">
                    <span className="text-brand-concrete block text-[9px]">SILHOUETTE</span>
                    <span className="text-white font-bold">{quickViewProduct.fit}</span>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mt-4">
                  <span className="text-xs font-mono text-brand-concrete block mb-2">
                    COLOR: <strong className="text-white">{currentColor}</strong>
                  </span>
                  <div className="flex gap-2">
                    {quickViewProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`px-3 py-1.5 border font-mono text-xs flex items-center gap-2 transition-all ${
                          currentColor === color.name
                            ? 'border-brand-orange bg-brand-surface text-brand-orange'
                            : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/40"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-brand-concrete">
                      SELECT SIZE: <strong className="text-white">{currentSize}</strong>
                    </span>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="text-xs font-mono text-brand-orange hover:underline flex items-center gap-1"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      SIZE GUIDE
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {quickViewProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-3 font-mono text-xs font-bold border min-h-[44px] flex items-center justify-center transition-all active:scale-95 ${
                          currentSize === sz
                            ? 'bg-brand-orange text-black border-brand-orange shadow-glow-orange'
                            : 'bg-neutral-900 text-brand-offwhite border-brand-border hover:border-white'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-brand-border">
                <div className="flex gap-2">
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-brand-orange hover:bg-white text-black font-mono font-bold text-xs uppercase py-3.5 flex items-center justify-center gap-2 transition-colors shadow-glow-orange"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BAG // ₹{quickViewProduct.price.toLocaleString('en-IN')}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className={`p-3.5 border transition-colors ${
                      isWish
                        ? 'border-brand-orange bg-brand-orange/20 text-brand-orange'
                        : 'border-brand-border bg-neutral-900 text-brand-concrete hover:text-white'
                    }`}
                    title="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWish ? 'fill-brand-orange' : ''}`} />
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openWhatsAppOrder(quickViewProduct, currentSize)}
                    className="flex-1 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP QUICK ORDER</span>
                  </button>

                  <button
                    onClick={handleGoToFullPage}
                    className="px-4 bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-2.5 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>DETAILS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

