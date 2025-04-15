import React from "react";
import dreamImg from '../../assets/ServiceImg/dreambg.jpg'
import './DreamQuote.css'
import '../../component/HomePage/LoanSection.css'
import Button from "../CommonComponent/Button";
import { Link } from "react-router";

const DreamQuote = () => {
  return (
    <div style={{backgroundImage:`url(${dreamImg})`,backrroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",position:"relative", zIndex:'-3'}} className="dream-quote">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="dream-quote-text">
              <h5 className="poppins-regular" style={{color:"rgba(255,255,255,1)"}}>Available but the major have embarrased</h5>
              <h1 className="poppins-semibold text-white mb-3">
                Make any dream a reality with one
                <br />
                of our loan plans
              </h1>
            

              <Link to={'#'} className="text-decoration-none">
                    <Button text={"Our Services"}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamQuote;
