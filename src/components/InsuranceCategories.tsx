import React from 'react';
import { INSURANCE_CATEGORIES } from '../data/insuranceData';

interface CategoryItemInfo {
  id: string;
  name: string;
  category: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
}

interface InsuranceCategoriesProps {
  onSelectItem: (item: CategoryItemInfo) => void;
  onSelectCategoryOverview: (categoryKey: string, categoryTitle: string) => void;
}

export const InsuranceCategories: React.FC<InsuranceCategoriesProps> = ({
  onSelectItem,
  onSelectCategoryOverview,
}) => {
  const categoryKeys = Object.keys(INSURANCE_CATEGORIES) as Array<keyof typeof INSURANCE_CATEGORIES>;

  // User requested exact colors for each category button:
  // 1. Special Education: Green #69bc45
  // 2. Assessment & Screening: Blue #2b5da6
  // 3. Intervention & Early Learning: Yellow #fbc232
  // 4. Subject Focused Tutoring: Grey #ebeceb
  const categoryButtonStyles: Record<
    string,
    {
      btnBg: string;
      btnHover: string;
      btnText: string;
      border: string;
      moreText: string;
      moreHover: string;
    }
  > = {
    spedPrograms: {
      btnBg: 'bg-[#69bc45]',
      btnHover: 'hover:bg-[#5da83c]',
      btnText: 'text-white',
      border: 'border-[#539736]',
      moreText: 'text-[#69bc45]',
      moreHover: 'hover:text-[#4d8632]',
    },
    assessments: {
      btnBg: 'bg-[#2b5da6]',
      btnHover: 'hover:bg-[#234d8a]',
      btnText: 'text-white',
      border: 'border-[#1f457a]',
      moreText: 'text-[#2b5da6]',
      moreHover: 'hover:text-[#1c3c6b]',
    },
    interventions: {
      btnBg: 'bg-[#fbc232]',
      btnHover: 'hover:bg-[#eab327]',
      btnText: 'text-[#2a2208]',
      border: 'border-[#dfab28]',
      moreText: 'text-[#9c710a]',
      moreHover: 'hover:text-[#6f5005]',
    },
    subjectTutoring: {
      btnBg: 'bg-[#ebeceb]',
      btnHover: 'hover:bg-[#dedfde]',
      btnText: 'text-[#35363a]',
      border: 'border-[#cfd0cf]',
      moreText: 'text-[#555555]',
      moreHover: 'hover:text-[#222222]',
    },
  };

  return (
    <section className="w-full bg-[#f9f9f9] px-6 lg:px-8 py-8 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryKeys.map((key) => {
          const cat = INSURANCE_CATEGORIES[key];
          const style = categoryButtonStyles[key] || {
            btnBg: 'bg-[#4c4d51]',
            btnHover: 'hover:bg-[#3d3e42]',
            btnText: 'text-white',
            border: 'border-transparent',
            moreText: 'text-[#2b5da6]',
            moreHover: 'hover:text-[#1e4379]',
          };

          return (
            <div key={key} className="flex flex-col">
              {/* Category Header Badge with requested color */}
              <button
                type="button"
                onClick={() => onSelectCategoryOverview(key, cat.title)}
                className={`${style.btnBg} ${style.btnHover} ${style.btnText} ${style.border} font-condensed text-xs font-bold py-2 px-3 rounded-xs text-center tracking-wider uppercase mb-3 shadow-xs cursor-pointer transition w-full border`}
              >
                {cat.title}
              </button>

              {/* Sub-item links */}
              <ul className="text-[11px] text-[#666] space-y-1.5 pl-1">
                {cat.items.map((item) => (
                  <li
                    key={item.id}
                    onClick={() =>
                      onSelectItem({
                        ...item,
                        category: cat.title,
                      })
                    }
                    className="hover:text-[#2b5da6] cursor-pointer flex items-center transition group select-none py-0.5"
                  >
                    <span className="text-gray-400 group-hover:text-[#69bc45] mr-1.5 font-bold">›</span>
                    <span className="font-semibold">{item.name}</span>
                    <span className="ml-auto text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition">
                      {item.startingAt}
                    </span>
                  </li>
                ))}
              </ul>

              {/* "MORE" link */}
              <div className="mt-3 pl-1">
                <button
                  type="button"
                  onClick={() => onSelectCategoryOverview(key, cat.title)}
                  className={`text-[10px] ${style.moreText} ${style.moreHover} hover:underline font-bold uppercase tracking-wider cursor-pointer font-condensed`}
                >
                  MORE ›
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
