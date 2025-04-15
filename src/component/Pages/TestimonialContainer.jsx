import React from "react";

import testimonialImg1 from "../../assets/TestimonilImage/testimonial-1.jpg";
import testimonialImg2 from "../../assets/TestimonilImage/testimonial-2.jpg";
import testimonialImg3 from "../../assets/TestimonilImage/testimonial3.jpg";
import "../../component/HomePage/LoanSection.css";

const TestimonialContainer = () => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg1}
                  alt=" testimonial img 1"
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  Dwayne Johnson
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg2}
                  alt="testimonial img 2 "
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  Stuart Binny
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg3}
                  alt="testimonial img 3 "
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  Mukib Kukis
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg2}
                  alt="testimonial img 2 "
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  johon due
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg1}
                  alt="testimonial img 1 "
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  Karolayns D
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-testimonial d-flex column-gap-3">
              <div className="testimonial-img" style={{ width: "300px" }}>
                <img
                  src={testimonialImg3}
                  alt="testimonial img 3 "
                  className="w-100 rounded-1"
                />
              </div>
              <div className="testimonial-content">
                <h5 className="text-capitalize poppins-medium title">
                  Roky tom
                </h5>
                <p className="poppins-medium sub-title mb-1">
                  Sales Consultant
                </p>
                <p className="poppins-regular sub-title mb-0">
                  “ A majority have suffer alte form and web sites still innr
                  their infancy bose.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;
