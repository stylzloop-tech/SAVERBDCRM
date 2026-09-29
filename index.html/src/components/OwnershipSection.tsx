import React, { useState } from 'react';
import { Language, OwnershipPackage } from '../types';
import { OWNERSHIP_PACKAGES } from '../data/siteContent';
import {
  Check,
  Shield,
  Sparkles,
  Calendar,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  FileText,
  BadgePercent,
  HeartPulse,
  Hotel,
  Award,
} from 'lucide-react';

interface OwnershipSectionProps {
  language: Language;
  onOpenSiteVisit: () => void;
  onSelectPackage: (pkg: OwnershipPackage) => void;
}

export const OwnershipSection: React.FC<OwnershipSectionProps> = ({
  language,
  onOpenSiteVisit,
  onSelectPackage,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('platinum');
  const [expandedMobileCard, setExpandedMobileCard] = useState<string | null>('platinum');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const selectedPackage =
    OWNERSHIP_PACKAGES.find((p) => p.id === selectedPkgId) ||
    OWNERSHIP_PACKAGES[2];

  const toggleMobileCard = (id: string) => {
    setExpandedMobileCard(expandedMobileCard === id ? null : id);
  };

  return (
    <section id="ownership" className="py-20 lg:py-28 bg-[#123C2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Asset-Backed Membership' : 'সম্পদ-সমর্থিত মেম্বারশিপ'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en'
              ? 'Own Your Green Space. Experience the Green Life.'
              : 'নিজের করে নিন সবুজের একটি অংশ। বাঁচুন সবুজের সান্নিধ্যে।'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'SHONKHO Ownership is designed to connect land, nature, agriculture, hospitality, family experiences, organic products, wellness and community within one integrated ecosystem.'
              : 'শঙ্খের মেম্বারশিপ আপনার পরিবারকে সংযুক্ত করে উর্বর জমি, নিরাপদ ফলন, আধুনিক রিভারফ্রন্ট রিসোর্ট ও আজীবন স্বাস্থ্য-সুবিধার এক দায়িত্বশীল কাঠামোর সাথে।'}
          </p>

          {/* Toggle between Card View and Comparison Table */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              type="button"
              id="view-cards-btn"
              onClick={() => setViewMode('cards')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#C8A96B] text-[#0B2D20]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {language === 'en' ? 'Package Cards' : 'প্যাকেজ কার্ড'}
            </button>
            <button
              type="button"
              id="view-table-btn"
              onClick={() => setViewMode('table')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#C8A96B] text-[#0B2D20]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {language === 'en' ? 'Comparison Table' : 'তুলনামূলক চার্ট'}
            </button>
          </div>
        </div>

        {/* View Mode 1: Cards (Desktop Horizontal Selector & Detail / Grid) */}
        {viewMode === 'cards' && (
          <div id="packages" className="space-y-12">
            {/* Desktop Quick Tier Selector Buttons */}
            <div className="hidden lg:flex items-center justify-center gap-3">
              {OWNERSHIP_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  id={`pkg-select-btn-${pkg.id}`}
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`px-5 py-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col ${
                    selectedPkgId === pkg.id
                      ? 'bg-[#0B2D20] border-[#C8A96B] ring-2 ring-[#C8A96B]/50 shadow-xl'
                      : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-300'
                  }`}
                >
                  <span className="text-xs font-mono text-[#C8A96B] font-bold">
                    {language === 'en' ? pkg.landDecimal : pkg.landBangla}
                  </span>
                  <span className="font-serif text-sm font-bold text-white mt-0.5">
                    {pkg.name}
                  </span>
                  <span className="text-xs text-gray-400 mt-1 font-semibold">{pkg.packagePrice}</span>
                </button>
              ))}
            </div>

            {/* Desktop Spotlight Detailed Card for the Selected Package */}
            <div className="hidden lg:block bg-[#0B2D20] rounded-3xl p-8 lg:p-10 border border-[#C8A96B]/40 shadow-2xl">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left Package Identity */}
                <div className="col-span-5 space-y-5 border-r border-white/10 pr-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C2B] text-[#C8A96B] text-xs font-semibold border border-[#C8A96B]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{language === 'en' ? selectedPackage.landDecimal : selectedPackage.landBangla}</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl font-bold text-white">
                      {selectedPackage.name}
                    </h3>
                    <p className="text-sm text-gray-300 italic font-serif mt-1">
                      “{language === 'en' ? selectedPackage.taglineEn : selectedPackage.taglineBn}”
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {language === 'en' ? 'Package Price' : 'প্যাকেজ মূল্য'}:
                      </span>
                      <span className="font-serif text-2xl font-bold text-[#C8A96B]">
                        {selectedPackage.packagePrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-xs text-gray-400">
                        {language === 'en' ? 'Booking Amount' : 'বুকিং মানি'}:
                      </span>
                      <span className="font-mono text-sm font-bold text-white">
                        {selectedPackage.bookingPrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-xs text-gray-400">
                        {language === 'en' ? 'Designated Tier' : 'নির্দিষ্ট আবাসন'}:
                      </span>
                      <span className="text-xs font-semibold text-emerald-300">
                        {language === 'en' ? selectedPackage.accommodationTypeEn : selectedPackage.accommodationTypeBn}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectPackage(selectedPackage)}
                      className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#dbbf87] text-[#0B2D20] font-semibold text-xs uppercase tracking-wider hover:brightness-105 shadow cursor-pointer text-center"
                    >
                      {language === 'en' ? 'Request Details' : 'বিস্তারিত আবেদন'}
                    </button>
                    <button
                      type="button"
                      onClick={onOpenSiteVisit}
                      className="px-4 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-xs cursor-pointer"
                    >
                      {language === 'en' ? 'Book Site Visit' : 'সাইট ভিজিট'}
                    </button>
                  </div>
                </div>

                {/* Right Benefits Showcase */}
                <div className="col-span-7 space-y-4 pl-4">
                  <span className="text-xs font-semibold text-[#C8A96B] uppercase tracking-wider block">
                    {language === 'en' ? 'Integrated Membership Privileges:' : 'প্যাকেজের অন্তর্ভুক্ত আজীবন সুবিধাসমূহ:'}
                  </span>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <Hotel className="w-4 h-4 text-[#C8A96B]" />
                        <span>{language === 'en' ? 'Annual Complimentary Stay' : 'বাৎসরিক ফ্রি স্টে'}</span>
                      </div>
                      <p className="text-sm font-bold text-white">
                        {selectedPackage.complimentaryNights} {language === 'en' ? 'Nights every year' : 'রাত প্রতি বছর'}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {language === 'en'
                          ? `In ${selectedPackage.accommodationTypeEn} with family day-visit access`
                          : `${selectedPackage.accommodationTypeBn} এ থাকার সুযোগ ও ডে-ভিজিট`}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <BadgePercent className="w-4 h-4 text-[#C8A96B]" />
                        <span>{language === 'en' ? 'Resort Room Discount' : 'রুম ভাড়ায় বিশেষ ছাড়'}</span>
                      </div>
                      <p className="font-serif text-xl font-bold text-[#C8A96B]">
                        {selectedPackage.roomDiscount} {language === 'en' ? 'Discount' : 'ছাড়'}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {language === 'en' ? 'Throughout the entire year' : 'বছরের যেকোনো সময়ে প্রযোজ্য'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <BadgePercent className="w-4 h-4 text-[#C8A96B]" />
                        <span>{language === 'en' ? 'Organic Produce Discount' : 'অর্গানিক কৃষিপণ্যে ছাড়'}</span>
                      </div>
                      <p className="font-serif text-xl font-bold text-[#C8A96B]">
                        {selectedPackage.organicDiscount} {language === 'en' ? 'Discount' : 'ছাড়'}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {language === 'en' ? 'On eligible farm-fresh products' : 'শঙ্খ এগ্রো শপের পণ্য সামগ্রীতে'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                        <BadgePercent className="w-4 h-4 text-[#C8A96B]" />
                        <span>{language === 'en' ? 'Activities & Recreation' : 'অ্যাক্টিভিটিজে ছাড়'}</span>
                      </div>
                      <p className="font-serif text-xl font-bold text-[#C8A96B]">
                        {selectedPackage.activityDiscount} {language === 'en' ? 'Discount' : 'ছাড়'}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {language === 'en' ? 'On boating, rides & eligible activities' : 'নৌভ্রমণ ও বিনোদনমূলক কার্যক্রমে'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-gray-200">
                      <Award className="w-4 h-4 text-[#C8A96B] shrink-0" />
                      <span>{language === 'en' ? 'Complimentary Club Membership' : 'ফ্রি ক্লাব মেম্বারশিপ'}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-gray-200">
                      <HeartPulse className="w-4 h-4 text-[#C8A96B] shrink-0" />
                      <span>{language === 'en' ? 'Partner Healthcare Discounts' : 'পার্টনার ডায়াগনস্টিক ছাড়'}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 text-gray-200">
                      <Shield className="w-4 h-4 text-[#C8A96B] shrink-0" />
                      <span>{language === 'en' ? 'Health & Life Protection Access' : 'সুরক্ষা ও স্বাস্থ্য সুবিধা'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Expandable Accordion Cards (5 Packages) */}
            <div className="lg:hidden space-y-4">
              {OWNERSHIP_PACKAGES.map((pkg) => {
                const isExpanded = expandedMobileCard === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    id={`mobile-pkg-${pkg.id}`}
                    className={`rounded-2xl border transition-all ${
                      isExpanded
                        ? 'bg-[#0B2D20] border-[#C8A96B] shadow-xl'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleMobileCard(pkg.id)}
                      className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#C8A96B]">
                            {language === 'en' ? pkg.landDecimal : pkg.landBangla}
                          </span>
                          {pkg.highlighted && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C8A96B] text-[#0B2D20] font-bold uppercase">
                              Popular
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif text-lg font-bold text-white">
                          {pkg.name}
                        </h4>
                        <p className="text-xs text-gray-300">
                          {pkg.packagePrice} • Booking {pkg.bookingPrice}
                        </p>
                      </div>

                      <div className="p-2 rounded-full bg-white/10 text-[#C8A96B]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-white/10 space-y-4 text-xs">
                        <p className="text-gray-300 italic">
                          “{language === 'en' ? pkg.taglineEn : pkg.taglineBn}”
                        </p>

                        <div className="space-y-2 pt-1 text-gray-200">
                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Accommodation' : 'আবাসন মান'}:</span>
                            <span className="font-semibold text-emerald-300">
                              {language === 'en' ? pkg.accommodationTypeEn : pkg.accommodationTypeBn}
                            </span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Complimentary Stay' : 'বাৎসরিক ফ্রি স্টে'}:</span>
                            <span className="font-bold text-white">
                              {pkg.complimentaryNights} {language === 'en' ? 'Nights/year' : 'রাত/বছর'}
                            </span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Room Discount' : 'রুম ভাড়ায় ছাড়'}:</span>
                            <span className="font-bold text-[#C8A96B]">{pkg.roomDiscount}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Organic Products' : 'অর্গানিক পণ্যে ছাড়'}:</span>
                            <span className="font-bold text-[#C8A96B]">{pkg.organicDiscount}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Recreation & Activities' : 'অ্যাক্টিভিটিজে ছাড়'}:</span>
                            <span className="font-bold text-[#C8A96B]">{pkg.activityDiscount}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-white/5">
                            <span className="text-gray-400">{language === 'en' ? 'Club Membership' : 'ক্লাব মেম্বারশিপ'}:</span>
                            <span className="text-emerald-300 font-semibold">{language === 'en' ? 'Complimentary' : 'ফ্রি'}</span>
                          </div>

                          <div className="flex items-center justify-between py-1">
                            <span className="text-gray-400">{language === 'en' ? 'Healthcare & Protection' : 'স্বাস্থ্যসেবা ও সুরক্ষা'}:</span>
                            <span className="text-emerald-300 font-semibold">{language === 'en' ? 'Included' : 'অন্তর্ভুক্ত'}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectPackage(pkg)}
                            className="py-2.5 rounded-xl bg-[#C8A96B] text-[#0B2D20] font-semibold text-center cursor-pointer"
                          >
                            {language === 'en' ? 'Request Details' : 'বিস্তারিত আবেদন'}
                          </button>
                          <button
                            type="button"
                            onClick={onOpenSiteVisit}
                            className="py-2.5 rounded-xl border border-white/20 text-white font-medium text-center cursor-pointer"
                          >
                            {language === 'en' ? 'Book Site Visit' : 'সাইট ভিজিট'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View Mode 2: Full Comparison Table */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto bg-[#0B2D20] rounded-3xl p-6 sm:p-8 border border-[#C8A96B]/40 shadow-2xl animate-in fade-in duration-300">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/20 text-gray-300 text-[11px] uppercase tracking-wider">
                  <th className="py-4 px-3">{language === 'en' ? 'Feature / Benefit' : 'সুযোগ-সুবিধা'}</th>
                  <th className="py-4 px-3">SAVER Gold</th>
                  <th className="py-4 px-3">SAVER Gold+</th>
                  <th className="py-4 px-3 text-[#C8A96B]">SAVER Platinum</th>
                  <th className="py-4 px-3">SAVER Platinum+</th>
                  <th className="py-4 px-3">SAVER Signature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-200">
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Land Allocation' : 'বরাদ্দকৃত জমি'}</td>
                  <td className="py-3 px-3">0.5 Decimal</td>
                  <td className="py-3 px-3">1 Decimal</td>
                  <td className="py-3 px-3 font-bold text-[#C8A96B]">2 Decimal</td>
                  <td className="py-3 px-3">3 Decimal</td>
                  <td className="py-3 px-3">4 Decimal</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Package Price' : 'প্যাকেজ মূল্য'}</td>
                  <td className="py-3 px-3 font-mono font-semibold">৳4,50,000</td>
                  <td className="py-3 px-3 font-mono font-semibold">৳7,00,000</td>
                  <td className="py-3 px-3 font-mono font-bold text-[#C8A96B]">৳14,00,000</td>
                  <td className="py-3 px-3 font-mono font-semibold">৳21,00,000</td>
                  <td className="py-3 px-3 font-mono font-semibold">৳28,00,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Booking Amount' : 'বুকিং মানি'}</td>
                  <td className="py-3 px-3 font-mono">৳1,00,000</td>
                  <td className="py-3 px-3 font-mono">৳1,00,000</td>
                  <td className="py-3 px-3 font-mono text-[#C8A96B]">৳2,00,000</td>
                  <td className="py-3 px-3 font-mono">৳2,00,000</td>
                  <td className="py-3 px-3 font-mono">৳2,00,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Designated Stay Tier' : 'নির্দিষ্ট আবাসন কটেজ'}</td>
                  <td className="py-3 px-3">Deluxe Cottage</td>
                  <td className="py-3 px-3">Premium Deluxe Cottage</td>
                  <td className="py-3 px-3 text-[#C8A96B]">Premium Cottage</td>
                  <td className="py-3 px-3">Suite Villas</td>
                  <td className="py-3 px-3">Presidential Suite Villas</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Complimentary Stay' : 'বাৎসরিক ফ্রি রাত'}</td>
                  <td className="py-3 px-3">2 Nights / Yr</td>
                  <td className="py-3 px-3">2 Nights / Yr</td>
                  <td className="py-3 px-3 font-bold text-[#C8A96B]">2 Nights / Yr</td>
                  <td className="py-3 px-3">2 Nights / Yr</td>
                  <td className="py-3 px-3">2 Nights / Yr</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Room Discount' : 'রুম ভাড়ায় বার্ষিক ছাড়'}</td>
                  <td className="py-3 px-3">40%</td>
                  <td className="py-3 px-3">40%</td>
                  <td className="py-3 px-3 font-bold text-[#C8A96B]">50%</td>
                  <td className="py-3 px-3">50%</td>
                  <td className="py-3 px-3">50%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Organic Food Discount' : 'অর্গানিক পণ্যে ছাড়'}</td>
                  <td className="py-3 px-3">20%</td>
                  <td className="py-3 px-3">20%</td>
                  <td className="py-3 px-3">20%</td>
                  <td className="py-3 px-3">20%</td>
                  <td className="py-3 px-3">20%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Activities Discount' : 'অ্যাক্টিভিটিজে ছাড়'}</td>
                  <td className="py-3 px-3">50%</td>
                  <td className="py-3 px-3">50%</td>
                  <td className="py-3 px-3">50%</td>
                  <td className="py-3 px-3">50%</td>
                  <td className="py-3 px-3">50%</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Healthcare & Protection' : 'স্বাস্থ্য ও সুরক্ষা সুবিধা'}</td>
                  <td className="py-3 px-3 text-emerald-400">✓ Included</td>
                  <td className="py-3 px-3 text-emerald-400">✓ Included</td>
                  <td className="py-3 px-3 text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3 px-3 text-emerald-400">✓ Included</td>
                  <td className="py-3 px-3 text-emerald-400">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-white">{language === 'en' ? 'Action' : 'পদক্ষেপ'}</td>
                  {OWNERSHIP_PACKAGES.map((p) => (
                    <td key={p.id} className="py-3 px-3">
                      <button
                        type="button"
                        onClick={() => onSelectPackage(p)}
                        className="px-3 py-1.5 rounded-lg bg-[#C8A96B] text-[#0B2D20] font-semibold text-xs hover:brightness-105 cursor-pointer whitespace-nowrap"
                      >
                        {language === 'en' ? 'Select' : 'বাছাই'}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* IMPORTANT MANDATORY FINANCIAL & LEGAL DISCLAIMER BOX */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0B2D20]/90 border border-[#C8A96B]/40 text-xs sm:text-sm text-gray-300 space-y-3">
          <div className="flex items-center gap-2 text-[#C8A96B] font-semibold uppercase tracking-wider text-xs">
            <AlertTriangle className="w-4 h-4 text-[#C8A96B] shrink-0" />
            <span>
              {language === 'en'
                ? 'Important Terms, Policy & Financial Disclosure'
                : 'গুরুত্বপূর্ণ মেম্বারশিপ শর্তাবলি ও আর্থিক স্বচ্ছতা প্রকাশ'}
            </span>
          </div>

          <p className="leading-relaxed font-light">
            <strong className="text-white font-medium">
              {language === 'en' ? 'Terms of Membership:' : 'মেম্বারশিপের নীতিমালা:'}{' '}
            </strong>
            {language === 'en'
              ? 'Membership benefits, ownership documentation, resort privileges and applicable protection/healthcare benefits are subject to the Membership Agreement, legal documentation, operational policies, partner arrangements, eligibility and applicable terms.'
              : 'মেম্বারশিপের সুযোগ-সুবিধা, মালিকানা দলিল, রিসোর্ট অধিকার এবং স্বাস্থ্যসেবা সুবিধাসমূহ মেম্বারশিপ এগ্রিমেন্ট, আইনি দলিল, রিসোর্টের পরিচালন নীতি ও পার্টনারদের নির্ধারিত শর্তাবলি সাপেক্ষে বাস্তবায়িত হবে।'}
          </p>

          <p className="leading-relaxed font-light">
            <strong className="text-white font-medium">
              {language === 'en' ? 'Financial Transparency:' : 'আর্থিক স্বচ্ছতা সংক্রান্ত বার্তা:'}{' '}
            </strong>
            {language === 'en'
              ? 'SHONKHO does not present any fixed or guaranteed return. Potential earnings depend on the operating performance of the project’s agriculture, hospitality and other business activities and applicable profit-sharing arrangements. We adhere to transparent, Halal-conscious and ethical business principles.'
              : 'শঙ্খ এগ্রো ভিলেজ অ্যান্ড ইকো রিসোর্ট কোনো প্রকার নির্দিষ্ট বা নিশ্চিত (Guaranteed) লভ্যাংশ প্রদর্শন বা প্রতিশ্রুতি প্রদান করে না। সম্ভাব্য আয় সরাসরি প্রকল্পের কৃষি, আতিথেয়তা ও বাণিজ্যিক কর্মকাণ্ডের প্রকৃত ব্যবসায়িক লাভ এবং মেম্বারশিপ চুক্তির নীতিমালা অনুযায়ী পরিচালিত হয়। আমরা পূর্ণাঙ্গ স্বচ্ছতা ও হালাল মূল্যবোধে পরিচালিত।'}
          </p>
        </div>
      </div>
    </section>
  );
};
