import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data/insuranceData';

interface HighlightBannerProps {
  onLearnMore?: () => void;
}

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'we-got-you',
    image: '/assets/aistudio/Untitled_design_979753d2.jpg',
    title: 'We got you',
    subtitle: 'We are a learning hub that caters special needs learners ages 2 to 15 years old.',
    description: 'We are a team of licensed teachers dedicated to teaching special needs learners: Autism (ASD), ADHD, Down Syndrome, Learning disability and the like.',
  },
  {
    id: 'our-approach',
    image: '/assets/aistudio/MyTutorPH_34f342c4.jpg',
    title: 'Our Approach',
    bullets: [
      'Strengths-based',
      'Outcome-based',
      'Applied Behavior Analysis',
      'Faith-based',
      'Tech-enabled',
    ],
  },
];

export const HighlightBanner: React.FC<HighlightBannerProps> = ({ onLearnMore }) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const currentSlide = BANNER_SLIDES[activeSlideIdx];
  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#69bc45] text-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-emerald-200/40 border-t border-b border-[#559a37]">
      {/* Left Box: Manual Carousel Slider */}
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5 relative group">
        <img
          alt={currentSlide.title}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover border-2 border-white/70 shadow-sm shrink-0 rounded-xs cursor-pointer hover:opacity-95 transition duration-300"
          src={currentSlide.image}
          onClick={onLearnMore}
        />
        <div className="flex-1 text-center sm:text-left flex flex-col justify-between min-h-[140px]">
          <div>
            <h2 className="font-condensed text-2xl lg:text-3xl font-bold tracking-normal uppercase leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] transition-all duration-300">
              {currentSlide.title}
            </h2>

            {currentSlide.bullets ? (
              <h3 className="font-normal text-xs lg:text-[13px] text-white mt-2.5">
                <span className="flex flex-col gap-1.5 text-left">
                  {currentSlide.bullets.map((text, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-white rounded-xs flex items-center justify-center shrink-0 shadow-2xs">
                        <Check
                          className="w-3 h-3 text-[#69bc45] stroke-[3]"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </span>
                      <span className="font-semibold text-white tracking-wide text-xs sm:text-[13px] leading-tight">
                        {text}
                      </span>
                    </span>
                  ))}
                </span>
              </h3>
            ) : (
              <>
                {currentSlide.subtitle && (
                  <h3 className="font-normal text-xs lg:text-[13px] text-emerald-100 font-semibold mt-1.5 transition-all duration-300">
                    {currentSlide.subtitle}
                  </h3>
                )}
                {currentSlide.description && (
                  <p className="text-[11px] lg:text-xs text-white/95 font-normal leading-relaxed mt-2 opacity-95 transition-all duration-300">
                    {currentSlide.description}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Carousel dock (dots) and next button */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-4 pt-1">
            <div className="flex items-center gap-1.5">
              {BANNER_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  type="button"
                  className={`w-2 h-2 rounded-full cursor-pointer transition ${
                    activeSlideIdx === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextSlide}
              aria-label="Next slide"
              title="Next slide"
              type="button"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/35 active:scale-95 text-white flex items-center justify-center transition cursor-pointer shadow-2xs ml-1"
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Box: Quote / Testimonial */}
      <div className="p-6 lg:p-8 flex flex-col justify-center relative group">
        <blockquote className="italic text-sm lg:text-base leading-snug font-normal text-white relative">
          <span className="text-2xl font-serif leading-none mr-1 select-none">“</span>
          {currentTestimonial.quote}
        </blockquote>
        <div className="flex items-center justify-between mt-4">
          <p className="text-[11px] lg:text-xs text-emerald-100 italic font-light tracking-wide">
            {currentTestimonial.author}
          </p>
          <div className="flex items-center gap-2 opacity-85 group-hover:opacity-100 transition">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  className={`w-2 h-2 rounded-full cursor-pointer transition ${
                    activeTestimonialIdx === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            {/* Next Icon Button */}
            <button
              onClick={handleNextTestimonial}
              aria-label="Next testimonial"
              title="Next quote"
              type="button"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/35 active:scale-95 text-white flex items-center justify-center transition cursor-pointer shadow-2xs ml-1"
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
