import React from "react";
import "./LoanSection.css";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row column-gap-5">
          <div className="col-md-12 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 mb-3 title">Testimonials</h2>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority have
                suffered alteration embarrased
              </p>
            </div>
          </div>

          <div className="mt-4" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
