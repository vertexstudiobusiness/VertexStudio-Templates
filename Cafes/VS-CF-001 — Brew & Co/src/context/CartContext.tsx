import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, CafeConfig } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cafeConfig: CafeConfig;
  updateConfig: (newConfig: Partial<CafeConfig>) => void;
  generateWhatsAppOrderUrl: (orderType?: 'Dine-in' | 'Takeaway' | 'Delivery', customerName?: string, specialInstructions?: string) => string;
  activeItemForCustomization: any | null;
  setActiveItemForCustomization: (item: any | null) => void;
  isBrewGuideOpen: boolean;
  setIsBrewGuideOpen: (open: boolean) => void;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
}

const DEFAULT_CONFIG: CafeConfig = {
  cafeName: 'Brew & Co.',
  tagline: 'Specialty Coffee Roasters & Artisanal Café',
  whatsappNumber: '+919876543210',
  phoneNumber: '+91 80 4920 1840',
  email: 'hello@brewandco.in',
  addressLine1: '14/2 Lavelle Road, Shanthala Nagar',
  addressLine2: 'Opposite Bangalore Club, Ashok Nagar',
  city: 'Bengaluru, Karnataka',
  pincode: '560001',
  currencySymbol: '₹',
  instagramHandle: '@brewandco.roasters'
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('brew_and_co_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cafeConfig, setCafeConfig] = useState<CafeConfig>(() => {
    try {
      const saved = localStorage.getItem('brew_and_co_config');
      return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeItemForCustomization, setActiveItemForCustomization] = useState<any | null>(null);
  const [isBrewGuideOpen, setIsBrewGuideOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('brew_and_co_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('brew_and_co_config', JSON.stringify(cafeConfig));
    } catch (e) {
      console.error(e);
    }
  }, [cafeConfig]);

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.productId === newItem.productId &&
          i.milkChoice === newItem.milkChoice &&
          i.grindChoice === newItem.grindChoice &&
          i.temperature === newItem.temperature
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      const generatedId = `${newItem.productId}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
      return [...prev, { ...newItem, id: generatedId }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const updateConfig = (newConfig: Partial<CafeConfig>) => {
    setCafeConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmount = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const generateWhatsAppOrderUrl = (
    orderType: 'Dine-in' | 'Takeaway' | 'Delivery' = 'Takeaway',
    customerName: string = '',
    specialInstructions: string = ''
  ) => {
    const cleanNumber = cafeConfig.whatsappNumber.replace(/[^0-9]/g, '');
    
    let message = `☕ *New Order — ${cafeConfig.cafeName}*\n`;
    message += `──────────────────\n`;
    message += `*Order Type:* ${orderType}\n`;
    if (customerName) {
      message += `*Guest Name:* ${customerName}\n`;
    }
    message += `──────────────────\n\n`;

    if (items.length === 0) {
      message += `Hi! I would like to inquire about placing an order at ${cafeConfig.cafeName}.\n`;
    } else {
      message += `*Ordered Items:*\n`;
      items.forEach((item, idx) => {
        message += `${idx + 1}. *${item.quantity}x ${item.name}* (${cafeConfig.currencySymbol}${item.price * item.quantity})\n`;
        const modifiers = [];
        if (item.milkChoice) modifiers.push(`Milk: ${item.milkChoice}`);
        if (item.grindChoice) modifiers.push(`Grind: ${item.grindChoice}`);
        if (item.temperature) modifiers.push(`Temp: ${item.temperature}`);
        if (modifiers.length > 0) {
          message += `   ↳ _${modifiers.join(' | ')}_\n`;
        }
      });

      message += `\n*Total Amount:* ${cafeConfig.currencySymbol}${totalAmount}\n`;
    }

    if (specialInstructions) {
      message += `\n*Note:* ${specialInstructions}\n`;
    }

    message += `\n_Sent via ${cafeConfig.cafeName} Online Portal_`;

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        cafeConfig,
        updateConfig,
        generateWhatsAppOrderUrl,
        activeItemForCustomization,
        setActiveItemForCustomization,
        isBrewGuideOpen,
        setIsBrewGuideOpen,
        isConfigModalOpen,
        setIsConfigModalOpen,
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
