import React, { useState } from 'react';
import { Language } from '../types';
import { EXPERIENCES } from '../data/siteContent';
import {
  Compass,
  Sparkles,
  Flame,
  Heart,
  Bike,
  Sailboat,
  Fish,
  Train,
  Send,
  Calendar,
} from 'lucide-react';

interface ExperiencesSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const [filter, setFilter] = useState<'all' | 'nature' | 'adventure' | 'family' | 'sports'>('all');

  const getExperienceIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C8A96B]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#C8A96B]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#C8A96B]" />;
      case 'Bike':
        return <Bike className="w-5 h-5 text-[#C8A96B]" />;
      case 'Sailboat':
        return <Sailboat className="w-5 h-5 text-[#C8A96B]" />;
      case 'Fish':
        return <Fish className="w-5 h-5 text-[#C8A96B]" />;
      case 'Train':
        return <Train className="w-5 h-5 text-[#C8A96B]" />;
      case 'Send':
        return <Send className="w-5 h-5 text-[#C8A96B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  const filtered = filter === 'all' ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === filter);

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-[#123C2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Lifestyle & Recreation' : 'অভিজ্ঞতা ও বিনোদন'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Memories by the River' : 'শঙ্খের কূলে স্মরণীয় মুহূর্ত'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'From traditional riverboat cruises to organic cattle interaction, cycling orchard paths, and camping under unpolluted night skies.'
              : 'চিরায়ত দেশি নৌকায় ভ্রমণ, বাগানে সাইক্লিং, শিশু ও পরিবারের জন্য পেট জু এবং তারার নিচে নদীতীরে ক্যাম্পিংয়ের নির্মল অনুভূতি।'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', labelEn: 'All Activities', labelBn: 'সকল কার্যক্রম' },
            { key: 'nature', labelEn: 'Nature & River', labelBn: 'নদী ও প্রকৃতি' },
            { key: 'adventure', labelEn: 'Adventure & Camp', labelBn: 'ক্যাম্পিং ও অ্যাডভেঞ্চার' },
            { key: 'family', labelEn: 'Family & Children', labelBn: 'পরিবার ও শিশু' },
            { key: 'sports', labelEn: 'Sports & Cycling', labelBn: 'খেলাধুলা ও সাইক্লিং' },
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              id={`exp-filter-${cat.key}`}
              onClick={() => setFilter(cat.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat.key
                  ? 'bg-[#C8A96B] text-[#0B2D20] font-semibold shadow-md scale-105'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/15'
              }`}
            >
              {language === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              id={`exp-item-${item.id}`}
              className="bg-[#0B2D20] rounded-3xl overflow-hidden border border-white/15 hover:border-[#C8A96B] transition-all flex flex-col group shadow-lg"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D20] via-black/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border ${
                      item.status === 'CURRENT'
                        ? 'bg-emerald-900/90 text-emerald-300 border-emerald-500/40'
                        : item.status === 'DEVELOPING'
                        ? 'bg-blue-900/90 text-blue-300 border-blue-500/40'
                        : 'bg-amber-900/90 text-amber-300 border-amber-500/40'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#123C2B]/90 border border-[#C8A96B]/50 flex items-center justify-center shadow">
                    {getExperienceIcon(item.iconName)}
                  </div>
                  <span className="text-xs text-[#C8A96B] font-medium tracking-wide">
                    {language === 'en' ? item.categoryEn : item.categoryBn}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C8A96B] transition-colors">
                    {language === 'en' ? item.titleEn : item.titleBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-2">
                    {language === 'en' ? item.descEn : item.descBn}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>
                    {item.status === 'CURRENT'
                      ? language === 'en'
                        ? 'Ready for Site Visitors'
                        : 'ভিজিটরদের জন্য উন্মুক্ত'
                      : language === 'en'
                      ? 'Part of Project Roadmap'
                      : 'মাস্টার প্ল্যান রোডম্যাপের অংশ'}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenSiteVisit}
                    className="text-[#C8A96B] hover:underline font-medium cursor-pointer"
                  >
                    {language === 'en' ? 'Inquire' : 'বিস্তারিত'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
