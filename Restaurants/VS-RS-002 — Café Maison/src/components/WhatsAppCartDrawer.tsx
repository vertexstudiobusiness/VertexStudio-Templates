import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CAFE_CONFIG } from '../data/cafeConfig';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';

export const WhatsAppCartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalPrice,
    orderType,
    setOrderType,
    orderNotes,
    setOrderNotes,
    sendWhatsAppOrder
  } = useCart();

  const handleClose = () => {
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#1C1511]/75 backdrop-blur-md"
          />

          {/* Drawer (Mobile First: Full-width on mobile, max-w-md on desktop) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="absolute right-0 top-0 bottom-0 w-full sm:max-w-md bg-[#FBF8F3] shadow-2xl flex flex-col justify-between border-l border-[#EFE8DC] z-10"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-6 border-b border-[#EFE8DC] flex items-center justify-between bg-[#F7F3EB]/70">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#291F18] flex items-center justify-center text-[#EFE8DC]">
                  <ShoppingBag className="w-4 h-4 text-[#CBB99F]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#1C1511] font-medium leading-tight">
                    Your Order Bag
                  </h3>
                  <p className="text-[11px] text-[#7E6251]">
                    {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="min-h-[36px] px-2.5 py-1 text-[11px] text-[#7E6251] hover:text-[#B86749] uppercase tracking-wider font-medium rounded transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="w-10 h-10 flex items-center justify-center text-[#5C473A] hover:text-[#1C1511] active:bg-[#EFE8DC] rounded-full transition-colors"
                  aria-label="Close bag drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5">
              {items.length > 0 ? (
                <div className="space-y-3">
                  {items.map((cartItem, idx) => {
                    const { menuItem, quantity, selectedOption } = cartItem;
                    let singlePrice = menuItem.price;
                    if (selectedOption && selectedOption.includes('+₹40')) {
                      singlePrice += 40;
                    }
                    const itemSubtotal = singlePrice * quantity;

                    return (
                      <div
                        key={`${menuItem.id}-${selectedOption || 'default'}-${idx}`}
                        className="p-3 sm:p-3.5 bg-white border border-[#EFE8DC] rounded-sm flex gap-3 shadow-sm text-left items-center justify-between"
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-[#EFE8DC] overflow-hidden shrink-0">
                          <img
                            src={menuItem.image}
                            alt={menuItem.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Title & Option */}
                        <div className="flex-1 min-w-0 pr-1.5">
                          <h4 className="font-serif text-sm sm:text-base text-[#1C1511] font-medium leading-snug truncate">
                            {menuItem.name}
                          </h4>
                          {selectedOption && (
                            <p className="text-[10px] sm:text-[11px] text-[#7E6251] truncate">
                              {selectedOption}
                            </p>
                          )}
                          <p className="font-serif text-xs sm:text-sm font-semibold text-[#4F5E4B] mt-0.5">
                            ₹{singlePrice}
                          </p>
                        </div>

                        {/* Quantity Controls (Large Touch Targets for Mobile Thumbs) */}
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <div className="flex items-center border border-[#EFE8DC] rounded-sm bg-[#F7F3EB]">
                            <button
                              onClick={() => updateQuantity(menuItem.id, quantity - 1, selectedOption)}
                              className="w-8 h-8 flex items-center justify-center active:bg-[#EFE8DC] text-[#291F18] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center text-xs font-semibold text-[#1C1511]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(menuItem.id, quantity + 1, selectedOption)}
                              className="w-8 h-8 flex items-center justify-center active:bg-[#EFE8DC] text-[#291F18] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-serif font-bold text-[#1C1511]">
                              ₹{itemSubtotal}
                            </span>
                            <button
                              onClick={() => removeItem(menuItem.id, selectedOption)}
                              className="w-6 h-6 flex items-center justify-center text-[#7E6251] hover:text-[#B86749] transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-14 sm:py-16 text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EFE8DC]/60 mx-auto flex items-center justify-center text-[#7E6251]">
                    <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-[#1C1511]">Your bag is currently empty</h4>
                    <p className="text-xs text-[#5C473A] max-w-xs mx-auto mt-1">
                      Explore our single-origin coffees or freshly baked pastries to begin your order.
                    </p>
                  </div>
                  <a
                    href="#menu"
                    onClick={handleClose}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#291F18] text-[#F7F3EB] text-xs uppercase tracking-wider rounded-sm font-medium transition-colors"
                  >
                    <span>Browse Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Bottom Form & WhatsApp Checkout Bar */}
            {items.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-[#EFE8DC] bg-[#F7F3EB] space-y-3.5 text-left">
                {/* Order Type Toggle (min-h-[44px]) */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                    Order Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`min-h-[42px] py-2 px-3 text-xs rounded-sm border font-medium transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-[#291F18] text-white border-[#291F18]'
                          : 'bg-white text-[#5C473A] border-[#EFE8DC]'
                      }`}
                    >
                      📦 Takeaway
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`min-h-[42px] py-2 px-3 text-xs rounded-sm border font-medium transition-all ${
                        orderType === 'dine-in'
                          ? 'bg-[#291F18] text-white border-[#291F18]'
                          : 'bg-white text-[#5C473A] border-[#EFE8DC]'
                      }`}
                    >
                      🍽️ Dine-in Table
                    </button>
                  </div>
                </div>

                {/* Special Instructions (Mobile-Friendly Input) */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                    Special Preparation Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Extra hot, oat milk warm..."
                    className="w-full min-h-[42px] bg-white border border-[#EFE8DC] rounded-sm px-3 py-1.5 text-sm sm:text-xs text-[#1C1511] focus:outline-none focus:border-[#4F5E4B]"
                  />
                </div>

                {/* Subtotal */}
                <div className="pt-2 flex items-center justify-between border-t border-[#EFE8DC]">
                  <span className="text-xs uppercase tracking-wider text-[#5C473A] font-medium">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-[#1C1511]">₹{totalPrice}</span>
                </div>

                {/* WhatsApp Action Button (Min 50px height for finger tap) */}
                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full min-h-[50px] py-3.5 bg-[#4F5E4B] active:bg-[#3D4A3A] active:scale-[0.99] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-[#7E6251] leading-tight font-light">
                  Direct connection with our baristas on {CAFE_CONFIG.whatsappDisplayNumber}.
                </p>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
