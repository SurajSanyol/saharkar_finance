import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const CheckYourLoan = () => {
  return (
    <div style={{padding: "50px 0",backgroundColor:'#1e3a8a'}} className="check-your-rate">
      <div className="container">
        <div className="row row-gap-3">
          <div className="col-md-8">
            <div className="check-your-rate-text">
              <p className="poppins-semibold fs-4 text-white mb-0">
                Checking your loan options does not affect your credit score
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="check-your-rate-btn">
              {/* <a href="#" className="btn btn-default btn-sm">
                CHECK YOUR RATE
              </a> */}
              <Link to={'#'} className="text-decoration-none">

              <Button text={"CHECK YOUR RATE"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckYourLoan;
