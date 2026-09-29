import React from 'react';
import { Language } from '../types';
import { TRUST_BADGES } from '../data/siteContent';
import { ShieldCheck, Sprout, Users, Waves } from 'lucide-react';

interface TrustBadgesProps {
  language: Language;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ language }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C8A96B]" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#C8A96B]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#C8A96B]" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#C8A96B]" />;
      default:
        return <Sprout className="w-6 h-6 text-[#C8A96B]" />;
    }
  };

  return (
    <section
      id="trust-badges"
      className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Trust Badges"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRUST_BADGES.map((badge, idx) => (
          <div
            key={idx}
            id={`trust-badge-${idx}`}
            className="group relative bg-[#123C2B] rounded-2xl p-5 border border-[#C8A96B]/30 shadow-xl hover:border-[#C8A96B] transition-all duration-300 hover:-translate-y-1 text-white"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B2D20] border border-[#C8A96B]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                {getIcon(badge.icon)}
              </div>
              <div className="space-y-1">
                <h2 className="font-serif text-base font-bold text-white group-hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? badge.titleEn : badge.titleBn}
                </h2>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {language === 'en' ? badge.descEn : badge.descBn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
