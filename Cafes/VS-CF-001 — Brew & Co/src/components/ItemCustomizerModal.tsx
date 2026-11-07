import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ItemCustomizerModal: React.FC = () => {
  const { activeItemForCustomization, setActiveItemForCustomization, addToCart, cafeConfig } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [milk, setMilk] = useState('Whole Milk');
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Hot');
  const [sweetness, setSweetness] = useState('Standard');
  const [extraShot, setExtraShot] = useState(false);
  const [customNote, setCustomNote] = useState('');

  if (!activeItemForCustomization) return null;

  const item = activeItemForCustomization;
  const isCoffee = item.category === 'hot-coffee' || item.category === 'iced-coffee' || item.name.includes('Latte') || item.name.includes('Cappuccino') || item.name.includes('Flat White') || item.name.includes('Espresso');

  // Calculate dynamic price
  let additionalCost = 0;
  if (milk === 'Oat Milk' || milk === 'Almond Milk') additionalCost += 40;
  if (temperature === 'Iced' && item.category !== 'iced-coffee') additionalCost += 20;
  if (extraShot) additionalCost += 50;

  const finalUnitPrice = item.price + additionalCost;
  const totalItemPrice = finalUnitPrice * quantity;

  const handleConfirmAdd = () => {
    let combinedNotes = customNote.trim();
    if (extraShot) combinedNotes = combinedNotes ? `${combinedNotes}, +Double Shot` : '+Double Shot';
    if (sweetness !== 'Standard') combinedNotes = combinedNotes ? `${combinedNotes}, Sweetness: ${sweetness}` : `Sweetness: ${sweetness}`;

    addToCart({
      productId: item.id,
      name: item.name,
      price: finalUnitPrice,
      quantity,
      image: item.image,
      milkChoice: isCoffee ? milk : undefined,
      temperature: isCoffee ? temperature : undefined,
      notes: combinedNotes || undefined
    });

    setActiveItemForCustomization(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveItemForCustomization(null)}
          className="fixed inset-0 bg-coffee-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          className="relative w-full max-w-lg bg-coffee-900 border border-coffee-750 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Image & Close */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-coffee-950">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-coffee-900/40 to-transparent" />
            
            <button
              type="button"
              onClick={() => setActiveItemForCustomization(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-coffee-950/80 hover:bg-coffee-800 text-ivory-100 hover:text-caramel-400 border border-coffee-700 active:scale-95 transition-all"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-[11px] uppercase tracking-wider text-caramel-400 font-semibold block mb-0.5">
                Customise Preparation
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory-50">
                {item.name}
              </h3>
            </div>
          </div>

          {/* Options Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Temperature Option */}
            {isCoffee && (
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-coffee-300 mb-2">
                  Serving Temperature
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Hot', 'Iced'] as const).map((temp) => (
                    <button
                      key={temp}
                      type="button"
                      onClick={() => setTemperature(temp)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                        temperature === temp
                          ? 'bg-caramel-500/20 border-caramel-500 text-caramel-300 shadow-sm'
                          : 'bg-coffee-850 border-coffee-750 text-coffee-300 hover:text-ivory-100'
                      }`}
                    >
                      <span>{temp === 'Hot' ? '🔥 Hot (62°C Optimal)' : '❄️ Chilled Over Rock Ice (+₹20)'}</span>
                      {temperature === temp && <Check className="w-3.5 h-3.5 text-caramel-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Milk Options */}
            {isCoffee && !item.name.includes('Americano') && !item.name.includes('Aeropress') && (
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-coffee-300 mb-2">
                  Milk Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'Whole Milk', label: 'Whole Milk', sub: 'Standard' },
                    { id: 'Oat Milk', label: 'Oatly Barista', sub: '+₹40' },
                    { id: 'Almond Milk', label: 'Almond Milk', sub: '+₹40' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMilk(m.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        milk === m.id
                          ? 'bg-caramel-500/20 border-caramel-500 text-caramel-300'
                          : 'bg-coffee-850 border-coffee-750 text-coffee-300 hover:text-ivory-100'
                      }`}
                    >
                      <span className="font-semibold block text-ivory-100">{m.label}</span>
                      <span className="text-[10px] text-coffee-400 font-mono">{m.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sweetness Option */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-coffee-300 mb-2">
                Sweetness Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Unsweetened', 'Standard', 'Extra Sweet'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSweetness(lvl)}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      sweetness === lvl
                        ? 'bg-copper-500/20 border-copper-400 text-copper-300'
                        : 'bg-coffee-850 border-coffee-750 text-coffee-300 hover:text-ivory-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Shot Add-on */}
            {isCoffee && (
              <div className="p-3 rounded-2xl bg-coffee-850 border border-coffee-750 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-ivory-50 block">Add Extra Espresso Shot</span>
                  <span className="text-[11px] text-coffee-300 font-mono">+₹50 • Ratnagiri Washed Doppio</span>
                </div>
                <button
                  type="button"
                  onClick={() => setExtraShot(!extraShot)}
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                    extraShot ? 'bg-caramel-500 border-caramel-500 text-coffee-950' : 'border-coffee-600 bg-coffee-900'
                  }`}
                >
                  {extraShot && <Check className="w-4 h-4 stroke-[3]" />}
                </button>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label htmlFor="custom-item-notes" className="block text-xs uppercase font-mono tracking-wider text-coffee-300 mb-1.5">
                Barista Notes
              </label>
              <input
                id="custom-item-notes"
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g. Extra hot, light foam, separate cup..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-coffee-950/80 border border-coffee-750 text-xs text-ivory-50 placeholder:text-coffee-500 focus:outline-none focus:border-caramel-500"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 bg-coffee-950 border-t border-coffee-800 flex items-center justify-between gap-4 shrink-0">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-2 bg-coffee-900 border border-coffee-750 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-coffee-800 hover:bg-coffee-750 text-ivory-100 flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-7 text-center font-mono font-bold text-sm text-ivory-50">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-coffee-800 hover:bg-coffee-750 text-ivory-100 flex items-center justify-center"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleConfirmAdd}
              className="flex-1 min-h-[46px] rounded-xl bg-gradient-to-r from-caramel-500 to-copper-500 hover:brightness-110 active:scale-98 text-coffee-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 text-coffee-950" />
              <span>Add • {cafeConfig.currencySymbol}{totalItemPrice}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
