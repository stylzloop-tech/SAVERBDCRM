import React, { useState } from 'react';
import { Language } from '../types';
import {
  AGRO_UNITS,
  AGRO_HIGHLIGHTS,
  FARM_TO_TABLE_STEPS,
  BRAND_INFO,
} from '../data/siteContent';
import {
  Sprout,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  TreeDeciduous,
  Wheat,
  ShieldAlert,
} from 'lucide-react';

interface AgroVillageSectionProps {
  language: Language;
}

export const AgroVillageSection: React.FC<AgroVillageSectionProps> = ({
  language,
}) => {
  const [selectedUnit, setSelectedUnit] = useState<string>('dairy');

  const activeUnit =
    AGRO_UNITS.find((u) => u.id === selectedUnit) || AGRO_UNITS[0];

  return (
    <section id="agro-village" className="py-20 lg:py-28 bg-[#123C2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <Sprout className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Agro Tourism & Farming' : 'বাণিজ্যিক ও নিরাপদ কৃষি'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Experience Agriculture' : 'কৃষিকে শুধু দেখবেন না — অনুভব করুন'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'SHONKHO Agro Village seamlessly integrates commercial organic agricultural production with hands-on agro-tourism and pure farm-to-table hospitality.'
              : 'শঙ্খ এগ্রো ভিলেজ সরাসরি কৃষি উৎপাদনকে পর্যটনের সাথে যুক্ত করেছে—যেখানে নিরাপদ ফলমূল, দেশি ডেইরি ও মৎস্য খামার থেকে উৎপন্ন খাঁটি খাবার সরাসরি পরিবেশিত হয়।'}
          </p>
        </div>

        {/* Part 1: Interactive Agro Units Showcase */}
        <div className="mb-20">
          {/* Unit Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {AGRO_UNITS.map((unit) => (
              <button
                key={unit.id}
                type="button"
                id={`agro-tab-${unit.id}`}
                onClick={() => setSelectedUnit(unit.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedUnit === unit.id
                    ? 'bg-[#C8A96B] text-[#0B2D20] font-semibold shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-gray-200 border border-white/15'
                }`}
              >
                {language === 'en' ? unit.titleEn : unit.titleBn}
              </button>
            ))}
          </div>

          {/* Active Unit Detailed Display Card */}
          <div className="bg-[#0B2D20] rounded-3xl p-6 sm:p-10 border border-[#C8A96B]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#1F6045] text-emerald-300 text-xs font-semibold tracking-wider uppercase border border-emerald-400/30">
                    {language === 'en' ? activeUnit.tagEn : activeUnit.tagBn}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-[#C8A96B]/20 text-[#C8A96B] font-mono border border-[#C8A96B]/40">
                    {activeUnit.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {language === 'en' ? activeUnit.titleEn : activeUnit.titleBn}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {language === 'en' ? activeUnit.descEn : activeUnit.descBn}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-semibold text-[#C8A96B] uppercase tracking-wider block">
                    {language === 'en' ? 'Core Practices & Harvest:' : 'প্রধান বৈশিষ্ট্য ও উৎপাদন:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(language === 'en' ? activeUnit.itemsEn : activeUnit.itemsBn).map(
                      (item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200 font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Responsible Disclaimer Badge */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C8A96B] shrink-0" />
                  <span>
                    {language === 'en'
                      ? 'Designed around safe, hygienic, and responsible agro management.'
                      : 'স্বাস্থ্যসম্মত, পরিচ্ছন্ন ও পরিবেশবান্ধব ব্যবস্থাপনায় পরিচালিত।'}
                  </span>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-white/20 relative group">
                  <img
                    src={activeUnit.image}
                    alt={activeUnit.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 italic font-serif">
                    {language === 'en'
                      ? `Life at SHONKHO • ${activeUnit.titleEn}`
                      : `শঙ্খ এগ্রো ভিলেজ • ${activeUnit.titleBn}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: "Growing Now" Agro Highlights (Papaya, Jackfruit, Rice) */}
        <div className="mb-20 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold text-[#C8A96B] uppercase tracking-widest block">
                {language === 'en' ? 'Current Agro Highlights' : 'মাঠে চলমান ফসল ও ফলদ কানন'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {language === 'en' ? 'Growing Now on the Land' : 'শঙ্খের মাটিতে এখন যা ফলছে'}
              </h3>
            </div>
            <a
              href={BRAND_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/60 hover:bg-emerald-700 text-emerald-200 text-xs font-medium border border-emerald-400/30 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Order Seasonal Produce' : 'মৌসুমী পণ্য অর্ডার করুন'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AGRO_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                id={`highlight-${item.id}`}
                className="bg-[#0B2D20] rounded-2xl overflow-hidden border border-white/15 hover:border-[#C8A96B] transition-all flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#C8A96B] font-mono text-xs font-bold border border-[#C8A96B]/30">
                    {item.metric} {language === 'en' ? item.metricLabelEn : item.metricLabelBn}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C8A96B] font-semibold block">
                      {language === 'en' ? item.subtitleEn : item.subtitleBn}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mt-1">
                      {language === 'en' ? item.titleEn : item.titleBn}
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed mt-2">
                      {language === 'en' ? item.descEn : item.descBn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: From Farm to Table Visual Storytelling Flow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0B2D20] to-[#123C2B] border border-[#C8A96B]/30">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold text-[#C8A96B] uppercase tracking-wider">
              {language === 'en' ? 'Traceability & Freshness' : 'খাদ্যের বিশুদ্ধতা ও উৎস'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {language === 'en'
                ? 'Know Where Your Food Comes From'
                : 'আপনার খাবারের গল্প শুরু হয় কোথা থেকে—জানুন'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              {language === 'en'
                ? 'From nutrient-rich river silt to your family’s breakfast table, every step preserves true nutrition without harmful chemical additives.'
                : 'নদীর উর্বর মাটি থেকে আপনার খাবার টেবিল পর্যন্ত প্রতিটি ধাপে বজায় রাখা হয় পুষ্টি ও স্বাস্থ্যকর বিশুদ্ধতা।'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {FARM_TO_TABLE_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-white/5 rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-between group hover:border-[#C8A96B] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#C8A96B] text-[#0B2D20] font-mono font-bold text-xs flex items-center justify-center mb-3 shadow">
                  {step.step}
                </div>
                <h4 className="font-serif text-sm font-bold text-white mb-1.5">
                  {language === 'en' ? step.nameEn : step.nameBn}
                </h4>
                <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                  {language === 'en' ? step.descEn : step.descBn}
                </p>
              </div>
            ))}
          </div>

          {/* External Agro Shop CTA Banner */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8A96B] text-[#0B2D20] flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white">
                  {language === 'en' ? 'SHONKHO Agro Shop is Online' : 'শঙ্খ এগ্রো শপ সরাসরি অনলাইনে'}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {language === 'en'
                    ? 'Explore and order fresh papaya, deshi milk, seasonal fruits, and farm products.'
                    : 'তাজা পেঁপে, খাঁটি দুধ, মৌসুমী ফল ও খামারের নিজস্ব পণ্য সরাসরি সংগ্রহ করুন।'}
                </p>
              </div>
            </div>

            <a
              href={BRAND_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A96B] text-[#0B2D20] font-semibold text-xs uppercase tracking-wider hover:brightness-105 transition-transform hover:scale-105 shadow"
            >
              <span>{language === 'en' ? 'Visit shop.saverbd.com' : 'এগ্রো শপ ভিজিট করুন'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
