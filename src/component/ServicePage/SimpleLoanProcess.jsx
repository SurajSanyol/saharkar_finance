import React from "react";
import "../../component/HomePage/LoanSection.css";
import chooseAmountImg from '../../assets/ServiceImg/pade.png'
import provideDocumentImg from '../../assets/ServiceImg/dollar.png'
import approvedLoanImg from '../../assets/ServiceImg/handshake.png'
import getYourMoneyImg from '../../assets/ServiceImg/get-money.png'
import './SimpleLoanprocess.css'

const SimpleLoanProcess = () => {
  return (
    <div style={{ padding: "50px 0" }} className="simple-loan-process">
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
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

        <div className="row process-list">
          <div className="col-md-3 second-process" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="second-single-loan-process">
              <h4 className="poppins-semibold title mb-4">Choose Amount</h4>
              <div className="icon d-flex justify-content-center">
                <img src={chooseAmountImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3 second-process" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="second-single-loan-process">
              <h4 className="poppins-semibold title mb-4">Provide Document</h4>
              <div className="icon d-flex justify-content-center">
                <img src={provideDocumentImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3 second-process" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="second-single-loan-process">
              <h4 className="poppins-semibold title mb-4">Approved Loan</h4>
              <div className="icon d-flex justify-content-center">
                <img src={approvedLoanImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3 second-process" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <div className="second-single-loan-process">
              <h4 className="poppins-semibold title mb-4">Get your Money</h4>
              <div className="icon d-flex justify-content-center">
                <img src={getYourMoneyImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default SimpleLoanProcess;
