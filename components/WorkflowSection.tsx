import { FaBug, FaBookOpen, FaEye, FaRocket, FaCheckDouble, FaBrain } from 'react-icons/fa';

interface WorkflowSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function WorkflowSection({ translations, language }: WorkflowSectionProps) {
  const t = (key: string) => translations[language][key] || key;

  const workflows = [
    {
      title: language === 'en' ? 'Accelerated Debugging' : 'Debugging Dipercepat',
      desc: language === 'en' 
        ? "Leveraging AI code analysis models to rapidly identify edge-case exceptions, stack trace errors, and performance anomalies." 
        : "Memanfaatkan model analisis kode AI untuk mengidentifikasi pengecualian kasus ekstrem, kesalahan pelacakan tumpukan, dan anomali kinerja dengan cepat.",
      icon: FaBug,
      color: 'text-rose-500 bg-rose-500/5 border-rose-100 dark:border-rose-900/30'
    },
    {
      title: language === 'en' ? 'Robust Documentation' : 'Dokumentasi Kuat',
      desc: language === 'en' 
        ? "Generating granular API documentation, database schema definitions, and integration guides to keep systems highly maintainable." 
        : "Menghasilkan dokumentasi API terperinci, definisi skema database, dan panduan integrasi agar sistem tetap mudah dipelihara.",
      icon: FaBookOpen,
      color: 'text-cyan-500 bg-cyan-500/5 border-cyan-100 dark:border-cyan-900/30'
    },
    {
      title: language === 'en' ? 'Continuous Code Review' : 'Tinjauan Kode Kontinu',
      desc: language === 'en' 
        ? "Using AI to enforce code safety rules, identify optimal algorithms, and verify adherence to design patterns (SOLID, MVC)." 
        : "Menggunakan AI untuk menegakkan aturan keamanan kode, mengidentifikasi algoritme optimal, dan memverifikasi kepatuhan terhadap pola desain (SOLID, MVC).",
      icon: FaEye,
      color: 'text-purple-500 bg-purple-500/5 border-purple-100 dark:border-purple-900/30'
    },
    {
      title: language === 'en' ? 'Optimal Implementation' : 'Implementasi Optimal',
      desc: language === 'en' 
        ? "Exploring various architectural structures and mock data setups quickly to determine the best design before writing raw code." 
        : "Mengeksplorasi berbagai struktur arsitektur dan pengaturan data tiruan dengan cepat untuk menentukan desain terbaik sebelum menulis kode mentah.",
      icon: FaRocket,
      color: 'text-teal-500 bg-teal-500/5 border-teal-100 dark:border-teal-900/30'
    }
  ];

  return (
    <section id="workflow" className="bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
            {language === 'en' ? 'METHODOLOGY' : 'METODOLOGI'}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('workflowTitle')}
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium">
            {t('workflowSubtitle')}
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {workflows.map((flow, idx) => {
            const Icon = flow.icon;
            return (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex gap-6 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-4 rounded-xl flex-shrink-0 h-14 w-14 flex items-center justify-center border ${flow.color}`}>
                  <Icon className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {flow.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {flow.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Summary Note */}
        <div className="mt-16 bg-teal-50/40 dark:bg-teal-950/10 rounded-2xl p-6 sm:p-8 border border-teal-100/50 dark:border-teal-900/30 max-w-3xl mx-auto flex gap-4 sm:gap-6 items-start">
          <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex-shrink-0">
            <FaCheckDouble className="text-sm sm:text-base" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-teal-900 dark:text-teal-300">
              {language === 'en' ? 'Strict Professional Boundaries' : 'Batasan Profesional yang Ketat'}
            </h5>
            <p className="text-xs sm:text-sm text-teal-850 dark:text-teal-400 mt-2 leading-relaxed">
              {t('workflowDesc1')} {t('workflowDesc2')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
