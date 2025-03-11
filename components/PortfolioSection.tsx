import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiCodeigniter, SiFlutter, SiNextdotjs } from 'react-icons/si';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioSectionProps {
  translations: any;
  language: 'id' | 'en';
  projectImages: StaticImageData[][];
  projectMainImages: StaticImageData[];
  projectDescriptionHeaders: string[];
  projectDescriptions: {
    id: string[];
    en: string[];
  };
}

interface SelectedImageType {
  images: StaticImageData[];
  descriptionHeader: string;
  description: string;
}

export default function PortfolioSection({ 
  translations, 
  language, 
  projectImages,
  projectMainImages,
  projectDescriptionHeaders, 
  projectDescriptions 
}: PortfolioSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImageType | null>(null);

  // Helper function to get translated text
  const t = (key: string) => translations[language][key];

  const projectIcons = [
    <FaLaravel key="laravel" />,
    <SiCodeigniter key="codeigniter" />,
    <SiCodeigniter key="codeigniter" />,
    <FaReact key="react" />,
    <FaLaravel key="laravel" />,
    <SiFlutter key="flutter" />,
    <FaLaravel key="laravel" />,
    <FaLaravel key="laravel" />,
    <SiNextdotjs key="nextjs" />,
    <FaReact key="react" />,
    <SiNextdotjs key="nextjs" />,
    <FaReact key="react" />,
    <FaReact key="react" />,
  ];

  const openModal = (imageIndex: number) => {
    setSelectedImage({
      images: projectImages[imageIndex],
      descriptionHeader: projectDescriptionHeaders[imageIndex],
      description: projectDescriptions[language as keyof typeof projectDescriptions][imageIndex]
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h3 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white'>{t('portfolio')}</h3>
            <p className='text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mx-auto text-gray-600 dark:text-gray-300'>
              {t('portfolioDescription')}
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12'>
            {projectImages.map((imageGroup, index) => (
              <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800 transition-transform duration-300 hover:scale-105'>
                <div className='p-4 sm:p-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold flex items-center justify-between'>
                  <h4 className="text-sm sm:text-base">{projectDescriptionHeaders[index]}</h4>
                  <span className="text-xl sm:text-2xl">{projectIcons[index]}</span>
                </div>
                <button onClick={() => openModal(index)} className='w-full p-4 sm:p-5 bg-white'>
                  <Image 
                    src={projectMainImages[index]} 
                    alt={`project${index + 1}`} 
                    className='w-full h-40 sm:h-56 object-contain rounded-lg'
                    width={300} 
                    height={200} 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto z-50'>
          <div className='bg-white p-6 rounded-lg relative' style={{ width: '95%', maxWidth: '800px', maxHeight: '90vh', margin: 'auto' }}>
            <button className='absolute top-2 right-2 text-gray-800 text-2xl sm:text-3xl hover:text-red-600 transition-colors' onClick={closeModal}>
              <AiFillCloseCircle />
            </button>
            <div className="flex justify-center items-center flex-col overflow-y-auto" style={{ maxHeight: 'calc(90vh - 2rem)' }}>
              <h3 className="text-center text-2xl sm:text-3xl mt-4 mb-6 text-gray-800 font-bold">{selectedImage?.descriptionHeader}</h3>
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="w-full mb-6"
              >
                {selectedImage?.images.map((image, index) => (
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
              <p className="text-center mt-4 mb-4 text-sm sm:text-base text-gray-600">{selectedImage?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 