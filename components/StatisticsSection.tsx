import { useState, useEffect } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaGlobe, FaCogs, FaAward } from 'react-icons/fa';

interface StatisticsSectionProps {
  translations: any;
  language: 'id' | 'en';
}

interface StatItemProps {
  targetNumber: number;
  suffix: string;
  label: string;
  icon: any;
  subLabel: string;
}

function AnimatedCounter({ targetNumber, suffix, label, icon: Icon, subLabel }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = Math.ceil(targetNumber / (duration / 30));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-150 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex items-start gap-4 sm:gap-6 relative overflow-hidden group">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/5 dark:to-teal-500/5 rounded-bl-full group-hover:scale-110 transition-transform duration-300"></div>

      <div className="p-3 sm:p-4 rounded-xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-teal-500 group-hover:text-white transition-all duration-300">
        <Icon className="text-xl sm:text-2xl" />
      </div>

      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {count}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400">
            {suffix}
          </span>
        </div>
        <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-2">
          {label}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
          {subLabel}
        </p>
      </div>
    </div>
  );
}

export default function StatisticsSection({ translations, language }: StatisticsSectionProps) {
  const t = (key: string) => translations[language][key] || key;

  const stats = [
    {
      targetNumber: 4,
      suffix: "+",
      label: t('yearsExp'),
      subLabel: language === 'en' 
        ? "Engineering fast, reliable backend systems." 
        : "Merekayasa sistem backend yang cepat dan andal.",
      icon: FaAward
    },
    {
      targetNumber: 12,
      suffix: "+",
      label: t('entProjects'),
      subLabel: language === 'en' 
        ? "Designed for corporate and enterprise use." 
        : "Dirancang untuk kebutuhan korporasi dan skala besar.",
      icon: FaBriefcase
    },
    {
      targetNumber: 6,
      suffix: "+",
      label: t('govProjects'),
      subLabel: language === 'en' 
        ? "Collaborated with ministries & national agencies." 
        : "Bekerja sama dengan kementerian & lembaga nasional.",
      icon: FaGraduationCap
    },
    {
      targetNumber: 4,
      suffix: "+",
      label: t('intlProjects'),
      subLabel: language === 'en' 
        ? "Systems deployed in Malaysia and Brunei." 
        : "Sistem yang disebarkan di Malaysia dan Brunei.",
      icon: FaGlobe
    },
    {
      targetNumber: 8,
      suffix: "+",
      label: t('laravelSolutions'),
      subLabel: language === 'en' 
        ? "Engineered with secure and scalable Laravel frameworks." 
        : "Direkayasa dengan kerangka kerja Laravel yang aman.",
      icon: FaCode
    },
    {
      targetNumber: 5,
      suffix: "+",
      label: t('microservicesBuilt'),
      subLabel: language === 'en' 
        ? "Stateless API services built for maximum scalability." 
        : "Layanan API stateless yang dibangun untuk skalabilitas penuh.",
      icon: FaCogs
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-20 sm:py-28 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
            {language === 'en' ? 'METRICS' : 'METRIK'}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('statsTitle')}
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Quantifiable results of technical leadership and scalable software implementation." 
              : "Hasil kuantitatif dari kepemimpinan teknis dan implementasi perangkat lunak berskala besar."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedCounter 
              key={idx}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              label={stat.label}
              subLabel={stat.subLabel}
              icon={stat.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
