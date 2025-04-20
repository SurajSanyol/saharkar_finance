import React from "react";
import AboutBrand from "./AboutBrand";

const OurPartner = () => {
  return (
    <div style={{ margin: "70px 0" }}>
      <div className="container"> 
        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title pb-3">Our Partners</h2>
              <p className="poppins-regular sub-title">
                At RTS Loan Consultancy Services, we partner with leading banks,
                financial institutions, insurance providers, and FinTech
                companies to deliver a wide range of loan products and financial
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutBrand/>
    </div>
  );
};

export default OurPartner;
