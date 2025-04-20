import React from "react";
import AboutHeroPage from "../About/AboutHeroPage";
import "../../component/HomePage/LoanSection.css";
import GeneralFaq from "./GeneralFaq";
import EligibilityFaq from "./EligibilityFaq";
import LoanPlusFaq from "./LoanPlusFaq";
import ApprovedFaq from "./ApprovedFaq";
import CheckYourLoan from "../CommonComponent/CheckYourLoan";
const FaQ = () => {
  return (
    <div>
      <AboutHeroPage text={"FaQ"} subTextFirst={"Home"} subTextSecond={"FaQ"} />

      <div style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="faq-single-title text-capitalize poppins-semibold title mb-4"  data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                General Question
              </h2>

              <GeneralFaq />

              <h2 className="faq-single-title text-capitalize poppins-semibold title my-4"  data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                Eligibility &amp; Documentation
              </h2>

              <EligibilityFaq />

              <h2 className="faq-single-title text-capitalize poppins-semibold title my-4"  data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                About Loanplus
              </h2>

              <LoanPlusFaq />

              <h2 className="faq-single-title text-capitalize poppins-semibold title my-4"  data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                After Approved
              </h2>

              <ApprovedFaq />
            </div>
          </div>
        </div>
      </div>
        
        <CheckYourLoan/>
    </div>
  );
};

export default FaQ;
