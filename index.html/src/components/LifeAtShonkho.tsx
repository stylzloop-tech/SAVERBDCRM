import React, { useState } from 'react';
import { Language, StoryArticle } from '../types';
import { STORIES } from '../data/siteContent';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';

interface LifeAtShonkhoProps {
  language: Language;
}

export const LifeAtShonkho: React.FC<LifeAtShonkhoProps> = ({ language }) => {
  const [activeStory, setActiveStory] = useState<StoryArticle | null>(null);

  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/10 text-[#123C2B] text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Stories & Field Notes' : 'মাঠের গল্প ও অভিজ্ঞতা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123C2B] tracking-tight">
            {language === 'en' ? 'Life at SHONKHO 🌿' : 'শঙ্খ জীবনধারা — সবুজ স্বপ্নের গল্প'}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            {language === 'en'
              ? 'Reflections from our farmers, architects, and visiting families chronicling the daily miracles of agriculture and green living.'
              : 'কৃষকদের অভিজ্ঞতা, কটেজ রূপরেখা এবং প্রকৃতি ভালোবাসে এমন পরিবারের দিনলিপি নিয়ে আমাদের নিয়মিত প্রকাশনা।'}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#C8A96B] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#123C2B]/90 text-[#C8A96B] text-[11px] font-semibold border border-[#C8A96B]/30 backdrop-blur-sm">
                      {language === 'en' ? story.categoryEn : story.categoryBn}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{story.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{story.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#123C2B] group-hover:text-[#1F6045] transition-colors line-clamp-2 leading-snug">
                    {language === 'en' ? story.titleEn : story.titleBn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light line-clamp-3">
                    {language === 'en' ? story.excerptEn : story.excerptBn}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStory(story)}
                  className="w-full py-2.5 rounded-xl border border-[#123C2B]/30 text-[#123C2B] text-xs font-semibold hover:bg-[#123C2B] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{language === 'en' ? 'Read Full Story' : 'সম্পূর্ণ লেখা পড়ুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A96B]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story Reading Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8 border border-[#C8A96B]/40 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={activeStory.image}
                alt={activeStory.titleEn}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5 text-[#C8A96B]" />
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#123C2B]/90 text-[#C8A96B] text-xs font-semibold">
                {language === 'en' ? activeStory.categoryEn : activeStory.categoryBn}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{activeStory.date}</span>
                <span>•</span>
                <span>{activeStory.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#123C2B] leading-snug">
                {language === 'en' ? activeStory.titleEn : activeStory.titleBn}
              </h3>

              <div className="space-y-3 text-sm text-gray-700 leading-relaxed font-light border-t border-gray-100 pt-4">
                {(language === 'en' ? activeStory.contentEn : activeStory.contentBn).map(
                  (paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  )
                )}
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-2 rounded-full bg-[#123C2B] text-white text-xs font-semibold hover:bg-[#1F6045] transition-colors"
                >
                  {language === 'en' ? 'Close Story' : 'বন্ধ করুন'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
