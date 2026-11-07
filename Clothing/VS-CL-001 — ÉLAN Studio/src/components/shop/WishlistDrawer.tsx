import React, { useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    products,
    addToCart,
    setSelectedProduct,
    setActiveCategory
  } = useShop();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWishlistOpen) {
        setIsWishlistOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isWishlistOpen, setIsWishlistOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isWishlistOpen]);

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveToBag = (product: (typeof products)[0]) => {
    addToCart(product, product.sizes[0], product.colors[0], 1);
  };

  const handleBrowseCatalog = () => {
    setIsWishlistOpen(false);
    setActiveCategory('All');
    const el = document.getElementById('catalogue-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div
          id="wishlist-drawer-overlay"
          className="fixed inset-0 z-[120] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Atelier Saved Pieces"
        >
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="relative w-full max-w-[440px] h-full bg-[#0d0c0a] text-[#faf7f2] border-l border-[#282521] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#201d19] bg-[#12100e]">
              <div className="flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-[#c5a880] fill-[#c5a880]" />
                <h2 className="font-serif text-xl tracking-wide uppercase text-[#faf7f2]">
                  Saved Pieces ({wishlist.length})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsWishlistOpen(false)}
                className="w-9 h-9 rounded-full border border-[#2a2620] flex items-center justify-center text-[#ded6c9] hover:text-[#c5a880] hover:border-[#c5a880] transition-colors focus:outline-none"
                aria-label="Close wishlist drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            {savedProducts.length > 0 ? (
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#1e1c18]">
                {savedProducts.map((product) => (
                  <div key={product.id} className="py-4 flex gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      onClick={() => {
                        setIsWishlistOpen(false);
                        setSelectedProduct(product);
                      }}
                      className="w-20 aspect-[3/4] object-cover bg-[#161412] border border-[#24211d] flex-shrink-0 cursor-pointer"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h3
                            onClick={() => {
                              setIsWishlistOpen(false);
                              setSelectedProduct(product);
                            }}
                            className="font-serif text-sm sm:text-base text-[#faf7f2] font-normal leading-snug line-clamp-1 cursor-pointer hover:text-[#c5a880]"
                          >
                            {product.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => toggleWishlist(product.id)}
                            className="text-[#736a5f] hover:text-[#ff8080] p-1 transition-colors"
                            aria-label={`Remove ${product.name} from wishlist`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#948b7e] uppercase tracking-wider mt-0.5">
                          {product.category}
                        </p>
                        <p className="text-sm font-semibold text-[#faf7f2] mt-1">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => handleMoveToBag(product)}
                          className="w-full py-2 px-3 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-[10px] uppercase font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Atelier Bag</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#171512] border border-[#282521] flex items-center justify-center text-[#c5a880] mb-4">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#faf7f2] font-normal mb-2">
                  No Saved Pieces Yet
                </h3>
                <p className="text-xs text-[#948b7e] max-w-xs mb-6 leading-relaxed">
                  Curate your private seasonal wardrobe by tapping the heart icon on any creation.
                </p>
                <button
                  type="button"
                  onClick={handleBrowseCatalog}
                  className="py-3.5 px-7 bg-[#faf7f2] text-[#0c0b0a] hover:bg-[#c5a880] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Explore Capsule
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
