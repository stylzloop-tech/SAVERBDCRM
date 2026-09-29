import React, { useState } from 'react';
import { Language, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/siteContent';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { key: 'all', labelEn: 'All Photos', labelBn: 'সকল ছবি' },
    { key: 'nature', labelEn: 'Nature & River', labelBn: 'নদী ও নিসর্গ' },
    { key: 'agriculture', labelEn: 'Agriculture & Papaya', labelBn: 'কৃষি ও পেঁপে বাগান' },
    { key: 'livestock', labelEn: 'Livestock & Dairy', labelBn: 'গবাদিপশু ও ডেইরি' },
    { key: 'hospitality', labelEn: 'Hospitality & Cottages', labelBn: 'কটেজ ও রিসোর্ট' },
    { key: 'experiences', labelEn: 'Experiences & Boating', labelBn: 'নৌভ্রমণ ও অভিজ্ঞতা' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    setActivePhoto(photo);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const nextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#123C2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Visual Moments' : 'ছবির আলোয় শঙ্খ'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Life at SHONKHO in Focus' : 'শঙ্খ জীবনের স্থিরচিত্র'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'A glimpse into the fertile riverbanks, growing papaya orchards, contented cattle, and serene waters of Dohazari.'
              : 'দোহাজারীতে শঙ্খের শান্ত নদী, মিষ্টি পেঁপে বাগান, দেশি ডেইরি খামার ও প্রাকৃতিক আশ্রয়ের বাস্তব কিছু মুহূর্ত।'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              id={`gallery-filter-${cat.key}`}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#C8A96B] text-[#0B2D20] font-semibold shadow-md scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/15'
              }`}
            >
              {language === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden border border-white/15 shadow-lg bg-[#0B2D20] cursor-pointer aspect-[4/3] hover:border-[#C8A96B] transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={photo.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#C8A96B]">
                  {photo.category}
                </span>
                <h3 className="font-serif text-base font-bold group-hover:text-[#C8A96B] transition-colors">
                  {language === 'en' ? photo.titleEn : photo.titleBn}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1 font-light">
                  {language === 'en' ? photo.captionEn : photo.captionBn}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#C8A96B]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B2D20] rounded-3xl overflow-hidden border border-[#C8A96B]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5 text-[#C8A96B]" />
            </button>

            {/* Nav Arrows */}
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Stage */}
            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.titleEn}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Caption Footer */}
            <div className="p-6 bg-[#0B2D20] border-t border-white/10 space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-[#C8A96B]">
                {activePhoto.category}
              </span>
              <h4 className="font-serif text-xl font-bold text-white">
                {language === 'en' ? activePhoto.titleEn : activePhoto.titleBn}
              </h4>
              <p className="text-sm text-gray-300 font-light">
                {language === 'en' ? activePhoto.captionEn : activePhoto.captionBn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
