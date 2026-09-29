import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import {
  Menu,
  X,
  Phone,
  Calendar,
  MessageSquare,
  Globe,
  ShoppingBag,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenSiteVisit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelBn: 'হোম' },
    { href: '#about', labelEn: 'About', labelBn: 'পরিচিতি' },
    { href: '#agro-village', labelEn: 'Agro Village', labelBn: 'এগ্রো ভিলেজ' },
    { href: '#eco-resort', labelEn: 'Eco Resort', labelBn: 'ইকো রিসোর্ট' },
    { href: '#ownership', labelEn: 'Ownership', labelBn: 'মালিকানা' },
    { href: '#experiences', labelEn: 'Experiences', labelBn: 'অভিজ্ঞতা' },
    { href: '#gallery', labelEn: 'Gallery', labelBn: 'গ্যালারি' },
    { href: '#stories', labelEn: 'Life at SHONKHO', labelBn: 'শঙ্খ জীবন' },
    { href: '#faq', labelEn: 'FAQ', labelBn: 'জিজ্ঞাসা' },
    { href: '#contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Assalamu Alaikum, I would like to know more about SHONKHO Agro Village & Eco Resort and arrange a site visit.'
  )}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B2D20]/95 glass-nav py-3.5 shadow-xl border-b border-[#C8A96B]/20 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a
          href="#home"
          id="brand-logo"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#123C2B] border border-[#C8A96B]/60 flex items-center justify-center text-[#C8A96B] shadow-md group-hover:border-[#C8A96B] transition-colors">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tighter">
              🌿
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              SHONKHO
              <span className="text-[10px] font-sans font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#C8A96B] text-[#0B2D20]">
                SAVER
              </span>
            </span>
            <span className="text-[11px] text-gray-300 tracking-wider font-light flex items-center gap-1">
              Agro Village & Eco Resort
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-sm font-medium"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="px-2.5 py-1.5 rounded-md text-gray-200 hover:text-[#C8A96B] hover:bg-white/5 transition-colors whitespace-nowrap text-[13px] 2xl:text-sm font-normal"
            >
              {language === 'en' ? link.labelEn : link.labelBn}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs & Language Switch */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language Toggle Button */}
          <button
            type="button"
            id="lang-toggle-btn"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/20 text-xs text-white hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors cursor-pointer bg-white/5"
            title="Switch language (বাংলা / English)"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium font-bn">
              {language === 'en' ? 'বাংলা' : 'English'}
            </span>
          </button>

          {/* Shop Agro Products Link */}
          <a
            href={BRAND_INFO.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-agro-shop-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/30 hover:bg-emerald-950/40 transition-colors"
            title="Visit SHONKHO Agro Shop"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'en' ? 'Agro Shop' : 'এগ্রো শপ'}</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1F6045] text-white hover:bg-[#123C2B] border border-emerald-400/40 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>WhatsApp</span>
          </a>

          {/* Book Site Visit CTA */}
          <button
            type="button"
            id="nav-site-visit-cta"
            onClick={onOpenSiteVisit}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C8A96B] to-[#d6bc86] text-[#0B2D20] hover:brightness-105 transition-all shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.02]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {language === 'en' ? 'Book Site Visit' : 'সাইট ভিজিট বুক করুন'}
            </span>
          </button>
        </div>

        {/* Mobile Buttons (Lang + Hamburger) */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            id="mobile-lang-btn"
            onClick={toggleLanguage}
            className="px-2 py-1 rounded border border-white/20 text-xs text-white font-medium bg-white/10 font-bn"
          >
            {language === 'en' ? 'বাংলা' : 'EN'}
          </button>

          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C8A96B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden bg-[#0B2D20] border-b border-[#C8A96B]/30 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 text-white"
        >
          <div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-link-${link.href.replace('#', '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded text-sm text-gray-200 hover:text-[#C8A96B] hover:bg-white/5"
              >
                <span>{language === 'en' ? link.labelEn : link.labelBn}</span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              type="button"
              id="mobile-drawer-site-visit"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#C8A96B] to-[#e4cc96] text-[#0B2D20] font-semibold text-sm shadow cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>
                {language === 'en' ? 'Book a Site Visit' : 'সাইট ভিজিট বুক করুন'}
              </span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#1F6045] text-white text-xs font-medium border border-emerald-400/30"
              >
                <MessageSquare className="w-4 h-4 text-[#C8A96B]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-shop"
                className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-950/60 text-emerald-300 text-xs font-medium border border-emerald-500/40"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{language === 'en' ? 'Agro Shop' : 'এগ্রো শপ'}</span>
              </a>
            </div>

            <div className="text-center pt-2 text-[11px] text-gray-400">
              Hotline:{' '}
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="text-[#C8A96B] font-medium underline"
              >
                {BRAND_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
