import React from 'react';
import { X, Check, Phone, ArrowRight } from 'lucide-react';

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

interface CategoryDetailModalProps {
  item: CategoryItemInfo | null;
  categoryTitle?: string;
  categoryKey?: string;
  onClose: () => void;
  onOpenQuoteModal: (preselectedType?: string) => void;
  onOpenAgentFinder: () => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  item,
  categoryTitle,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!item && !categoryTitle) return null;

  const displayName = item ? item.name : categoryTitle;
  const parentCategory = item ? item.category : categoryTitle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-none shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-300">
        {/* Header */}
        <div className="bg-[#4c4d51] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-sky-300 font-condensed uppercase tracking-wider block">
              {parentCategory}
            </span>
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide">
              {displayName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1 cursor-pointer transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-gray-700 text-sm">
          {item ? (
            <>

              {/* Pricing Box */}
              <div className="bg-[#f5f5f5] p-3.5 border border-gray-200">
                <div>
                  <span className="text-[10px] uppercase font-condensed text-gray-500 font-bold block mb-1">
                    Session Fee
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-condensed text-2xl font-bold text-[#35363a]">
                      {item.startingAt}
                    </span>
                    <span className="font-condensed text-sm font-semibold text-gray-600">
                      {item.typicalCoverage?.toLowerCase().includes('1 time') ||
                      item.typicalCoverage?.toLowerCase().includes('one time') ||
                      item.typicalCoverage?.toLowerCase().includes('assessment')
                        ? 'One Time Fee'
                        : item.typicalCoverage === 'Per Month'
                        ? 'Per Month'
                        : 'Per Hour'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard Policy Inclusions */}
              <div>
                <h5 className="font-condensed text-xs uppercase font-bold text-gray-700 tracking-wider mb-2">
                  MyTutorPH Quality Assurance Standards
                </h5>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8ec3eb] shrink-0" />
                    <span>Certified Philippine licensed teachers (LPT) & SPED educators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8ec3eb] shrink-0" />
                    <span>Customized lesson roadmaps and milestone monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8ec3eb] shrink-0" />
                    <span>Regular parental progress debriefs and home practice kits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8ec3eb] shrink-0" />
                    <span>Flexible home-based or online interactive sessions</span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Explore specialized programs under {categoryTitle}. Our educators provide patient, structured, and joyful learning experiences aligned with DepEd and international curricula.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f4f4f4] border-t border-gray-200 px-6 py-3 flex items-center justify-between">
          <a
            href="tel:+639159937065"
            className="flex items-center gap-1.5 text-xs font-bold text-[#4c4e53] hover:text-sky-700"
          >
            <Phone className="w-3.5 h-3.5 text-[#8ec3eb]" />
            <span>+63 915 993 7065</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="gray-btn text-xs font-condensed uppercase px-3 py-1.5 font-bold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(item?.name);
              }}
              className="hero-btn-gradient text-white text-xs font-condensed uppercase px-4 py-1.5 font-bold cursor-pointer flex items-center gap-1"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
