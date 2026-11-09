import React, { useState } from 'react';
import { NavTab } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenConsultationModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavTab[] = [
    'HOME',
    'ABOUT US',
    'SERVICES',
    'TEACHER',
    'CONTACTS'
  ];

  // Specific color configurations requested by user:
  // Home: Green #69bc45
  // About Us: Blue #2b5da6
  // Services: Yellow #fbc232
  // Teacher: Blue #2b5da6
  // Contacts: Grey #ebeceb
  const tabStyles: Record<
    NavTab,
    {
      bg: string;
      activeBg: string;
      text: string;
      activeText: string;
      activeBorder: string;
      hoverStyle: string;
    }
  > = {
    'HOME': {
      bg: 'bg-[#69bc45]',
      activeBg: 'bg-[#5ea93e]',
      text: 'text-white',
      activeText: 'text-white',
      activeBorder: 'border-b-4 border-[#3e7526]',
      hoverStyle: 'hover:bg-[#5ea93e] hover:text-white',
    },
    'ABOUT US': {
      bg: 'bg-[#2b5da6]',
      activeBg: 'bg-[#224d8b]',
      text: 'text-white',
      activeText: 'text-white',
      activeBorder: 'border-b-4 border-[#163664]',
      hoverStyle: 'hover:bg-[#224d8b] hover:text-white',
    },
    'SERVICES': {
      bg: 'bg-[#fbc232]',
      activeBg: 'bg-[#e5ad23]',
      text: 'text-[#2a2208]',
      activeText: 'text-[#2a2208]',
      activeBorder: 'border-b-4 border-[#a57608]',
      hoverStyle: 'hover:bg-[#e5ad23] hover:text-[#2a2208]',
    },
    'TEACHER': {
      bg: 'bg-[#2b5da6]',
      activeBg: 'bg-[#224d8b]',
      text: 'text-white',
      activeText: 'text-white',
      activeBorder: 'border-b-4 border-[#163664]',
      hoverStyle: 'hover:bg-[#224d8b] hover:text-white',
    },
    'CONTACTS': {
      bg: 'bg-[#ebeceb]',
      activeBg: 'bg-[#dcdddc]',
      text: 'text-[#35363a]',
      activeText: 'text-[#1e1f20]',
      activeBorder: 'border-b-4 border-[#888988]',
      hoverStyle: 'hover:bg-[#dcdddc] hover:text-[#1e1f20]',
    },
  };

  return (
    <header className="w-full bg-[#f4f4f4] border-b border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-0">
        {/* Logo and Mobile Toggle */}
        <div className="w-full md:w-auto py-4 md:py-5 flex items-center justify-between">
          <button
            onClick={() => {
              onSelectTab('HOME');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 select-none hover:opacity-90 transition text-left cursor-pointer group"
          >
            <img
              src="/assets/aistudio/1_4688ea95.jpg"
              alt="MyTutorPH Official Logo"
              className="w-11 h-11 md:w-13 md:h-13 rounded-full object-cover border-2 border-[#fbc232] shadow-sm shrink-0"
            />
            <span className="jumping-title text-3xl lg:text-4xl tracking-tight lowercase font-condensed font-bold select-none">
              <span className="text-[#2b5da6] inline-flex">
                <span className="jumping-letter" style={{ animationDelay: '0.1s' }}>m</span>
                <span className="jumping-letter" style={{ animationDelay: '0.2s' }}>y</span>
              </span>
              <span className="text-[#69bc45] inline-flex">
                <span className="jumping-letter" style={{ animationDelay: '0.3s' }}>t</span>
                <span className="jumping-letter" style={{ animationDelay: '0.4s' }}>u</span>
                <span className="jumping-letter" style={{ animationDelay: '0.5s' }}>t</span>
                <span className="jumping-letter" style={{ animationDelay: '0.6s' }}>o</span>
                <span className="jumping-letter" style={{ animationDelay: '0.7s' }}>r</span>
              </span>
              <span className="text-[#fbc232] inline-flex">
                <span className="jumping-letter" style={{ animationDelay: '0.8s' }}>p</span>
                <span className="jumping-letter" style={{ animationDelay: '0.9s' }}>h</span>
              </span>
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation Links with custom assigned colors */}
        <nav className="hidden md:flex items-center font-condensed text-xs lg:text-[13px] tracking-wider uppercase font-bold">
          {navItems.map((tab) => {
            const isActive = activeTab === tab;
            const style = tabStyles[tab];
            return (
              <button
                key={tab}
                onClick={() => onSelectTab(tab)}
                className={`px-5 lg:px-6 py-5 transition-all cursor-pointer font-condensed ${
                  isActive
                    ? `${style.activeBg} ${style.activeText} ${style.activeBorder} shadow-sm font-extrabold`
                    : `${style.bg} ${style.text} ${style.hoverStyle} opacity-90 hover:opacity-100 border-b-4 border-transparent`
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          {navItems.map((tab) => {
            const isActive = activeTab === tab;
            const style = tabStyles[tab];
            return (
              <button
                key={tab}
                onClick={() => {
                  onSelectTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left font-condensed text-sm uppercase font-bold px-4 py-3 rounded-xs transition-all ${
                  isActive
                    ? `${style.activeBg} ${style.activeText} ring-2 ring-black/20 font-extrabold`
                    : `${style.bg} ${style.text} opacity-95 hover:opacity-100`
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
