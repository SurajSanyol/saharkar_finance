import React from "react";
import aboutinfoImg from "../../assets/AboutImage/aboutInfoImg/about.jpg";
import signImg from "../../assets/AboutImage/aboutInfoImg/sign.png";
import "../../component/HomePage/LoanSection.css";
import visionImage1 from "../../assets/AboutImage/aboutInfoImg/vision-1.png";
import visionImage2 from "../../assets/AboutImage/aboutInfoImg/vision-2.png";
import  '../../component/About/Aboutinfo.css'

const AboutInfo = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div
        className="container rowpadding-with-border"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          paddingBottom: "40px",
        }}
      >
        <div className="row row-gap-4">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="single-image" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <img
                src={aboutinfoImg}
                alt="aboutImage"
                className="rounded-2 w-100"
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="about-content" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <h2 className="poppins-semibold title text-capitalize text-center fs-1 mb-3">
                about Info RTS
              </h2>

              <p className="poppins-regular sub-title">
                RTS Loan Consultancy Services is a dedicated financial
                consultancy firm specializing in loan advisory, credit
                improvement, and financial planning. Founded on the principles
                of trust, transparency, and client-first service, RTS Loan
                Consultancy strives to simplify the loan acquisition process and
                empower clients with the knowledge and resources to make
                confident financial decisions.{" "}
              </p>
              <p className="poppins-regular sub-title">
                We understand that navigating the world of loans and finance can
                be challenging, which is why our team of experienced consultants
                is committed to guiding individuals and businesses at every
                step. From choosing the right loan product to improving credit
                scores and managing debt, RTS Loan Consultancy provides
                personalized solutions designed to meet diverse financial needs.{" "}
              </p>

              <img src={signImg} alt="sign image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row row-gap-4">

          <div className="col-md-6 ps-md-1" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="single-vision d-flex column-gap-3">
              <div className="vision-img col-6">
                <img
                  src={visionImage1}
                  alt="vision 1 image"
                  className="w-100 rounded-1"
                />
              </div>

              <div className="vision-content col-6">
                <h4 className="poppins-semibold title text-capitalize">
                  Our Vision
                </h4>
                <p className="poppins-regular sub-title">
                  At RTS Loan Consultancy Services, our mission is to simplify
                  and enhance the financial lives of our clients by providing
                  trusted, transparent, and expert loan advisory and financial
                  planning services.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 pe-md-1">
            <div className="single-vision  d-flex column-gap-3" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="vision-img col-6">
                <img
                  src={visionImage2}
                  alt="vision 2 image"
                  className="w-100 rounded-1"
                />
              </div>
              <div className="vision-content col-6">
                <h4 className="poppins-semibold title text-capitalize">
                  Our Goals
                </h4>
                <p className="poppins-regular sub-title">
                  Our goal іѕ to рrоvіdе a high level of ѕоund аnd meaningful
                  financial ѕеrvісеѕ tо thе реорlе we ѕеrvе.Our customers
                  rесеіvе a mаtсhlеѕѕ еxреrіеnсе thаt fаr еxресtаtіоnѕ.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
