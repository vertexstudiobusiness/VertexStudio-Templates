import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    cafeConfig,
    generateWhatsAppOrderUrl
  } = useCart();

  const [orderType, setOrderType] = useState<'Takeaway' | 'Dine-in' | 'Delivery'>('Takeaway');
  const [customerName, setCustomerName] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const handleCheckoutWhatsApp = () => {
    const url = generateWhatsAppOrderUrl(orderType, customerName, specialNotes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-coffee-950/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="w-screen max-w-md bg-coffee-900 border-l border-coffee-800 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-coffee-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-caramel-500/20 text-caramel-400 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-lg text-ivory-50">
                      Your Order Bag
                    </h2>
                    <span className="text-xs text-coffee-300 font-mono">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-xs text-coffee-400 hover:text-red-400 p-2"
                      title="Clear all items"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-xl bg-coffee-850 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400"
                    aria-label="Close Order Bag"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-coffee-850 text-coffee-400 flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-8 h-8 opacity-40" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-ivory-100">
                      Your bag is empty
                    </h3>
                    <p className="text-xs text-coffee-300 max-w-xs mx-auto">
                      Explore our single origins, signature lattes, or breakfast pastries to start your order.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCartOpen(false);
                        const el = document.querySelector('#menu');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-2 px-5 py-2.5 rounded-xl bg-caramel-500 text-coffee-950 font-bold text-xs uppercase tracking-wider"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-coffee-850/70 border border-coffee-800 flex gap-3.5 items-center justify-between"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-coffee-750"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-sm text-ivory-50 truncate">
                          {item.name}
                        </h4>
                        <div className="text-[11px] text-coffee-300 space-x-1.5 truncate">
                          {item.milkChoice && <span>{item.milkChoice}</span>}
                          {item.temperature && <span>• {item.temperature}</span>}
                          {item.grindChoice && <span>• {item.grindChoice}</span>}
                        </div>
                        <span className="font-mono text-xs font-bold text-caramel-400 mt-1 block">
                          {cafeConfig.currencySymbol}{item.price * item.quantity}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-coffee-800 hover:bg-coffee-750 text-ivory-100 flex items-center justify-center text-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold text-ivory-50">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-coffee-800 hover:bg-coffee-750 text-ivory-100 flex items-center justify-center text-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 rounded-lg text-coffee-400 hover:text-red-400 flex items-center justify-center ml-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Order Options & Checkout */}
              {items.length > 0 && (
                <div className="p-5 sm:p-6 bg-coffee-950 border-t border-coffee-800 space-y-4">
                  {/* Order Type Toggle */}
                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-coffee-300 mb-1.5">
                      Order Fulfillment
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-coffee-900 border border-coffee-800">
                      {(['Takeaway', 'Dine-in', 'Delivery'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            orderType === type
                              ? 'bg-caramel-500 text-coffee-950 shadow-sm'
                              : 'text-coffee-300 hover:text-ivory-100'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Name & Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-ivory-100 placeholder:text-coffee-500 focus:outline-none focus:border-caramel-500"
                    />
                    <input
                      type="text"
                      placeholder="Special note (e.g. less ice)"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="px-3 py-2 rounded-xl bg-coffee-900 border border-coffee-800 text-xs text-ivory-100 placeholder:text-coffee-500 focus:outline-none focus:border-caramel-500"
                    />
                  </div>

                  {/* Subtotal & Total */}
                  <div className="pt-2 border-t border-coffee-850 flex items-center justify-between">
                    <span className="text-xs text-coffee-300 uppercase tracking-wider">
                      Total ({orderType})
                    </span>
                    <span className="font-serif font-bold text-xl text-caramel-400">
                      {cafeConfig.currencySymbol}{totalAmount}
                    </span>
                  </div>

                  {/* WhatsApp Checkout CTA */}
                  <button
                    type="button"
                    onClick={handleCheckoutWhatsApp}
                    className="w-full min-h-[48px] rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:brightness-110 active:scale-98 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Order via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-coffee-400">
                    Instantly compiles your order and opens WhatsApp chat with {cafeConfig.cafeName}.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
