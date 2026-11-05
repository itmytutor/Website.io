import React, { useState } from 'react';
import { Phone, Check, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+63 915 993 7065');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#f4f4f4] border-t border-gray-200 px-6 lg:px-8 py-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
        {/* Copyright & Legal */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/aistudio/1_4688ea95.jpg"
            alt="MyTutorPH Official Seal"
            className="w-6 h-6 rounded-full object-cover border border-[#fbc232] shrink-0"
          />
          <div>
            <span>
              © 2026 <strong className="font-bold font-condensed tracking-wide lowercase"><span className="text-[#2b5da6]">my</span><span className="text-[#69bc45]">tutor</span><span className="text-[#fbc232]">ph</span></strong>. All Rights Reserved.
            </span>
            <span className="mx-2">|</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-gray-800 hover:underline transition cursor-pointer text-gray-600"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Location & Contact Phone */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 text-gray-600 text-xs">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-[#2b5da6] shrink-0" />
            <span className="leading-tight">
              2/F Lucky Plaza Bldg., Burgos St., La Paz, Iloilo City
            </span>
          </div>

          <span className="hidden sm:inline text-gray-300">|</span>

          {/* Contact Phone */}
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#2b5da6] fill-current shrink-0" />
            <a
              href="tel:+639159937065"
              className="text-xs font-semibold text-[#2b5da6] hover:text-[#1e4379] hover:underline transition"
            >
              +63 915 993 7065
            </a>
            <button
              onClick={handleCopyPhone}
              title="Copy phone number"
              className="text-[10px] uppercase font-semibold text-gray-400 hover:text-gray-600 px-1 py-0.5 rounded border border-gray-200 ml-1 cursor-pointer"
            >
              {copied ? (
                <span className="text-[#69bc45] flex items-center gap-0.5 font-bold">
                  <Check className="w-2.5 h-2.5" /> Copied
                </span>
              ) : (
                'Copy'
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
