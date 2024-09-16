import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { BsFillMoonStarsFill, BsTranslate } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillCloseCircle} from "react-icons/ai";
import Image from 'next/image';
import avatar from '../public/my-avatar.png';
import android from '../public/android.png';
import website from '../public/website.png';
import vector from '../public/vector.png';

import pt1 from '../public/inventory/inventory1.jpg';
import pt11 from '../public/inventory/inventory2.jpg';
import pt12 from '../public/inventory/inventory3.png';
import pt2 from '../public/bijb/bijb.png';
import pt22 from '../public/bijb/admin.png';
import pt23 from '../public/bijb/bijb3.png';
import pt3 from '../public/crms/crms1.png';
import pt33 from '../public/crms/crms6.png';
import pt34 from '../public/crms/crms7.png';
import pt35 from '../public/crms/crms8.png';
import pt36 from '../public/crms/crms9.png';
import pt4 from '../public/suzuki/suzuki1.png';
import pt44 from '../public/suzuki/suzuki2.png';
import pt45 from '../public/suzuki/suzuki3.png';
import pt5 from '../public/bkpm/bkpm1.png';
import pt55 from '../public/bkpm/bkpm2.png';
import pt56 from '../public/bkpm/bkpm3.png';
import pt57 from '../public/bkpm/bkpm4.png';
import pt6 from '../public/kliq/kliq1.jpg';
import pt66 from '../public/kliq/kliq5.jpg';
import pt67 from '../public/kliq/kliq7.jpg';
import pt68 from '../public/kliq/kliq8.jpg';
import pt7 from '../public/biz_service/biz1.jpg';
import pt71 from '../public/biz_service/biz2.jpg';
import pt72 from '../public/biz_service/biz3.jpg';
import pt73 from '../public/biz_service/biz4.jpg';
import pt74 from '../public/biz_service/biz5.jpg';
import pt75 from '../public/biz_service/biz6.jpg';
import pt8 from '../public/dbadjoean/dbadjoean.png';
import pt81 from '../public/dbadjoean/dbadjoean1.png';
import pt82 from '../public/dbadjoean/dbadjoean2.png';
import pt83 from '../public/dbadjoean/dbadjoean3.png';
import pt84 from '../public/dbadjoean/dbadjoean4.png';
import pt85 from '../public/dbadjoean/dbadjoean5.png';
import pt86 from '../public/dbadjoean/dbadjoean6.png';
import pt9 from '../public/mycukai/mycukai1.png';
import pt91 from '../public/mycukai/mycukai2.png';
import pt92 from '../public/mycukai/mycukai3.png';
import pt10 from '../public/eroses/eroses1.png';
import pt101 from '../public/eroses/eroses2.png';
import pt102 from '../public/eroses/eroses3.png';
import pt103 from '../public/eroses/eroses4.png';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaLaravel, FaHtml5, FaJsSquare, FaReact, FaAndroid, FaPhp, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiCodeigniter } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGitAlt } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiPostgresql } from 'react-icons/si';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [language, setLanguage] = useState('en'); // Ubah nilai default menjadi 'en'
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const projectImages = [
    [pt1, pt11, pt12],
    [pt2, pt22, pt23],
    [pt3, pt33, pt34, pt35, pt36],
    [pt4, pt44, pt45],
    [pt5, pt55, pt56, pt57],
    [pt6, pt66, pt67, pt68],
    [pt7, pt71, pt72, pt73, pt74, pt75],
    [pt8, pt81, pt82, pt83, pt84, pt85, pt86],
    [pt9, pt91, pt92],
    [pt10, pt101, pt102, pt103]
  ];

  const projectDescriptionHeaders = [
    "E-ASSET",
    "TNDE",
    "CRMS",
    "E-BIDDING",
    "SIMKEU",
    "KLIQ",
    "BIZ SERVICE",
    "D'BADJOEAN",
    "MYCUKAI",
    "EROSES"
  ];

  const projectDescriptions = {
    id: [
      "E-Asset: Aplikasi manajemen aset yang digunakan oleh TikomDik Disdik Jabar, dikembangkan dengan React JS, Laravel, dan PostgreSQL.",
      "TNDE: Sistem manajemen dokumen untuk Bandara Internasional Jawa Barat, dikembangkan dengan Laravel dan MySQL.",
      "CRMS (City Road Management System): Berkolaborasi dengan Kementerian Pekerjaan Umum dan Perumahan Rakyat, dibangun menggunakan CodeIgniter dan PostgreSQL.",
      "E-Procurement Application for PT. SUZUKI Indomobil: Dikembangkan menggunakan CodeIgniter dan MySQL.",
      "SIMKEU: Sistem Keuangan untuk Kementerian Investasi/BKPM. Dibangun dengan ReactJS, Laravel Lumen, dan PostgreSQL.",
      "KLIQ: Aplikasi multiplatform untuk Brunei Darussalam, dikembangkan menggunakan Laravel dan MySQL.",
      "Biz Services: Aplikasi untuk mengelola layanan di Brunei Darussalam, dikembangkan dengan Flutter, Laravel, dan MySQL.",
      "D'Badjoean: Aplikasi untuk mengelola bisnis pakaian dan aksesoris, dikembangkan menggunakan Laravel dan MySQL.",
      "MyCukai: Aplikasi yang digunakan di Malaysia untuk mengelola perpajakan, khususnya di Kementerian Keuangan. Dibangun dengan Laravel dan MySQL.",
      "eRoses: Aplikasi yang digunakan di Malaysia, khususnya untuk Kementerian Dalam Negeri. Dibangun dengan ReactJS"
    ],
    en: [
      "E-Asset: Asset management application used by TikomDik Disdik Jabar, developed with React JS, Laravel, and PostgreSQL.",
      "TNDE: Document management system for West Java International Airport, developed with Laravel and MySQL.",
      "CRMS (City Road Management System): Collaborated with the Ministry of Public Works and Housing, built using CodeIgniter and PostgreSQL.",
      "E-Procurement Application for PT. SUZUKI Indomobil: Developed using CodeIgniter and MySQL.",
      "SIMKEU: Financial System for the Ministry of Investment/BKPM. Built with ReactJS, Laravel Lumen, and PostgreSQL.",
      "KLIQ: Multiplatform application for Brunei Darussalam, developed using Laravel and MySQL.",
      "Biz Services: Application to manage services in Brunei Darussalam, developed with Flutter, Laravel, and MySQL.",
      "D'Badjoean: Application to manage clothing and accessories business, developed using Laravel and MySQL.",
      "MyCukai: Application used in Malaysia for tax management, specifically in the Ministry of Finance. Built with Laravel and MySQL.",
      "eRoses: Application used in Malaysia, specifically for the Ministry of Home Affairs. Built with ReactJS"
    ]
  };

  const projectIcons = [
    <FaReact key="react" />,
    <FaLaravel key="laravel" />,
    <SiCodeigniter key="codeigniter" />,
    <SiCodeigniter key="codeigniter" />,
    <FaReact key="react" />,
    <FaLaravel key="laravel" />,
    <SiFlutter key="flutter" />,
    <FaLaravel key="laravel" />,
    <FaLaravel key="laravel" />,
    <FaReact key="react" />,

    // <FaAndroid key="android" />,
    // <FaHtml5 key="html5" />,
    // <FaJsSquare key="javascript" />,
    // <SiNextdotjs key="nextjs" />,
  ];

  const openModal = (imageIndex) => {
    setSelectedImage({
      images: projectImages[imageIndex],
      descriptionHeader: projectDescriptionHeaders[imageIndex],
      description: projectDescriptions[language][imageIndex]
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  // Objek terjemahan
  const translations = {
    id: {
      title: "Portofolio Fariz Nur Masyhuri",
      resume: "Resume",
      webAndroidDev: "Fullstack Developer",
      introduction: "Saya seorang pengembang aplikasi berpengalaman yang bekerja sebagai Software Engineer, terampil dalam membuat kedua web dan aplikasi seluler. Saya memiliki pengalaman langsung dengan PHP, HTML5, Bootstrap, Tailwind, dan secara konsisten menggunakan kerangka kerja seperti ReactJS, NextJS, Laravel, dan CodeIgniter. saya sangat mudah beradaptasi, terbuka untuk pengembangan pribadi, bersedia ditempatkan dimana saja, dan bersemangat mempelajari hal-hal baru",
      mySkills: "Kemampuan Saya",
      skillsDescription: "Selama saya bekerja selama 3 tahun, saya telah bekerja sama dengan beberapa instansi pemerintahan dan juga berkolaborasi dengan orang-orang yang berbakat dalam membuat website untuk penggunaan bisnis dan konsumen.",
      offerServices: "Saya menawarkan layanan untuk membuat website dan juga aplikasi android.",
      portfolio: "Portofolio",
      portfolioDescription: "Berikut ini merupakan tampilan dari website dan aplikasi android yang sudah saya kerjakan.",
      website: "Website",
      websiteDescription: "Membuat website yang responsive dan nyaman untuk dilihat sesuai dengan kebutuhan anda.",
      madeUsing: "Dibuat Menggunakan",
      androidApp: "Aplikasi Android",
      androidDescription: "Membuat aplikasi android yang elegan sesuai dengan yang anda butuhkan.",
    },
    en: {
      title: "Fariz Nur Masyhuri's Portfolio",
      resume: "Resume",
      webAndroidDev: "Fullstack Developer",
      introduction: "I am an experienced application developer working as a Software Engineer, skilled in creating both web and mobile applications. I have hands-on experience with PHP, HTML5, Bootstrap, Tailwind, and consistently use frameworks such as ReactJS, NextJS, Laravel, and CodeIgniter. I am highly adaptable, open to personal development, willing to be placed anywhere, and eager to learn new things",
      mySkills: "My Skills",
      skillsDescription: "During my 3 years of work, I have collaborated with several government agencies and talented individuals in creating websites for business and consumer use.",
      offerServices: "I offer services to create websites and Android applications.",
      portfolio: "Portfolio",
      portfolioDescription: "Here are the displays of websites and Android applications that I have worked on.",
      website: "Website",
      websiteDescription: "Creating responsive and visually appealing websites tailored to your needs.",
      madeUsing: "Made Using",
      androidApp: "Android Application",
      androidDescription: "Creating elegant Android applications that meet your requirements.",
    }
  };

  // Fungsi helper untuk mendapatkan teks terjemahan
  const t = (key) => translations[language][key];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-4 sm:px-6 md:px-20 lg:px-40 dark:bg-gray-900 min-h-screen'> 
        {/* Section 1: Profil */}
        <section className="py-10 sm:py-20">
          <nav className="mb-8 sm:mb-16 flex justify-end">
            <ul className='flex items-center space-x-4'>
              <li className="relative">
                <BsTranslate onClick={toggleLanguageDropdown} className='cursor-pointer text-2xl text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors'/>
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      English
                    </button>
                    <button onClick={() => changeLanguage('id')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Indonesia
                    </button>
                  </div>
                )}
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-cyan-600 hover:to-teal-600 transition-all duration-300' href="https://drive.google.com/file/d/13ke3XaWL4E3dyc1g4tappk5zsbcO44Wy/view?usp=sharing" target="_blank" rel="noreferrer">{t('resume')}</a></li>
            </ul>
          </nav>
          <div className='flex flex-col md:flex-row items-center justify-between mt-10 sm:mt-20'>
            <div className='w-full md:w-1/2 flex justify-center mb-10 md:hidden'>
              <div className='relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden'>
                <Image src={avatar} layout="fill" objectFit='cover' alt='profile picture' className='rounded-full'/>
              </div>
            </div>
            <div className='w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0'>
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
            <div className='w-full md:w-1/2 hidden md:flex justify-center'>
              <div className='relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden md:h-96 md:w-96'>
                <Image src={avatar} layout="fill" objectFit='cover' alt='profile picture' className='rounded-full'/>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Kemampuan */}
        <section className="py-16 sm:py-24">
          <div className='flex justify-center'>
            <div className='bg-white shadow-2xl rounded-xl p-6 sm:p-12 dark:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-3xl w-full'>
              <div className="text-center mb-12 sm:mb-20">
                <h3 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white'>{t('mySkills')}</h3>
                <p className='text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-6'>
                  {t('skillsDescription')}
                </p>
              </div>
              <ul className='text-gray-600 dark:text-gray-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-sm sm:text-lg'>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><FaPhp className="mr-2" /> PHP</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><IoLogoJavascript className="mr-2" /> Javascript</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><AiFillHtml5 className="mr-2" /> HTML5</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><FaCss3Alt className="mr-2" /> CSS</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><FaLaravel className="mr-2" /> Laravel</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><SiCodeigniter className="mr-2" /> CodeIgniter</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><FaReact className="mr-2" /> React JS</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><SiNextdotjs className="mr-2" /> Next JS</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><GrMysql className="mr-2" /> MySQL</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><SiPostgresql className="mr-2" /> PostgreSQL</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><SiFlutter className="mr-2" /> Flutter</li>
                <li className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center transition-colors hover:bg-teal-100 dark:hover:bg-teal-700 flex items-center justify-center'><FaGitAlt className="mr-2" /> Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Portofolio */}
        <section className="py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-20">
            <h3 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white'>{t('portfolio')}</h3>
            <p className='text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300'>
              {t('portfolioDescription')}
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12'>
            {projectImages.map((imageGroup, index) => (
              <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 transition-transform duration-300 hover:scale-105'>
                <div className='p-4 sm:p-5 bg-teal-600 text-white font-bold flex items-center justify-between'>
                  <h4 className="text-sm sm:text-base">{projectDescriptionHeaders[index]}</h4>
                  <span className="text-xl sm:text-2xl">{projectIcons[index]}</span>
                </div>
                <button onClick={() => openModal(index)} className='w-full p-4 sm:p-5'>
                  <Image 
                    src={imageGroup[0]} 
                    alt={`project${index + 1}`} 
                    className='w-full h-40 sm:h-56 object-cover rounded-lg'
                    width={300} 
                    height={200} 
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalOpen && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto'>
            <div className='bg-white p-4 rounded-lg relative' style={{ width: '95%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto' }}>
              <button className='absolute top-2 right-2 text-gray-800 text-2xl sm:text-3xl hover:text-red-600 transition-colors' onClick={closeModal}>
                <AiFillCloseCircle />
              </button>
              <div className="flex justify-center items-center flex-col overflow-y-auto" style={{ maxHeight: 'calc(90vh - 2rem)' }}>
                <h3 className="text-center text-xl sm:text-2xl mt-4 mb-4 text-gray-800"><b>{selectedImage.descriptionHeader}</b></h3>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="w-full"
                >
                  {selectedImage.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="max-h-[60vh] overflow-y-auto">
                        <Image 
                          src={image} 
                          alt={`modal-image-${index}`} 
                          width={750} 
                          height={400} 
                          className='rounded-lg object-contain mx-auto'
                          layout="responsive"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="text-center mt-4 mb-4 text-sm sm:text-base text-gray-800">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
