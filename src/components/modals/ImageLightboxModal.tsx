import React, { useEffect } from 'react';
import { PromoCard } from '../../types';
import { X, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface ImageLightboxModalProps {
  card: PromoCard | null;
  onClose: () => void;
  onViewDetails?: (card: PromoCard) => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  card,
  onClose,
  onViewDetails,
  onPrev,
  onNext,
}) => {
  // Call hooks unconditionally at the top level
  useEffect(() => {
    if (!card) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [card, onClose, onPrev, onNext]);

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-4xl flex items-center justify-between text-white pb-3 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="font-condensed text-xl md:text-2xl font-bold uppercase tracking-wide text-white drop-shadow-sm">
            {card.title.replace('\n', ' - ')}
          </span>
          <span className="text-xs bg-[#69bc45] text-white px-2 py-0.5 rounded-full font-condensed uppercase font-semibold">
            Photo View
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onViewDetails && (
            <button
              onClick={() => {
                onClose();
                onViewDetails(card);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-[#2b5da6] text-white px-3 py-1.5 rounded-xs font-condensed uppercase font-bold transition cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full Details</span>
            </button>
          )}

          <button
            onClick={onClose}
            aria-label="Close photo view"
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-4xl w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#69bc45] text-white flex items-center justify-center transition cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Large Pure Photo */}
        <div className="overflow-hidden rounded-xs border-2 border-white/20 shadow-2xl bg-black max-h-[75vh] flex items-center justify-center">
          <img
            src={card.image}
            alt={card.alt}
            className="max-h-[75vh] max-w-full w-auto h-auto object-contain transition-transform select-none"
          />
        </div>

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            aria-label="Next photo"
            className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#69bc45] text-white flex items-center justify-center transition cursor-pointer shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Subtitle / Option to open full details */}
      <div
        className="mt-3 text-center text-white/80 text-xs max-w-md select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {onViewDetails && (
          <button
            onClick={() => {
              onClose();
              onViewDetails(card);
            }}
            className="sm:hidden text-xs text-[#fbc232] hover:underline font-condensed uppercase font-bold cursor-pointer"
          >
            Click here to view full curriculum & program details ›
          </button>
        )}
      </div>
    </div>
  );
};
