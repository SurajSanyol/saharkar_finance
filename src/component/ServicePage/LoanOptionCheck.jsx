import React from "react";
import img1 from '../../assets/ServiceImg/edom.png'
import img2 from '../../assets/ServiceImg/document.png'
import img3 from '../../assets/ServiceImg/bripcase.png'

const LoanOptionCheck = () => {
  return (
    <div
      className="container-fluid"
      style={{ padding: "70px 0", backgroundColor: "#232935" }}
    >
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-4 checkingbg1 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="single-loan-checking-options">
              <div className="icon mb-3">
                <img src={img1} alt="image first" className="" />
              </div>
              <div className="content">
                <h4 className="text-white poppins-semibold">No Hidden Fees</h4>
                <p
                  className="poppins-regular"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  At RTS Loan Consultancy Services, we guarantee no hidden
                  fees—only
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 checkingbg2 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="single-loan-checking-options">
              <div className="icon mb-3">
                <img src={img2} alt=" image second" className="" />
              </div>
              <div className="content">
                <h4 className="text-white poppins-semibold">Less Documents</h4>
                <p className="poppins-regular"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  Experience a hassle-free process with RTS Loan Consultancy
                  Services,
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 checkingbg3 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="single-loan-checking-options">
              <div className="icon mb-3">
              <img src={img3} alt=" image third" className="" />
              </div>
              <div className="content">
                <h4 className="text-white poppins-semibold">Specialist Team</h4>
                <p className="poppins-regular"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  Our specialist team at RTS Loan Consultancy Services provides
                  expert guidance
                  <br />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanOptionCheck;
