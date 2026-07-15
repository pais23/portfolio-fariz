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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-750 overflow-hidden transition-all duration-300 flex flex-col justify-between group h-full"
              >
                {/* Image Wrap (Web vs Mobile Showcase Mockup) */}
                <div className="relative h-56 sm:h-64 w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center border-b border-gray-100 dark:border-gray-700/50 overflow-hidden">
                  {project.category === 'mobile' ? (
                    /* Mobile Showcase Mockup */
                    <div className="w-full h-full relative flex items-center justify-center p-3 overflow-hidden select-none">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-teal-50/40 dark:from-slate-900/60 dark:to-cyan-950/20" />
                      
                      {/* Left Screen (Back) */}
                      <div className="absolute w-[80px] sm:w-[90px] aspect-[9/18.5] bg-slate-950 dark:bg-black rounded-[14px] p-0.5 shadow-md border border-slate-800 dark:border-slate-900 overflow-hidden flex flex-col transition-all duration-500 transform -translate-x-12 rotate-[-12deg] z-0 opacity-80 group-hover:-translate-x-16 group-hover:rotate-[-18deg] group-hover:opacity-90">
                        <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[11px] overflow-hidden">
                          <Image 
                            src={project.images[1] || project.mainImage} 
                            alt={`${project.name} mobile background 1`}
                            fill
                            sizes="(max-width: 768px) 50vw, 15vw"
                            className="object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      {/* Right Screen (Back) */}
                      <div className="absolute w-[80px] sm:w-[90px] aspect-[9/18.5] bg-slate-950 dark:bg-black rounded-[14px] p-0.5 shadow-md border border-slate-800 dark:border-slate-900 overflow-hidden flex flex-col transition-all duration-500 transform translate-x-12 rotate-[12deg] z-0 opacity-80 group-hover:translate-x-16 group-hover:rotate-[18deg] group-hover:opacity-90">
                        <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[11px] overflow-hidden">
                          <Image 
                            src={project.images[2] || project.images[0] || project.mainImage} 
                            alt={`${project.name} mobile background 2`}
                            fill
                            sizes="(max-width: 768px) 50vw, 15vw"
                            className="object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      {/* Center Screen (Front) */}
                      <div className="relative w-[105px] sm:w-[115px] aspect-[9/18.5] bg-slate-950 dark:bg-black rounded-[18px] p-1 shadow-2xl border-[2px] border-slate-800 dark:border-slate-900 overflow-hidden flex flex-col z-10 transform transition-all duration-500 group-hover:scale-[1.06] group-hover:-translate-y-1.5">
                        <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[14px] overflow-hidden flex flex-col">
                          {/* Notch / Speaker bar */}
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-20" />
                          <div className="relative flex-grow bg-gray-50 dark:bg-gray-900">
                            <Image 
                              src={project.images[0] || project.mainImage} 
                              alt={`${project.name} mobile mockup`}
                              fill
                              sizes="(max-width: 768px) 50vw, 20vw"
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/5 dark:bg-white/0 group-hover:bg-black/0 transition-colors duration-300" />
                          </div>
                          {/* Home indicator bar */}
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gray-300 dark:bg-gray-700 rounded-full z-20" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Web Showcase Mockup */
                    <div className="w-full h-full relative flex items-center justify-center p-3 overflow-hidden select-none">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-indigo-50/40 dark:from-slate-900/60 dark:to-teal-950/20" />
                      
                      {/* Left Back Browser Window */}
                      <div className="absolute w-[75%] h-[68%] bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-250/40 dark:border-gray-750/40 overflow-hidden flex flex-col transition-all duration-500 transform -translate-x-8 translate-y-3 -rotate-4 z-0 opacity-70 group-hover:-translate-x-12 group-hover:translate-y-5 group-hover:-rotate-8 group-hover:opacity-85">
                        <div className="bg-gray-100/70 dark:bg-gray-800/70 px-1.5 py-0.5 flex items-center gap-1 border-b border-gray-200/40 dark:border-gray-700/40 shrink-0">
                          <div className="flex gap-0.5 shrink-0">
                            <span className="w-1 h-1 rounded-full bg-rose-300"></span>
                            <span className="w-1 h-1 rounded-full bg-amber-300"></span>
                            <span className="w-1 h-1 rounded-full bg-emerald-300"></span>
                          </div>
                        </div>
                        <div className="relative flex-grow bg-gray-50 dark:bg-gray-950 overflow-y-auto scrollbar-none">
                          {project.id === 'eroses' ? (
                            <img 
                              src={project.images[1]?.src || project.mainImage?.src} 
                              alt={`${project.name} back left`}
                              className="w-full h-auto object-top"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Image 
                              src={project.images[1] || project.mainImage} 
                              alt={`${project.name} back left`}
                              fill
                              sizes="(max-width: 768px) 70vw, 25vw"
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                          )}
                        </div>
                      </div>

                      {/* Right Back Browser Window */}
                      <div className="absolute w-[75%] h-[68%] bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-250/40 dark:border-gray-750/40 overflow-hidden flex flex-col transition-all duration-500 transform translate-x-8 translate-y-3 rotate-4 z-0 opacity-70 group-hover:translate-x-12 group-hover:translate-y-5 group-hover:rotate-8 group-hover:opacity-85">
                        <div className="bg-gray-100/70 dark:bg-gray-800/70 px-1.5 py-0.5 flex items-center gap-1 border-b border-gray-200/40 dark:border-gray-700/40 shrink-0">
                          <div className="flex gap-0.5 shrink-0">
                            <span className="w-1 h-1 rounded-full bg-rose-300"></span>
                            <span className="w-1 h-1 rounded-full bg-amber-300"></span>
                            <span className="w-1 h-1 rounded-full bg-emerald-300"></span>
                          </div>
                        </div>
                        <div className="relative flex-grow bg-gray-50 dark:bg-gray-950 overflow-y-auto scrollbar-none">
                          {project.id === 'eroses' ? (
                            <img 
                              src={project.images[2]?.src || project.images[0]?.src || project.mainImage?.src} 
                              alt={`${project.name} back right`}
                              className="w-full h-auto object-top"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Image 
                              src={project.images[2] || project.images[0] || project.mainImage} 
                              alt={`${project.name} back right`}
                              fill
                              sizes="(max-width: 768px) 70vw, 25vw"
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                          )}
                        </div>
                      </div>

                      {/* Center Front Browser Window */}
                      <div className="relative w-[82%] h-[74%] bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-250/60 dark:border-gray-700/60 overflow-hidden flex flex-col z-10 transition-all duration-500 transform group-hover:scale-[1.04] group-hover:-translate-y-1">
                        <div className="bg-gray-100/80 dark:bg-gray-800/80 px-2 py-1 flex items-center gap-1 border-b border-gray-200/50 dark:border-gray-700/50 shrink-0">
                          <div className="flex gap-1 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          </div>
                          <div className="bg-white/95 dark:bg-gray-950/95 text-[9px] sm:text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold px-2 py-0.5 rounded flex-grow text-center truncate ml-3 mr-1 select-none border border-gray-100 dark:border-gray-800/50">
                            https://{project.id}.fariz.dev
                          </div>
                        </div>
                        <div className="relative flex-grow bg-gray-50 dark:bg-gray-950 overflow-y-auto scrollbar-none">
                          {project.id === 'eroses' ? (
                            <img 
                              src={project.images[0]?.src || project.mainImage?.src} 
                              alt={`${project.name} mockup main`}
                              className="w-full h-auto object-top"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Image 
                              src={project.images[0] || project.mainImage} 
                              alt={`${project.name} mockup main`}
                              fill
                              sizes="(max-width: 768px) 80vw, 30vw"
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/5 dark:bg-white/0 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Floating Brand Badge (Logo) */}
                  <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-gray-850/95 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-md border border-gray-150/60 dark:border-gray-750/60 flex items-center gap-1.5 z-10 select-none">
                    <div className="relative w-4.5 h-4.5 rounded overflow-hidden flex-shrink-0 bg-white">
                      <Image 
                        src={project.mainImage} 
                        alt="brand logo" 
                        fill
                        className="object-contain p-0.5"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-gray-700 dark:text-gray-300 tracking-wider uppercase">
                      {project.name}
                    </span>
                  </div>

                  {/* Absolute technology badge */}
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-850/90 backdrop-blur-sm p-2 rounded-lg shadow-md border border-gray-100/50 dark:border-gray-700/50 flex items-center justify-center text-base sm:text-lg">
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
                        {selectedProject.category === 'mobile' ? (
                          /* Mobile Smartphone Mockup for Slides */
                          <div className="flex items-center justify-center min-h-[340px] sm:min-h-[440px] py-4 select-none">
                            <div className="relative w-[180px] sm:w-[200px] aspect-[9/18.5] bg-slate-950 dark:bg-black rounded-[36px] p-2 shadow-2xl border-[4px] border-slate-800 dark:border-slate-900 overflow-hidden flex flex-col">
                              <div className="relative w-full h-full bg-white dark:bg-gray-950 rounded-[28px] overflow-hidden flex flex-col">
                                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20" />
                                <div className="relative flex-grow bg-gray-50 dark:bg-gray-900">
                                  <Image 
                                    src={img} 
                                    alt={`${selectedProject.name} slide ${index + 1}`} 
                                    fill
                                    className="object-cover object-top"
                                    priority={index === 0}
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-300 dark:bg-gray-700 rounded-full z-20" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Web Browser Mockup for Slides */
                          <div className="flex items-center justify-center min-h-[250px] sm:min-h-[350px] p-2 sm:p-4 select-none">
                            <div className="relative w-full max-w-[550px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-1.5 border-b border-gray-250 dark:border-gray-755 shrink-0">
                                <div className="flex gap-1.5 shrink-0">
                                  <span className="w-2 rounded-full h-2 bg-rose-400"></span>
                                  <span className="w-2 rounded-full h-2 bg-amber-400"></span>
                                  <span className="w-2 rounded-full h-2 bg-emerald-400"></span>
                                </div>
                                <div className="bg-white dark:bg-gray-950 text-xs font-mono text-teal-600 dark:text-teal-400 font-semibold px-3 py-1 rounded flex-grow text-center truncate ml-6 mr-1 select-none border border-gray-100 dark:border-gray-800/60">
                                  https://{selectedProject.id}.fariz.dev
                                </div>
                              </div>
                              <div className="relative aspect-[16/10] bg-gray-50 dark:bg-gray-950 overflow-y-auto max-h-[350px] sm:max-h-[450px] scrollbar-thin">
                                {selectedProject.id === 'eroses' ? (
                                  <img 
                                    src={img.src} 
                                    alt={`${selectedProject.name} slide ${index + 1}`} 
                                    className="w-full h-auto object-top"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <Image 
                                    src={img} 
                                    alt={`${selectedProject.name} slide ${index + 1}`} 
                                    fill
                                    className="object-cover object-top"
                                    priority={index === 0}
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        )}
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
