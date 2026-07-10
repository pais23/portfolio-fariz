import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
  translations: any;
  language: 'id' | 'en';
}

export default function Footer({ translations, language }: FooterProps) {
  const t = (key: string) => translations[language][key] || key;

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Copyright Info */}
          <div className="text-center md:text-left order-3 md:order-1">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {t('copyright')}
            </p>
          </div>

          {/* Social Icons & Contact details */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xl text-gray-400 dark:text-gray-500 order-1 md:order-2">
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
            <a 
              href="mailto:fariznurmasyhuri23@gmail.com" 
              aria-label="Send Direct Email"
              className="hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-200"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a 
              href="tel:+6282249141773" 
              aria-label="Call Mobile Phone"
              className="hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-200"
            >
              <FaPhoneAlt className="text-sm" />
            </a>
          </div>

          {/* Portfolio Version Label */}
          <div className="order-2 md:order-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-mono text-[11px] font-bold border border-gray-150 dark:border-gray-800">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
              {t('portfolioVersion')}: v4.2.0-stable
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
