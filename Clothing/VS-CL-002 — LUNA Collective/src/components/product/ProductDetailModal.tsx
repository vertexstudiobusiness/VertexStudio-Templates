import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Star, 
  ShoppingBag, 
  Ruler, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  MessageCircle, 
  Plus, 
  Minus, 
  ChevronDown, 
  ChevronUp, 
  ZoomIn, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../home/ProductCard';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    closeProductDetail,
    openLightbox,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen,
    setIsCheckoutOpen,
    formatPrice,
    products
  } = useShop();

  if (!selectedProduct) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0] || 'M');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  // Accordion Toggles
  const [openAccordion, setOpenAccordion] = useState<'fabric' | 'care' | 'shipping' | null>('fabric');

  const inWishlist = isInWishlist(selectedProduct.id);
  const selectedColor = selectedProduct.colors[selectedColorIndex] || {
    colorName: 'Default',
    colorHex: '#3D2B1F'
  };

  const currentMainImage = selectedProduct.images[selectedImageIndex] || selectedProduct.images[0];

  const discountPercent = selectedProduct.originalPrice
    ? Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor.colorName, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedSize, selectedColor.colorName, quantity);
    closeProductDetail();
    setIsCheckoutOpen(true);
  };

  const whatsappInquiryUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(
    `Hi LUNA Collective, I would like to inquire about the ${selectedProduct.name} (${selectedProduct.sku}) in size ${selectedSize} and color ${selectedColor.colorName}.`
  )}`;

  // Related products from the same or complementary category
  const relatedProducts = products
    .filter((p) => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.isBestseller))
    .slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={closeProductDetail}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-[#FAF8F5] text-[#261B14] min-h-screen sm:min-h-0 sm:max-h-[92vh] sm:rounded-3xl shadow-2xl overflow-y-auto border border-[#D8CFBE]/60 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Mobile/Desktop Top Bar with Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D8CFBE]/50">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B77B6E]">
            {selectedProduct.category.replace('-', ' ')} · SKU: {selectedProduct.sku}
          </span>
          <button
            onClick={closeProductDetail}
            className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Core Grid */}
        <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* LEFT: Multi-image Gallery */}
          <div className="md:col-span-6 flex flex-col-reverse sm:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:max-h-[500px] no-scrollbar shrink-0">
              {selectedProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-20 sm:w-18 sm:h-22 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-[#EFE9E0] ${
                    selectedImageIndex === idx
                      ? 'border-[#3D2B1F] shadow-xs'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>

            {/* Main Featured Photo with Zoom Overlay */}
            <div className="relative flex-1 aspect-3/4 rounded-2xl overflow-hidden bg-[#EFE9E0] shadow-md group">
              <img
                src={currentMainImage}
                alt={selectedProduct.name}
                className="w-full h-full object-cover object-top cursor-zoom-in"
                onClick={() => openLightbox(currentMainImage)}
              />

              <button
                onClick={() => openLightbox(currentMainImage)}
                className="absolute bottom-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#261B14] p-2 rounded-xl shadow-md hover:bg-[#FAF8F5] transition-all"
                aria-label="Zoom image"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Wishlist Toggle Button */}
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
                  inWishlist
                    ? 'bg-[#FAF8F5] text-[#B77B6E]'
                    : 'bg-[#FAF8F5]/90 text-[#3D2B1F] hover:text-[#B77B6E]'
                }`}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart
                  className={`w-4 h-4 ${inWishlist ? 'fill-[#B77B6E] text-[#B77B6E]' : 'stroke-[1.5]'}`}
                />
              </button>
            </div>
          </div>

          {/* RIGHT: Product Details & Buying Controls */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-[#B77B6E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(selectedProduct.rating)
                          ? 'fill-[#B77B6E] text-[#B77B6E]'
                          : 'text-[#D8CFBE]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#261B14]">
                  {selectedProduct.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#5A4232]/70">
                  ({selectedProduct.reviewsCount} verified reviews)
                </span>
              </div>

              {/* Product Title & Subtitle */}
              <h1 id="product-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14] leading-tight">
                {selectedProduct.name}
              </h1>
              <p className="text-xs sm:text-sm text-[#5A4232] font-light mt-1">
                {selectedProduct.subtitle}
              </p>

              {/* Pricing in INR */}
              <div className="flex items-baseline gap-2.5 mt-4 pb-4 border-b border-[#D8CFBE]/50">
                <span className="text-2xl sm:text-3xl font-semibold text-[#261B14] font-mono">
                  {formatPrice(selectedProduct.price)}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm text-[#5A4232]/50 line-through font-mono">
                    {formatPrice(selectedProduct.originalPrice)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="bg-[#F7EBE8] text-[#B77B6E] text-xs font-bold px-2 py-0.5 rounded-md border border-[#D4A59A]/30">
                    {discountPercent}% OFF
                  </span>
                )}
                <span className="text-[10px] text-[#5A4232]/70 ml-auto block">
                  MRP incl. of all taxes
                </span>
              </div>

              {/* Color Selection */}
              {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#3D2B1F]">
                      Color Shade: <span className="font-normal text-[#5A4232]">{selectedColor.colorName}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {selectedProduct.colors.map((c, idx) => (
                      <button
                        key={c.colorName}
                        onClick={() => {
                          setSelectedColorIndex(idx);
                          // Also switch gallery image if variant has photo
                          const matchingImgIdx = selectedProduct.images.indexOf(c.image);
                          if (matchingImgIdx !== -1) {
                            setSelectedImageIndex(matchingImgIdx);
                          }
                        }}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                          selectedColorIndex === idx
                            ? 'ring-2 ring-offset-2 ring-[#3D2B1F] border-white'
                            : 'border-[#D8CFBE] opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.colorHex }}
                        title={c.colorName}
                        aria-label={`Select shade ${c.colorName}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection with Size Guide Trigger */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#3D2B1F]">
                    Select Size (Standard India/UK):
                  </span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[#B77B6E] hover:underline flex items-center gap-1 font-medium"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size & Fit Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-11 rounded-xl text-xs font-semibold flex items-center justify-center transition-all ${
                        selectedSize === sz
                          ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-sm'
                          : 'bg-[#F6F3EE] text-[#3D2B1F] border border-[#D8CFBE] hover:border-[#3D2B1F]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Stock Notice */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#D8CFBE]/50">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#3D2B1F]">Quantity</span>
                  <div className="flex items-center border border-[#D8CFBE] rounded-xl bg-[#F6F3EE]">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 text-[#5A4232] hover:text-[#261B14] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-semibold text-[#261B14]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 text-[#5A4232] hover:text-[#261B14] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-[#1E8E42] flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#1E8E42] animate-pulse" />
                  <span>In Stock — Ready to dispatch</span>
                </div>
              </div>

              {/* Main CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
                >
                  {isAddedFeedback ? (
                    <>
                      <Check className="w-4 h-4 text-[#D4A59A]" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag · {formatPrice(selectedProduct.price * quantity)}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="bg-[#D4A59A] hover:bg-[#B77B6E] text-[#261B14] py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md active:scale-98 text-center"
                >
                  Buy It Now
                </button>
              </div>

              {/* WhatsApp Concierge Action */}
              <div className="mt-4">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E8F8EE] hover:bg-[#D5F2E0] text-[#1E8E42] py-2.5 px-4 rounded-xl text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors border border-[#C2EACF]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp with Personal Stylist</span>
                </a>
              </div>

              {/* Product Specifications Accordions */}
              <div className="mt-6 border-t border-[#D8CFBE]/60 divide-y divide-[#D8CFBE]/50">
                {/* Description & Features */}
                <div className="py-3">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#261B14] text-left"
                  >
                    <span>Fabric & Artisanal Details</span>
                    {openAccordion === 'fabric' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'fabric' && (
                    <div className="mt-2 text-xs text-[#5A4232] leading-relaxed space-y-2 animate-in fade-in duration-200">
                      <p>{selectedProduct.description}</p>
                      <p className="font-medium text-[#3D2B1F]">{selectedProduct.fabricDetails}</p>
                      <ul className="list-disc list-inside space-y-1 text-[#5A4232]/90">
                        {selectedProduct.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Care Guide */}
                <div className="py-3">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#261B14] text-left"
                  >
                    <span>Wash & Garment Care</span>
                    {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'care' && (
                    <div className="mt-2 text-xs text-[#5A4232] leading-relaxed animate-in fade-in duration-200">
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProduct.careInstructions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Shipping & Delivery Reassurance */}
                <div className="py-3">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#261B14] text-left"
                  >
                    <span>Shipping & Complimentary 7-Day Exchange</span>
                    {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="mt-2 text-xs text-[#5A4232] leading-relaxed space-y-1.5 animate-in fade-in duration-200">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#B77B6E]" />
                        <span>Dispatched within 24–48 hours across metro cities in India.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <RotateCcw className="w-4 h-4 text-[#B77B6E]" />
                        <span>Complimentary doorstep size exchange within 7 days of delivery.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="p-4 sm:p-6 md:p-8 border-t border-[#D8CFBE]/60 bg-[#F6F3EE]/50">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#261B14] mb-4">
              Complete The Look With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
