import React from "react";
import personalLoanImg from "../../../assets/ServiceImg/portfolio-11.jpg";
import carLoanImg from "../../../assets/ServiceImg/portfolio-10.jpg";
import businessLoanImg from "../../../assets/ServiceImg/portfolio-3.jpg";
import homeLoanImg from "../../../assets/ServiceImg/portfolio-4.jpg";
import educationLoanImg from "../../../assets/ServiceImg/portfolio-5.jpg";
import microLoanImg from "../../../assets/ServiceImg/portfolio-6.jpg";
import CardComponent from "../../CommonComponent/CardComponent";

const ServiceImgCard = () => {
  return (
    <div style={{padding:'70px 0'}}>
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
          
            <CardComponent
              title={"Personal Loan"}
              subtitle={"Personal loan is unsecured with fixed payments."}
              image={personalLoanImg}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <CardComponent
              title={"Car Loan"}
              subtitle={"Car loan is most popular kind of installment loan."}
              image={carLoanImg}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <CardComponent
              title={"Business Loan"}
              subtitle={"You need a loan to new business expand existing."}
              image={businessLoanImg}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <CardComponent
              title={"Home Loan"}
              subtitle={
                "Buying a home is one of the biggest decisions ever made."
              }
              image={homeLoanImg}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <CardComponent
              title={"Education Loan"}
              subtitle={"Student get more benifit compare to businesss loan."}
              image={educationLoanImg}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <CardComponent
              title={"Micro Loan"}
              subtitle={"Customer need only per day interest on loan."}
              image={microLoanImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImgCard;
