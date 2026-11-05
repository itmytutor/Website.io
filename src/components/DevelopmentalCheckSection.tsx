import React from 'react';
import { Check } from 'lucide-react';

interface DevelopmentalCheckSectionProps {
  onBookAssessment?: () => void;
}

const DIFFICULTY_ITEMS = [
  'Speech and language',
  'Socialization',
  'Eye contact',
  'Reading and writing',
  'Waiting time',
  'Focus',
  'Hyper activity',
];

export const DevelopmentalCheckSection: React.FC<DevelopmentalCheckSectionProps> = () => {
  return (
    <section className="w-full bg-[#fcfdfd] px-6 lg:px-12 py-12 lg:py-16 border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 md:items-stretch">
        {/* Left Side: The 1x1 Photo Grid (2 columns by 2 rows of square image frames) */}
        <div className="md:col-span-5 w-full flex justify-center md:justify-start items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md">
            {/* Top-Left: Green border #69bc45 */}
            <div
              className="aspect-square rounded-2xl overflow-hidden border-4 border-[#69bc45] shadow-sm bg-gray-100 group"
              style={{ borderColor: '#69bc45' }}
            >
              <img
                src="/assets/aistudio/1_82101484.jpg"
                alt="Child seeking comfort with emotional sensitivity"
                className="w-full h-full object-cover rounded-xl border-4 border-[#69bc45] group-hover:scale-105 transition-transform duration-300"
                style={{ border: '4px solid #69bc45' }}
                loading="lazy"
              />
            </div>

            {/* Top-Right: Blue border #2b5da6 */}
            <div
              className="aspect-square rounded-2xl overflow-hidden border-4 border-[#2b5da6] shadow-sm bg-gray-100 group"
              style={{ borderColor: '#2b5da6' }}
            >
              <img
                src="/assets/aistudio/2_d039c9e1.jpg"
                alt="Child experiencing sensory and behavioral distress"
                className="w-full h-full object-cover rounded-xl border-4 border-[#2b5da6] group-hover:scale-105 transition-transform duration-300"
                style={{ border: '4px solid #2b5da6' }}
                loading="lazy"
              />
            </div>

            {/* Bottom-Left: Yellow border #fbc232 */}
            <div
              className="aspect-square rounded-2xl overflow-hidden border-4 border-[#fbc232] shadow-sm bg-gray-100 group"
              style={{ borderColor: '#fbc232' }}
            >
              <img
                src="/assets/aistudio/3_e197cecd.jpg"
                alt="Toddler in distress during mealtime routine"
                className="w-full h-full object-cover rounded-xl border-4 border-[#fbc232] group-hover:scale-105 transition-transform duration-300"
                style={{ border: '4px solid #fbc232' }}
                loading="lazy"
              />
            </div>

            {/* Bottom-Right: Grey border #ebeceb */}
            <div
              className="aspect-square rounded-2xl overflow-hidden border-4 border-[#ebeceb] shadow-sm bg-gray-100 group"
              style={{ borderColor: '#ebeceb' }}
            >
              <img
                src="/assets/aistudio/4_2bc1bc4b.jpg"
                alt="Child crying and feeling overwhelmed"
                className="w-full h-full object-cover rounded-xl border-4 border-[#ebeceb] group-hover:scale-105 transition-transform duration-300"
                style={{ border: '4px solid #ebeceb' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Hierarchy & Layout (Upper text aligned with top photos, lower text aligned with bottom photos) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6 md:space-y-0 py-0.5">
          {/* Top Zone: The Headline (Aligned with upper edge of top photos) */}
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2b5da6] leading-tight tracking-tight">
              Is your child<br />having these difficulties?
            </h2>
          </div>

          {/* Middle Zone: The Checklist/Bullet List */}
          <div className="py-2">
            <ul className="space-y-2.5 sm:space-y-3">
              {DIFFICULTY_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  {/* Small checkmark icon inside a square/checkbox style */}
                  <div className="w-5 h-5 rounded-md border-2 border-[#2b5da6] flex items-center justify-center shrink-0 bg-white shadow-2xs group-hover:bg-[#2b5da6]/10 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#2b5da6] stroke-[3]" />
                  </div>
                  <span className="text-base sm:text-lg text-[#2b5da6] font-medium leading-relaxed tracking-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Zone: The Conclusion (Aligned with the checkboxes below Hyper activity, rectangle removed) */}
          <div className="text-left pt-2">
            <p className="text-lg sm:text-xl font-bold text-[#2b5da6] tracking-tight">
              They might have developmental delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
