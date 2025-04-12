import React from "react";
import "./LoanSection.css";
import CardComponent from "../CommonComponent/CardComponent";
import personalLoanImage from "../../assets/CardImage/money-bag-icon.png";
import carImage from "../../assets/CardImage/car-price-icon.png";
import businessImage from "../..//assets/CardImage/business-investment-icon.png";
import homeImage from "../../assets/CardImage/property-mortgage-icon.png";
import educationImage from "../../assets/CardImage/student-loan-icon.png";
import MicroLoanImage from "../../assets/CardImage/buyer-pay-icon.png";

const LoanSection = () => {
  return (
    <div style={{ margin: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">
                Loans for your life
              </h2>
              <p className="poppins-regular sub-title">
                We have range of product for your loan solutions
              </p>
            </div>
          </div>
        </div>

        <div className="row row-gap-4" style={{ marginTop: "40px" }}>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
           
            <CardComponent
              title={"Personal Loan"}
              subtitle={"Personal loan is unsecured with fixed payments."}
              image={personalLoanImage}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            
            <CardComponent
              title={"Car Loan"}
              subtitle={"Car loan is most popular kind of installment loan."}
              image={carImage}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
           
            <CardComponent
              title={"Business Loan"}
              subtitle={"You need a loan to new business expand existing."}
              image={businessImage}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
           
            <CardComponent
              title={"Home Loan"}
              subtitle={
                "Buying a home is one of the biggest decisions ever made."
              }
              image={homeImage}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
           
            <CardComponent
              title={"Education Loan"}
              subtitle={"Student get more benifit compare to businesss loan."}
              image={educationImage}
            />
          </div>

          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            
            <CardComponent
              title={"Micro Loan"}
              subtitle={"Customer need only per day interest on loan."}
              image={MicroLoanImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSection;
