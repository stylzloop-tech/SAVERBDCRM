import React from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import {
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Apple,
  Milk,
  Carrot,
  Fish,
  Beef,
  ArrowRight,
} from 'lucide-react';

interface AgroShopSectionProps {
  language: Language;
}

export const AgroShopSection: React.FC<AgroShopSectionProps> = ({
  language,
}) => {
  const products = [
    {
      icon: Apple,
      nameEn: 'Thailand Red Lady Papaya',
      nameBn: 'থাইল্যান্ড রেড লেডি পেঁপে',
      descEn: 'Sweet, vitamin-rich, harvested fresh from our 1,100+ trees.',
      descBn: 'নিজস্ব ১১০০+ গাছ থেকে সরাসরি সংগৃহীত সুমিষ্ট ও পুষ্টিকর পেঁপে।',
      tagEn: 'Seasonal Harvest',
      tagBn: 'তাজা ফলন',
    },
    {
      icon: Milk,
      nameEn: 'Farm Fresh Deshi Milk & Ghee',
      nameBn: 'খাঁটি দেশি গরুর দুধ ও গাওয়া ঘি',
      descEn: 'Pure unadulterated milk from naturally grazed cattle.',
      descBn: 'প্রাকৃতিক কাঁচা ঘাস খাওয়া দেশি গাভীর বিশুদ্ধ ও ভেজালমুক্ত দুধ ও ঘি।',
      tagEn: 'Daily Supply',
      tagBn: 'প্রতিদিনের সংগ্রহ',
    },
    {
      icon: Carrot,
      nameEn: 'Chemical-Free Seasonal Vegetables',
      nameBn: 'নিরাপদ মৌসুমী শাকসবজি',
      descEn: 'Cucumber, tomatoes, leafy greens enriched with bio-fertilizers.',
      descBn: 'শসা, টমেটো, বাঁধাকপি ও শাকসবজি কোনো রাসায়নিক কীটনাশক ছাড়া।',
      tagEn: 'Zero Pesticides',
      tagBn: 'বিষমুক্ত শাকসবজি',
    },
    {
      icon: Fish,
      nameEn: 'Freshwater Fish & Aquaculture',
      nameBn: 'মিঠাপানির তাজা মাছ',
      descEn: 'Live Rui, Katla, and Pabda from river-fed clean ponds.',
      descBn: 'নদীর স্বচ্ছ পানিতে চাষকৃত রুই, কাতলা ও পাবদা মাছ।',
      tagEn: 'Live Catch',
      tagBn: 'জীবন্ত সংগ্রহ',
    },
  ];

  return (
    <section id="agro-shop" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B2D20] via-[#123C2B] to-[#0B2D20] rounded-3xl p-8 sm:p-14 text-white border border-[#C8A96B]/40 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative pattern */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B] text-[#C8A96B] text-xs font-semibold uppercase tracking-widest border border-[#C8A96B]/30">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Direct Farm Commerce' : 'খামার থেকে সরাসরি সরবরাহ'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {language === 'en'
                ? "From SHONKHO's Land to Your Home"
                : 'শঙ্খের মাটি থেকে সরাসরি আপনার ঘরে'}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {language === 'en'
                ? 'Discover seasonal fruits, fresh milk, vegetables, livestock and selected agro products delivered with total traceability from our Dohazari ecosystem.'
                : 'দোহাজারীতে শঙ্খের নিজস্ব খামারে উৎপাদিত তাজা ফলমূল, খাঁটি তরল দুধ, বিষমুক্ত শাকসবজি ও নিরাপদ কৃষিপণ্য সহজেই অর্ডার করুন আপনার পরিবারের জন্য।'}
            </p>
          </div>

          {/* Product Cards Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-[#C8A96B] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C8A96B]/20 text-[#C8A96B] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-emerald-300">
                        {language === 'en' ? p.tagEn : p.tagBn}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mb-1">
                      {language === 'en' ? p.nameEn : p.nameBn}
                    </h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {language === 'en' ? p.descEn : p.descBn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Primary Action Button to External Shop */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15">
            <div className="text-xs text-gray-300">
              <span className="text-white font-medium">Official Online Store: </span>
              <a
                href={BRAND_INFO.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A96B] underline hover:text-white transition-colors"
              >
                shop.saverbd.com
              </a>
            </div>

            <a
              href={BRAND_INFO.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="visit-agro-shop-cta"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#dcbe83] text-[#0B2D20] font-semibold text-sm hover:brightness-105 transition-transform hover:scale-105 shadow-xl"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{language === 'en' ? 'Visit SHONKHO Agro Shop' : 'শঙ্খ এগ্রো শপ ভিজিট করুন'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
