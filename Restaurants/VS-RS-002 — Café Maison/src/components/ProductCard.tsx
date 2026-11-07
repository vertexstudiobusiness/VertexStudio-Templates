import React, { useState } from 'react';
import type { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, Sparkles, Check } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addItem, quickOrderSingleItem } = useCart();
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    item.options ? item.options[0] : undefined
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(item, selectedOption);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="group bg-[#FBF8F3] border border-[#EFE8DC] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#4F5E4B]/50 transition-all duration-300 shadow-[0_2px_12px_rgba(41,31,24,0.03)] hover:shadow-[0_8px_24px_rgba(41,31,24,0.08)]">
      
      {/* Image Area with Badge */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#EFE8DC]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1511]/50 via-transparent to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-wrap gap-1.5 z-10">
          {item.isBestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#291F18]/90 backdrop-blur-sm text-[#F7F3EB] text-[9px] sm:text-[10px] uppercase tracking-[0.14em] font-semibold rounded-sm">
              <Sparkles className="w-2.5 h-2.5 text-[#CBB99F]" />
              <span>Signature</span>
            </span>
          )}
          {item.isVegan && (
            <span className="px-2 py-0.5 bg-[#4F5E4B]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider font-medium rounded-sm">
              Vegan
            </span>
          )}
        </div>

        {/* Origin Pill */}
        {item.origin && (
          <div className="absolute bottom-2 left-2.5 right-2.5 text-white text-[11px] sm:text-xs truncate drop-shadow-sm font-sans">
            📍 {item.origin}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between text-left space-y-3.5 sm:space-y-4">
        <div>
          {/* Category / French Tag */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#7E6251] font-medium mb-1">
            <span>{item.category.replace('-', ' ')}</span>
            {item.frenchName && (
              <span className="italic font-serif normal-case text-xs text-[#8A6750]/80 truncate max-w-[50%]">
                {item.frenchName}
              </span>
            )}
          </div>

          {/* Name */}
          <h3 className="font-serif text-xl sm:text-2xl text-[#1C1511] font-medium leading-tight group-hover:text-[#4F5E4B] transition-colors">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5C473A] mt-1.5 line-clamp-2 leading-relaxed font-light">
            {item.description}
          </p>

          {/* Tasting Notes */}
          {item.tastingNotes && item.tastingNotes.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {item.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="px-2 py-0.5 bg-[#F7F3EB] border border-[#EFE8DC] text-[#7E6251] text-[10px] rounded-sm font-sans"
                >
                  {note}
                </span>
              ))}
            </div>
          )}

          {/* Milk / Customization Options */}
          {item.options && (
            <div className="mt-3 pt-3 border-t border-[#EFE8DC]/70">
              <label className="text-[10px] uppercase tracking-wider text-[#7E6251] font-semibold block mb-1">
                Preference
              </label>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full text-xs sm:text-xs bg-[#F7F3EB] border border-[#EFE8DC] text-[#291F18] rounded-sm px-2.5 py-2 min-h-[38px] focus:outline-none focus:border-[#4F5E4B]"
              >
                {item.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Price & Action Strip (Mobile Touch Targets min 42px) */}
        <div className="pt-3 sm:pt-4 border-t border-[#EFE8DC] flex items-center justify-between gap-2">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#7E6251] block leading-none">Price</span>
            <span className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1511]">
              ₹{item.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick WhatsApp order */}
            <button
              onClick={() => quickOrderSingleItem(item, selectedOption)}
              title="Quick Order via WhatsApp"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm border border-[#EFE8DC] text-[#4F5E4B] hover:text-[#293327] active:bg-[#EFE8DC] flex items-center justify-center transition-colors"
              aria-label={`Order ${item.name} directly via WhatsApp`}
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Add to Bag */}
            <button
              onClick={handleAdd}
              className={`min-h-[40px] sm:min-h-[42px] inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded-sm transition-all duration-200 active:scale-95 ${
                justAdded
                  ? 'bg-[#4F5E4B] text-white'
                  : 'bg-[#291F18] active:bg-[#1C1511] text-[#F7F3EB]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#CBB99F]" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
