import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/insuranceData';

interface HighlightBannerProps {
  onLearnMore?: () => void;
}

export const HighlightBanner: React.FC<HighlightBannerProps> = ({ onLearnMore }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="w-full bg-[#69bc45] text-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-emerald-200/40 border-t border-b border-[#559a37]">
      {/* Left Box: Welcome */}
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <img
          alt="Hands nurturing learning building blocks"
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover border-2 border-white/70 shadow-sm shrink-0 rounded-xs cursor-pointer hover:opacity-95 transition"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4A635j7e40TFE1aOcHLqKP1PXSl764-0vYsOq3b9Jgz7nDYl3FQRV32kdPJXF11ZzX432UWMM6PiIdz4XVLQ4bRgYVvvhL68X8K4rRQixp_r6gc4X2SoWg4UClIGrByW-0aadjhJ44LNzmX4CmStmDJG3PezPzkhTRYRG6rhzHWJgQzpdOdA4XDrHVXkstrP-DdDo_qnDJYG3yu15RZVopEJozd_MxChkmyDjKkQJ3suXHHf2ThOcg"
          onClick={onLearnMore}
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-condensed text-2xl lg:text-3xl font-bold tracking-normal uppercase leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            WELCOME
          </h2>
          <h3 className="font-normal text-xs lg:text-[13px] text-emerald-100 font-semibold mt-1">
            Nurturing every child’s potential with individualized care
          </h3>
          <p className="text-[11px] lg:text-xs text-white/95 font-normal leading-relaxed mt-2 opacity-95">
            At MyTutorPH, we believe every learner thrives when given the right patience, individualized tools, and compassionate guidance. Whether your child requires SPED intervention, early developmental support, or focused academic enrichment, we walk alongside you.
          </p>
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
