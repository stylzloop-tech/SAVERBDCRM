import React, { useState } from 'react';
import { Language, OwnershipPackage } from './types';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { TrustBadges } from './components/TrustBadges';
import { DiscoverSection } from './components/DiscoverSection';
import { LocationSection } from './components/LocationSection';
import { AboutSection } from './components/AboutSection';
import { AgroVillageSection } from './components/AgroVillageSection';
import { EcoResortSection } from './components/EcoResortSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DayAtShonkho } from './components/DayAtShonkho';
import { OwnershipSection } from './components/OwnershipSection';
import { WhyShonkho } from './components/WhyShonkho';
import { HalalAndCommunity } from './components/HalalAndCommunity';
import { RoadmapAndProcess } from './components/RoadmapAndProcess';
import { AgroShopSection } from './components/AgroShopSection';
import { GallerySection } from './components/GallerySection';
import { LifeAtShonkho } from './components/LifeAtShonkho';
import { FAQSection } from './components/FAQSection';
import { SiteVisitSection } from './components/SiteVisitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedPackage, setSelectedPackage] = useState<OwnershipPackage | null>(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const scrollToSiteVisit = () => {
    const el = document.getElementById('site-visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: OwnershipPackage) => {
    setSelectedPackage(pkg);
    scrollToSiteVisit();
  };

  return (
    <div className={`min-h-screen bg-[#F8F7F2] text-[#1D2420] font-sans selection:bg-[#C8A96B] selection:text-[#0B2D20] ${
      language === 'bn' ? 'font-bengali' : ''
    }`}>
      {/* Sticky Header & Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenSiteVisit={scrollToSiteVisit}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Cinematic Hero Slider */}
        <HeroSlider language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 2. Trust Badges & Credibility */}
        <TrustBadges language={language} />

        {/* 3. Discover Section (Vision & Four Pillars) */}
        <DiscoverSection language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 4. Strategic Location & Connectivity (Dohazari, Chittagong) */}
        <LocationSection language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 5. Heritage & About Section (SAVER Group 1993 Heritage) */}
        <AboutSection language={language} />

        {/* 6. Agro Village & Farming Section (Dairy, Papaya, Farm-to-Table) */}
        <AgroVillageSection language={language} />

        {/* 7. Eco Resort & Accommodation Section (Deluxe to Presidential Suite) */}
        <EcoResortSection language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 8. Experiences & Recreation (18+ activities with status tags) */}
        <ExperiencesSection language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 9. A Day at SHONKHO (Interactive Timeline from Sunrise to Starlight) */}
        <DayAtShonkho language={language} />

        {/* 10. Ownership & Memberships (SAVER Gold to Signature + Disclosure) */}
        <OwnershipSection
          language={language}
          onOpenSiteVisit={scrollToSiteVisit}
          onSelectPackage={handleSelectPackage}
        />

        {/* 11. Why SHONKHO (8 Distinction Pillars) */}
        <WhyShonkho language={language} />

        {/* 12. Halal Values, Family Community & Wellness */}
        <HalalAndCommunity language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 13. Phased Roadmap & 5-Step Ownership Path */}
        <RoadmapAndProcess language={language} onOpenSiteVisit={scrollToSiteVisit} />

        {/* 14. Agro Shop Direct Portal (shop.saverbd.com link) */}
        <AgroShopSection language={language} />

        {/* 15. Cinematic Photo Gallery with Lightbox */}
        <GallerySection language={language} />

        {/* 16. Life at SHONKHO Field Stories */}
        <LifeAtShonkho language={language} />

        {/* 17. Searchable & Categorized FAQ */}
        <FAQSection language={language} />

        {/* 18. Site Visit Booking Form */}
        <SiteVisitSection language={language} preselectedPackage={selectedPackage} />

        {/* 19. Corporate Office & Direct Contacts */}
        <ContactSection language={language} />
      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer language={language} />

      {/* Sticky Bottom Actions & Scroll-to-Top */}
      <StickyCTA language={language} onOpenSiteVisit={scrollToSiteVisit} />
    </div>
  );
}
