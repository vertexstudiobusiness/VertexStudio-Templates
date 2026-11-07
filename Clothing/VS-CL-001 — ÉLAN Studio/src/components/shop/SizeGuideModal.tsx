import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, HelpCircle, Phone } from 'lucide-react';

interface SizeRow {
  size: string;
  uk: string;
  us: string;
  eu: string;
  bustIn: string;
  waistIn: string;
  hipIn: string;
  bustCm: string;
  waistCm: string;
  hipCm: string;
}

const WOMEN_SIZES: SizeRow[] = [
  { size: 'XS', uk: '6', us: '2', eu: '34', bustIn: '32', waistIn: '25', hipIn: '35', bustCm: '81', waistCm: '63.5', hipCm: '89' },
  { size: 'S', uk: '8', us: '4', eu: '36', bustIn: '34', waistIn: '27', hipIn: '37', bustCm: '86', waistCm: '68.5', hipCm: '94' },
  { size: 'M', uk: '10', us: '6', eu: '38', bustIn: '36', waistIn: '29', hipIn: '39', bustCm: '91', waistCm: '73.5', hipCm: '99' },
  { size: 'L', uk: '12', us: '8', eu: '40', bustIn: '38', waistIn: '31', hipIn: '41', bustCm: '96.5', waistCm: '79', hipCm: '104' },
  { size: 'XL', uk: '14', us: '10', eu: '42', bustIn: '40', waistIn: '33', hipIn: '43', bustCm: '101.5', waistCm: '84', hipCm: '109' }
];

