import React, { useState } from 'react';
import { Language } from '../types';
import { BRAND_INFO } from '../data/siteContent';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle,
  Building,
  Navigation,
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#123C2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D20] border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Get In Touch' : 'যোগাযোগ ও সরাসরি অফিস'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Connect with SHONKHO' : 'শঙ্খ পরিবারের সাথে যোগাযোগ করুন'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {language === 'en'
              ? 'Visit our central corporate office in Chittagong or speak directly with our project advisory team.'
              : 'চট্টগ্রাম শহরের প্রাণকেন্দ্রে আমাদের কর্পোরেট অফিসে এক কাপ চা খেতে আমন্ত্রিত, অথবা ফোনে যেকোনো পরামর্শ গ্রহণ করুন।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B2D20] p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white border-b border-white/10 pb-3">
                {language === 'en' ? 'Official Addresses' : 'অফিস ও প্রকল্প ঠিকানা'}
              </h3>

              {/* Corporate Office */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#123C2B] text-[#C8A96B] flex items-center justify-center shrink-0 border border-white/10">
                  <Building className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <strong className="text-sm text-white font-medium block">
                    {language === 'en' ? 'Corporate Office:' : 'কর্পোরেট হেড অফিস:'}
                  </strong>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Level 6 (Lift-5), AK Trade Center, Sholoshahar, CDA Avenue, Chattogram, Bangladesh
                  </p>
                  <span className="text-[11px] text-gray-400 block pt-0.5">
                    {language === 'en' ? 'Open: Sun - Thu (10:00 AM - 6:00 PM)' : 'খোলা: রবি - বৃহস্পতি (সকাল ১০টা - সন্ধ্যা ৬টা)'}
                  </span>
                </div>
              </div>

              {/* Project Site */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#123C2B] text-[#C8A96B] flex items-center justify-center shrink-0 border border-white/10">
                  <Navigation className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <strong className="text-sm text-white font-medium block">
                    {language === 'en' ? 'Project Site:' : 'প্রকল্প সাইট:'}
                  </strong>
                  <p className="text-gray-300 leading-relaxed font-light">
                    Dohazari, Chandanaish, Chattogram (Riverfront along Shangu River)
                  </p>
                  <span className="text-[11px] text-emerald-300 font-semibold block pt-0.5">
                    {language === 'en' ? 'Open 7 days for pre-scheduled visits' : 'পূর্বনির্ধারিত পরিদর্শনের জন্য ৭ দিনই খোলা'}
                  </span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="pt-3 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8A96B] shrink-0" />
                  <a href={`tel:${BRAND_INFO.phone}`} className="text-gray-200 hover:text-[#C8A96B] font-mono">
                    {BRAND_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C8A96B] shrink-0" />
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-gray-200 hover:text-[#C8A96B]">
                    {BRAND_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#C8A96B] shrink-0" />
                  <a
                    href="https://saverbd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-[#C8A96B]"
                  >
                    www.saverbd.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0B2D20] p-6 sm:p-10 rounded-3xl border border-white/15 shadow-xl">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1F6045] text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {language === 'en' ? 'Message Sent Successfully' : 'আপনার বার্তাটি পৌঁছে গেছে'}
                </h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  {language === 'en'
                    ? 'Our team will review your inquiry and respond within 24 hours.'
                    : 'আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।'}
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="px-4 py-2 rounded-full border border-white/20 text-xs text-gray-200 hover:bg-white/10"
                >
                  {language === 'en' ? 'Send Another Message' : 'আরেকটি বার্তা পাঠান'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {language === 'en' ? 'Send an Inquiry' : 'বার্তা বা প্রশ্ন পাঠান'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      {language === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'en' ? 'Full name' : 'আপনার নাম'}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      {language === 'en' ? 'Phone / WhatsApp *' : 'মোবাইল নম্বর *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+8801..."
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      {language === 'en' ? 'Email Address' : 'ইমেইল এড্রেস'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">
                      {language === 'en' ? 'Subject' : 'বিষয়'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0B2D20] border border-white/20 text-white text-xs focus:outline-none focus:border-[#C8A96B]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Ownership Packages">Ownership Packages</option>
                      <option value="Site Visit Booking">Site Visit Booking</option>
                      <option value="Agro Products Bulk Order">Agro Products Bulk Order</option>
                      <option value="Corporate Retreat">Corporate Retreat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">
                    {language === 'en' ? 'Your Message' : 'আপনার বার্তা'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      language === 'en'
                        ? 'Tell us what you would like to know...'
                        : 'আপনার জিজ্ঞাসা বিস্তারিত লিখুন...'
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form"
                  className="w-full py-3 rounded-full bg-[#C8A96B] text-[#0B2D20] font-semibold text-xs uppercase tracking-wider hover:brightness-105 transition-transform hover:scale-105 shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Send Message' : 'বার্তা পাঠান'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
