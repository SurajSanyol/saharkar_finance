import React from "react";
import "./LoanSection.css";
import "./LoanProcess.css";
import { PiIdentificationCardLight } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { IoCashOutline } from "react-icons/io5";
import { HiOutlineDocument } from "react-icons/hi2";







const LoanProcess = () => {
  return (
    <div style={{ padding: "70px 0",backgroundColor:"#f7f8fa" }}>
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">
                Simple Loan Process
              </h2>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority have
                suffered alteration embarrased.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-lg-3 col-md-6 process text-center">
            <div className="single-process">
              <div className="process-icon mb-3">
                <HiOutlineDocument className="fs-1 primary-blue"/>
              </div>
              <div className="content">
                <h4 className="process-title poppins-medium ">Choose Loan Amount</h4>
                <p className="poppins-regular sub-title">Choose your loan amount and terms to use loan</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 process text-center">
            <div className="single-process">
              <div className="process-icon mb-3">
                <PiIdentificationCardLight className="fs-1 primary-blue"/>
              </div>
              <div className="content">
                <h4 className="process-title poppins-medium">Provide Document</h4>
                <p className="poppins-regular sub-title">Need to provide some basic document to verification</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 process text-center">
            <div className="single-process">
              <div className="process-icon mb-3">
                <CiCircleCheck className="fs-1 primary-blue"/>
              </div>
              <div className="content">
                <h4 className="process-title poppins-medium">Approved Loan</h4>
                <p className="poppins-regular sub-title">
                  Our loan specialist ask fews question and verify docuements.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 process text-center">
            <div className="single-process">
              <div className="process-icon mb-3">
                <IoCashOutline className="fs-1 w-full m-auto primary-blue"/>
              </div>
              <div className="content">
                <h4 className="process-title poppins-medium">Get your Money</h4>
                <p className="poppins-regular sub-title">Once loan aprroved you get loan amount credit.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoanProcess;
