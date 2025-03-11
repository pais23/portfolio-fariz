import { BsFillMoonStarsFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  language: 'id' | 'en';
  setLanguage: (language: 'id' | 'en') => void;
  translations: any;
}

export default function Header({ darkMode, setDarkMode, language, setLanguage, translations }: HeaderProps) {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (lang: 'id' | 'en') => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  // Helper function to get translated text
  const t = (key: string) => translations[language][key];

  return (
    <nav className="mb-12 sm:mb-16 flex justify-between items-center pt-10 px-3 pr-3 sm:pr-[70px]">
      <div className="flex-1">
        {/* You can add a logo or site name here */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white"></h1>
      </div>
      <ul className='flex items-center space-x-4'>
        <li className="relative">
          <BsTranslate onClick={toggleLanguageDropdown} className='cursor-pointer text-2xl text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors'/>
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
              <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                English
              </button>
              <button onClick={() => changeLanguage('id')} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                Indonesia
              </button>
            </div>
          )}
        </li>
        <li>
          {darkMode ? (
            <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors'/>
          ) : (
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors'/>
          )}
        </li>
        <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-cyan-600 hover:to-teal-600 transition-all duration-300' href="https://drive.google.com/file/d/13ke3XaWL4E3dyc1g4tappk5zsbcO44Wy/view?usp=sharing" target="_blank" rel="noreferrer">{t('resume')}</a></li>
      </ul>
    </nav>
  );
} 