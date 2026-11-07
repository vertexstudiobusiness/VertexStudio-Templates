import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Heart,
  ShoppingBag,
  Ruler,
  PhoneCall,
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import type { ProductColor } from '../../types';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    addToCart,
    isInWishlist,
    toggleWishlist,
    setIsSizeGuideOpen,
    sendWhatsAppOrder,
    products
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'fabric' | 'details' | 'delivery'>('fabric');
  const [isAdding, setIsAdding] = useState(false);

  // Initialize selected product state when it changes
  useEffect(() => {
    if (selectedProduct) {
      setActiveImageIndex(0);
      setSelectedSize(selectedProduct.sizes[0]);
      setSelectedColor(selectedProduct.colors[0]);
      setQuantity(1);
      setActiveTab('fabric');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProduct) {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct, setSelectedProduct]);

  if (!selectedProduct) return null;

  const isSaved = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    if (!selectedColor) return;
    setIsAdding(true);
    addToCart(selectedProduct, selectedSize, selectedColor, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleWhatsAppBuy = () => {
    sendWhatsAppOrder(selectedProduct, selectedSize, selectedColor?.name);
  };

  const relatedProducts = products
    .filter((p) => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.gender === selectedProduct.gender))
    .slice(0, 3);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={selectedProduct.name}
      >
        {/* Dimmed backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="relative w-full max-w-5xl my-4 sm:my-8 mx-auto bg-[#0d0c0a] text-[#faf7f2] border border-[#2b2721] shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#201d19] bg-[#12100e]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#c5a880] font-semibold">
                {selectedProduct.category}
              </span>
              <span className="text-[#4f483e]">•</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#948b7e]">
                REF: {selectedProduct.id.toUpperCase()}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="w-9 h-9 rounded-full border border-[#2a2620] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors focus:outline-none"
              aria-label="Close product detail"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Two Columns (Gallery on Left, Details on Right) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Image Gallery with Mobile Swipe & Desktop Thumbnails */}
              <div className="lg:col-span-7 space-y-4">
                {/* Main Large Image */}
                <div className="relative aspect-[3/4] w-full bg-[#161412] overflow-hidden group">
                  <img
                    src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                    alt={`${selectedProduct.name} - View ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                  />

                  {/* Navigation Arrows for Multi-image */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === 0 ? selectedProduct.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-[#c5a880] hover:text-black transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-[#c5a880] hover:text-black transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Dot Indicators on Mobile */}
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 lg:hidden">
                    {selectedProduct.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeImageIndex === idx ? 'bg-[#c5a880] w-5' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnails Row */}
                {selectedProduct.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2.5">
                    {selectedProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`aspect-[3/4] overflow-hidden border transition-all ${
                          activeImageIndex === idx
                            ? 'border-[#c5a880] ring-1 ring-[#c5a880]'
                            : 'border-[#26231e] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Garment Information & Purchasing Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-2">
                    {selectedProduct.isAtelierExclusive && (
                      <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#c5a880] bg-[#c5a880]/15 px-2 py-0.5 border border-[#c5a880]/30">
                        Atelier Exclusive
                      </span>
                    )}
                    {selectedProduct.inStock ? (
                      <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-medium">
                        • In Stock for Immediate Dispatch
                      </span>
                    ) : (
                      <span className="text-[9px] uppercase tracking-wider text-rose-400 font-medium">
                        • Made to Order (3 Weeks)
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h1 className="font-serif text-2xl sm:text-3xl text-[#faf7f2] font-normal tracking-tight leading-tight mb-1">
                    {selectedProduct.name}
                  </h1>

                  <p className="text-xs text-[#948b7e] uppercase tracking-[0.16em] mb-4">
                    {selectedProduct.subtitle}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 pb-5 border-b border-[#201d19]">
                    <span className="font-sans text-2xl font-semibold text-[#faf7f2] tracking-wide">
                      ₹{selectedProduct.price.toLocaleString('en-IN')}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm text-[#736a5f] line-through">
                        ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-[11px] text-[#948b7e] font-light">
                      (Includes all luxury GST & complimentary delivery)
                    </span>
                  </div>

                  {/* Description */}
                  <div className="py-4 border-b border-[#201d19]">
                    <p className="text-xs sm:text-sm text-[#ded6c9] leading-relaxed font-light">
                      {selectedProduct.description}
                    </p>
                    {selectedProduct.measurementsModel && (
                      <p className="text-[11px] text-[#948b7e] italic mt-2">
                        {selectedProduct.measurementsModel}
                      </p>
                    )}
                  </div>

                  {/* Color Selector */}
                  <div className="py-4 border-b border-[#201d19] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                        Colorway
                      </span>
                      <span className="text-xs text-[#c5a880]">
                        {selectedColor?.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => {
                            setSelectedColor(c);
                            if (c.imageIndex !== undefined) setActiveImageIndex(c.imageIndex);
                          }}
                          className={`w-7 h-7 rounded-full border transition-all ${
                            selectedColor?.name === c.name
                              ? 'ring-2 ring-[#c5a880] ring-offset-2 ring-offset-[#0d0c0a] border-white'
                              : 'border-white/20 hover:scale-105'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                          aria-label={`Select color ${c.name}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Selector & Size Guide Link */}
                  <div className="py-4 border-b border-[#201d19] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                        Select Size
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsSizeGuideOpen(true)}
                        className="text-xs text-[#c5a880] hover:text-[#faf7f2] flex items-center gap-1 underline underline-offset-4"
                      >
                        <Ruler className="w-3.5 h-3.5" />
                        <span>Bespoke Size Guide</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {selectedProduct.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 text-xs uppercase font-medium border transition-colors ${
                            selectedSize === size
                              ? 'border-[#c5a880] bg-[#c5a880] text-[#0c0b0a] font-bold'
                              : 'border-[#2e2a24] bg-[#141210] text-[#faf7f2] hover:border-[#c5a880]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="py-4 border-b border-[#201d19] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#faf7f2]">
                      Quantity
                    </span>
                    <div className="flex items-center border border-[#2e2a24] bg-[#141210]">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 flex items-center justify-center text-sm hover:text-[#c5a880]"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-semibold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        className="w-8 h-8 flex items-center justify-center text-sm hover:text-[#c5a880]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Actions: Add to Bag & WhatsApp Concierge */}
                  <div className="pt-6 space-y-3">
                    <div className="flex items-stretch gap-3">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex-1 py-4 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] transition-colors font-semibold text-xs uppercase tracking-[0.22em] flex items-center justify-center gap-2 shadow-xl active:scale-[0.98]"
                      >
                        {isAdding ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-700" />
                            <span>Added to Bag</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Add to Atelier Bag</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(selectedProduct.id)}
                        className="w-14 border border-[#2e2a24] bg-[#141210] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors"
                        aria-label="Save to wishlist"
                      >
                        <Heart
                          className={`w-5 h-5 ${isSaved ? 'fill-[#c5a880] text-[#c5a880]' : ''}`}
                        />
                      </button>
                    </div>

                    {/* WhatsApp Ordering Direct Button */}
                    <button
                      type="button"
                      onClick={handleWhatsAppBuy}
                      className="w-full py-3 px-4 bg-[#141210] border border-[#25d366]/40 hover:border-[#25d366] text-[#faf7f2] hover:bg-[#19241c] text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#25d366]" />
                      <span>Order Directly via WhatsApp Concierge</span>
                    </button>
                  </div>

                  {/* Tabs: Fabric & Origin, Tailoring Details, Delivery & Care */}
                  <div className="mt-8 pt-4 border-t border-[#201d19]">
                    <div className="flex items-center gap-4 border-b border-[#201d19] pb-2 text-xs uppercase tracking-wider font-medium">
                      <button
                        type="button"
                        onClick={() => setActiveTab('fabric')}
                        className={`pb-1 transition-colors ${
                          activeTab === 'fabric'
                            ? 'text-[#c5a880] border-b-2 border-[#c5a880]'
                            : 'text-[#948b7e] hover:text-[#faf7f2]'
                        }`}
                      >
                        Fabric & Origin
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('details')}
                        className={`pb-1 transition-colors ${
                          activeTab === 'details'
                            ? 'text-[#c5a880] border-b-2 border-[#c5a880]'
                            : 'text-[#948b7e] hover:text-[#faf7f2]'
                        }`}
                      >
                        Sartorial Details
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('delivery')}
                        className={`pb-1 transition-colors ${
                          activeTab === 'delivery'
                            ? 'text-[#c5a880] border-b-2 border-[#c5a880]'
                            : 'text-[#948b7e] hover:text-[#faf7f2]'
                        }`}
                      >
                        Delivery & Care
                      </button>
                    </div>

                    <div className="py-4 text-xs text-[#ded6c9] leading-relaxed font-light">
                      {activeTab === 'fabric' && (
                        <div className="space-y-2">
                          <p>
                            <strong className="text-[#faf7f2] font-medium">Composition:</strong>{' '}
                            {selectedProduct.fabricDetails.composition}
                          </p>
                          <p>
                            <strong className="text-[#faf7f2] font-medium">Origin:</strong>{' '}
                            {selectedProduct.fabricDetails.origin}
                          </p>
                          <p>
                            <strong className="text-[#faf7f2] font-medium">Weight:</strong>{' '}
                            {selectedProduct.fabricDetails.weight}
                          </p>
                        </div>
                      )}

                      {activeTab === 'details' && (
                        <ul className="list-disc list-inside space-y-1.5">
                          {selectedProduct.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                          {selectedProduct.stylingTips && (
                            <li className="text-[#c5a880] pt-1">
                              <em>Styling note:</em> {selectedProduct.stylingTips}
                            </li>
                          )}
                        </ul>
                      )}

                      {activeTab === 'delivery' && (
                        <div className="space-y-3">
                          <div className="flex items-start gap-2.5">
                            <Truck className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                            <p>
                              Complimentary express courier across India (2–4 business days). Hand-packed in ÉLAN signature cedar-lined presentation boxes.
                            </p>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <RotateCcw className="w-4 h-4 text-[#c5a880] flex-shrink-0 mt-0.5" />
                            <p>
                              14-day complimentary exchange window. Seamless home pickup arranged upon request.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Related Creations */}
                {relatedProducts.length > 0 && (
                  <div className="pt-6 border-t border-[#201d19]">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#948b7e] font-semibold block mb-3">
                      COMPLEMENTARY ATELIER CREATIONS
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {relatedProducts.map((rel) => (
                        <div
                          key={rel.id}
                          onClick={() => setSelectedProduct(rel)}
                          className="group cursor-pointer bg-[#141210] p-2 border border-[#221f1a] hover:border-[#c5a880]/50 transition-colors"
                        >
                          <img
                            src={rel.images[0]}
                            alt={rel.name}
                            className="w-full aspect-[3/4] object-cover mb-1.5"
                          />
                          <p className="font-serif text-[11px] text-[#faf7f2] truncate group-hover:text-[#c5a880]">
                            {rel.name}
                          </p>
                          <p className="text-[10px] text-[#948b7e]">
                            ₹{rel.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
