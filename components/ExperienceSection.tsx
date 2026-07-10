import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaNetworkWired, FaDatabase, FaWrench } from 'react-icons/fa';

interface ExperienceSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function ExperienceSection({ translations, language }: ExperienceSectionProps) {
  const t = (key: string) => translations[language][key] || key;

  const responsibilities = [
    {
      title: t('backendDev'),
      desc: language === 'en' 
        ? "Designed and developed highly reliable REST APIs and database triggers supporting public services." 
        : "Merancang dan mengembangkan REST API serta database trigger yang andal untuk melayani kebutuhan publik.",
      icon: FaBriefcase
    },
    {
      title: t('dbOpt'),
      desc: language === 'en' 
        ? "Optimized complex SQL queries, index definitions, and schema parameters to resolve heavy production bottlenecks." 
        : "Mengoptimalkan kueri SQL, indeks, dan skema database untuk mengatasi bottleneck pada server produksi.",
      icon: FaDatabase
    },
    {
      title: t('microservices'),
      desc: language === 'en' 
        ? "Engineered stateful and stateless microservices communicating securely via isolated APIs." 
        : "Merekayasa arsitektur microservices untuk keamanan dan skalabilitas tinggi antar divisi.",
      icon: FaNetworkWired
    },
    {
      title: t('maintenance'),
      desc: language === 'en' 
        ? "Supervised regular security updates, server backups, and continuous integration deployments." 
        : "Mengawasi pembaharuan keamanan berkala, pencadangan server, dan penyebaran integrasi kontinu.",
      icon: FaWrench
    },
    {
      title: t('bugFixing'),
      desc: language === 'en' 
        ? "Identified, tracked, and resolved critical backend bugs and memory leak problems." 
        : "Mengidentifikasi, melacak, dan menyelesaikan bug backend kritis serta isu kebocoran memori.",
      icon: FaCheckCircle
    },
    {
      title: t('featureDev'),
      desc: language === 'en' 
        ? "Implemented robust multi-tenant authorization rules, SSO portals, and customized report calculations." 
        : "Mengimplementasikan aturan otorisasi multi-tenant, portal SSO, dan kalkulasi laporan kustom.",
      icon: FaBriefcase
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
            {language === 'en' ? 'JOURNEY' : 'RIWAYAT'}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('experienceTitle')}
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? "My professional software engineering track record in high-impact enterprise environments." 
              : "Rekam jejak profesional rekayasa perangkat lunak saya di lingkungan korporat ber-impact besar."}
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-150 dark:bg-gray-800 -translate-x-1/2"></div>

          {/* Timeline Node */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-12">
            
            {/* Timeline Left Column */}
            <div className="w-full sm:w-[45%] text-left sm:text-right pl-10 sm:pl-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 dark:bg-teal-950/20 text-teal-850 dark:text-teal-300 rounded-full text-xs font-mono font-bold border border-teal-100 dark:border-teal-900/40 mb-3">
                <FaCalendarAlt />
                {t('timelinePeriod')}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('timelineRole')}
              </h4>
              <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                {language === 'en' ? 'Enterprise Softwares & Portals' : 'Sistem Enterprise & Portal Keuangan'}
              </p>
            </div>

            {/* Timeline Center Bullet */}
            <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 border-4 border-white dark:border-gray-900 shadow-md -translate-x-1/2 z-10 flex items-center justify-center text-white">
              <FaBriefcase className="text-xs" />
            </div>

            {/* Timeline Right Column */}
            <div className="w-full sm:w-[45%] pl-10 sm:pl-0">
              <div className="bg-gray-50 dark:bg-gray-850 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                <h5 className="text-sm uppercase tracking-wider font-mono font-bold text-gray-400 dark:text-gray-500 mb-4">
                  {t('timelineResponsibilities')}
                </h5>
                <ul className="space-y-4">
                  {responsibilities.map((resp, idx) => {
                    const Icon = resp.icon;
                    return (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 mt-1 text-teal-500">
                          <Icon className="text-sm" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                            {resp.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                            {resp.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
