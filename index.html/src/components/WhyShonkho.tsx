import React from 'react';
import { Language } from '../types';
import { WHY_SHONKHO_ITEMS } from '../data/siteContent';
import {
  Waves,
  Layers,
  Leaf,
  Users,
  Wheat,
  Hotel,
  HeartHandshake,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface WhyShonkhoProps {
  language: Language;
}

export const WhyShonkho: React.FC<WhyShonkhoProps> = ({ language }) => {
  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-[#C8A96B]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#C8A96B]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#C8A96B]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C8A96B]" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5 text-[#C8A96B]" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-[#C8A96B]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C8A96B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#C8A96B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  return (
    <section id="why-shonkho" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Core Distinction' : 'কেন বেছে নেবেন শঙ্খ'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
            {language === 'en' ? 'Why SHONKHO?' : 'শঙ্খ কেন অনন্য ও ব্যতিক্রমী?'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            {language === 'en'
              ? 'An integrated balance of riverfront geography, active agro production, multi-generational family values, and responsible development.'
              : 'নদীতীরবর্তী মনোরম অবস্থান, সক্রিয় ফল ও ডেইরি উৎপাদন, পারিবারিক সুস্থ বিনোদন ও পরিবেশবান্ধব উন্নয়নের এক অনন্য সমাহার।'}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SHONKHO_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#C8A96B] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#123C2B]/10 group-hover:bg-[#123C2B] flex items-center justify-center mb-4 transition-colors">
                  {getWhyIcon(item.icon)}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#123C2B] mb-2 group-hover:text-[#1F6045] transition-colors">
                  {language === 'en' ? item.titleEn : item.titleBn}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {language === 'en' ? item.descEn : item.descBn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[11px] text-[#C8A96B] font-semibold uppercase tracking-wider">
                <span>0{idx + 1} • SHONKHO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
