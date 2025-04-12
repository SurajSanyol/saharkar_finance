

// const BrandSection = () => {
//   return (
//     <div>BrandSection</div>
//   )
// }

// export default BrandSection


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import './LoanSection.css'
import './TestimonialSlider.css'
import brandImg1 from '../../assets/BrandImage/brand-1.png'
import brandImg2 from '../../assets/BrandImage/brand-2.png'
import brandImg3 from '../../assets/BrandImage/brand-3.png'
import brandImg4 from '../../assets/BrandImage/brand-4.png'
import brandImg5 from '../../assets/BrandImage/brand-5.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import {Autoplay } from "swiper/modules";

export default function BrandSection() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        loop={true}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
           
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper pb-3 pt-3 bg-white rounded-2 container text-center"
      >
        <SwiperSlide>
            <img src={brandImg1}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg2}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg3}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg4}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg5}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
