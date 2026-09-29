import React from 'react';
import { Language } from '../types';
import { DEVELOPMENT_PHASES, OWNERSHIP_STEPS } from '../data/siteContent';
import {
  GitCommit,
  CheckCircle2,
  Calendar,
  Shield,
  ArrowRight,
  Sparkles,
  Milestone,
} from 'lucide-react';

interface RoadmapAndProcessProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const RoadmapAndProcess: React.FC<RoadmapAndProcessProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  return (
    <section id="roadmap-process" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Development Journey / Roadmap */}
        <div>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-widest">
              <Milestone className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Development Journey' : 'পরিকল্পিত উন্নয়ন অগ্রযাত্রা'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
              {language === 'en'
                ? 'Phased Master Plan Roadmap'
                : 'পর্যায়ক্রমিক মাস্টার প্ল্যান রোডম্যাপ'}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
              {language === 'en'
                ? 'A disciplined multi-phase vision: actively cultivating agriculture while systematically engineering future world-class eco-tourism infrastructure.'
                : 'সুশৃঙ্খল ও পরিকল্পিত রোডম্যাপ: বর্তমানে নিরাপদ কৃষিপণ্য উৎপাদন সফলভাবে চলমান রেখেই ধাপে ধাপে পর্যটন ও বিনোদন সুবিধার আন্তর্জাতিক বাস্তবায়ন।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEVELOPMENT_PHASES.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-lg hover:border-[#C8A96B] transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#0B2D20] px-3 py-1 rounded-full bg-[#C8A96B]/30 border border-[#C8A96B]/50">
                      {language === 'en' ? phase.phase : phase.phaseBn}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${
                        idx === 0
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : idx === 1
                          ? 'bg-blue-100 text-blue-800 border-blue-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}
                    >
                      {language === 'en' ? phase.statusEn : phase.statusBn}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#123C2B] mb-4">
                    {language === 'en' ? phase.titleEn : phase.titleBn}
                  </h3>

                  <div className="space-y-2.5">
                    {(language === 'en' ? phase.itemsEn : phase.itemsBn).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#1F6045] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 italic">
                  {idx === 2
                    ? language === 'en'
                      ? '* Future phase: Subject to engineering schedules & approvals.'
                      : '* ভবিষ্যৎ পর্যায়: মাস্টার প্ল্যান ডিজাইন ও কারিগরি অনুমোদন সাপেক্ষ।'
                    : language === 'en'
                    ? 'Active site progress in Dohazari'
                    : 'দোহাজারী সাইটে প্রত্যক্ষ কাজের অগ্রগতি'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 5-Step Ownership Process */}
        <div className="bg-[#123C2B] text-white rounded-3xl p-8 sm:p-14 border border-[#C8A96B]/40 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] text-[#C8A96B] text-xs font-semibold uppercase tracking-widest border border-[#C8A96B]/40">
              <Shield className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Transparent Journey' : 'মালিকানা প্রাপ্তির ৫টি সহজ ধাপ'}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {language === 'en'
                ? 'How to Become a SHONKHO Member'
                : 'কীভাবে হবেন শঙ্খের সম্মানিত অংশীদার'}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {language === 'en'
                ? 'A straightforward, legally documented process designed to ensure total clarity, informed decisions, and peaceful asset ownership.'
                : 'স্বচ্ছ, দলিলসমর্থিত ও আইনি নিশ্চয়তায় পরিচালিত এক সুস্পষ্ট প্রক্রিয়া—যাতে আপনি সঠিক সিদ্ধান্ত নিয়ে নিশ্চিন্ত মনে অংশীদার হতে পারেন।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {OWNERSHIP_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#0B2D20] p-5 rounded-2xl border border-white/15 flex flex-col justify-between space-y-3 hover:border-[#C8A96B] transition-colors"
              >
                <div>
                  <span className="w-8 h-8 rounded-full bg-[#C8A96B] text-[#0B2D20] font-mono font-bold text-xs flex items-center justify-center mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white mb-1.5">
                    {language === 'en' ? step.titleEn : step.titleBn}
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {language === 'en' ? step.descEn : step.descBn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
            <p>
              {language === 'en'
                ? 'Ownership registration and documentation are processed according to applicable legal documentation and the formal Membership Agreement.'
                : 'মালিকানা রেজিস্ট্রি এবং আইনি দলিলপত্র বাংলাদেশের প্রচলিত আইন ও স্বাক্ষরিত মেম্বারশিপ চুক্তির শর্তাবলী অনুযায়ী সম্পন্ন করা হয়।'}
            </p>
            <button
              type="button"
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C8A96B] text-[#0B2D20] font-semibold text-xs shrink-0 hover:brightness-105 transition-transform hover:scale-105 cursor-pointer shadow"
            >
              <span>{language === 'en' ? 'Start with a Site Visit' : 'প্রকল্প পরিদর্শন বুক করুন'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
