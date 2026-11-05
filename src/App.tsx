/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, PromoCard } from './types';
import { PROMO_CARDS } from './data/insuranceData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutHomeScreen } from './components/screens/AboutHomeScreen';
import { AboutUsScreen } from './components/screens/AboutUsScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { TeachersScreen } from './components/screens/TeachersScreen';
import { ContactsScreen } from './components/screens/ContactsScreen';
import { CardDetailModal } from './components/modals/CardDetailModal';
import { ImageLightboxModal } from './components/modals/ImageLightboxModal';
import { CategoryDetailModal } from './components/modals/CategoryDetailModal';
import { PrivacyPolicyModal } from './components/modals/PrivacyPolicyModal';

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

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('HOME');

  // Modals state
  const [selectedPromoCard, setSelectedPromoCard] = useState<PromoCard | null>(null);
  const [lightboxCard, setLightboxCard] = useState<PromoCard | null>(null);
  const [selectedCategoryItem, setSelectedCategoryItem] = useState<CategoryItemInfo | null>(null);
  const [selectedCategoryOverview, setSelectedCategoryOverview] = useState<{
    key: string;
    title: string;
  } | null>(null);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  const handleSelectCategoryOverview = (key: string, title: string) => {
    setSelectedCategoryOverview({ key, title });
  };

  const handleSelectTab = (tab: NavTab, scrollToForm = false) => {
    setActiveTab(tab);
    if (scrollToForm) {
      setTimeout(() => {
        const formEl = document.getElementById('inquiry-form');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPhoto = () => {
    if (!lightboxCard) return;
    const currentIndex = PROMO_CARDS.findIndex((c) => c.id === lightboxCard.id);
    const nextIndex = (currentIndex + 1) % PROMO_CARDS.length;
    setLightboxCard(PROMO_CARDS[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!lightboxCard) return;
    const currentIndex = PROMO_CARDS.findIndex((c) => c.id === lightboxCard.id);
    const prevIndex = (currentIndex - 1 + PROMO_CARDS.length) % PROMO_CARDS.length;
    setLightboxCard(PROMO_CARDS[prevIndex]);
  };

  return (
    <div className="text-gray-700 antialiased min-h-screen flex flex-col items-center bg-[#ededed] py-0 sm:py-4">
      {/* Main Website Container (matches desktop frame of 1020px) */}
      <div className="w-full max-w-[1020px] bg-white shadow-2xl flex flex-col my-0 sm:my-2 transition-all border border-gray-300/60">
        {/* Header */}
        <Header
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* Dynamic Screen View */}
        <main className="w-full flex-1">
          {activeTab === 'HOME' && (
            <AboutHomeScreen
              onOpenCardDetail={(card) => setSelectedPromoCard(card)}
              onOpenPhotoOnly={(card) => setLightboxCard(card)}
              onSelectItem={(item) => setSelectedCategoryItem(item)}
              onSelectCategoryOverview={handleSelectCategoryOverview}
              onNavigateToContacts={(scrollToForm) => handleSelectTab('CONTACTS', scrollToForm)}
              onNavigateToServices={() => handleSelectTab('SERVICES')}
            />
          )}

          {activeTab === 'ABOUT US' && (
            <AboutUsScreen
              onExplorePrograms={() => handleSelectTab('SERVICES')}
              onContactUs={() => handleSelectTab('CONTACTS')}
            />
          )}

          {activeTab === 'SERVICES' && (
            <ServicesScreen
              onSelectItem={(item) => setSelectedCategoryItem(item)}
              onContactSpecialist={() => handleSelectTab('CONTACTS')}
            />
          )}

          {activeTab === 'TEACHER' && (
            <TeachersScreen
              onContactTeacher={() => handleSelectTab('CONTACTS', true)}
              onExplorePrograms={() => handleSelectTab('SERVICES')}
            />
          )}

          {activeTab === 'CONTACTS' && (
            <ContactsScreen
              onExplorePrograms={() => handleSelectTab('SERVICES')}
            />
          )}
        </main>

        {/* Footer */}
        <Footer onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)} />
      </div>

      {/* 1. Photo-Only Modal: Opens when user clicks the photo */}
      {lightboxCard && (
        <ImageLightboxModal
          card={lightboxCard}
          onClose={() => setLightboxCard(null)}
          onViewDetails={(card) => {
            setLightboxCard(null);
            setSelectedPromoCard(card);
          }}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      )}

      {/* 2. Full Details & Consultation Modal: Opens only when clicking "View Details" */}
      {selectedPromoCard && (
        <CardDetailModal
          card={selectedPromoCard}
          onClose={() => setSelectedPromoCard(null)}
          onConsultationRequest={() => {
            setSelectedPromoCard(null);
            handleSelectTab('CONTACTS');
          }}
        />
      )}

      {/* Category / Sub-program Modal */}
      {(selectedCategoryItem || selectedCategoryOverview) && (
        <CategoryDetailModal
          item={selectedCategoryItem}
          categoryTitle={selectedCategoryOverview?.title}
          categoryKey={selectedCategoryOverview?.key}
          onClose={() => {
            setSelectedCategoryItem(null);
            setSelectedCategoryOverview(null);
          }}
          onOpenQuoteModal={() => {
            setSelectedCategoryItem(null);
            setSelectedCategoryOverview(null);
            handleSelectTab('CONTACTS');
          }}
          onOpenAgentFinder={() => {
            setSelectedCategoryItem(null);
            setSelectedCategoryOverview(null);
            handleSelectTab('CONTACTS');
          }}
        />
      )}

      {privacyPolicyOpen && (
        <PrivacyPolicyModal
          isOpen={privacyPolicyOpen}
          onClose={() => setPrivacyPolicyOpen(false)}
        />
      )}
    </div>
  );
}
