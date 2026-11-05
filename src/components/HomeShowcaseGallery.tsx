import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  strokeColor: string;
  borderColorClass: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'joyful-moments',
    image: '/assets/aistudio/MyTutorPH__1__f4380f2f.jpg',
    alt: 'Joyful Moments, Strong Bonds at MyTutor',
    title: 'Joyful Moments, Strong Bonds',
    subtitle: "Such moments are essential for building strong emotional bonds and creating a supportive environment for a child's development.",
    strokeColor: '#69bc45',
    borderColorClass: 'border-[#69bc45]'
  },
  {
    id: 'creative-minds',
    image: '/assets/aistudio/Untitled_design_1f0a05e7.jpg',
    alt: 'Creative Minds in Action at MyTutor',
    title: 'Creative Minds\nin Action',
    subtitle: 'It emphasizes the importance of hands-on learning and the support that helps children develop their skills and confidence.',
    strokeColor: '#2b5da6',
    borderColorClass: 'border-[#2b5da6]'
  },
  {
    id: 'together-we-grow',
    image: '/assets/aistudio/MyTutorPH__3__8d5e7485.jpg',
    alt: 'Together We Grow at MyTutor',
    title: 'Together\nWe Grow',
    subtitle: 'The atmosphere appears warm and collaborative, highlighting teamwork, communication, and community building.',
    strokeColor: '#fbc232',
    borderColorClass: 'border-[#fbc232]'
  }
];

export const HomeShowcaseGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<ShowcaseItem | null>(null);

  return (
    <section className="w-full bg-white px-6 lg:px-8 py-8 lg:py-10 border-b border-gray-200/80">
      {/* 3 Aligned Pictures from Left to Right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SHOWCASE_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col items-center group">
            {/* Rounded Picture Container */}
            <div
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              title={`Click to view ${item.title}`}
              className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 relative cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full h-full object-cover rounded-2xl border-4 ${item.borderColorClass} transition-transform duration-500 group-hover:scale-105`}
                style={{ border: `4px solid ${item.strokeColor}` }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="bg-white/95 text-[#2b5da6] p-3 rounded-full shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Below Picture: Centered Title and Subtext */}
            <div className="text-center mt-4 px-2 flex flex-col items-center">
              <h3 className="font-bold text-base sm:text-lg text-[#2b5da6] group-hover:text-[#69bc45] transition-colors leading-snug whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-1.5 leading-relaxed max-w-[280px]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for enlarged picture preview */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full max-h-[75vh] overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.alt}
                className={`w-full h-auto max-h-[75vh] object-contain rounded-xl border-4 ${activeImage.borderColorClass}`}
                style={{ border: `4px solid ${activeImage.strokeColor}` }}
              />
            </div>
            <div className="text-center mt-3 pb-1">
              <h3 className="font-bold text-lg text-[#2b5da6] whitespace-pre-line">{activeImage.title}</h3>
              <p className="text-xs text-gray-600 mt-1 max-w-md">{activeImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
