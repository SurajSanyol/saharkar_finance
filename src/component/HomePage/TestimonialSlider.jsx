import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import TestiAuthor from "../../assets/LanderImage/choose-2.jpg";
import './LoanSection.css'
import './TestimonialSlider.css'
import testimonialImage1 from "../../assets/TestimonilImage/testimonial-1.jpg";
import testimonialImage2 from "../../assets/TestimonilImage/testimonial-2.jpg";
import testimonialImage3 from "../../assets/TestimonilImage/testimonial3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper pb-5 pt-2 bg-white rounded-2"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center slider-Container">
            <img src={testimonialImage1} className="rounded-1  sliderImage" />
            <div className="px-4 details">
              <BiSolidQuoteAltLeft className="fs-3 "/>

              <h4 className="mt-2 poppins-semibold title">
                Dwayne Johnson
              </h4>
              <p  className="mt-2 poppins-regular-italic"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}>Self Employee</p>
              <p className="mb-2 poppins-regular sub-title">
                “RTS made financing my dream car smooth and straightforward!”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="d-flex justify-content-center slider-Container">
            <img src={testimonialImage2} className="rounded-1 sliderImage" />
            <div className="px-4 details">
              <BiSolidQuoteAltLeft className="fs-3" />

              <h4 className="mt-2 poppins-semibold title">
                Nia Jax
              </h4>
              <p
                className="mt-2 poppins-regular-italic"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}
              >
                IT Manager
              </p>
              <p className="mb-2 poppins-regular sub-title">
                “ I felt truly supported by RTS in getting the best rate for my
                loan!”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="d-flex justify-content-center slider-Container">
            <img src={testimonialImage3} className="rounded-1 sliderImage" />
            <div className="px-4 details">
              <BiSolidQuoteAltLeft className="fs-3" />

              <h4 className="mt-2 poppins-semibold title">
                Mohammad & Aashi
              </h4>
              <p className="mt-2 poppins-regular-italic"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}>Sales Consultant</p>
              <p className="mb-2 poppins-regular sub-title">
                “ The RTS team guided me every step of the way for my education
                loan.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="d-flex justify-content-center slider-Container">
            <img src={testimonialImage1} className="rounded-1 sliderImage" />
            <div className="px-4 details ">
              <BiSolidQuoteAltLeft className="fs-3" />

              <h4 className="mt-2 poppins-semibold title">
                Vihaan
              </h4>
              <p className="mt-2 poppins-regular-italic"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}>Finance Consultant</p>
              <p className="mb-2 poppins-regular sub-title">
                “ RTS helped me boost my credit score and get approved for a
                loan..”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="d-flex justify-content-center slider-Container">
            <img src={testimonialImage2} className="rounded-1 sliderImage" />
            <div className="px-4 details">
              <BiSolidQuoteAltLeft className="fs-3" />

              <h4 className="mt-2 poppins-semibold title">
                Reyansh
              </h4>
              <p className="mt-2 poppins-regular-italic"
                style={{ color: "rgba(0, 0, 0, 0.8)" }}>Lawyer</p>
              <p className="mb-2 poppins-regular sub-title">
                “ RTS made my home loan process quick and easy—highly
                recommend.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
