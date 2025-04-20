import React from "react";
import calculatorImage from "../../assets/LoanCalculator/calculate.jpg";
import "./LoanCalculator.css";
import { Link } from "react-router";
import Button from "../CommonComponent/Button";
// import "./LoanProcess.css";

const LoanCalculator = () => {
  return (
    <div
      className="loan-calculator"
      style={{
        backgroundImage: `url(${calculatorImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "70px 0",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="calculator-form">

              <div className="section-title" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <h2 className="poppins-semibold fs-1 text-white mb-3">
                  Loans Calculator
                </h2>
                <p className="poppins-regular text-white">
                  Apply for a loan, and you will be able to benefit from a
                  decent and comfortable loan.
                </p>
              </div>

              <form action="#" method="get" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <div className="row row-gap-3">
                  <div className="col-lg-6">
                    <div className="single-select">
                      <label for="barrow" className=" poppins-regular mb-1">I’d like to Borrow</label>
                      <input
                        type="text"
                        id="barrow"
                        name="barrow"
                        placeholder="300"
                        className="px-2 py-1 poppins-regular border-0 w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-select">
                      <label for="pay" className="poppins-regular mb-1">I want to pay</label>
                      <input
                        type="text"
                        id="pay"
                        name="want"
                        placeholder="200"
                         className="px-2 py-1 poppins-regular border-0 w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="single-select">
                      <label for="every" className="poppins-regular mb-1 ">Every 2 Weeks</label>
                      <br/>
                      <input
                        type="text"
                        id="every"
                        name="every"
                        placeholder="21 payments of 58*"
                        className="px-2 py-1 poppins-regular border-0 w-100"
                        
                        
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <Link to={"contact"} className="text-decoration-none d-inline-block mt-3">
                      <Button text={"Calculate Loan"} />
                    </Link>
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