const MEN_SIZES = [
  { size: '38 (S)', chestIn: '38', waistIn: '31-32', shoulderIn: '17.5', chestCm: '96', waistCm: '80', shoulderCm: '44.5' },
  { size: '40 (M)', chestIn: '40', waistIn: '33-34', shoulderIn: '18.0', chestCm: '101', waistCm: '85', shoulderCm: '45.7' },
  { size: '42 (L)', chestIn: '42', waistIn: '35-36', shoulderIn: '18.5', chestCm: '106', waistCm: '90', shoulderCm: '47.0' },
  { size: '44 (XL)', chestIn: '44', waistIn: '37-38', shoulderIn: '19.0', chestCm: '111', waistCm: '95', shoulderCm: '48.2' },
  { size: '46 (XXL)', chestIn: '46', waistIn: '39-40', shoulderIn: '19.5', chestCm: '116', waistCm: '100', shoulderCm: '49.5' }
];

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen, sendWhatsAppOrder } = useShop();
  const [unit, setUnit] = useState<'inches' | 'cm'>('inches');
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  if (!isSizeGuideOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[130] flex items-center justify-center p-4 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Atelier Size Guide"
      >
        {/* Dimmed backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSizeGuideOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#0e0d0b] text-[#faf7f2] border border-[#2b2721] shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#201d19]">
            <div className="flex items-center gap-2.5">
              <Ruler className="w-5 h-5 text-[#c5a880]" />
              <h3 className="font-serif text-2xl text-[#faf7f2] font-normal">
                Bespoke Size Guide
              </h3>
            </div>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="text-[#948b7e] hover:text-[#c5a880] p-1"
              aria-label="Close size guide"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader & Unit Toggles */}
          <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#201d19]">
            {/* Gender Toggle */}
            <div className="flex items-center border border-[#2e2a24] bg-[#141210]">
              <button
                type="button"
                onClick={() => setActiveTab('women')}
                className={`py-1.5 px-4 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === 'women'
                    ? 'bg-[#c5a880] text-[#0c0b0a]'
                    : 'text-[#948b7e] hover:text-[#faf7f2]'
                }`}
              >
                Women's Sizing
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('men')}
                className={`py-1.5 px-4 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === 'men'
                    ? 'bg-[#c5a880] text-[#0c0b0a]'
                    : 'text-[#948b7e] hover:text-[#faf7f2]'
                }`}
              >
                Men's Tailoring
              </button>
            </div>

            {/* Unit Toggle */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#948b7e]">Measurement:</span>
              <button
                type="button"
                onClick={() => setUnit('inches')}
                className={`px-2.5 py-1 border text-xs font-semibold ${
                  unit === 'inches'
                    ? 'border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10'
                    : 'border-[#26231e] text-[#948b7e]'
                }`}
              >
                Inches (in)
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1 border text-xs font-semibold ${
                  unit === 'cm'
                    ? 'border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10'
                    : 'border-[#26231e] text-[#948b7e]'
                }`}
              >
                Centimetres (cm)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="py-5 overflow-x-auto">
            {activeTab === 'women' ? (
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#282521] text-[#c5a880] uppercase tracking-wider">
                    <th className="py-2.5 pr-3 font-semibold">Size</th>
                    <th className="py-2.5 px-3 font-semibold">UK/IN</th>
                    <th className="py-2.5 px-3 font-semibold">US</th>
                    <th className="py-2.5 px-3 font-semibold">EU</th>
                    <th className="py-2.5 px-3 font-semibold">Bust</th>
                    <th className="py-2.5 px-3 font-semibold">Waist</th>
                    <th className="py-2.5 pl-3 font-semibold">Hip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e1c18] text-[#ded6c9]">
                  {WOMEN_SIZES.map((row) => (
                    <tr key={row.size} className="hover:bg-[#141210]">
                      <td className="py-2.5 pr-3 font-bold text-[#faf7f2]">{row.size}</td>
                      <td className="py-2.5 px-3 text-[#948b7e]">{row.uk}</td>
                      <td className="py-2.5 px-3 text-[#948b7e]">{row.us}</td>
                      <td className="py-2.5 px-3 text-[#948b7e]">{row.eu}</td>
                      <td className="py-2.5 px-3">
                        {unit === 'inches' ? `${row.bustIn}"` : `${row.bustCm} cm`}
                      </td>
                      <td className="py-2.5 px-3">
                        {unit === 'inches' ? `${row.waistIn}"` : `${row.waistCm} cm`}
                      </td>
                      <td className="py-2.5 pl-3">
                        {unit === 'inches' ? `${row.hipIn}"` : `${row.hipCm} cm`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#282521] text-[#c5a880] uppercase tracking-wider">
                    <th className="py-2.5 pr-3 font-semibold">Jacket Size</th>
                    <th className="py-2.5 px-3 font-semibold">Chest</th>
                    <th className="py-2.5 px-3 font-semibold">Waist</th>
                    <th className="py-2.5 pl-3 font-semibold">Shoulder Span</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e1c18] text-[#ded6c9]">
                  {MEN_SIZES.map((row) => (
                    <tr key={row.size} className="hover:bg-[#141210]">
                      <td className="py-2.5 pr-3 font-bold text-[#faf7f2]">{row.size}</td>
                      <td className="py-2.5 px-3">
                        {unit === 'inches' ? `${row.chestIn}"` : `${row.chestCm} cm`}
                      </td>
                      <td className="py-2.5 px-3">
                        {unit === 'inches' ? `${row.waistIn}"` : `${row.waistCm} cm`}
                      </td>
                      <td className="py-2.5 pl-3">
                        {unit === 'inches' ? `${row.shoulderIn}"` : `${row.shoulderCm} cm`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Measuring Guidance */}
          <div className="p-4 bg-[#141210] border border-[#24211d] space-y-2 text-xs text-[#948b7e]">
            <div className="flex items-center gap-1.5 text-[#faf7f2] font-semibold">
              <HelpCircle className="w-4 h-4 text-[#c5a880]" />
              <span>How to Measure with Precision</span>
            </div>
            <p className="leading-relaxed">
              <strong>Bust/Chest:</strong> Measure across the fullest part of the bust, keeping the measuring tape parallel to the floor.
            </p>
            <p className="leading-relaxed">
              <strong>Waist:</strong> Measure around the narrowest part of your natural waistline, typically 1 inch above the navel.
            </p>
            <p className="leading-relaxed">
              <strong>Hips:</strong> Stand with feet together and measure around the fullest point of your hips.
            </p>
          </div>

          {/* Need Custom Tailoring Assistance */}
          <div className="mt-5 pt-4 border-t border-[#201d19] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#ded6c9]">
              Between sizes or prefer made-to-measure bespoke fitting?
            </span>
            <button
              type="button"
              onClick={() => {
                setIsSizeGuideOpen(false);
                sendWhatsAppOrder();
              }}
              className="py-2 px-4 bg-[#c5a880] text-[#0c0b0a] font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#dfcca6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Consult Tailor on WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
