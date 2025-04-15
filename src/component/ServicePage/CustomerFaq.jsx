import React from "react";
import "../../component/HomePage/LoanSection.css";
import GeneralFaq from "../../component/Pages/GeneralFaq";
import EligibilityFaq from "../../component/Pages/EligibilityFaq";

const CustomerFaq = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">Customer Faq’s</h2>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the major have
                suffered alteration embarrased
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <GeneralFaq />
          </div>

          <div className="col-md-6">
            <EligibilityFaq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFaq;
