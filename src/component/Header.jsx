import React from "react";
import logo from "../assets/logo.png";
import Button from "./CommonComponent/Button";
import { Link } from "react-router";
import callImage from "../assets/ServiceImg/scall.png";
import envelopeImage from "../assets/ServiceImg/senvelope.png";
import "./Header.css"
import {UserContext} from '../App'
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";



const Header = () => {
      
 const{showSearch,setShowSearch}= useContext(UserContext)
  
  return (
    <div>
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <div className="container">
          <div className="row py-2 row-gap-2">
            <div className="col-md-6 text-left d-flex justify-content-center justify-content-md-start align-items-center">
              <p
                className="poppins-regular mb-0"
                style={{ color: "rgba(0,0,0,0.7)" }}
              >
                Opening Hours : Mon - Sat : 8.30 to 16.00
              </p>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center justify-content-md-end">
              <p className="float-end poppins-regular mb-0">
                <a href="#" className="text-decoration-none me-3">
                  <span
                    className="poppins-regular mb-0"
                    style={{ color: "rgba(0,0,0,0.7)" }}
                  >
                    Login
                  </span>
                </a>{" "}
                <a href="#" className="text-decoration-none">
                  <span
                    className="poppins-regular mb-0"
                    style={{ color: "rgba(0,0,0,0.7)" }}
                  >
                    Support
                  </span>{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4 row-gap-4 align-items-center">
          <div className="col-md-4">
            <div className="sitelogo d-flex justify-content-center justify-content-md-start align-items-center">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>

          <div className="col-md-8">
            <div className="right-address d-flex justify-content-center justify-content-lg-between flex-wrap align-items-center">
              <div className="single-address d-flex">
                <div
                  className="icon me-3 border"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={callImage} alt="" />
                </div>
                <div className="content">
                  <p>
                    <span
                      className="poppins-regular"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      Call Us:
                    </span>
                    <br />
                    +91 844 000 5400
                  </p>
                </div>
              </div>

              <div className="single-address d-flex">
                <div
                  className="icon me-3 border"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={envelopeImage} alt="" />
                </div>
                <div className="content">
                  <p>
                    <span
                      className="poppins-regular"
                      style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                      Email us:{" "}
                    </span>
                    <br /> support@inforts.in
                  </p>
                </div>
              </div>

              <div className="single-address">
                <Link className="text-decoration-none" to="#">
                  <Button text={"Apply Loan"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div id='searchform' className={`searchform ${showSearch ? "show" : ""} d-flex justify-content-center align-items-center` }>
        <input type="text" placeholder="Search Here" autoComplete="off"/>
         <RxCross2 className="text-white fs-3 poppins-semibold" style={{cursor:"pointer"}} onClick={()=>setShowSearch(false)} />
      </div>

    </div>
  );
};

export default Header;
