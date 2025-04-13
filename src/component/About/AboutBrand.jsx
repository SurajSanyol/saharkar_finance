

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import brandImg6 from '../../assets/AboutImage/aboutInfoImg/brand-6.png'
import brandImg7 from '../../assets/AboutImage/aboutInfoImg/brand-7.png'
import brandImg8 from '../../assets/AboutImage/aboutInfoImg/brand-8.png'
import brandImg9 from '../../assets/AboutImage/aboutInfoImg/brand-9.png'
import brandImg10 from '../../assets/AboutImage/aboutInfoImg/brand-10.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay } from "swiper/modules";

export default function AboutBrand() {
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
        className="mySwiper pb-3 pt-5 bg-white rounded-2 container text-center mb-4"
      >
        <SwiperSlide>
            <img src={brandImg6}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg7}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg8}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg9}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={brandImg10}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
