import React, { useState } from 'react';
import { Language, FAQItem } from '../types';
import { FAQ_ITEMS } from '../data/siteContent';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShieldAlert,
} from 'lucide-react';

interface FAQSectionProps {
  language: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    { key: 'all', labelEn: 'All Questions', labelBn: 'সকল প্রশ্ন' },
    { key: 'general', labelEn: 'General & Location', labelBn: 'সাধারণ ও অবস্থান' },
    { key: 'ownership', labelEn: 'Ownership & Earnings', labelBn: 'মালিকানা ও আয়' },
    { key: 'resort', labelEn: 'Resort & Facilities', labelBn: 'রিসোর্ট সুবিধা' },
    { key: 'legal', labelEn: 'Legal & Documentation', labelBn: 'আইনি ও দলিলপত্র' },
  ];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const qText = `${item.questionEn} ${item.questionBn} ${item.answerEn} ${item.answerBn}`.toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || qText.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#123C2B] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Transparent Answers' : 'স্বচ্ছ প্রশ্নোত্তর ও তথ্য'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en'
              ? 'Frequently Asked Questions'
              : 'সাধারণ জিজ্ঞাসা ও বিস্তারিত উত্তর'}
          </h2>
          <p className="text-base text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'Find direct, documented, and honest answers regarding our master plan, ownership model, site visits, and operational policies.'
              : 'শঙ্খের মাস্টার প্ল্যান, মালিকানা প্রক্রিয়া, লভ্যাংশ নীতি ও রিসোর্ট পরিচালন সংক্রান্ত যেকোনো প্রশ্নের খোলামেলা উত্তর।'}
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="faq-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search by keyword (e.g., location, return, transfer, visit, land)...'
                : 'শব্দ দিয়ে খুঁজুন (যেমন: অবস্থান, লভ্যাংশ, পরিদর্শন, দলিল)...'
            }
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0B2D20] border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A96B] transition-colors text-sm shadow-inner"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              id={`faq-cat-${cat.key}`}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#C8A96B] text-[#0B2D20] font-semibold shadow'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              {language === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className="rounded-2xl border border-white/15 bg-[#0B2D20] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                      {language === 'en' ? item.questionEn : item.questionBn}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C8A96B] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-gray-300 leading-relaxed font-light border-t border-white/10 pt-4 animate-in fade-in duration-200">
                      <p>{language === 'en' ? item.answerEn : item.answerBn}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 p-6 rounded-2xl bg-[#0B2D20] text-gray-400 text-sm">
              {language === 'en'
                ? 'No questions matched your search query. Please feel free to contact us directly.'
                : 'আপনার অনুসন্ধানের সাথে কোনো প্রশ্ন মেলেনি। যেকোনো তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।'}
            </div>
          )}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#C8A96B]" />
            <span className="text-gray-300">
              {language === 'en'
                ? 'Have a specific question not listed here?'
                : 'এখানে আপনার কাঙ্ক্ষিত প্রশ্নটি খুঁজে পাননি?'}
            </span>
          </div>

          <a
            href="https://wa.me/8801965784634"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1F6045] text-white hover:bg-[#123C2B] border border-emerald-400/40 transition-colors font-medium"
          >
            {language === 'en' ? 'Ask on WhatsApp' : 'হোয়াটসঅ্যাপে সরাসরি জিজ্ঞাসা করুন'}
          </a>
        </div>
      </div>
    </section>
  );
};
