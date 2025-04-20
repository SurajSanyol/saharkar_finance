import React from 'react'
import "./LoanCalculator.css"
import '../../component/HomePage/LoanSection.css'
import { Button } from '@mui/material'

const LoanCalculator = () => {
    const calculateEMI = () => {
        const loanAmount = document.getElementById("loan-amount").value;
        const loanMonths = document.getElementById("loan-month").value;
        const interestRate = document.getElementById("intrest-rate").value;

        if (loanAmount && loanMonths && interestRate) {
            const principal = parseFloat(loanAmount);
            const months = parseInt(loanMonths);
            const rate = parseFloat(interestRate) / 100 / 12;

            // EMI formula
            const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            const totalPayment = emi * months;
            const totalInterest = totalPayment - principal;

            document.getElementById("emi").innerText = emi.toFixed(2);
            document.getElementById("tbl_emi").innerText = totalInterest.toFixed(2);
            document.getElementById("tbl_la").innerText = totalPayment.toFixed(2);
        } else {
            alert("Please fill all fields");
        }

        document.getElementById("loan-amount").value = "";
        document.getElementById("loan-month").value= "";
        document.getElementById("intrest-rate").value= "";
    };
    return (
        <div style={{padding: "70px 0"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 loan-nav border-end-0 rounded-start-1 rounded-bottom-0" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <p className='poppins-semibold fs-5 mb-0'>Home Loan 
                            <span>@ 8.75%</span>
                        </p>
                    </div>
                    <div className="col-md-3 border-end-0 loan-nav" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <p className='poppins-semibold fs-5 mb-0'>Personal Loan
                            <span>@ 12.72%</span>
                        </p>
                    </div>
                    <div className="col-md-3 border-end-0 loan-nav" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <p className='poppins-semibold fs-5 mb-0'>Car Loan
                            <span>@ 9.68%</span>
                        </p>
                    </div>
                    <div className="col-md-3 loan-nav rounded-end-1 rounded-bottom-0" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <p className='poppins-semibold fs-5 mb-0'>Business Loan
                            <span>@ 12.40%</span>
                        </p>
                    </div>
                </div>

                <div className="row row-gap-3">

                    <div className="col-md-8 loan-slider-box border-top-0" style={{border:"1px solid rgba(0, 0, 0, 0.1)"}} data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <div className="single-loan-slider mt-4">
                            <h4 className='poppins-medium title'>Loan Amount</h4>
                            
                            <div className='d-flex align-items-center column-gap-2'>
                               
                                <input type="number" placeholder='Enter Amount' id="loan-amount" className='loan-input outline-0 poppins-medium border py-1 px-2 rounded fs-5' />
                            </div>
                        </div>

                        <div className="single-loan-slider mt-4">
                            <h4 className='poppins-medium title'>Loan Months</h4>
                          
                            <div className='d-flex align-items-center column-gap-2'>
                              
                                <input type="number" placeholder='Enter months' id="loan-month" className='loan-input outline-0 poppins-medium border py-1 px-2 rounded fs-5' />
                            </div>
                        </div>

                        <div className="single-loan-slider mt-4">
                            <h4 className='poppins-medium title'>Interest Rate</h4>
                            
                            <div className='d-flex align-items-center column-gap-2'>
                                
                                {/* <span className='poppins-medium fs-5 ms-2' id='home-loan-rate'>8.75%</span> */}
                                <input type="number" placeholder='Enter Interest' id="intrest-rate" className='loan-input outline-0 poppins-medium border py-1 px-2 rounded fs-5' />
                            </div>
                        </div>

                        <Button onClick={calculateEMI} variant="contained" className='apply-loan-btn mt-4'>Calculate </Button>

                    </div>

                    <div className="col-md-4 text-center loan-emi py-5" style={{backgroundColor:'#3a7cdd'}} data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                        <div className="total-calculation">
                            <div className="single-total">
                                <h4 className='poppins-medium text-white'>Loan EMI</h4>
                                <h2 className="emi-price poppins-medium sub-title" id="emi">0</h2>
                            </div>
                            <div className="single-total mt-3">
                                <h4 className='poppins-medium text-white'>Total Interest Payable</h4>
                                <h2 className='poppins-medium sub-title' id="tbl_emi">0</h2>
                            </div>
                            <div className="single-total mt-3">
                                <h4 className='poppins-medium text-white'>Total Payment
                                    <br/>(Principal + Interest)</h4>
                                <h2 className='poppins-medium sub-title' id="tbl_la">0</h2>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanCalculator