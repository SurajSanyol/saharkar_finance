import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

// import './LoanSection.css'
import "../../component/HomePage/TestimonialSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function AboutTestimonial() {
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
        
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-5 pt-2 bg-white rounded-2"
      >
        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                <div className="d-flex justify-content-center">
                  <BiSolidQuoteAltLeft className="fs-3 mb-4" />
                </div>
                <p className="poppins-regular sub-title text-center mb-4">
                  “RTS Loan Consultancy helped me secure a business loan that
                  was crucial for expanding my cafe. Their consultants took the
                  time to understand my needs and provided me with options I
                  didn’t even know existed. Their expertise made a huge
                  difference!”
                </p>
                <div className="testimonaol-info d-flex flex-column align-items-center">
                  <h4 className="poppins-semibold title">Reyansh</h4>
                  <p className="poppins-regular-italic sub-title">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                <div className="d-flex justify-content-center">
                  <BiSolidQuoteAltLeft className="fs-3 mb-4" />
                </div>
                <p className="poppins-regular sub-title text-center mb-4">
                “As a first-time borrower, I was overwhelmed by the amount of information out there. RTS Loan Consultancy made everything simple and straightforward. They provided excellent advice on improving my credit score, which ultimately helped me get approved for my loan. Highly recommend ”
                </p>
                <div className="testimonaol-info d-flex flex-column align-items-center">
                  <h4 className="poppins-semibold title">Vihaan</h4>
                  <p className="poppins-regular-italic sub-title">First-Time Borrower</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                <div className="d-flex justify-content-center">
                  <BiSolidQuoteAltLeft className="fs-3 mb-4" />
                </div>
                <p className="poppins-regular sub-title text-center mb-4">
                “I had been struggling to find the right home loan for months. The team at RTS Loan Consultancy was incredibly helpful! They walked me through every step of the process, answered all my questions, and helped me secure a loan with great terms. I can’t thank them enough for their support!”
                </p>
                <div className="testimonaol-info d-flex flex-column align-items-center">
                  <h4 className="poppins-semibold title">Rajesh Kumar & Aashi Gupta</h4>
                  <p className="poppins-regular-italic sub-title">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
