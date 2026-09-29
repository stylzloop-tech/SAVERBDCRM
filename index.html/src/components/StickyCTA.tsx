import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface StickyCTAProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
          className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full bg-[#123C2B] text-[#C8A96B] border border-[#C8A96B]/50 shadow-xl flex items-center justify-center hover:bg-[#0B2D20] hover:scale-110 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Persistent Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B2D20]/95 backdrop-blur-md border-t border-[#C8A96B]/30 px-4 py-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        {/* Direct Call Button */}
        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-1.5 text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/8801965784634?text=Hello%20SHONKHO,%20I%20would%20like%20more%20information%20about%20the%20Agro%20Village%20and%20Eco%20Resort."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 rounded-xl bg-[#1F6045] hover:bg-[#123C2B] text-white flex items-center justify-center gap-1.5 text-xs font-semibold border border-emerald-400/30"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span>WhatsApp</span>
        </a>

        {/* Book Site Visit CTA */}
        <button
          type="button"
          onClick={onOpenSiteVisit}
          className="flex-[1.4] py-2 rounded-xl bg-gradient-to-r from-[#C8A96B] to-[#dcbe83] text-[#0B2D20] flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Site Visit' : 'ভিজিট বুক'}</span>
        </button>
      </div>
    </>
  );
};
