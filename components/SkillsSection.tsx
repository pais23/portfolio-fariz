import { 
  FaPhp, FaReact, FaCss3Alt, FaLaravel, FaGitAlt, 
  FaVuejs, FaServer, FaNetworkWired, FaCubes, FaRobot, FaBrain 
} from 'react-icons/fa';
import { 
  SiCodeigniter, SiNextdotjs, SiPostgresql, SiPostman, 
  SiGoogle, SiOpenai, SiLaravel 
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';

interface SkillsSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function SkillsSection({ translations, language }: SkillsSectionProps) {
  const t = (key: string) => translations[language][key] || key;

  const categories = [
    {
      title: language === 'en' ? 'Backend Engineering' : 'Arsitektur Backend',
      description: language === 'en' ? 'Core backend programming & powerful web frameworks.' : 'Pemrograman backend inti & kerangka kerja web yang tangguh.',
      skills: [
        { name: 'PHP', icon: FaPhp, color: 'text-indigo-500 bg-indigo-500/5 dark:bg-indigo-500/10' },
        { name: 'Laravel', icon: FaLaravel, color: 'text-red-500 bg-red-500/5 dark:bg-red-500/10' },
        { name: 'CodeIgniter', icon: SiCodeigniter, color: 'text-orange-500 bg-orange-500/5 dark:bg-orange-500/10' },
        { name: 'Lumen', icon: SiLaravel, color: 'text-red-400 bg-red-400/5 dark:bg-red-400/10' }
      ]
    },
    {
      title: language === 'en' ? 'Frontend Development' : 'Pengembangan Frontend',
      description: language === 'en' ? 'Responsive interfaces & reactive client-side applications.' : 'Antarmuka responsif & aplikasi sisi klien yang reaktif.',
      skills: [
        { name: 'Vue.js', icon: FaVuejs, color: 'text-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10' },
        { name: 'React', icon: FaReact, color: 'text-sky-500 bg-sky-500/5 dark:bg-sky-500/10' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white bg-black/5 dark:bg-white/10' },
        { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-amber-500 bg-amber-500/5 dark:bg-amber-500/10' },
        { name: 'HTML5', icon: AiFillHtml5, color: 'text-orange-600 bg-orange-600/5 dark:bg-orange-600/10' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500 bg-blue-500/5 dark:bg-blue-500/10' }
      ]
    },
    {
      title: language === 'en' ? 'Databases' : 'Basis Data',
      description: language === 'en' ? 'Relational databases, complex schema design, and query optimization.' : 'Basis data relasional, desain skema kompleks, dan optimasi kueri.',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600 bg-blue-600/5 dark:bg-blue-600/10' },
        { name: 'MySQL', icon: GrMysql, color: 'text-cyan-600 bg-cyan-600/5 dark:bg-cyan-600/10' }
      ]
    },
    {
      title: language === 'en' ? 'Architecture Patterns' : 'Pola Arsitektur',
      description: language === 'en' ? 'System structures for scaling and fast API responses.' : 'Struktur sistem untuk skalabilitas dan respon API yang cepat.',
      skills: [
        { name: 'REST API', icon: FaServer, color: 'text-purple-500 bg-purple-500/5 dark:bg-purple-500/10' },
        { name: 'Microservices', icon: FaNetworkWired, color: 'text-teal-500 bg-teal-500/5 dark:bg-teal-500/10' },
        { name: 'MVC Pattern', icon: FaCubes, color: 'text-pink-500 bg-pink-500/5 dark:bg-pink-500/10' }
      ]
    },
    {
      title: language === 'en' ? 'Professional Tools' : 'Alat & Ekosistem',
      description: language === 'en' ? 'Modern toolchains to boost productivity and maintain software quality.' : 'Peralatan modern untuk meningkatkan produktivitas dan menjaga kualitas perangkat lunak.',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-red-500 bg-red-500/5 dark:bg-red-500/10' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500 bg-orange-500/5 dark:bg-orange-500/10' },
        { name: 'AI Development', icon: FaRobot, color: 'text-indigo-600 bg-indigo-600/5 dark:bg-indigo-600/10' },
        { name: 'Google AI Studio', icon: SiGoogle, color: 'text-blue-500 bg-blue-500/5 dark:bg-blue-500/10' },
        { name: 'ChatGPT', icon: SiOpenai, color: 'text-emerald-600 bg-emerald-600/5 dark:bg-emerald-600/10' }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-850/40 py-20 sm:py-32 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
            {language === 'en' ? 'EXPERTISE' : 'KEAHLIAN'}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('mySkills')}
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skillsDescription')}
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700/50 transition-all duration-300 flex flex-col justify-between ${
                idx === 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-sans">
                  {category.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={sIdx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-teal-500/30 transition-all duration-200 hover:scale-[1.03] ${skill.color}`}
                    >
                      <Icon className="text-lg" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
