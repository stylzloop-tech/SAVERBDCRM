import React, { useState } from 'react';
import { Language } from '../types';
import { ACCOMMODATIONS, MASTER_PLAN_AREAS } from '../data/siteContent';
import {
  Hotel,
  Sparkles,
  CheckCircle2,
  Users,
  Eye,
  Calendar,
  Layers,
  Utensils,
  Waves,
  Compass,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

interface EcoResortSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const EcoResortSection: React.FC<EcoResortSectionProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const [activeTab, setActiveTab] = useState<'accommodations' | 'masterplan'>('accommodations');

  const getCategoryIcon = (categoryEn: string) => {
    if (categoryEn.includes('Dining')) return <Utensils className="w-5 h-5 text-[#C8A96B]" />;
    if (categoryEn.includes('Leisure')) return <Waves className="w-5 h-5 text-[#C8A96B]" />;
    if (categoryEn.includes('Nature')) return <Compass className="w-5 h-5 text-[#C8A96B]" />;
    return <Briefcase className="w-5 h-5 text-[#C8A96B]" />;
  };

  return (
    <section id="eco-resort" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-widest">
            <Hotel className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Nature Hospitality' : 'প্রকৃতিবান্ধব আতিথেয়তা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
            {language === 'en'
              ? 'Where Hospitality Meets Nature'
              : 'যেখানে আতিথেয়তা মিশে যায় প্রকৃতির সঙ্গে'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            {language === 'en'
              ? 'Thoughtfully designed riverfront cottages, authentic tranquility, and world-class eco-tourism facilities nestled naturally along the Shangu River in Dohazari.'
              : 'দোহাজারীতে শঙ্খ নদীর কোল ঘেঁষে পরিকল্পিত কটেজ, বুকভরা নির্মল বাতাস এবং আন্তর্জাতিক মানের ইকো-রিসোর্ট অবকাশের এক অপরূপ মেলবন্ধন।'}
          </p>

          {/* Strict Status Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              {language === 'en'
                ? 'Development Transparency: Facilities are labeled as CURRENT or PROPOSED in adherence to our Master Plan.'
                : 'উন্নয়ন স্বচ্ছতা: প্রতিটি সুবিধা ও কটেজের সাথে বর্তমান (CURRENT) অথবা প্রস্তাবিত (PROPOSED) স্ট্যাটাস সুস্পষ্টভাবে চিহ্নিত।'}
            </span>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            type="button"
            id="tab-accommodations"
            onClick={() => setActiveTab('accommodations')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'accommodations'
                ? 'bg-[#123C2B] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Hotel className="w-4 h-4 text-[#C8A96B]" />
            <span>{language === 'en' ? 'Accommodation Tiers' : 'কটেজ ও ভিলা পর্যায়'}</span>
          </button>

          <button
            type="button"
            id="tab-masterplan"
            onClick={() => setActiveTab('masterplan')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'masterplan'
                ? 'bg-[#123C2B] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Layers className="w-4 h-4 text-[#C8A96B]" />
            <span>{language === 'en' ? 'Resort Master Plan Facilities' : 'মাস্টার প্ল্যান সুবিধাসমূহ'}</span>
          </button>
        </div>

        {/* View 1: Accommodation Cards */}
        {activeTab === 'accommodations' && (
          <div id="accommodations" className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ACCOMMODATIONS.map((acc) => (
                <div
                  key={acc.id}
                  id={`acc-card-${acc.id}`}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#C8A96B] transition-all flex flex-col group"
                >
                  {/* Visual Header with Status Pill */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={acc.image}
                      alt={acc.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Facility Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/90 text-white shadow border border-white/20">
                        {acc.status}
                      </span>
                    </div>

                    {/* Member Tier Tag */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#123C2B]/90 text-[#C8A96B] border border-[#C8A96B]/40 shadow-sm">
                        {language === 'en' ? acc.tierEn : acc.tierBn}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-serif text-xl font-bold text-[#123C2B]">
                          {language === 'en' ? acc.nameEn : acc.nameBn}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                        <Users className="w-3.5 h-3.5 text-[#C8A96B]" />
                        <span>{language === 'en' ? `Capacity: ${acc.capacity}` : `ধারণক্ষমতা: ${acc.capacity}`}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                        {language === 'en' ? acc.descEn : acc.descBn}
                      </p>

                      {/* Amenities List */}
                      <div className="space-y-1.5 border-t border-gray-100 pt-3">
                        <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block">
                          {language === 'en' ? 'Included Highlights:' : 'প্রধান সুবিধাসমূহ:'}
                        </span>
                        {(language === 'en' ? acc.featuresEn : acc.featuresBn).map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6045] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenSiteVisit}
                        className="w-full py-2.5 rounded-xl border border-[#123C2B]/30 hover:border-[#123C2B] text-[#123C2B] hover:bg-[#123C2B] hover:text-white transition-colors text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Inquire on Tier' : 'প্যাকেজ অনুসন্ধান করুন'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 2: Interactive Master Plan Facilities */}
        {activeTab === 'masterplan' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MASTER_PLAN_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#123C2B]/10 flex items-center justify-center">
                      {getCategoryIcon(area.categoryEn)}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#123C2B]">
                      {language === 'en' ? area.categoryEn : area.categoryBn}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-1">
                    {area.items.map((facility, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 rounded-xl bg-gray-50 flex items-center justify-between gap-3 border border-gray-100"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#C8A96B]" />
                          <span className="text-sm text-[#1D2420] font-medium">
                            {language === 'en' ? facility.nameEn : facility.nameBn}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${
                            facility.status === 'CURRENT'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : facility.status === 'DEVELOPING'
                              ? 'bg-blue-100 text-blue-800 border-blue-300'
                              : 'bg-amber-100 text-amber-800 border-amber-300'
                          }`}
                        >
                          {facility.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
