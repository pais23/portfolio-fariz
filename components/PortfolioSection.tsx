import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLaravel, FaReact, FaFolderOpen, FaArrowRight, FaIdBadge, FaTasks, FaUserTag, FaMicrochip } from 'react-icons/fa';
import { SiCodeigniter, SiFlutter, SiNextdotjs } from 'react-icons/si';
import { detailedProjects, DetailedProject } from '@/utils/projectData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioSectionProps {
  translations: any;
  language: 'id' | 'en';
}

export default function PortfolioSection({ translations, language }: PortfolioSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  const t = (key: string) => translations[language][key] || key;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const getProjectIcon = (key: string) => {
    switch (key) {
      case 'laravel':
        return <FaLaravel className="text-red-500" />;
      case 'codeigniter':
        return <SiCodeigniter className="text-orange-500" />;
      case 'react':
        return <FaReact className="text-sky-500" />;
      case 'flutter':
        return <SiFlutter className="text-cyan-500" />;
      case 'nextjs':
        return <SiNextdotjs className="text-black dark:text-white" />;
      default:
        return <FaFolderOpen className="text-teal-500" />;
    }
  };

  const openModal = (project: DetailedProject) => {
    setSelectedProject(project);
    setModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
    // Restore background scrolling
    document.body.style.overflow = '';
  };

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-850 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-xs uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-3">
              {language === 'en' ? 'CASE STUDIES' : 'STUDI KASUS'}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t('portfolio')}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              {t('portfolioDescription')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {detailedProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-705 overflow-hidden transition-all duration-300 flex flex-col justify-between group h-full"
              >
                {/* Image Wrap */}
                <div className="relative h-48 sm:h-56 w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 border-b border-gray-100 dark:border-gray-700/50">
                  <Image 
                    src={project.mainImage} 
                    alt={`${project.name} logo`} 
                    className="max-h-24 max-w-[80%] object-contain rounded-lg filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    width={220} 
                    height={110} 
                    priority={false}
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute technology badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-850/90 backdrop-blur-sm p-2.5 rounded-xl shadow-md border border-gray-100/50 dark:border-gray-700/50 flex items-center justify-center text-lg sm:text-xl">
                    {getProjectIcon(project.iconKey)}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-teal-600 dark:text-teal-400 font-bold">
                      {project.client[language]}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed line-clamp-3">
                      {project.shortDescription[language]}
                    </p>
                  </div>

                  {/* Actions & Role */}
                  <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {project.role[language]}
                    </span>
                    <button 
                      onClick={() => openModal(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group/btn"
                    >
                      {t('viewCaseStudy')}
                      <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Case Study Detail */}
      {modalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white dark:bg-gray-900 w-full max-w-5xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col my-8 border border-gray-100 dark:border-gray-800"
            style={{ maxHeight: '90vh' }}
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-850">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{getProjectIcon(selectedProject.iconKey)}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-450 uppercase font-mono tracking-wider font-bold">
                    {t('projectCaseStudy')}
                  </p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                aria-label={t('closeModal')}
                className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-3xl transition-colors"
              >
                <AiFillCloseCircle />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Visual Slider */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-800/80 flex items-center justify-center relative overflow-hidden group select-none">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-full relative z-10"
                  >
                    {selectedProject.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex items-center justify-center min-h-[250px] sm:min-h-[350px]">
                          <Image 
                            src={img} 
                            alt={`${selectedProject.name} slide ${index + 1}`} 
                            width={800} 
                            height={450} 
                            className="rounded-lg object-contain max-h-[250px] sm:max-h-[350px]"
                            priority={index === 0}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <p className="text-xs text-gray-450 dark:text-gray-500 italic text-center">
                  {language === 'en' ? '*Swipe to view system interfaces and flowcharts' : '*Geser untuk melihat antarmuka sistem dan diagram alur'}
                </p>
              </div>

              {/* Right Column: Case Study Data */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Mini Stats Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-850 p-5 rounded-xl border border-gray-100 dark:border-gray-800/80">
                  <div className="flex gap-3 items-center">
                    <FaIdBadge className="text-teal-500 text-base flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">{t('clientLabel')}</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">{selectedProject.client[language]}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaUserTag className="text-teal-500 text-base flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">{t('roleLabel')}</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">{selectedProject.role[language]}</p>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-2">
                    {language === 'en' ? 'OVERVIEW' : 'RINGKASAN'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    {selectedProject.shortDescription[language]}
                  </p>
                </div>

                {/* Tech Stack used */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-3 flex items-center gap-1.5">
                    <FaMicrochip className="text-teal-500" />
                    {t('techStackLabel')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-50/50 dark:bg-teal-950/20 text-teal-850 dark:text-teal-300 border border-teal-100/50 dark:border-teal-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-3 flex items-center gap-1.5">
                    <FaTasks className="text-teal-500" />
                    {t('responsibilitiesLabel')}
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.responsibilities[language].map((resp, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <p className="text-xs sm:text-sm text-gray-650 dark:text-gray-300 leading-relaxed">
                          {resp}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-850 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-gray-200 dark:bg-gray-750 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {t('closeModal')}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
