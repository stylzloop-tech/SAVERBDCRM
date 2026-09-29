import React from 'react';
import { Language } from '../types';
import { DAY_AT_SHONKHO } from '../data/siteContent';
import {
  Sunrise,
  Footprints,
  Sprout,
  UtensilsCrossed,
  Compass,
  Sunset,
  Moon,
  Clock,
} from 'lucide-react';

interface DayAtShonkhoProps {
  language: Language;
}

export const DayAtShonkho: React.FC<DayAtShonkhoProps> = ({ language }) => {
  const getTimelineIcon = (name: string) => {
    switch (name) {
      case 'Sunrise':
        return <Sunrise className="w-5 h-5 text-[#C8A96B]" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#C8A96B]" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-[#C8A96B]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#C8A96B]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C8A96B]" />;
      case 'Sunset':
        return <Sunset className="w-5 h-5 text-[#C8A96B]" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-[#C8A96B]" />;
      default:
        return <Clock className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  return (
    <section id="day-story" className="py-20 lg:py-28 bg-[#F8F7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Immersion Timeline' : 'একদিনের জীবনধারা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
            {language === 'en' ? 'A Day at SHONKHO' : 'শঙ্খের একদিন — জীবনের গল্প'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            {language === 'en'
              ? 'Slow down and discover how the rhythm of the river, the scent of the morning soil, and the warmth of community reframe your everyday life.'
              : 'নদীর স্বাভাবিক ছন্দ, ভোরের মাটির সুবাস এবং সূর্যাস্তের নিস্তব্ধতার মাঝে নিজের মন ও শরীরকে নতুন শক্তিতে উজ্জীবিত করার মুহূর্ত।'}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Guide Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -ml-px w-0.5 bg-gradient-to-b from-[#C8A96B]/20 via-[#C8A96B] to-[#C8A96B]/20 hidden sm:block" />

          <div className="space-y-12">
            {DAY_AT_SHONKHO.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="w-full sm:w-1/2 sm:px-8 pl-12 sm:pl-8">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#C8A96B] transition-all group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#C8A96B] px-2.5 py-0.5 rounded bg-[#0B2D20]">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123C2B] mb-2 group-hover:text-[#1F6045] transition-colors">
                        {language === 'en' ? item.titleEn : item.titleBn}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                        {language === 'en' ? item.descEn : item.descBn}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-4 sm:top-auto w-10 h-10 rounded-full bg-[#0B2D20] border-2 border-[#C8A96B] text-white flex items-center justify-center shadow-lg shrink-0 z-10">
                    {getTimelineIcon(item.icon)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
