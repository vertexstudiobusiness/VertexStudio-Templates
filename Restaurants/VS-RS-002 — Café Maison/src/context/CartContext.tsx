import React, { createContext, useContext, useState, useEffect } from 'react';
import type { MenuItem, CartItem } from '../types';
import { CAFE_CONFIG } from '../data/cafeConfig';
import confetti from 'canvas-confetti';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, option?: string) => void;
  removeItem: (itemId: string, option?: string) => void;
  updateQuantity: (itemId: string, quantity: number, option?: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orderType: 'takeaway' | 'dine-in';
  setOrderType: (type: 'takeaway' | 'dine-in') => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  sendWhatsAppOrder: () => void;
  quickOrderSingleItem: (item: MenuItem, option?: string) => void;
  isReservationModalOpen: boolean;
  setIsReservationModalOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'cafe_maison_bag';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [orderType, setOrderType] = useState<'takeaway' | 'dine-in'>('takeaway');
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // LocalStorage error fallback
    }
  }, [items]);

  const addItem = (item: MenuItem, option?: string) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        ci => ci.menuItem.id === item.id && ci.selectedOption === option
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1
        };
        return next;
      }
      return [...prev, { menuItem: item, quantity: 1, selectedOption: option }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (itemId: string, option?: string) => {
    setItems(prev => prev.filter(ci => !(ci.menuItem.id === itemId && ci.selectedOption === option)));
  };

  const updateQuantity = (itemId: string, quantity: number, option?: string) => {
    if (quantity <= 0) {
      removeItem(itemId, option);
      return;
    }
    setItems(prev =>
      prev.map(ci =>
        ci.menuItem.id === itemId && ci.selectedOption === option
          ? { ...ci, quantity }
          : ci
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const calculateItemPrice = (item: CartItem) => {
    let price = item.menuItem.price;
    if (item.selectedOption && item.selectedOption.includes('+₹40')) {
      price += 40;
    }
    return price * item.quantity;
  };

  const totalPrice = items.reduce((sum, item) => sum + calculateItemPrice(item), 0);

  const sendWhatsAppOrder = () => {
    if (items.length === 0) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#4F5E4B', '#B86749', '#CBB99F', '#291F18']
      });
    } catch {
      // ignore
    }

    const itemsSummary = items
      .map(item => {
        const itemTotal = calculateItemPrice(item);
        const optText = item.selectedOption ? ` (${item.selectedOption})` : '';
        return `• ${item.quantity}x ${item.menuItem.name}${optText} — ₹${itemTotal}`;
      })
      .join('\n');

    const message = [
      `Bonjour Café Maison! ☕`,
      `I would like to place an order:`,
      ``,
      itemsSummary,
      ``,
      `────────────────────────`,
      `Subtotal: ₹${totalPrice}`,
      `Order Type: ${orderType === 'takeaway' ? '📦 Takeaway' : '🍽️ Dine-in Table'}`,
      orderNotes ? `Notes: "${orderNotes}"` : ``,
      `────────────────────────`,
      `Please let me know the preparation time and confirmation. Merci!`
    ]
      .filter(line => line !== null && line !== undefined)
      .join('\n');

    const whatsappUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const quickOrderSingleItem = (item: MenuItem, option?: string) => {
    const optText = option ? ` (${option})` : '';
    const message = [
      `Bonjour Café Maison! ☕`,
      `I would like to quick-order:`,
      `• 1x ${item.name}${optText} — ₹${item.price}`,
      ``,
      `Please confirm availability. Merci!`
    ].join('\n');

    const whatsappUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        orderType,
        setOrderType,
        orderNotes,
        setOrderNotes,
        sendWhatsAppOrder,
        quickOrderSingleItem,
        isReservationModalOpen,
        setIsReservationModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
