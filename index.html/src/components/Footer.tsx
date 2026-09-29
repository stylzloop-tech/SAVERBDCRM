import React from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import {
  TreeDeciduous,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUp,
  Heart,
} from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071F16] text-white border-t border-[#C8A96B]/30 pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#123C2B] border border-[#C8A96B] flex items-center justify-center text-[#C8A96B] shadow-inner">
                <TreeDeciduous className="w-5 h-5 text-[#C8A96B]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white uppercase block leading-none">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] text-[#C8A96B] font-light tracking-widest uppercase block pt-0.5">
                  Agro Village & Eco Resort Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 font-light leading-relaxed">
              {language === 'en'
                ? 'An integrated 25+ acre sanctuary in Dohazari, Chattogram, uniting active commercial organic farming, riverfront hospitality, and Halal-conscious family membership.'
                : 'দোহাজারীতে শঙ্খ নদীর কোল ঘেঁষে ২৫+ একর আয়তনে বাণিজ্যিক নিরাপদ কৃষি, রিভারফ্রন্ট ইকো-রিসোর্ট এবং হালাল-সচেতন পারিবারিক মেম্বারশিপের এক সমন্বিত ঠিকানা।'}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-400 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>SAVER Group Heritage (Since 1993)</span>
              </div>
              <p>Registered Limited Company in Bangladesh • Ethical Agro-Tourism</p>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C8A96B] uppercase tracking-wider">
              {language === 'en' ? 'Quick Navigation' : 'প্রয়োজনীয় লিংক'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#discover" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Vision & Four Pillars' : 'দৃষ্টিভঙ্গি ও মূল ভিত্তি'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Dohazari Riverfront Location' : 'দোহাজারী ও যোগাযোগ'}
                </a>
              </li>
              <li>
                <a href="#agro-village" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Farming & Papaya Harvest' : 'কৃষি খামার ও পেঁপে বাগান'}
                </a>
              </li>
              <li>
                <a href="#eco-resort" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Eco Cottages & Master Plan' : 'কটেজ ও রিসোর্ট সুবিধা'}
                </a>
              </li>
              <li>
                <a href="#ownership" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Ownership & Memberships' : 'মেম্বারশিপ প্যাকেজসমূহ'}
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Recreation & Boating' : 'বিনোদন ও নৌভ্রমণ'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Photo Gallery' : 'ছবির গ্যালারি'}
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Life at SHONKHO Stories' : 'মাঠের গল্প ও অভিজ্ঞতা'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? 'Frequently Asked Questions' : 'সাধারণ প্রশ্নোত্তর'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: External & Legal (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C8A96B] uppercase tracking-wider">
              {language === 'en' ? 'Ecosystem' : 'ইকোসিস্টেম'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a
                  href={BRAND_INFO.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A96B] inline-flex items-center gap-1 text-emerald-300"
                >
                  <span>SHONKHO Agro Shop</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://saverbd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A96B] inline-flex items-center gap-1"
                >
                  <span>SAVER Group Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-[#C8A96B]">
                  {language === 'en' ? 'Halal-Conscious Values' : 'হালাল-সচেতন নীতি'}
                </a>
              </li>
              <li>
                <a href="#roadmap-process" className="hover:text-[#C8A96B]">
                  {language === 'en' ? '5-Step Ownership Path' : 'মালিকানা প্রাপ্তির ধাপ'}
                </a>
              </li>
              <li>
                <a href="#site-visit" className="hover:text-[#C8A96B]">
                  {language === 'en' ? 'Schedule Site Inspection' : 'পরিদর্শন বুক করুন'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C8A96B] uppercase tracking-wider">
              {language === 'en' ? 'Headquarters' : 'হেড অফিস'}
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300 font-light">
              <p className="leading-relaxed">
                Level 6 (Lift-5), AK Trade Center, Sholoshahar, CDA Avenue, Chattogram, Bangladesh
              </p>
              <div className="flex items-center gap-2 text-[#C8A96B]">
                <Phone className="w-3.5 h-3.5" />
                <a href={`tel:${BRAND_INFO.phone}`} className="font-mono text-white hover:text-[#C8A96B]">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#C8A96B]">
                <Mail className="w-3.5 h-3.5" />
                <a href={`mailto:${BRAND_INFO.email}`} className="text-white hover:text-[#C8A96B]">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 border-b border-white/10 text-[11px] text-gray-400 font-light leading-relaxed space-y-1.5">
          <p>
            <strong className="text-gray-300 font-medium">Compliance & Risk Disclosure: </strong>
            SHONKHO Agro Village & Eco Resort Limited does not offer fixed, guaranteed, or speculative returns. All financial benefits and potential earnings depend entirely on the actual business and agricultural operating performance of the project and applicable profit-sharing terms in accordance with the signed Membership Agreement and laws of Bangladesh.
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} SHONKHO Agro Village & Eco Resort Limited. All rights reserved. An enterprise of SAVER Group.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
