import React from 'react';
import { PROMO_CARDS } from '../data/insuranceData';
import { PromoCard } from '../types';
import { ZoomIn, ArrowRight } from 'lucide-react';

interface PromoGridProps {
  onOpenCardDetail: (card: PromoCard) => void;
  onOpenPhotoOnly: (card: PromoCard) => void;
}

export const PromoGrid: React.FC<PromoGridProps> = ({
  onOpenCardDetail,
  onOpenPhotoOnly,
}) => {
  return (
    <section className="w-full bg-white px-6 lg:px-8 py-10 border-b border-gray-200/80">
      {/* Section Title */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2b5da6] tracking-tight leading-snug">
          Services for regular and special needs learners.
        </h2>
      </div>

      {/* 3 by 3 (3 across) grid showing all 6 educational program thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROMO_CARDS.map((card) => {
          const titleLines = card.title.split('\n');
          return (
            <div
              key={card.id}
              className="flex flex-col border border-gray-200/80 p-3.5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[#69bc45] transition duration-150 group"
            >
              <h4
                onClick={() => onOpenCardDetail(card)}
                className="font-condensed text-lg font-bold text-[#444] mb-3 leading-tight min-h-[46px] group-hover:text-[#2b5da6] transition-colors uppercase cursor-pointer"
                title={`Click to view details for ${card.title.replace('\n', ' ')}`}
              >
                <span className="block">{titleLines[0]}</span>
                {titleLines[1] ? (
                  <span className="block text-sm font-semibold text-gray-500 group-hover:text-[#2b5da6] transition-colors">
                    {titleLines[1]}
                  </span>
                ) : null}
              </h4>

              {/* Clickable Image: Opens photo only with no other details */}
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenPhotoOnly(card);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenPhotoOnly(card);
                  }
                }}
                title={`Click photo to view image for ${card.title.replace('\n', ' ')}`}
                className="w-full h-32 sm:h-36 mb-3 overflow-hidden bg-gray-100 relative border border-gray-100 cursor-pointer select-none group/img"
              >
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-108"
                  src={card.image}
                  loading="lazy"
                />

                {/* Hover overlay indicating clicking photo opens image only */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-condensed text-xs uppercase font-bold tracking-wider">
                  <ZoomIn className="w-4 h-4 text-[#fbc232]" />
                  <span>View Photo</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-4 flex-grow">
                {card.snippet}
              </p>

              {/* View Details button: Shows full image and all program details */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => onOpenCardDetail(card)}
                  className="text-[11px] text-[#2b5da6] hover:text-[#69bc45] cursor-pointer font-bold uppercase font-condensed transition-colors flex items-center gap-1 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
