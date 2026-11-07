import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Trash2, 
  Heart, 
  ShoppingBag, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistIds,
    toggleWishlist,
    products,
    addToCart,
    navigateTo
  } = useShop();

  const savedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-neutral-950 border-l border-brand-border flex flex-col justify-between z-10 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-brand-border flex items-center justify-between bg-brand-surface">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-orange fill-brand-orange" />
                <span className="font-display font-black text-lg tracking-wider text-brand-offwhite uppercase">
                  SAVED VAULT ({savedProducts.length})
                </span>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-1.5 text-brand-concrete hover:text-white transition-colors"
                aria-label="Close wishlist"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {savedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-neutral-900 border border-brand-border flex items-center justify-center mb-4 text-brand-concrete">
                    <Heart className="w-8 h-8 stroke-1" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-offwhite uppercase">
                    NO SAVED PIECES YET
                  </h3>
                  <p className="text-xs font-mono text-brand-concrete max-w-xs mt-1 mb-6">
                    Tap the heart icon on any drop to save it to your personal vault.
                  </p>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(false);
                      navigateTo('shop');
                    }}
                    className="bg-brand-orange text-black font-mono font-bold text-xs uppercase px-6 py-3 hover:bg-white transition-colors"
                  >
                    DISCOVER DROP 004
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3 bg-brand-surface border border-brand-border p-3"
                    >
                      <div
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigateTo('product-detail', product.id);
                        }}
                        className="w-20 h-24 bg-neutral-900 overflow-hidden shrink-0 cursor-pointer"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4
                              onClick={() => {
                                setIsWishlistOpen(false);
                                navigateTo('product-detail', product.id);
                              }}
                              className="font-display font-bold text-xs sm:text-sm text-brand-offwhite leading-tight cursor-pointer hover:text-brand-orange truncate"
                            >
                              {product.name}
                            </h4>
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className="text-neutral-500 hover:text-red-400 p-1 -mr-1"
                              title="Remove from wishlist"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-[11px] font-mono text-brand-concrete mt-1">
                            {product.fit} • {product.gsm.split(' ')[0]} GSM
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/40">
                          <span className="font-mono text-xs sm:text-sm font-bold text-brand-orange">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>

                          <button
                            onClick={() => {
                              const defaultSize = product.sizes[0] || 'Standard';
                              const defaultColor = product.colors[0]?.name || 'Standard';
                              addToCart(product, defaultSize, defaultColor, 1);
                            }}
                            className="flex items-center gap-1.5 bg-neutral-900 hover:bg-brand-orange hover:text-black border border-brand-border text-brand-offwhite font-mono text-[11px] font-bold px-3 py-2 min-h-[40px] transition-colors active:scale-95"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>MOVE TO BAG</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {savedProducts.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-brand-border bg-brand-surface">
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateTo('shop');
                  }}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 border border-brand-border text-brand-offwhite font-mono text-xs font-bold py-3 uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <span>CONTINUE BROWSING</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

