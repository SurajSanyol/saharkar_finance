import React from "react";
import "./LoanSection.css";
import "./lenderSection.css";
import chooseImg1 from "../../assets/LanderImage/choose-1.jpg";
import chooseImg2 from "../../assets/LanderImage/choose-2.jpg";
import chooseImg3 from "../../assets/LanderImage/choose-3.jpg";
import icon1 from "../../assets/LanderImage/icon-1.png";
import icon2 from "../../assets/LanderImage/icon-2.png";
import icon3 from "../../assets/LanderImage/icon-3.png";
const LenderSection = () => {
  return (
    <div style={{ margin: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">Why Choose Lender</h2>
              <p className="poppins-regular sub-title">
                Choose sahakar finance for expert guidance, diverse loan
                options, competitive rates, and personalized support tailored to
                your financial needs.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 row-gap-4">
          <div className="col-lg-4">
            <div className="text-center rounded-4 position-relative overflow-hidden">
              <div className="choose-img">
                <img src={chooseImg1} alt="" className="rounded-4 img-fluid" />
              </div>

              <div className="choose-title">
                <h4>
                  <img src={icon1} alt="" className="me-4" />
                  No Hidden Fees
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="text-center position-relative overflow-hidden rounded-4 ">
              <div className="choose-img">
                <img src={chooseImg2} alt="" className="rounded-4  img-fluid" />
              </div>

              <div className="choose-title">
                <h4>
                  <img src={icon2} alt="" className="me-4" />
                  Less Documents
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="text-center position-relative overflow-hidden rounded-4 ">
              <div className="choose-img">
                <img src={chooseImg3} alt="" className="rounded-4  img-fluid" />
              </div>

              <div className="choose-title">
                <h4>
                  <img src={icon3} alt="" className="me-4" />
                  Specialist Team
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderSection;
