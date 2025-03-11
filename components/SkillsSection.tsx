import { FaPhp, FaReact, FaCss3Alt, FaLaravel, FaGitAlt } from 'react-icons/fa';
import { SiCodeigniter, SiNextdotjs, SiFlutter, SiPostgresql } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';

interface SkillsSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function SkillsSection({ translations, language }: SkillsSectionProps) {
  // Helper function to get translated text
  const t = (key: string) => translations[language][key];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 sm:py-32">
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow-2xl rounded-xl p-8 sm:p-12 dark:bg-gray-700 transition-all duration-300 hover:shadow-3xl'>
          <div className="text-center mb-12 sm:mb-20">
            <h3 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white'>{t('mySkills')}</h3>
            <p className='text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-6'>
              {t('skillsDescription')}
            </p>
          </div>
          <ul className='text-gray-600 dark:text-gray-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-sm sm:text-lg'>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><FaPhp className="mr-2" /> PHP</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><IoLogoJavascript className="mr-2" /> Javascript</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><AiFillHtml5 className="mr-2" /> HTML5</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><FaCss3Alt className="mr-2" /> CSS</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><FaLaravel className="mr-2" /> Laravel</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><SiCodeigniter className="mr-2" /> CodeIgniter</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><FaReact className="mr-2" /> React JS</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><SiNextdotjs className="mr-2" /> Next JS</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><GrMysql className="mr-2" /> MySQL</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><SiPostgresql className="mr-2" /> PostgreSQL</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><SiFlutter className="mr-2" /> Flutter</li>
            <li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg text-center transition-colors hover:bg-teal-600 dark:hover:bg-teal-400 flex items-center justify-center hover:scale-110 transition-transform duration-300'><FaGitAlt className="mr-2" /> Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 