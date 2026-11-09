import React, { useState } from 'react';
import { INSURANCE_CATEGORIES } from '../../data/insuranceData';
import { CheckCircle, FileText, ArrowRight } from 'lucide-react';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
  subjects?: string[];
  otherSubjectsText?: string;
}

interface ServicesScreenProps {
  onSelectItem: (item: CategoryItemInfo) => void;
  onContactSpecialist: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onSelectItem,
  onContactSpecialist,
}) => {
  // Booking inquiry state
  const [selectedService, setSelectedService] = useState('SPED & Learning Intervention');
  const [learnerName, setLearnerName] = useState('');
  const [learnerAge, setLearnerAge] = useState('');
  const [notes, setNotes] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isButtonChecked, setIsButtonChecked] = useState(false);
  const [buttonText, setButtonText] = useState('Submit');

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!learnerName.trim() || !learnerAge.trim()) {
      return;
    }

    setIsSubmitting(true);
    setIsFlying(true);
    setIsButtonChecked(false);
    setButtonText('Submit');

    setTimeout(() => {
      setIsFlying(false);
    }, 2750);

    setTimeout(() => {
      setIsButtonChecked(true);
      setButtonText('Submitted');
    }, 3000);

    setTimeout(() => {
      const ref = `TTR-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setRequestSubmitted(true);
      setIsSubmitting(false);
    }, 3400);
  };

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* Banner: changed from grey to Yellow #fbc232 */}
      <section className="bg-[#fbc232] border-b border-[#dfab28] text-[#2a2208] px-6 lg:px-12 py-9 shadow-xs">
        <span className="text-[10px] uppercase font-condensed tracking-wider font-bold text-[#6e5008] block mb-1">
          Specialized Educational Programs & Tutoring
        </span>
        <h1 className="font-condensed text-3xl lg:text-4xl font-bold tracking-tight text-[#261f06] uppercase">
          Services
        </h1>
      </section>

      <div className="p-6 lg:p-10 space-y-10">
        {/* Detailed Catalog by Division */}
        {Object.entries(INSURANCE_CATEGORIES).map(([catKey, category], index) => {
          const isFirstCategory = index === 0;
          const isSecondCategory = index === 1;
          const isThirdCategory = index === 2;
          const isFourthCategory = index === 3;
          const displayTitle = isFirstCategory
            ? 'Learning Assessment'
            : isSecondCategory
            ? 'Interventions / Sped'
            : isThirdCategory
            ? 'Learning Assistance'
            : isFourthCategory
            ? 'The GiftEd'
            : category.title;

          return (
            <section key={catKey}>
              <div className="flex items-center justify-between border-b-2 border-gray-200 pb-2 mb-4">
                <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
                  {displayTitle}
                </h2>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIdx) => {
                const strokeBorderClass =
                  itemIdx === 0
                    ? 'border-2 border-[#2b5da6]'
                    : itemIdx === 1
                    ? 'border-2 border-[#69bc45]'
                    : itemIdx === 2
                    ? 'border-2 border-[#fbc232]'
                    : itemIdx === 3
                    ? 'border-2 border-[#ebeceb]'
                    : 'border border-gray-200';

                const strokeStyle =
                  itemIdx === 0
                    ? { borderColor: '#2b5da6', border: '2px solid #2b5da6' }
                    : itemIdx === 1
                    ? { borderColor: '#69bc45', border: '2px solid #69bc45' }
                    : itemIdx === 2
                    ? { borderColor: '#fbc232', border: '2px solid #fbc232' }
                    : itemIdx === 3
                    ? { borderColor: '#ebeceb', border: '2px solid #ebeceb' }
                    : undefined;

                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      onSelectItem({
                        ...item,
                        category: category.title,
                      })
                    }
                    className={`${strokeBorderClass} p-4 bg-white hover:shadow-md transition cursor-pointer flex flex-col justify-between group shadow-xs`}
                    style={strokeStyle}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-1.5 gap-2">
                        <h3 className="font-condensed text-base font-bold text-[#35363a] group-hover:text-[#2b5da6] uppercase whitespace-pre-line leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] uppercase font-condensed font-bold text-[#2a2208] bg-[#fbc232]/30 px-2 py-0.5 rounded-xs border border-[#fbc232]/50 shrink-0">
                          {item.startingAt}
                        </span>
                      </div>

                      {item.subjects && item.subjects.length > 0 && (
                        <div className="mt-2 mb-3">
                          <p className="text-[11px] font-bold text-gray-700 uppercase tracking-wide font-condensed mb-1.5">
                            Subject :
                          </p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {item.subjects.map((subj, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-gray-50 border border-gray-200/90 rounded-xs px-2 py-1 text-[11px] font-medium text-gray-700 flex items-center shadow-2xs"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#69bc45] mr-1.5 shrink-0" />
                                <span className="truncate">{subj}</span>
                              </div>
                            ))}
                          </div>
                          {item.otherSubjectsText && (
                            <p className="text-[11px] text-gray-500 font-medium mt-2 italic">
                              {item.otherSubjectsText}
                            </p>
                          )}
                        </div>
                      )}

                      {item.desc && (
                        <p className="text-xs text-gray-500 leading-relaxed mb-3">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-gray-400">{item.typicalCoverage}</span>
                      <span className="text-[#2b5da6] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          );
        })}

        {/* Online Learning Diagnostic & Program Intake Form */}
        <section className="border border-gray-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-[#fbc232]" />
            <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
              Schedule an Assessment or Program Intake
            </h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Submit your student details below to reserve an assessment schedule or start your personalized learning journey.
          </p>

          {requestSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-5 text-emerald-900 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <h4 className="font-condensed text-lg font-bold uppercase">
                  Intake Request Registered: {bookingRef}
                </h4>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Thank you! We have received your request for <strong>{learnerName}</strong>. Our instructional supervisor will contact you within 24 hours to finalize assessment materials and tutor matching.
              </p>
              <button
                type="button"
                onClick={() => {
                  setRequestSubmitted(false);
                  setIsFlying(false);
                  setIsButtonChecked(false);
                  setButtonText('Submit');
                  setLearnerName('');
                  setLearnerAge('');
                  setNotes('');
                }}
                className="text-xs font-condensed font-bold uppercase text-emerald-700 hover:underline cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Program Focus
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed"
                  >
                    <option value="SPED & Learning Intervention">SPED & Learning Intervention</option>
                    <option value="Diagnostic Assessment">Diagnostic Reading/Math Assessment</option>
                    <option value="Early Intervention">Early Intervention (Ages 2-6)</option>
                    <option value="Play-based Learning">Play-based Learning</option>
                    <option value="Subject Focused Tutoring">Subject Focused Tutoring (Math/Science/English)</option>
                    <option value="College / High School Prep">College / Science HS Prep</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={learnerName}
                    onChange={(e) => setLearnerName(e.target.value)}
                    placeholder="e.g. Gabriel Reyes"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#fbc232]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Age / Grade Level *
                  </label>
                  <input
                    type="text"
                    required
                    value={learnerAge}
                    onChange={(e) => setLearnerAge(e.target.value)}
                    placeholder="e.g. 7 years old / Grade 2"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed focus:outline-none focus:border-[#fbc232]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  Specific Learning Goals, Challenges, or IEP Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details on learning style, attention span, reading challenges, teacher recommendations, or diagnosis if any..."
                  className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#fbc232]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-gray-500">
                  Prefer a phone conversation? Call <strong>+63 915 993 7065</strong>
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`send-btn yellow-btn ${isButtonChecked ? 'checked' : ''}`}
                >
                  <div className={`circle ${isFlying ? 'rotateCircle' : ''}`}>
                    <svg
                      className={`plane-icon w-4 h-4 fill-[#000000] text-[#000000] ${isFlying ? '' : 'hide'}`}
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V392c0-2.5 .4-4.9 1.1-7.2l202-232.2-250.4 193c-6.8 5.3-15.5 7.7-24 6.7L18.4 344.4C7.1 343.1-1.8 334.4 .2 323.2s9.7-19.3 20.8-21.2l448-80c10.3-1.8 20.9 2.1 27.1 10.2l2 2.6z" />
                    </svg>
                  </div>
                  <span>{buttonText}</span>
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
