// Modifikasi komponen ImageSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination]);

const ImageSlider = ({ images, headers, descriptions, openModal, modalClass }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={modalClass}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={800}
              height={600}
              onClick={() => openModal(image, headers[index], descriptions[index])}
              className='rounded-lg object-cover cursor-pointer'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
