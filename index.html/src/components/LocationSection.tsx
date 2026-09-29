import React from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import {
  MapPin,
  Train,
  Car,
  Compass,
  Waves,
  Calendar,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface LocationSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const connectivityHighlights = [
    {
      icon: Waves,
      titleEn: 'Scenic Riverbank',
      titleBn: 'নদীর শান্ত পাড়ে অবস্থিত',
      descEn: 'Located on the serene water-curve of the Shonkho (Shangu) River with natural breezeways.',
      descBn: 'শঙ্খ (সাঙ্গু) নদীর শান্ত মোহনা ও তীর ঘেঁষে গড়ে ওঠা প্রাকৃতিক শ্যামল প্রাঙ্গণ।',
    },
    {
      icon: Train,
      titleEn: 'Dohazari Railway Link',
      titleBn: 'দোহাজারী রেলওয়ে স্টেশন',
      descEn: 'Approximately 5 km from Dohazari Railway Station, connecting smoothly with the newly inaugurated modern rail line.',
      descBn: 'দোহাজারী রেলওয়ে স্টেশন থেকে মাত্র প্রায় ৫ কি.মি., যা আধুনিক ট্রেন যাতায়াতকে অত্যন্ত সহজ করে তুলেছে।',
    },
    {
      icon: Car,
      titleEn: 'Chittagong–Bandarban Highway',
      titleBn: 'চট্টগ্রাম-বান্দরবান মহাসড়ক',
      descEn: 'Positioned close to the key highway connecting Chattogram city to the scenic Bandarban hill tract corridor.',
      descBn: 'চট্টগ্রাম মহানগর থেকে বান্দরবানগামী মূল মহাসড়ক করিডোরের সন্নিকটে সুবিধাজনক অবস্থান।',
    },
    {
      icon: Compass,
      titleEn: '102 Bigha Master Land',
      titleBn: '১০২ বিঘার মাস্টার প্ল্যান',
      descEn: 'Spacious contiguous parcel enabling organic farming zones, luxury cottage loops, and lake features.',
      descBn: 'একক অবিচ্ছিন্ন ১০২ বিঘার সুপরিসর ভূখণ্ড, যা কৃষি ও বিলাসবহুল কটেজের জন্য সুপরিকল্পিত।',
    },
  ];

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#123C2B] text-white relative overflow-hidden">
      {/* Decorative background water ripple texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Project Geography' : 'প্রকল্পের ভৌগোলিক অবস্থান'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en'
              ? 'Where the River Welcomes You'
              : 'যেখানে নদী স্বাগত জানায় আপনাকে'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'Situated in Lalotia, Dohazari, Chattogram, on the tranquil bank of the scenic Shonkho River — easily accessible yet wonderfully sheltered from urban noise.'
              : 'চট্টগ্রামের দোহাজারীর লালটিয়ায় অপরূপ শঙ্খ নদীর কূলে অবস্থিত — শহর থেকে সহজে পৌঁছানো যায়, অথচ নাগরিক ধুলোবালি ও যান্ত্রিক শব্দ থেকে সম্পূর্ণ মুক্ত।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Location Facts & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#0B2D20]/80 border border-[#C8A96B]/30 shadow-lg">
                <span className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold block mb-1">
                  {language === 'en' ? 'Official Project Address' : 'অফিসিয়াল প্রকল্প ঠিকানা'}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {language === 'en' ? BRAND_INFO.projectLocationEn : BRAND_INFO.projectLocationBn}
                </h3>
                <div className="text-xs text-gray-300 space-y-1 font-light">
                  <p>• {language === 'en' ? 'Bank: Shonkho / Shangu River' : 'তীর: শঙ্খ / সাঙ্গু নদী'}</p>
                  <p>• {language === 'en' ? 'Land: Approx. 102 Bigha' : 'আয়তন: আনুমানিক ১০২ বিঘা'}</p>
                  <p>• {language === 'en' ? 'Connectivity: ~5 km from Dohazari Railway Station' : 'যাতায়াত: দোহাজারী রেলস্টেশন হতে প্রায় ৫ কি.মি.'}</p>
                </div>
              </div>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {connectivityHighlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C8A96B]/50 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#C8A96B]/20 text-[#C8A96B] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {language === 'en' ? item.titleEn : item.titleBn}
                        </h4>
                        <p className="text-xs text-gray-300 font-light mt-0.5 leading-relaxed">
                          {language === 'en' ? item.descEn : item.descBn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#dbbf87] text-[#0B2D20] font-semibold text-sm shadow-md hover:brightness-105 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {language === 'en' ? 'Schedule a Guided Site Visit' : 'প্রকল্প পরিদর্শনের বুকিং করুন'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Rich Interactive Visual Map Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border border-[#C8A96B]/40 shadow-2xl bg-[#0B2D20] flex-1 flex flex-col">
              {/* Map Visual Header */}
              <div className="relative h-64 sm:h-80 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                  alt="Dohazari riverbank scenic view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D20] via-black/40 to-black/20" />

                {/* Floating GPS Pin Badge on Map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-[#C8A96B] text-[#0B2D20] flex items-center justify-center shadow-2xl border-4 border-[#0B2D20]">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-[#C8A96B]/40 shadow-lg whitespace-nowrap">
                    SHONKHO • Lalotia, Dohazari
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-[#0B2D20]/90 border border-white/20 text-xs text-emerald-300 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{language === 'en' ? 'Live Project Site' : 'সরাসরি প্রকল্প সাইট'}</span>
                </div>
              </div>

              {/* Map Details & Route Info */}
              <div className="p-6 sm:p-8 space-y-5 bg-[#0B2D20]/95 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-white/10 pb-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block">
                      {language === 'en' ? 'From Station' : 'রেলওয়ে স্টেশন'}
                    </span>
                    <span className="font-serif text-lg font-bold text-[#C8A96B]">~ 5 KM</span>
                    <span className="text-[11px] text-gray-300 block">
                      {language === 'en' ? 'Dohazari Railway Stn' : 'দোহাজারী স্টেশন'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block">
                      {language === 'en' ? 'From City' : 'চট্টগ্রাম শহর হতে'}
                    </span>
                    <span className="font-serif text-lg font-bold text-[#C8A96B]">~ 45 KM</span>
                    <span className="text-[11px] text-gray-300 block">
                      {language === 'en' ? 'Chattogram Center' : 'চট্টগ্রাম শহর কেন্দ্র'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 block">
                      {language === 'en' ? 'River Frontage' : 'নদী মোহনা'}
                    </span>
                    <span className="font-serif text-lg font-bold text-[#C8A96B]">Shangu River</span>
                    <span className="text-[11px] text-gray-300 block">
                      {language === 'en' ? 'Direct Water Access' : 'সরাসরি ঘাট সুবিধা'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-gray-300 font-light">
                    {language === 'en'
                      ? 'Note: Site visits require prior appointment for transportation and executive briefing.'
                      : 'দৃষ্টি আকর্ষণ: সম্মানীত অতিথিদের অভ্যর্থনা ও ব্রিফিং নিশ্চিত করতে পূর্বনির্ধারিত শিডিউল প্রয়োজন।'}
                  </p>

                  <a
                    href="https://maps.google.com/?q=Dohazari+Chittagong+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C8A96B] hover:underline shrink-0"
                  >
                    <span>{language === 'en' ? 'Open Regional Map' : 'ম্যাপে এলাকা দেখুন'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
