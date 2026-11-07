import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  if (!isSizeGuideOpen) return null;

  const sizeData = [
    { size: 'XS', india: '32', bustIn: '32 - 33', waistIn: '25 - 26', hipIn: '35 - 36', lengthIn: '46', bustCm: '81 - 84', waistCm: '63 - 66', hipCm: '89 - 91', lengthCm: '117' },
    { size: 'S', india: '34', bustIn: '34 - 35', waistIn: '27 - 28', hipIn: '37 - 38', lengthIn: '46.5', bustCm: '86 - 89', waistCm: '68 - 71', hipCm: '94 - 96', lengthCm: '118' },
    { size: 'M', india: '36', bustIn: '36 - 37', waistIn: '29 - 30', hipIn: '39 - 40', lengthIn: '47', bustCm: '91 - 94', waistCm: '73 - 76', hipCm: '99 - 101', lengthCm: '119' },
    { size: 'L', india: '38', bustIn: '38 - 39.5', waistIn: '31 - 32.5', hipIn: '41 - 42.5', lengthIn: '47.5', bustCm: '96 - 100', waistCm: '78 - 82', hipCm: '104 - 108', lengthCm: '120' },
    { size: 'XL', india: '40', bustIn: '40 - 42', waistIn: '33 - 35', hipIn: '43 - 45', lengthIn: '48', bustCm: '101 - 107', waistCm: '84 - 89', hipCm: '109 - 114', lengthCm: '122' },
    { size: 'XXL', india: '42', bustIn: '43 - 45', waistIn: '36 - 38', hipIn: '46 - 48', lengthIn: '48.5', bustCm: '109 - 114', waistCm: '91 - 96', hipCm: '117 - 122', lengthCm: '123' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] text-[#261B14] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D8CFBE]/60 p-5 sm:p-7 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSizeGuideOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#5A4232] hover:text-[#261B14] hover:bg-[#EFE9E0] rounded-full transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-[#F7EBE8] flex items-center justify-center text-[#B77B6E]">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h2 id="size-guide-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#261B14]">
              LUNA Size & Fit Guide
            </h2>
            <p className="text-xs text-[#5A4232] tracking-wide">
              Crafted according to contemporary Indian and international proportions
            </p>
          </div>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center justify-between mt-5 mb-4 bg-[#EFE9E0]/70 p-1 rounded-xl max-w-xs">
          <span className="text-xs font-medium text-[#5A4232] px-3">Units</span>
          <div className="flex gap-1">
            <button
              onClick={() => setUnit('in')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                unit === 'in'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-sm'
                  : 'text-[#5A4232] hover:text-[#261B14]'
              }`}
            >
              Inches (in)
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                unit === 'cm'
                  ? 'bg-[#3D2B1F] text-[#FAF8F5] shadow-sm'
                  : 'text-[#5A4232] hover:text-[#261B14]'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-[#D8CFBE]/80 my-3">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#EFE9E0] text-[#3D2B1F] font-semibold border-b border-[#D8CFBE]">
              <tr>
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">India / UK</th>
                <th className="py-2.5 px-3">Bust</th>
                <th className="py-2.5 px-3">Waist</th>
                <th className="py-2.5 px-3">Hips</th>
                <th className="py-2.5 px-3">Garment Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8CFBE]/50 font-normal">
              {sizeData.map((row) => (
                <tr key={row.size} className="hover:bg-[#F7EBE8]/50 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-[#3D2B1F]">{row.size}</td>
                  <td className="py-2.5 px-3 text-[#5A4232]">{row.india}</td>
                  <td className="py-2.5 px-3">{unit === 'in' ? row.bustIn : row.bustCm}</td>
                  <td className="py-2.5 px-3">{unit === 'in' ? row.waistIn : row.waistCm}</td>
                  <td className="py-2.5 px-3">{unit === 'in' ? row.hipIn : row.hipCm}</td>
                  <td className="py-2.5 px-3">{unit === 'in' ? row.lengthIn : row.lengthCm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Guide */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-[#FAF8F5] p-3 rounded-xl border border-[#D8CFBE]">
          <div className="p-2">
            <p className="font-semibold text-[#3D2B1F] mb-1">1. Bust</p>
            <p className="text-[#5A4232] leading-relaxed">
              Measure around the fullest part of your chest keeping the tape parallel to the floor.
            </p>
          </div>
          <div className="p-2 border-t sm:border-t-0 sm:border-l border-[#D8CFBE]">
            <p className="font-semibold text-[#3D2B1F] mb-1">2. Natural Waist</p>
            <p className="text-[#5A4232] leading-relaxed">
              Measure around your natural waistline, usually 1 to 2 inches above your navel.
            </p>
          </div>
          <div className="p-2 border-t sm:border-t-0 sm:border-l border-[#D8CFBE]">
            <p className="font-semibold text-[#3D2B1F] mb-1">3. Hips</p>
            <p className="text-[#5A4232] leading-relaxed">
              Stand with heels together and measure around the fullest curve of your hips.
            </p>
          </div>
        </div>

        {/* Personalized Sizing Reassurance */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-2 text-xs text-[#5A4232] bg-[#F7EBE8]/60 p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B77B6E] shrink-0" />
            <span>Between sizes? We recommend sizing down for slip dresses and sizing up for structured cottons.</span>
          </div>
          <a
            href="https://wa.me/+919876543210?text=Hi%2C%20I%20need%20help%20with%20sizing%20at%20LUNA%20Collective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3D2B1F] font-semibold underline underline-offset-2 hover:text-[#B77B6E]"
          >
            Ask Stylist on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
};
