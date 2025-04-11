import Button from "../CommonComponent/Button";
import React from "react";
import { Link } from "react-router";

const FreeConsultation = () => {
  return (
    <div style={{ padding: "70px 0", backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <div class="d-flex flex-column align-items-center">
              <h4 className="poppins-medium text-white mb-3">
                Get free consultations
              </h4>
              <h2 className="poppins-bold text-white fs-2 mb-5">
                Checking your loan options does not affect <br />
                your credit score
              </h2>
              <Link to={"/"} className="text-decoration-none">
                <Button text={"Apply Now"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
