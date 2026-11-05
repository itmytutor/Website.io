import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/insuranceData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Official Google Play Store Icon with standard brand geometry
const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M3.609 1.814L13.792 12 3.61 22.185c-.378-.344-.61-.83-.61-1.398V3.213c0-.568.232-1.054.61-1.399z"
      fill="#00C3FF"
    />
    <path
      d="M17.18 8.613l-3.388 3.387 3.388 3.387 3.82-2.184c1.09-.623 1.09-1.967 0-2.59l-3.82-2z"
      fill="#FFC107"
    />
    <path
      d="M3.61 22.185l10.182-10.185 3.388 3.387-11.233 6.42c-.754.431-1.636.315-2.337-.622z"
      fill="#F44336"
    />
    <path
      d="M3.609 1.814c.7-.937 1.583-1.053 2.337-.622l11.234 6.421-3.388 3.387L3.61 1.814z"
      fill="#4CAF50"
    />
  </svg>
);

interface HeroCarouselProps {
  onCtaClick: (slideId: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect (advances every 5 seconds, pauses when hovered)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Slide specific button & dock styling
  // Slide 1 (index 0): Yellow button #fbc232 (ENROLL NOW), Green dock #69bc45
  // Slide 2 (index 1): Blue button #2b5da6 (OFFER SERVICES), Blue dock #2b5da6
  // Slide 3 (index 2): Yellow button #fbc232 with Google Play store icon
  const getButtonClasses = () => {
    if (currentSlideIndex === 1) {
      // Second slide: Blue #2b5da6
      return 'bg-[#2b5da6] hover:bg-[#244f8e] active:bg-[#1d3f72] text-white border-[#234c87]';
    }
    // First slide (ENROLL NOW) and Third slide (Google Play): Yellow #fbc232
    return 'bg-[#fbc232] hover:bg-[#eab327] active:bg-[#d49e1e] text-slate-900 font-extrabold border-[#dca622]';
  };

  const getDockClasses = () => {
    if (currentSlideIndex === 1) {
      // Second slide: Blue #2b5da6
      return 'bg-[#2b5da6] border-[#234c87]';
    }
    // Default / Slide 1 & 3: Green #69bc45
    return 'bg-[#69bc45] border-[#559a37]';
  };

  const getArrowHoverClass = () => {
    if (currentSlideIndex === 1) {
      return 'hover:bg-[#2b5da6] hover:text-white';
    }
    return 'hover:bg-[#fbc232] hover:text-slate-900';
  };

  // Slide heading renderer with exact brand typography colors:
  // Slide 1: LOOKING (#69bc45), FOR (#fbc232 yellow), CLEAR AND SIMPLE / LEARNING SUPPORT? (#2b5da6)
  // Slide 2: MY (#2b5da6) TUTOR (#69bc45), AND (#fbc232 yellow), THE (#aa7b2b) GIFT (#5fa94d) ED (#a6c980)
  // Slide 3: AVAILABLE (#69bc45), IN (#fbc232 yellow), WEBSITE AND / MOBILE (#2b5da6)
  const renderSlideHeading = () => {
    if (currentSlideIndex === 0) {
      return (
        <div className="font-condensed uppercase leading-[0.92] tracking-tight">
          <span className="block text-5xl lg:text-7xl font-bold text-[#69bc45] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            LOOKING
          </span>
          <span className="block text-5xl lg:text-7xl font-bold text-[#fbc232] drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
            FOR
          </span>
          {slide.subtitle && (
            <span className="block text-2xl lg:text-3xl font-semibold text-[#2b5da6] tracking-normal uppercase italic mt-1 font-body drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {slide.subtitle}
            </span>
          )}
          {slide.highlightText && (
            <span className="block text-3xl lg:text-5xl font-bold text-[#2b5da6] mt-1 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {slide.highlightText}
            </span>
          )}
        </div>
      );
    }

    if (currentSlideIndex === 1) {
      return (
        <div className="font-condensed leading-[0.95] tracking-tight">
          <span className="block text-5xl lg:text-7xl font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            <span className="text-[#2b5da6]">My</span>
            <span className="text-[#69bc45]">Tutor</span>
          </span>
          <span className="block text-5xl lg:text-7xl font-bold text-[#fbc232] drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
            AND
          </span>
          <span className="block text-4xl lg:text-6xl font-bold mt-1 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            <span className="text-[#aa7b2b]">the</span>{' '}
            <span className="text-[#5fa94d]">Gift</span>
            <span className="text-[#a6c980]">Ed</span>
          </span>
        </div>
      );
    }

    if (currentSlideIndex === 2) {
      return (
        <div className="font-condensed uppercase leading-[0.92] tracking-tight">
          <span className="block text-5xl lg:text-7xl font-bold text-[#69bc45] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            AVAILABLE
          </span>
          <span className="block text-5xl lg:text-7xl font-bold text-[#fbc232] drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
            IN
          </span>
          {slide.subtitle && (
            <span className="block text-2xl lg:text-3xl font-semibold text-[#2b5da6] tracking-normal uppercase italic mt-1 font-body drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {slide.subtitle}
            </span>
          )}
          {slide.highlightText && (
            <span className="block text-3xl lg:text-5xl font-bold text-[#2b5da6] mt-1 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
              {slide.highlightText}
            </span>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-gradient-to-r from-[#e3e3e3] via-[#ececec] to-[#d9d9d9] overflow-hidden select-none border-b border-gray-200"
      data-purpose="hero-carousel"
    >
      {/* Carousel Left Arrow */}
      <button
        aria-label="Previous slide"
        onClick={handlePrev}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 text-white/90 transition cursor-pointer shadow-sm ${getArrowHoverClass()}`}
        type="button"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Carousel Right Arrow */}
      <button
        aria-label="Next slide"
        onClick={handleNext}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 text-white/90 transition cursor-pointer shadow-sm ${getArrowHoverClass()}`}
        type="button"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Carousel Slide Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] lg:min-h-[420px] items-center relative">
        {/* Hero Text & CTA */}
        <div className="md:col-span-6 px-8 md:pl-14 lg:pl-16 py-8 md:py-10 z-10">
          {renderSlideHeading()}

          {slide.description && (
            <p className="mt-3 text-xs md:text-sm text-gray-600 max-w-md leading-relaxed hidden sm:block">
              {slide.description}
            </p>
          )}

          {/* Hero Button & Navigation Dock */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {/* CTA button (links to Google Play app or fires onCtaClick) */}
            {slide.ctaLink ? (
              <a
                href={slide.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 font-condensed tracking-wider text-sm lg:text-base px-6 py-2.5 rounded-full uppercase transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md border ${getButtonClasses()}`}
              >
                {currentSlideIndex === 2 ? (
                  <>
                    <GooglePlayIcon className="w-5 h-5 flex-shrink-0 drop-shadow-xs" />
                    <span>Google Play</span>
                  </>
                ) : (
                  <span>{slide.ctaText}</span>
                )}
              </a>
            ) : (
              <button
                onClick={() => onCtaClick(slide.id)}
                type="button"
                className={`inline-flex items-center gap-2 font-condensed tracking-wider font-bold text-sm lg:text-base px-6 py-2.5 rounded-full uppercase transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md border ${getButtonClasses()}`}
              >
                <span>{slide.ctaText}</span>
              </button>
            )}

            {/* Slide Navigation Dock */}
            <div className={`flex items-center gap-1.5 px-3 py-2 rounded-full border shadow-sm transition-colors duration-300 ${getDockClasses()}`}>
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 transition-all rounded-full cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'w-6 bg-white shadow-xs'
                      : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:col-span-6 relative flex items-center justify-center p-4 sm:p-6 lg:p-8 h-full">
          <img
            key={slide.image}
            alt={slide.imageAlt}
            className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-square object-contain rounded-2xl shadow-md transition-all duration-300"
            src={slide.image}
          />
        </div>
      </div>
    </section>
  );
};
