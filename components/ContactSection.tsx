import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';

interface ContactSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function ContactSection({ translations, language }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const t = (key: string) => translations[language][key] || key;

  const emailAddress = "sendme.fariz@gmail.com";
  const phoneNumber = "+6281221576662";

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
            {language === 'en' ? 'GET IN TOUCH' : 'HUBUNGI'}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('contactTitle')}
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Direct Email' : 'Email Langsung'}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {language === 'en' ? 'Send a proposal or general inquiry directly.' : 'Kirim proposal atau pertanyaan umum secara langsung.'}
                </p>
                <p className="text-base sm:text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-4 break-all">
                  {emailAddress}
                </p>
              </div>
            </div>

            <button 
              onClick={() => copyToClipboard(emailAddress, 'email')}
              className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-150 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <FaCheck className="text-teal-500 animate-scale-up" />
                  <span className="text-teal-600 dark:text-teal-400">{language === 'en' ? 'Copied!' : 'Salinan Berhasil!'}</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>{language === 'en' ? 'Copy Email Address' : 'Salin Alamat Email'}</span>
                </>
              )}
            </button>
          </div>

          {/* Phone/WhatsApp Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {language === 'en' ? 'Mobile / WhatsApp' : 'Telepon / WhatsApp'}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {language === 'en' ? 'Instant messaging or fast professional callbacks.' : 'Pesan instan atau panggilan balik profesional yang cepat.'}
                </p>
                <p className="text-base sm:text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-4">
                  {phoneNumber}
                </p>
              </div>
            </div>

            <button 
              onClick={() => copyToClipboard(phoneNumber, 'phone')}
              className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-150 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {copiedPhone ? (
                <>
                  <FaCheck className="text-teal-500 animate-scale-up" />
                  <span className="text-teal-600 dark:text-teal-400">{language === 'en' ? 'Copied!' : 'Salinan Berhasil!'}</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>{language === 'en' ? 'Copy Phone Number' : 'Salin Nomor Telepon'}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Global Location indicator */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-mono text-center">
          <div className="flex items-center gap-1.5 justify-center">
            <FaMapMarkerAlt className="text-teal-500 shrink-0" />
            <span>Bandung, West Java, Indonesia</span>
          </div>
          <span className="hidden sm:inline text-teal-500/40">•</span>
          <span>{language === 'en' ? 'GMT+7 Timezone' : 'Zona Waktu WIB'}</span>
        </div>

      </div>
    </section>
  );
}
