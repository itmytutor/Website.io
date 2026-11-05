import React, { useState } from 'react';
import { PromoCard } from '../../types';
import { X, CheckCircle2, BookOpen, Send, GraduationCap } from 'lucide-react';

interface CardDetailModalProps {
  card: PromoCard | null;
  onClose: () => void;
  onConsultationRequest?: (programName: string) => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  card,
  onClose,
  onConsultationRequest,
}) => {
  // Call all hooks unconditionally at top level
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  if (!card) return null;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parentName && contactNumber) {
      setInquirySent(true);
      if (onConsultationRequest) {
        onConsultationRequest(card.title.replace('\n', ' '));
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-none shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-300">
        {/* Modal Header */}
        <div className="bg-[#8ec3eb] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-100" />
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide">
              {card.title.replace('\n', ' - ')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-sky-200 p-1 cursor-pointer transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-gray-700 text-sm">
          {/* Card Media Banner */}
          <div className="w-full h-44 overflow-hidden bg-gray-100 border border-gray-200 relative">
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <span className="text-white font-condensed text-lg uppercase tracking-wider font-semibold">
                MyTutorPH Program Details
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-condensed text-lg font-bold text-[#35363a] uppercase mb-2">
              Program Overview
            </h4>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              {card.fullContent}
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="bg-[#f9f9f9] border border-gray-200 p-4">
            <h5 className="font-condensed text-xs uppercase font-bold text-gray-700 tracking-wider mb-2.5">
              Key Instructional Highlights
            </h5>
            <ul className="space-y-2">
              {card.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#8ec3eb] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Enrollment / Consultation Request */}
          <div className="border border-sky-200 bg-sky-50/60 p-4">
            <div className="flex items-center gap-2 mb-2 font-condensed font-bold text-sky-900 uppercase text-sm">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>Request Consultation for {card.title.split('\n')[0]}</span>
            </div>
            {inquirySent ? (
              <div className="bg-emerald-50 border border-emerald-200 p-3 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you, {parentName}! Our educational coordinator will reach out shortly to discuss your child&apos;s learning plan.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Parent / Guardian Name *"
                    className="text-xs p-2 border border-gray-300 bg-white rounded-none focus:outline-none focus:border-[#8ec3eb]"
                  />
                  <input
                    type="text"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="Child Age / Grade Level"
                    className="text-xs p-2 border border-gray-300 bg-white rounded-none focus:outline-none focus:border-[#8ec3eb]"
                  />
                  <input
                    type="tel"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Phone or Mobile *"
                    className="text-xs p-2 border border-gray-300 bg-white rounded-none focus:outline-none focus:border-[#8ec3eb]"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-gray-500">
                    Complimentary initial screening consultation
                  </span>
                  <button
                    type="submit"
                    className="hero-btn-gradient text-white text-xs font-condensed uppercase px-4 py-1.5 font-bold cursor-pointer rounded-xs flex items-center gap-1"
                  >
                    <span>Submit Request</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#f4f4f4] border-t border-gray-200 px-6 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold uppercase text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={onClose}
            className="gray-btn text-xs font-condensed uppercase px-4 py-1.5 font-bold cursor-pointer"
          >
            Back to Programs
          </button>
        </div>
      </div>
    </div>
  );
};
