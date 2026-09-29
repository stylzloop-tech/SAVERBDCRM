import React from 'react';
import { Language } from '../types';
import { DISCOVER_PILLARS } from '../data/siteContent';
import { MapPin, Wheat, Hotel, HeartHandshake, ArrowRight, Shield } from 'lucide-react';

interface DiscoverSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const getIcon = (key: string) => {
    switch (key) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#C8A96B]" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5 text-[#C8A96B]" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-[#C8A96B]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C8A96B]" />;
      default:
        return <Wheat className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  return (
    <section id="discover" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold tracking-wider uppercase">
            <span>{language === 'en' ? 'The Vision' : 'মূল দৃষ্টিভঙ্গি'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
            {language === 'en'
              ? 'More Than Land. More Than a Resort.'
              : 'শুধু জমি নয়। শুধু রিসোর্টও নয়।'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            {language === 'en'
              ? 'SHONKHO is envisioned as an integrated Agro Village & Eco Resort where land, agriculture, hospitality, nature, family experiences and community come together into one harmonious ecosystem.'
              : 'শঙ্খ এগ্রো ভিলেজ অ্যান্ড ইকো রিসোর্ট কেবল একটি ভৌগোলিক ভূখণ্ড কিংবা গতানুগতিক রিসোর্ট নয়। এটি জমি, কৃষি, আতিথেয়তা, নিসর্গ এবং পারিবারিক মেলবন্ধনের এক পূর্ণাঙ্গ সবুজ সুরভিত জগৎ।'}
          </p>
        </div>

        {/* Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Bangladesh Nature Visual with Layered Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop"
                alt="Bangladesh river and countryside"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B2D20]/90 backdrop-blur-md border border-[#C8A96B]/40 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A96B] uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>
                    {language === 'en'
                      ? 'Dohazari • Shangu Riverbank'
                      : 'দোহাজারী • শঙ্খ নদীতীর'}
                  </span>
                </div>
                <p className="font-serif text-sm sm:text-base italic text-gray-200">
                  {language === 'en'
                    ? '“Own your green space. Experience the green life.”'
                    : '“নিজের করে নিন সবুজের একটি অংশ। বাঁচুন সবুজের সান্নিধ্যে।”'}
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-[#C8A96B] text-[#0B2D20] shadow-xl font-serif text-center p-2 border-2 border-white">
              <span className="text-xl font-bold leading-none">102</span>
              <span className="text-[11px] font-sans font-semibold uppercase tracking-wider mt-1">
                {language === 'en' ? 'Bigha Master' : 'বিঘা মাস্টার'}
              </span>
            </div>
          </div>

          {/* Right: Four Distinct Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DISCOVER_PILLARS.map((pillar) => (
                <div
                  key={pillar.key}
                  id={`pillar-${pillar.key}`}
                  className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#C8A96B] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#123C2B]/10 group-hover:bg-[#123C2B] flex items-center justify-center mb-4 transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123C2B] mb-1.5 tracking-tight">
                    {language === 'en' ? pillar.titleEn : pillar.titleBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {language === 'en' ? pillar.descEn : pillar.descBn}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#ownership"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123C2B] text-white text-sm font-semibold hover:bg-[#1F6045] transition-colors shadow"
              >
                <span>
                  {language === 'en' ? 'Explore Ownership' : 'মালিকানা বিস্তারিত জানুন'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
              </a>

              <button
                type="button"
                onClick={onOpenSiteVisit}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#123C2B]/30 text-[#123C2B] text-sm font-medium hover:bg-white transition-colors cursor-pointer"
              >
                <span>
                  {language === 'en' ? 'Schedule a Visit' : 'সাইট পরিদর্শনের আবেদন'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
