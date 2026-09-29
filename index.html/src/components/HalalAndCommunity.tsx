import React from 'react';
import { Language } from '../types';
import {
  ShieldCheck,
  HeartHandshake,
  Heart,
  Sprout,
  Users,
  Sun,
  Activity,
  Smile,
  Trees,
  CheckCircle,
} from 'lucide-react';

interface HalalAndCommunityProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const HalalAndCommunity: React.FC<HalalAndCommunityProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  return (
    <section id="values" className="py-20 lg:py-28 bg-[#0B2D20] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: Halal Values & Responsible Business */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Core Ethical Foundation' : 'নৈতিক মূল্যবোধ ও পরিচালনা'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {language === 'en'
                ? 'Halal Values. Responsible Business. Meaningful Living.'
                : 'হালাল মূল্যবোধ। দায়িত্বশীল ব্যবসা। অর্থপূর্ণ জীবন।'}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {language === 'en'
                ? 'At SHONKHO, ethical business is not a marketing strategy—it is our fundamental identity. We believe in absolute contractual transparency, wholesome food without deception, ecological stewardship, and mutual responsibility.'
                : 'শঙ্খের পথচলায় নৈতিকতা কোনো চটকদার বিজ্ঞাপন নয়—এটি আমাদের মৌলিক চেতনা। আমরা বিশ্বাস করি চুক্তিভিত্তিক স্বচ্ছতা, খাদ্যে ভেজালহীন সততা, পরিবেশের সুরক্ষা ও পারস্পরিক সামাজিক শ্রদ্ধাবোধে।'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#C8A96B]">
                  <CheckCircle className="w-4 h-4" />
                  <span>{language === 'en' ? 'Halal-Conscious Operations' : 'হালাল-সচেতন পরিচালনা'}</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Adhering to ethical commerce, mutual profit-sharing principles, and transparent ownership records.'
                    : 'নৈতিক ব্যবসা, মুনাফা বণ্টনের স্পষ্ট নীতিমালা ও আইনি মালিকানা নথিপত্রের নিশ্চয়তা।'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#C8A96B]">
                  <Sprout className="w-4 h-4" />
                  <span>{language === 'en' ? 'Wholesome Food (Tayyib)' : 'তাইয়্যিব বা পবিত্র নিরাপদ খাদ্য'}</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Prioritizing natural livestock welfare, organic compost, and chemical-free agricultural produce.'
                    : 'পশুপাখির প্রতি মানবিক যত্ন, প্রাকৃতিক কাঁচা ঘাস ও নিরাপদ কীটনাশকমুক্ত ফলমূল উৎপাদন।'}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C8A96B]/40 aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop"
                alt="Bangladesh riverfront serenity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D20] via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B2D20]/90 backdrop-blur-md border border-white/20 text-xs text-gray-200">
                <p className="italic font-serif text-sm text-[#C8A96B]">
                  {language === 'en'
                    ? '“A nature-led sanctuary built on sincerity, trust, and family peace.”'
                    : '“আন্তরিকতা, বিশ্বাস এবং পারিবারিক প্রশান্তির ওপর প্রতিষ্ঠিত এক সবুজ কানন।”'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Community & Family Belonging */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Family walking in green nature"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[#C8A96B] font-semibold">
                {language === 'en' ? 'Belonging & Connection' : 'পারিবারিক বন্ধন ও একাত্মতা'}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {language === 'en'
                  ? 'A Place for Families to Belong'
                  : 'যেখানে পরিবার খুঁজে পায় আপন ঠিকানা'}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'SHONKHO is designed not simply as a destination, but as a place where grandparents, parents, and children create lasting memories, explore authentic agriculture, and rediscover the joy of shared time in nature.'
                  : 'শঙ্খ শুধু কোনো অবকাশ কেন্দ্র নয়; এটি এমন এক মিলনমেলা যেখানে দাদা-দাদি, মা-বাবা এবং সন্তানরা একসাথে মেঠোপথে হেঁটে, নিজ হাতে গাছ থেকে ফল তুলে পারিবারিক স্মৃতির এক চিরন্তন ভাণ্ডার গড়ে তোলে।'}
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C8A96B]" />
                  <span>{language === 'en' ? 'Multi-Generational' : 'প্রজন্মব্যাপী বন্ধন'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#C8A96B]" />
                  <span>{language === 'en' ? 'Safe Environment' : 'নিরাপদ ও সম্মানজনক পরিবেশ'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-[#C8A96B]" />
                  <span>{language === 'en' ? 'Healthy Outdoor Space' : 'খোলামেলা সুস্থ প্রাঙ্গণ'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: Wellness Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="bg-[#123C2B] rounded-3xl p-8 sm:p-12 border border-[#C8A96B]/30 space-y-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A96B] uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Holistic Living' : 'সুস্থতা ও মানসিক প্রশান্তি'}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {language === 'en'
                  ? 'Wellness Begins With the Environment Around You'
                  : 'সুস্থতা শুরু হয় আপনার চারপাশের বিশুদ্ধ পরিবেশ থেকে'}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {language === 'en'
                  ? 'Clean river breeze, morning dew, unpolluted quiet nights, safe nutritious farm food, and continuous walking trails work naturally to restore your body and calm your spirit.'
                  : 'শঙ্খ নদীর মিষ্টি বাতাস, সকালের শিশিরভেজা মেঠোপথ, শব্দদূষণমুক্ত নিঝুম রাত আর খাঁটি পুষ্টিকর খাদ্য—প্রাকৃতিক নিয়মেই আপনার শরীর ও মনকে করে তোলে চাঙ্গা ও প্রাণবন্ত।'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-serif text-base font-bold text-[#C8A96B] mb-1">
                  {language === 'en' ? 'Unpolluted Air' : 'ধুলোবালি মুক্ত বাতাস'}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {language === 'en'
                    ? 'Dohazari river valley air with zero urban factory exhaust.'
                    : 'শহুরে কারখানার ধোঁয়া ও যানজটমুক্ত নদীর বিশুদ্ধ উন্মুক্ত বাতাস।'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-serif text-base font-bold text-[#C8A96B] mb-1">
                  {language === 'en' ? 'Natural Physical Movement' : 'স্বাভাবিক শারীরিক সচলতা'}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {language === 'en'
                    ? 'Miles of contiguous riverbank walking, jogging, and cycling trails.'
                    : 'নদীতীর ও বাগানের দীর্ঘ ট্রেইলে প্রতিদিন হাঁটা ও সাইকেল চালানোর সুস্থ অভ্যাস।'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-serif text-base font-bold text-[#C8A96B] mb-1">
                  {language === 'en' ? 'Partner Healthcare Privilege' : 'পার্টনার স্বাস্থ্যসেবা প্রিভিলেজ'}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {language === 'en'
                    ? 'Preferential diagnostic rates through participating healthcare partners.'
                    : 'মেম্বারশিপের অধীনে অনুমোদিত পার্টনার ডায়াগনস্টিক সেন্টারে বিশেষ ছাড়।'}
                </p>
              </div>
            </div>

            <div className="text-[11px] text-gray-400 border-t border-white/10 pt-3 font-light">
              {language === 'en'
                ? '* Disclaimer: Participating healthcare partners may provide preferential rates and discounts to eligible SHONKHO members, subject to partner terms. SHONKHO does not make medical or health guarantees.'
                : '* শর্তাবলি: অনুমোদিত স্বাস্থ্যসেবা পার্টনারদের মাধ্যমে নির্ধারিত টেস্ট ও সেবায় বিশেষ ছাড় প্রযোজ্য, যা পার্টনারদের নিজস্ব পলিসি সাপেক্ষে কার্যকর হয়। শঙ্খ কোনো প্রত্যক্ষ চিকিৎসাগত দাবি করে না।'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
