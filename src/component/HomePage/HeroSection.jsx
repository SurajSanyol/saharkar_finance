import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import sliderImage1 from "../../assets/SliderImage/slider-1.jpg";
import sliderImage2 from "../../assets/SliderImage/slider-2.jpg";
import sliderImage3 from "../../assets/SliderImage/slider-3.jpg";
import Button from "../CommonComponent/Button";
import { IoTimerOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

export default function HeroSection() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className=""
            style={{
              backgroundImage: `url(${sliderImage3})`,
              width: "100vw",
              height: "500px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: "-1",
            }}
          >
            <div
                
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100%",
                height: "500px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="">
                    <h2
                      className="text-capitalize fs-5 poppins-medium text-white"
                      style={{ marginTop: "100px", marginBottom: "20px" }}
                    >
                      Leading bank loan provider in the market
                    </h2>
                    <h1 className="text-capitalize poppins-semibold text-white fs-1">
                      Lowest Interest Rate on Home Loan
                    </h1>
                    <div className="d-inline-flex  mt-5 column-gap-3">
                      <Button text={"Apply Loan"} />
                      <Button text={"More Info"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=""
            style={{
              backgroundImage: `url(${sliderImage1})`,
              width: "100vw",
              height: "500px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: "-1",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100%",
                height: "500px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="">
                    <h2
                      className="text-capitalize fs-5 poppins-medium text-white"
                      style={{ marginTop: "100px", marginBottom: "20px" }}
                    >
                      Empowering your financial journey with expert loan
                      soulutiona and personalized advice. Find the right loan
                      with ease and confidence.
                    </h2>
                    <h1 className="text-capitalize poppins-semibold text-white fs-1">
                      Are you looking for a loan ehnancement loan ?
                    </h1>
                    <div className="d-inline-flex column-gap-3 mt-5">
                      <Button text={"Apply Loan"} />
                      <Button text={"More Info"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=""
            style={{
              backgroundImage: `url(${sliderImage2})`,
              width: "100vw",
              height: "500px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              zIndex: "-1",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100%",
                height: "500px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="">
                    <h2
                      className="text-capitalize fs-5 poppins-medium text-white"
                      style={{ marginTop: "100px", marginBottom: "20px" }}
                    >
                      Personal,Home,Business,or vehical Loans--
                    </h2>
                    <h1 className="text-capitalize poppins-semibold text-white fs-1">
                      RTS has you covered with options tailored to fit your
                      unique needs
                    </h1>
                    <div className="d-inline-flex column-gap-3 mt-5">
                      <Button text={"Apply Loan"} />
                      <Button text={"More Info"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div style={{ backgroundColor: "#1E3A8A", padding: "50px 0" }}>
        <div className="container">
          <div className="row row-gap-3">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <IoTimerOutline className="fs-1 text-white me-4" />
                <p className="mb-0 poppins-semibold fs-5 text-white">
                  Quick & Easy Loan <br /> Approvals
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <HiUserGroup className="fs-1 text-white me-4" />
                <p className="mb-0 poppins-semibold fs-5 text-white">
                  500 Customers <br /> Satisfied
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <MdOutlinePayments className="fs-1 text-white me-4" />
                <p className="mb-0 poppins-semibold fs-5 text-white">
                  No Prepayment or <br /> Hidden Fees
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="d-flex align-items-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <TfiLocationPin className="fs-1 text-white me-4" />
                <p className="mb-0 poppins-semibold fs-5 text-white">
                  50 branches all <br /> over India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
