import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-none shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-gray-300">
        {/* Header */}
        <div className="bg-[#4c4d51] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-300" />
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wide">
              MYTUTORPH STUDENT & FAMILY PRIVACY POLICY
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
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-800">
            Effective Date: October 2026.
          </p>
          <p>
            At <strong>MyTutorPH</strong>, safeguarding your child’s educational records, developmental milestones, diagnostic assessments, and personal family privacy is our highest responsibility. We comply with the Philippine Data Privacy Act of 2012 (RA 10173).
          </p>

          <h4 className="font-condensed text-sm font-bold uppercase text-gray-800 pt-2">
            1. Information We Collect
          </h4>
          <p>
            We collect only information necessary for diagnostic assessment, tutor matching, and educational progress tracking:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Student Information: Name, age, grade level, school, learning preferences, and teacher recommendations.</li>
            <li>Parent / Guardian Details: Names, contact numbers, email addresses, and billing records.</li>
            <li>Assessment & Progress Data: Baseline screening scores, reading inventories, and session progress notes.</li>
          </ul>

          <h4 className="font-condensed text-sm font-bold uppercase text-gray-800 pt-2">
            2. Confidentiality & Security
          </h4>
          <p>
            Educational files are stored in secure, encrypted databases accessible exclusively by your assigned tutors and supervisory coordinators. We never sell or distribute student data to outside advertisers.
          </p>

          <h4 className="font-condensed text-sm font-bold uppercase text-gray-800 pt-2">
            3. Inquiries
          </h4>
          <p>
            For privacy inquiries or to review your child’s records, contact our privacy desk at <em>privacy@mytutorph.com</em> or call <strong>+63 (02) 8920 1456</strong>.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-[#f4f4f4] border-t border-gray-200 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="gray-btn text-xs font-condensed uppercase px-5 py-1.5 font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
