import React, { useState } from 'react';
import { Language, OwnershipPackage } from '../types';
import { OWNERSHIP_PACKAGES, BRAND_INFO } from '../data/siteContent';
import {
  Calendar,
  Users,
  Clock,
  Phone,
  Mail,
  User,
  CheckCircle,
  MessageSquare,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface SiteVisitSectionProps {
  language: Language;
  preselectedPackage?: OwnershipPackage | null;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({
  language,
  preselectedPackage,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [visitors, setVisitors] = useState('2');
  const [packageInterest, setPackageInterest] = useState(
    preselectedPackage ? preselectedPackage.name : 'SAVER Platinum (2 Decimal)'
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update package selection if preselectedPackage changes
  React.useEffect(() => {
    if (preselectedPackage) {
      setPackageInterest(`${preselectedPackage.name} (${preselectedPackage.landDecimal})`);
    }
  }, [preselectedPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello SHONKHO Agro Village & Eco Resort,\n\nI would like to schedule a site visit.\nName: ${name || 'Interested Member'}\nPhone: ${phone || 'N/A'}\nPreferred Date: ${date || 'Upcoming Weekend'}\nTime: ${timeSlot}\nVisitors: ${visitors}\nInterested Package: ${packageInterest}\nNotes: ${notes || 'None'}\n\nPlease confirm availability.`
    );
    window.open(`https://wa.me/8801965784634?text=${text}`, '_blank');
  };

  return (
    <section id="site-visit" className="py-20 lg:py-28 bg-[#F8F7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Promotional Sidebar */}
            <div className="lg:col-span-5 bg-[#0B2D20] p-8 sm:p-10 text-white flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C2B] text-[#C8A96B] text-xs font-semibold uppercase tracking-widest border border-[#C8A96B]/30">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Exclusive Site Visit' : 'প্রকল্প পরিদর্শন বুকিং'}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                  {language === 'en'
                    ? 'Experience Dohazari With Your Own Eyes'
                    : 'সরেজমিনে এসে দেখুন শঙ্খের উন্নয়ন'}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {language === 'en'
                    ? 'Walk the riverfront walkways, taste ripe papaya from the orchard, meet our agricultural team, and review authentic land documentation.'
                    : 'নদীর শান্ত বাতাস গায়ে মেখে বাগানের তাজা পেঁপে খেয়ে দেখুন, খামারের প্রতিনিধিদের সাথে কথা বলুন এবং আইনি দলিলপত্র স্বচক্ষে যাচাই করুন।'}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      {language === 'en' ? 'Project Site:' : 'প্রকল্পের অবস্থান:'}
                    </strong>
                    <span>Dohazari, Chandanaish, Chattogram (Along Shangu River)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">
                      {language === 'en' ? 'Direct Helpline / WhatsApp:' : 'সরাসরি যোগাযোগ:'}
                    </strong>
                    <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#C8A96B]">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-gray-300 space-y-1">
                  <span className="text-[#C8A96B] font-semibold block">
                    {language === 'en' ? 'Complimentary Family Hospitality' : 'পরিবারের জন্য আন্তরিক আপ্যায়ন'}
                  </span>
                  <span>
                    {language === 'en'
                      ? 'Pre-booked visitors receive fresh coconut water, organic papaya tasting, and guided cart exploration.'
                      : 'পূর্বনির্ধারিত ভিজিটরদের জন্য খামারের ডাব, পেঁপে আপ্যায়ন ও গাইডেড ট্যুর অন্তর্ভুক্ত।'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#123C2B]">
                    {language === 'en' ? 'Site Visit Request Received!' : 'আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে!'}
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    {language === 'en'
                      ? `Thank you, ${name}. Our representative will contact you via ${phone} to confirm transport, timing, and hospitality arrangements.`
                      : `ধন্যবাদ ${name}। আমাদের প্রতিনিধি শীঘ্রই ${phone} নম্বরে যোগাযোগ করে সময় ও ভ্রমণ ব্যবস্থা চূড়ান্ত করবেন।`}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1F6045] text-white text-xs font-semibold hover:bg-[#123C2B] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{language === 'en' ? 'Message on WhatsApp' : 'হোয়াটসঅ্যাপে দ্রুত কনফার্ম করুন'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50"
                    >
                      {language === 'en' ? 'Book Another Visit' : 'নতুন আবেদন করুন'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#123C2B]">
                      {language === 'en' ? 'Schedule Your Guided Tour' : 'আপনার পরিদর্শন সূচি নির্ধারণ করুন'}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {language === 'en'
                        ? 'Fill out the details below. We accommodate both weekday and weekend site inspections.'
                        : 'নিচের তথ্যগুলো পূরণ করুন। শুক্র-শনিবারসহ সপ্তাহের যেকোনো দিন পরিদর্শন সম্ভব।'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Full Name *' : 'আপনার পুরো নাম *'}
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={language === 'en' ? 'e.g. Mahfuzur Rahman' : 'উদা: মাহফুজুর রহমান'}
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Phone / WhatsApp *' : 'মোবাইল / হোয়াটসঅ্যাপ *'}
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+8801..."
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Email Address' : 'ইমেইল এড্রেস'}
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Preferred Date' : 'পরিদর্শনের সম্ভাব্য তারিখ'}
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Preferred Time' : 'পছন্দের সময়'}
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B] bg-white"
                      >
                        <option value="morning">Morning (9:30 AM)</option>
                        <option value="midday">Midday (12:00 PM)</option>
                        <option value="afternoon">Afternoon (3:30 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Visitors Count' : 'সদস্য সংখ্যা'}
                      </label>
                      <select
                        value={visitors}
                        onChange={(e) => setVisitors(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B] bg-white"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3-4">3 - 4 (Family)</option>
                        <option value="5+">5+ Persons</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Interest' : 'আগ্রহের প্যাকেজ'}
                      </label>
                      <select
                        value={packageInterest}
                        onChange={(e) => setPackageInterest(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B] bg-white"
                      >
                        {OWNERSHIP_PACKAGES.map((p) => (
                          <option key={p.id} value={`${p.name} (${p.landDecimal})`}>
                            {p.name} ({p.landDecimal})
                          </option>
                        ))}
                        <option value="General Eco-Tourism">General Eco-Tourism</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {language === 'en' ? 'Additional Notes / Pickup Request' : 'বিশেষ কোনো চাহিদা বা বার্তা'}
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        language === 'en'
                          ? 'e.g., coming from Chittagong city with elderly parents...'
                          : 'যেমন: চট্টগ্রাম শহর থেকে মা-বাবাসহ আসব...'
                      }
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#123C2B]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      id="submit-site-visit-form"
                      className="w-full sm:flex-1 py-3 rounded-full bg-[#123C2B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#1F6045] transition-colors cursor-pointer"
                    >
                      {language === 'en' ? 'Submit Site Visit Request' : 'অনুরোধটি পাঠিয়ে দিন'}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#1F6045] text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#123C2B] transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C8A96B]" />
                      <span>{language === 'en' ? 'Instant WhatsApp' : 'হোয়াটসঅ্যাপ বুকিং'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
