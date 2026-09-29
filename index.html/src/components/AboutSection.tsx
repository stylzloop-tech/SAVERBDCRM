import React from 'react';
import { Language } from '../types';
import { CORE_OBJECTIVES } from '../data/siteContent';
import {
  Apple,
  Home,
  Trees,
  Smile,
  Award,
  CheckCircle,
  Leaf,
  Heart,
} from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const getObjectiveIcon = (id: string) => {
    switch (id) {
      case 'food':
        return <Apple className="w-6 h-6 text-[#C8A96B]" />;
      case 'hospitality':
        return <Home className="w-6 h-6 text-[#C8A96B]" />;
      case 'sustainable':
        return <Trees className="w-6 h-6 text-[#C8A96B]" />;
      case 'community':
        return <Smile className="w-6 h-6 text-[#C8A96B]" />;
      default:
        return <Leaf className="w-6 h-6 text-[#C8A96B]" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-wider">
              <span>{language === 'en' ? 'Our Story' : 'আমাদের ইতিহাস ও প্রেরণা'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight leading-tight">
              {language === 'en'
                ? 'A New Chapter in Green Living'
                : 'সবুজ জীবনযাত্রায় এক নতুন দিগন্ত'}
            </h2>

            {/* Narrative Prose */}
            <div className="space-y-4 text-base sm:text-lg text-gray-700 font-light leading-relaxed">
              <p>
                {language === 'en'
                  ? 'For generations, the people of Bangladesh have lived intrinsically close to the land, finding sustenance, peace, and identity in fertile river plains.'
                  : 'প্রজন্মের পর প্রজন্ম ধরে বাংলার মানুষ মাটির কাছাকাছি থেকেছে। নদীর পলিমাটি আর ফসলের ক্ষেতেই খুঁজে পেয়েছে জীবনের তৃপ্তি ও সুস্থ অস্তিত্ব।'}
              </p>
              <p className="font-serif italic text-xl sm:text-2xl text-[#123C2B] border-l-4 border-[#C8A96B] pl-4 py-1">
                {language === 'en'
                  ? '“Here, agriculture meets hospitality. The river meets the resort. The farm meets the family. And nature becomes part of everyday life.”'
                  : '“এখানে কৃষি মেশে আতিথেয়তায়। নদী মেশে রিসোর্টের সাথে। খামার মেশে পরিবারের নিবিড় সান্নিধ্যে। আর প্রকৃতি হয়ে ওঠে প্রাত্যহিক জীবনের অংশ।”'}
              </p>
              <p>
                {language === 'en'
                  ? 'SHONKHO Agro Village & Eco Resort translates this deep cultural heritage into a modern sustainable ecosystem. Spanning 102 Bighas on the scenic bank of the Shangu River in Dohazari, we merge commercial fruit and dairy cultivation with tranquil eco-tourism and transparent asset-backed ownership.'
                  : 'শঙ্খ এগ্রো ভিলেজ অ্যান্ড ইকো রিসোর্ট এই চিরন্তন সম্পর্ককে উন্নীত করেছে আধুনিক ও আন্তর্জাতিক মানের এক টেকসই মডেলে। দোহাজারীতে শঙ্খের কূলে ১০২ বিঘা জমিতে নিরাপদ ফল ও দুগ্ধ খামারের পাশাপাশি আমরা গড়ে তুলছি প্রকৃতিবান্ধব রিসোর্ট ও স্বচ্ছ অংশীদারিত্ব।'}
              </p>
            </div>

            {/* Trust and Heritage statement */}
            <div className="p-4 rounded-2xl bg-white border border-[#C8A96B]/30 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B2D20] text-[#C8A96B] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#123C2B]">
                  {language === 'en'
                    ? '30+ Years of Regional Trust & Heritage'
                    : '৩০+ বছরের আঞ্চলিক বিশ্বাস ও ঐতিহ্য'}
                </h4>
                <p className="text-xs text-gray-600 font-light">
                  {language === 'en'
                    ? 'Rooted in decades of documented regional reputation, ethical enterprise, and community respect in Chittagong.'
                    : 'চট্টগ্রামে তিন দশকেরও বেশি সময় ধরে গড়ে ওঠা সততা, নির্ভরযোগ্য সামাজিক সুনাম ও টেকসই উদ্যোক্তা ঐতিহ্য।'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Family and nature in Bangladesh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-semibold text-[#C8A96B] uppercase tracking-wider">
                  {language === 'en' ? 'Sustainable Harmony' : 'প্রাকৃতিক ভারসাম্য'}
                </span>
                <p className="font-serif text-lg font-bold">
                  {language === 'en'
                    ? 'Preserving the River, Nurturing the Soil'
                    : 'নদীকে রাখা নির্মল, মাটিকে রাখা সমৃদ্ধ'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Objectives Section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123C2B]">
              {language === 'en' ? 'Core Objectives' : 'আমাদের মূল চার উদ্দেশ্য'}
            </h3>
            <p className="text-sm text-gray-600 font-light mt-2">
              {language === 'en'
                ? 'Guiding every phase of development from agricultural planting to eco-hospitality operations.'
                : 'কৃষিপণ্য উৎপাদন থেকে শুরু করে রিসোর্ট পরিচালনা—প্রতিটি পদক্ষেপে আমাদের এই চার মূলনীতি অনুসরণ করা হয়।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_OBJECTIVES.map((obj) => (
              <div
                key={obj.id}
                id={`objective-${obj.id}`}
                className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#C8A96B] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B2D20] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getObjectiveIcon(obj.id)}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#123C2B] mb-2">
                    {language === 'en' ? obj.titleEn : obj.titleBn}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {language === 'en' ? obj.descEn : obj.descBn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-[#1F6045] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span>{language === 'en' ? 'Committed Standard' : 'প্রতিশ্রুতিবদ্ধ মান'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
