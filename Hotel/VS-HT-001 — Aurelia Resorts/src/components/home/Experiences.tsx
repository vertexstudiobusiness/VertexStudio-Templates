import React, { useState } from 'react';
import { EXPERIENCES } from '../../data/resortData';
import { Clock, Check, Sparkles, Compass, MessageSquare } from 'lucide-react';
import type { Experience } from '../../types';
import { ModalDialog } from '../common/ModalDialog';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenExp = (exp: Experience) => {
    setSelectedExp(exp);
    setModalOpen(true);
  };

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-[#0b251f] text-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#dfbe85] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>Unscripted Journeys</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fcfbf9] font-light tracking-tight leading-tight">
            Curated Moments of <br className="hidden sm:inline" />
            <span className="italic font-normal gold-gradient-text">Wonder & Stillness</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#dacdbd] font-sans leading-relaxed">
            From Ayurvedic rituals rooted in antiquity to private catamaran sails along secret coves, every experience is designed exclusively for you.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#061410] rounded-2xl overflow-hidden border border-[#c5a880]/25 shadow-xl hover:border-[#dfbe85]/50 transition-all duration-500 flex flex-col group"
            >
              {/* Image with atmospheric badges */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061410] via-transparent to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0b251f]/85 backdrop-blur-md border border-[#c5a880]/30 text-[#dfbe85] text-[10px] font-sans tracking-widest uppercase font-semibold">
                    {exp.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#dacdbd]">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#dfbe85]" />
                    <span>{exp.duration}</span>
                  </span>
                  <span>{exp.timing}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#fcfbf9] group-hover:text-[#dfbe85] transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-xs text-[#c5a880] italic font-serif mt-1">{exp.subtitle}</div>
                  <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-[#c5a880]/15 flex items-center space-x-2 text-xs text-[#dfbe85]">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#dfbe85]" />
                  <span className="truncate">{exp.highlight}</span>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenExp(exp)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-[#c5a880]/40 hover:border-[#dfbe85] hover:bg-white/5 text-[#fcfbf9] text-xs font-sans tracking-[0.16em] uppercase font-semibold transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5 text-[#dfbe85]" />
                    <span>Discover Experience</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Details Modal Dialog */}
      <ModalDialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        titleId="experience-modal-title"
        title={selectedExp?.title}
        maxWidthClass="max-w-2xl"
      >
        {selectedExp && (
          <div className="space-y-5">
            <div className="rounded-xl overflow-hidden h-60 sm:h-72">
              <img
                src={selectedExp.image}
                alt={selectedExp.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-[#937345] pb-3 border-b border-[#c5a880]/20 gap-2">
              <span className="font-semibold uppercase tracking-wider">{selectedExp.category}</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{selectedExp.duration} • {selectedExp.timing}</span>
              </span>
            </div>

            <p className="text-sm text-[#1c5246] leading-relaxed">
              {selectedExp.description}
            </p>

            <div className="space-y-2">
              <h4 className="font-serif text-base font-semibold text-[#0b251f]">Bespoke Inclusions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedExp.inclusions.map((inc, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#143d34]">
                    <Check className="w-4 h-4 text-[#937345] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#c5a880]/20 flex flex-col sm:flex-row justify-end gap-3">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hello Aurelia Concierge, I would like to reserve the experience: ${selectedExp.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reserve with Concierge</span>
              </a>
            </div>
          </div>
        )}
      </ModalDialog>
    </section>
  );
};
