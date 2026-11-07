import React, { useState } from 'react';
import type { Product, ProductColor } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    isInWishlist,
    toggleWishlist,
    addToCart,
    setSelectedProduct
  } = useShop();

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const isSaved = isInWishlist(product.id);

  // Active image based on color or hover
  const activeImage =
    isHovered && product.images.length > 1
      ? product.images[1]
      : selectedColor.imageIndex !== undefined && product.images[selectedColor.imageIndex]
      ? product.images[selectedColor.imageIndex]
      : product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, selectedSize, selectedColor, 1);
    setTimeout(() => setIsAdding(false), 900);
  };

  const handleCardClick = () => {
    setSelectedProduct(product);
  };

  return (
    <article
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#0f0e0c] cursor-pointer transition-all duration-300"
    >
      {/* Editorial Image Container with 3:4 ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161412]">
        <img
          src={activeImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Subtle Dark Vignette on Hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isAtelierExclusive && (
            <span className="bg-[#0c0b0a]/90 text-[#c5a880] text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 border border-[#c5a880]/30 backdrop-blur-md">
              Atelier Exclusive
            </span>
          )}
          {product.isNew && !product.isAtelierExclusive && (
            <span className="bg-[#0c0b0a]/90 text-[#faf7f2] text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 border border-white/20 backdrop-blur-md">
              New Edition
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#1c1a17]/90 text-[#ded6c9] text-[9px] uppercase tracking-[0.2em] font-medium px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.stockCount && product.stockCount <= 3 && (
            <span className="bg-[#381616]/90 text-[#ffb4b4] text-[9px] uppercase tracking-wider px-2 py-0.5">
              Only {product.stockCount} Left
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0c0b0a]/80 backdrop-blur-md border border-[#2a2620] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors z-10"
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isSaved ? 'fill-[#c5a880] text-[#c5a880]' : ''
            }`}
          />
        </button>

        {/* Desktop Quick-Select Drawer Hover overlay */}
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/90 to-transparent flex-col gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          {/* Quick Sizes */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`text-[10px] uppercase font-medium px-2 py-1 border transition-colors ${
                  selectedSize === size
                    ? 'border-[#c5a880] bg-[#c5a880] text-[#0c0b0a]'
                    : 'border-[#332f29] bg-[#141210]/80 text-[#faf7f2] hover:border-[#c5a880]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quick Add Button */}
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="pt-3.5 pb-2 flex flex-col flex-1">
        {/* Color Swatches */}
        {product.colors.length > 1 && (
          <div className="flex items-center gap-1.5 mb-2" onClick={(e) => e.stopPropagation()}>
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c)}
                title={c.name}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor.name === c.name
                    ? 'ring-1 ring-[#c5a880] ring-offset-1 ring-offset-[#0c0b0a] border-white'
                    : 'border-white/20 hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
                aria-label={`Color ${c.name}`}
              />
            ))}
            <span className="text-[10px] text-[#948b7e] ml-1 uppercase tracking-wider">
              {selectedColor.name}
            </span>
          </div>
        )}

        {/* Subtitle / Fabric Origin */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#948b7e] truncate mb-1">
          {product.category} • {product.subCategory}
        </p>

        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg text-[#faf7f2] font-normal leading-snug group-hover:text-[#c5a880] transition-colors line-clamp-1 mb-1.5">
          {product.name}
        </h3>

        {/* Price in INR */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="font-sans text-sm sm:text-base font-medium text-[#faf7f2] tracking-wide">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-[#8c8275] line-through font-light">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Mobile Quick Action Strip */}
        <div className="lg:hidden mt-3 pt-2 border-t border-[#201d19] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex-1 py-2 bg-[#1b1916] border border-[#2b2721] text-[#faf7f2] active:bg-[#c5a880] active:text-[#0c0b0a] text-[10px] uppercase font-semibold tracking-wider flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3 h-3 text-[#c5a880]" />
            <span>Add to Bag</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="p-2 border border-[#2b2721] text-[#ded6c9] hover:text-[#c5a880]"
            aria-label="View garment details"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
