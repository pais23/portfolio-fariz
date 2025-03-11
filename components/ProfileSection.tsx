import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Lottie from 'lottie-react';
import codingAnimation from '../public/coding-animation.json';

interface ProfileSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function ProfileSection({ translations, language }: ProfileSectionProps) {
  // Helper function to get translated text
  const t = (key: string) => translations[language][key];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-25">
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='w-full md:w-1/2 order-2 md:order-1 text-center md:text-left mb-10 md:mb-0'>
          <h2 className='text-4xl sm:text-5xl py-2 text-teal-600 font-bold md:text-6xl dark:text-teal-400'>Fariz Nur Masyhuri</h2>
          <h3 className='text-xl sm:text-2xl py-2 md:text-3xl text-gray-800 dark:text-white'>{t('webAndroidDev')}</h3>
          <p className='text-sm sm:text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto md:mx-0 dark:text-gray-200'>
            {t('introduction')}
          </p>
          <div className='text-3xl sm:text-5xl flex justify-center md:justify-start gap-8 sm:gap-16 text-gray-600 dark:text-gray-400'>
            <a href="https://github.com/pais23" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/fariznur/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/paris.ssh/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"><AiFillInstagram /></a>
          </div>
        </div>
        <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-10 md:mb-0'>
          <div className='w-110 h-110 sm:w-130 sm:h-130 overflow-hidden flex items-center justify-center'>
            <div className='w-85 h-85 sm:w-110 sm:h-110'>
              <Lottie animationData={codingAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 