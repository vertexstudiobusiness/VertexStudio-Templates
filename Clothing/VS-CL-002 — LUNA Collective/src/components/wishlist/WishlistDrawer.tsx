import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    openProductDetail,
    formatPrice,
    setActiveCategory,
    setActiveView
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product: any) => {
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0]?.colorName || 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
    toggleWishlist(product.id);
  };

  const handleBrowse = () => {
    setIsWishlistOpen(false);
    setActiveCategory('all');
    setActiveView('catalog');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] text-[#261B14] h-full shadow-2xl flex flex-col z-10 overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#D8CFBE]/60">
        {/* Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#D8CFBE]/60 bg-[#F6F3EE]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#B77B6E] fill-[#B77B6E]" />
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#261B14]">
              Saved Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-[#D8CFBE]/40">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  onClick={() => {
                    setIsWishlistOpen(false);
                    openProductDetail(item);
                  }}
                  className="w-20 h-26 rounded-xl object-cover object-top bg-[#EFE9E0] shrink-0 border border-[#D8CFBE]/50 cursor-pointer"
                />

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          openProductDetail(item);
                        }}
                        className="font-serif text-sm font-medium text-[#261B14] truncate cursor-pointer hover:text-[#B77B6E]"
                      >
                        {item.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className="text-[#5A4232] hover:text-[#B77B6E] p-1 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#5A4232] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>

                    <p className="text-xs font-semibold text-[#261B14] font-mono mt-1">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="mt-2 w-full bg-[#3D2B1F] hover:bg-[#5A4232] text-[#FAF8F5] py-2 px-3 rounded-lg text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F7EBE8] text-[#B77B6E] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg text-[#261B14] mb-1">Your Wishlist is Empty</h4>
              <p className="text-xs text-[#5A4232] max-w-xs mx-auto mb-6">
                Save your cherished silhouettes here to revisit them anytime.
              </p>
              <button
                onClick={handleBrowse}
                className="bg-[#3D2B1F] text-[#FAF8F5] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#5A4232] transition-colors"
              >
                Explore Collection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
