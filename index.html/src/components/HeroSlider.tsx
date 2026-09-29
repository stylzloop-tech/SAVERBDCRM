import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '../types';
import { HERO_SLIDES } from '../data/siteContent';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Compass,
  ArrowDown,
  Pause,
  Play,
  Sparkles,
} from 'lucide-react';

interface HeroSliderProps {
  language: Language;
  onOpenSiteVisit: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  language,
  onOpenSiteVisit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const duration = 6000; // 6 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  // Handle visibility change (pause when tab is inactive)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, duration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide, currentIndex]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      id="home"
      className="relative w-full h-[92vh] min-h-[640px] max-h-[960px] overflow-hidden bg-[#0B2D20] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Slideshow"
    >
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image with subtle Ken Burns zoom */}
            <div
              className={`w-full h-full transform transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center 40%',
                backgroundSize: 'cover',
              }}
            />
            {/* Cinematic layered gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D20] via-transparent to-black/50" />
          </div>
        );
      })}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-16">
        <div className="max-w-3xl space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Subtle Tag / Series Title */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C2B]/80 border border-[#C8A96B]/50 backdrop-blur-md text-xs tracking-widest uppercase text-[#C8A96B] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>
              {language === 'en'
                ? 'Life at SHONKHO 🌿 • Dohazari, Chattogram'
                : 'শঙ্খ জীবনধারা 🌿 • দোহাজারী, চট্টগ্রাম'}
            </span>
          </div>

          {/* Major Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-md">
            {language === 'en' ? currentSlide.headlineEn : currentSlide.headlineBn}
          </h1>

          {/* Subheadline / Descriptive Lead */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow">
            {language === 'en'
              ? currentSlide.subheadlineEn
              : currentSlide.subheadlineBn}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            {currentSlide.ctaLink && (
              <a
                href={currentSlide.ctaLink}
                id="hero-primary-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#ddc38f] text-[#0B2D20] font-semibold text-sm sm:text-base shadow-lg hover:brightness-105 hover:scale-[1.02] transition-all"
              >
                <Compass className="w-4 h-4" />
                <span>
                  {language === 'en' ? currentSlide.ctaEn : currentSlide.ctaBn}
                </span>
              </a>
            )}

            <button
              type="button"
              id="hero-secondary-cta"
              onClick={onOpenSiteVisit}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/30 backdrop-blur-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C8A96B]" />
              <span>
                {language === 'en'
                  ? currentSlide.secondaryCtaEn || 'Book a Site Visit'
                  : currentSlide.secondaryCtaBn || 'সাইট ভিজিট বুক করুন'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Slide Counter & Dots */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-white text-xs">
          <span className="font-mono font-bold text-[#C8A96B]">
            0{currentIndex + 1}
          </span>
          <span className="text-gray-400">/</span>
          <span className="font-mono text-gray-300">0{HERO_SLIDES.length}</span>

          <div className="h-3 w-px bg-white/20 mx-1" />

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                id={`hero-dot-${i}`}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-6 bg-[#C8A96B]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="h-3 w-px bg-white/20 mx-1" />

          {/* Play / Pause Toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-gray-300 hover:text-white transition-colors"
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Prev & Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="hero-prev-btn"
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-105 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            id="hero-next-btn"
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-105 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll down prompt */}
        <a
          href="#discover"
          id="hero-scroll-down"
          className="hidden md:flex items-center gap-2 text-xs text-gray-300 hover:text-[#C8A96B] transition-colors"
        >
          <span>{language === 'en' ? 'Scroll to explore' : 'নিচে স্ক্রল করুন'}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C8A96B]" />
        </a>
      </div>

      {/* Bottom Subtle Animated Gold Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          key={currentIndex}
          className="h-full bg-gradient-to-r from-[#C8A96B] to-[#F8F7F2]"
          style={{
            animation: isPlaying && !isHovered ? `slideProgress ${duration}ms linear forwards` : 'none',
            width: isPlaying && !isHovered ? undefined : `${((currentIndex + 1) / HERO_SLIDES.length) * 100}%`,
          }}
        />
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};
