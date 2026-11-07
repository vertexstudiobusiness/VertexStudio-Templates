import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    openProductDetail,
    toggleWishlist,
    isInWishlist,
    addToCart,
    formatPrice
  } = useShop();

  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeImage =
    product.colors && product.colors[activeVariantIndex]
      ? product.colors[activeVariantIndex].image
      : product.images[0];

  const secondaryImage = product.images[1] || activeImage;

  const inWishlist = isInWishlist(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[activeVariantIndex]?.colorName || 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => openProductDetail(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col h-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#D8CFBE]/50 hover:border-[#B77B6E]/40 hover:shadow-lg transition-all duration-300"
    >
      {/* Product Image Container */}
      <div className="relative aspect-3/4 w-full bg-[#EFE9E0] overflow-hidden">
        {/* Main & Secondary Image with crossfade hover */}
        <img
          src={isHovered ? secondaryImage : activeImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isFestive && (
            <span className="bg-[#B77B6E] text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Festive Edit
            </span>
          )}
          {product.isNew && !product.isFestive && (
            <span className="bg-[#3D2B1F] text-[#FAF8F5] text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full shadow-xs">
              New In
            </span>
          )}
          {product.isBestseller && !product.isFestive && !product.isNew && (
            <span className="bg-[#5A4232] text-[#FAF8F5] text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#F7EBE8] text-[#B77B6E] border border-[#D4A59A]/30 text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs">
              {discountPercent}% Off
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10 shadow-xs ${
            inWishlist
              ? 'bg-[#FAF8F5] text-[#B77B6E]'
              : 'bg-[#FAF8F5]/85 backdrop-blur-xs text-[#3D2B1F] hover:text-[#B77B6E] hover:bg-[#FAF8F5]'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 ${inWishlist ? 'fill-[#B77B6E] text-[#B77B6E]' : 'stroke-[1.5]'}`}
          />
        </button>

        {/* Quick Add To Bag Bar (Slide up on desktop, visible button on mobile) */}
        <div className="absolute bottom-2.5 inset-x-2.5 hidden sm:flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 bg-[#3D2B1F]/90 backdrop-blur-sm hover:bg-[#3D2B1F] text-[#FAF8F5] py-2 px-3 rounded-xl text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openProductDetail(product);
            }}
            className="w-8 h-8 bg-[#FAF8F5]/90 backdrop-blur-sm hover:bg-[#FAF8F5] text-[#3D2B1F] rounded-xl flex items-center justify-center shadow-md active:scale-95 transition-all"
            aria-label="View product details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Color Variants Swatches */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex items-center gap-1.5 mb-2" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((c, idx) => (
                <button
                  key={c.colorName}
                  onClick={() => setActiveVariantIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    activeVariantIndex === idx
                      ? 'ring-1 ring-offset-1 ring-[#3D2B1F] border-transparent scale-110'
                      : 'border-[#D8CFBE] opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.colorHex }}
                  title={c.colorName}
                  aria-label={`Select color ${c.colorName}`}
                />
              ))}
              <span className="text-[10px] text-[#5A4232]/70 ml-1">
                {product.colors.length} shades
              </span>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            <div className="flex items-center text-[#B77B6E]">
              <Star className="w-3 h-3 fill-[#B77B6E] text-[#B77B6E]" />
            </div>
            <span className="text-[11px] font-medium text-[#261B14]">{product.rating.toFixed(1)}</span>
            <span className="text-[10px] text-[#5A4232]/60">({product.reviewsCount})</span>
          </div>

          {/* Name & Subtitle */}
          <h3 className="font-serif text-sm sm:text-base font-normal text-[#261B14] group-hover:text-[#5A4232] transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>
          <p className="text-[11px] text-[#5A4232]/80 line-clamp-1 mt-0.5 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Mobile Quick Action */}
        <div className="mt-3 pt-2 border-t border-[#D8CFBE]/40 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-semibold text-sm sm:text-base text-[#261B14] tracking-tight">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#5A4232]/50 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Mobile Tap-to-add button */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-1.5 bg-[#EFE9E0] hover:bg-[#D4A59A] text-[#3D2B1F] rounded-lg transition-colors"
            aria-label="Add to Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
