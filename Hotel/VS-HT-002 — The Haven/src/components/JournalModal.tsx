import React, { useRef, useEffect } from 'react';
import { X, Clock, Calendar, User } from 'lucide-react';
import type { JournalArticle } from '../types/hotel';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (article) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [article]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const r = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (isOutside) {
      onClose();
    }
  };

  if (!article) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onPointerDown={handlePointerDown}
      aria-labelledby="journal-story-title"
      className="m-auto w-[94vw] max-w-3xl max-h-[90vh] bg-haven-ivory text-haven-charcoal p-0 border border-haven-stone/30 shadow-2xl backdrop:bg-haven-charcoal/70 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex flex-col max-h-[90vh] overflow-y-auto"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-haven-ivory/95 backdrop-blur-md px-5 py-4 border-b border-haven-stone/20 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-haven-stone-dark">
            The Haven Dispatches • {article.category}
          </span>

          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="p-2 text-haven-charcoal/70 hover:text-haven-charcoal hover:bg-haven-stone/20 rounded-full transition-colors"
            aria-label="Close Story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/9] w-full bg-haven-sand overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-haven-stone-dark border-b border-haven-stone/20 pb-4">
            <span className="flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-haven-olive" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-haven-olive" />
              <span>{article.readTime}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-haven-olive" />
              <span>By {article.author.name} ({article.author.role})</span>
            </span>
          </div>

          {/* Title */}
          <h1
            id="journal-story-title"
            className="font-serif text-2xl xs:text-3xl sm:text-4xl text-haven-charcoal font-light leading-tight"
          >
            {article.title}
          </h1>

          {/* Excerpt / Lead */}
          <p className="font-serif italic text-base sm:text-lg text-haven-olive leading-relaxed border-l-2 border-haven-olive/40 pl-4 py-1">
            {article.excerpt}
          </p>

          {/* Full Paragraphs */}
          <div className="space-y-4 text-xs xs:text-sm sm:text-base text-haven-charcoal-light leading-relaxed font-sans pt-2">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Signoff & Author Box */}
          <div className="pt-8 mt-8 border-t border-haven-stone/20 flex items-center justify-between">
            <div>
              <p className="font-serif text-base text-haven-charcoal">{article.author.name}</p>
              <p className="text-xs text-haven-stone-dark">{article.author.role}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-haven-charcoal text-haven-ivory text-xs tracking-wider uppercase"
            >
              Close Reading
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};
