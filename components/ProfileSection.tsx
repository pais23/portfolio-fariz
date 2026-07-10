import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import Lottie from 'lottie-react';
import codingAnimation from '../public/coding-animation.json';

interface ProfileSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function ProfileSection({ translations, language }: ProfileSectionProps) {
  const t = (key: string) => translations[language][key] || key;

  return (
    <section id="home" className="pt-28 pb-16 sm:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300 border border-teal-150 dark:border-teal-900/50 mb-6 font-mono text-xs uppercase tracking-wider font-semibold animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              4+ {language === 'en' ? 'Years Professional Experience' : 'Tahun Pengalaman Profesional'}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Fariz Nur Masyhuri
            </h1>
            
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              {t('webAndroidDev')}
            </h2>
            
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {t('introduction')}
            </p>

            {/* Call to Actions (CTA) */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://drive.google.com/file/d/13ke3XaWL4E3dyc1g4tappk5zsbcO44Wy/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FaDownload className="text-sm" />
                {t('resume')}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FaEnvelope className="text-sm text-teal-500" />
                {language === 'en' ? 'Contact Me' : 'Hubungi Saya'}
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex justify-center lg:justify-start items-center gap-6">
              <span className="text-xs uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500 font-bold">
                {language === 'en' ? 'Follow professional channels' : 'Saluran profesional'}
              </span>
              <div className="h-px w-12 bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex gap-4 text-2xl text-gray-400 dark:text-gray-500">
                <a 
                  href="https://github.com/pais23" 
                  aria-label="GitHub Profile"
                  className="hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/fariznur/" 
                  aria-label="LinkedIn Profile"
                  className="hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/paris.ssh/" 
                  aria-label="Instagram Profile"
                  className="hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Lottie Animation */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] bg-gradient-to-tr from-cyan-100/45 to-teal-100/45 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-3xl p-8 flex items-center justify-center border border-gray-100 dark:border-gray-800 shadow-xl dark:shadow-2xl">
              <div className="absolute inset-0 bg-radial-gradient from-teal-500/10 via-transparent to-transparent opacity-50 blur-3xl"></div>
              <div className="w-full h-full relative z-10 select-none">
                <Lottie animationData={codingAnimation} loop={true} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
