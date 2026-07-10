import { BsFillMoonStarsFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { useState, useEffect } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  language: 'id' | 'en';
  setLanguage: (language: 'id' | 'en') => void;
  translations: any;
}

export default function Header({ darkMode, setDarkMode, language, setLanguage, translations }: HeaderProps) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (lang: 'id' | 'en') => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const t = (key: string) => translations[language][key] || key;

  const navItems = [
    { name: language === 'en' ? 'Skills' : 'Keahlian', href: '#skills' },
    { name: language === 'en' ? 'Experience' : 'Pengalaman', href: '#experience' },
    { name: language === 'en' ? 'Portfolio' : 'Portofolio', href: '#portfolio' },
    { name: language === 'en' ? 'Workflow' : 'Alur Kerja', href: '#workflow' },
    { name: language === 'en' ? 'Contact' : 'Kontak', href: '#contact' }
  ];

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Fariz Nur Masyhuri
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2 py-0.5 rounded font-mono font-bold">
            PRO
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={toggleLanguageDropdown}
              aria-label="Toggle language"
              className="flex items-center gap-1 cursor-pointer p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <BsTranslate className="text-xl" />
              <span className="text-xs font-mono uppercase font-semibold">{language}</span>
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-1 z-50">
                <button 
                  onClick={() => changeLanguage('en')} 
                  className={`block px-4 py-2 text-xs font-medium w-full text-left transition-colors ${
                    language === 'en' 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-950/20' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage('id')} 
                  className={`block px-4 py-2 text-xs font-medium w-full text-left transition-colors ${
                    language === 'id' 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-950/20' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Indonesia
                </button>
              </div>
            )}
          </div>

          {/* Theme Selector */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <BsFillSunFill className="text-xl text-amber-500" />
            ) : (
              <BsFillMoonStarsFill className="text-xl text-indigo-600" />
            )}
          </button>

          {/* Resume Download CTA */}
          <a 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 hover:scale-[1.02] transition-all duration-200" 
            href="https://drive.google.com/file/d/13ke3XaWL4E3dyc1g4tappk5zsbcO44Wy/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
          >
            {t('resume')}
          </a>
        </div>
      </div>
    </header>
  );
}
