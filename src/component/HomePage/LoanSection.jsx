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
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="section-title">
              <h2 className="poppins-semibold fs-1 title">
                Loans for your life
              </h2>
              <p className="poppins-regular sub-title">
                We have range of product for your loan solutions
              </p>
            </div>
          </div>
        </div>

        <div class="row row-gap-4" style={{ marginTop: "40px" }}>
          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/icon-1.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Personal Loan</h4>
                            <p>Pеrѕоnаl loan is unѕесurеd wіth fіxеd рауmеntѕ.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
            <CardComponent
              title={"Personal Loan"}
              subtitle={"Personal loan is unsecured with fixed payments."}
              image={personalLoanImage}
            />
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/car.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Car Loan</h4>
                            <p>Cаr loan is most popular kіnd оf installment lоаn.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
            <CardComponent
              title={"Car Loan"}
              subtitle={"Car loan is most popular kind of installment loan."}
              image={carImage}
            />
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/home.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Business Loan</h4>
                            <p>You nееd a loan tо new business expand еxіѕtіng.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
            <CardComponent
              title={"Business Loan"}
              subtitle={"You need a loan to new business expand existing."}
              image={businessImage}
            />
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/education.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Home Loan</h4>
                            <p>Buуіng a hоmе is оnе of the bіggеѕt dесіѕіоn еvеr make.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
            <CardComponent
              title={"Home Loan"}
              subtitle={
                "Buying a home is one of the biggest decisions ever made."
              }
              image={homeImage}
            />
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/money.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Education Loan</h4>
                            <p>Student get more benifit compare to businesss loan.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
            <CardComponent
              title={"Education Loan"}
              subtitle={"Student get more benifit compare to businesss loan."}
              image={educationImage}
            />
          </div>

          <div class="col-lg-4 col-md-6 d-flex justify-content-center">
            {/* <div class="single-featured">
                        <div class="icon">
                            <img src="asset/img/card.png" alt=""/>
                        </div>
                        <div class="content">
                            <h4>Micro Loan</h4>
                            <p>Customer need only  per day interest on loan.</p>
                            <a href="#">READ MORE <i class="fa fa-angle-double-right"></i></a>
                        </div>
                    </div> */}
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
