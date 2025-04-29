import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import { Link } from "react-router";
import Button from "./CommonComponent/Button";
import { LiaCopyright } from "react-icons/lia";
import { FaVimeoSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  return (
    <div
      style={{
        padding: "70px 0",
        backgroundColor: "#232935"
       
      }}
    >
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget">
              <div className="footer-title">
                {/* <img src={logo} alt=""/> */}
                <h3 className="mb-1 text-white poppins-semibold">
                  Sahakar Finance
                </h3>
                <p className="text-white poppins-regular">
                  Your Financial Journey
                </p>
              </div>
              <p className="poppins-regular Footer-sub-title">
                RTS Loan Consultancy Services is a trusted financial advisory
                firm specializing in providing comprehensive loan and financial
                consultation services. We cater to individuals, small
                businesses, and enterprises seeking tailored financial solutions
                to meet their unique needs.
              </p>
              <div className="poppins-regular" style={{ color: "#24c8a6" }}>
                <span className="text-white poppins-semibold me-1">
                  Any Queries :
                </span>
                support@inforts.in
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="">
              <div className="">
                <h4 className="text-white poppins-semibold">Solutions</h4>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Personal Loan
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Car Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Home Loan
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Business Loan
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Education Loan
                  </Link>
                </li>

                <li className="py-1">
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Micro Loan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="">
              <div className="">
                <h4 className="text-white poppins-semibold">Recent Posts</h4>
              </div>
              <ul className="list-unstyled">
                <li className="border-list pb-3 mb-3">
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    This book is a treatise on theory of ethics very popular.
                    <br />
                    <span className="poppins-light date">January 18, 2024</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-decoration-none poppins-regular Footer-sub-title"
                  >
                    Be cites of the word in classical literature to discove.
                    <br />
                    <span className="poppins-light date">Februay 10, 2024</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="">
              <div className="">
                <h4 className="text-white poppins-semibold">Newsletter</h4>
              </div>
              <div className="">
                <p className="poppins-regular Footer-sub-title">
                  Subscribe to our newsletter and get latest news related to
                  loan , credit cards , perday loan , interates rate.
                </p>
                <form method="post">
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="poppins-regular px-2 py-2 eamil-input border-0"
                    />
                  </div>
                  <Link to={'#'}  className="text-decoration-none">

                  <Button text={"Subscribe +"} />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-section mt-3 pt-3" style={{borderTop: "1px solid #393f4a"}}>
        <div className="container">

          <div className="row py-2 row-gap-3">

            <div className="col-md-6">
              <div className="copy-Right-text">
                <p className="poppins-regular Footer-sub-title mb-0">
                  <LiaCopyright/> 2024 Sahakar Finance
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-md-flex justify-content-md-end">
                <Link to={'#'} className="mx-2">
                   <FaSquareFacebook className="Footer-sub-title fs-3"/>
                </Link>

                <Link to={'#'}>
                   <FaSquareTwitter className="Footer-sub-title fs-3"/>
                </Link>

                <Link to={"#"} className="mx-2">
                   <FaLinkedin className="Footer-sub-title fs-3"/>
                </Link>

                <Link to={"#"}>
                   <FaPinterestSquare className="Footer-sub-title fs-3"/>
                </Link>

                <Link to={"#"} className="mx-2">
                   <FaVimeoSquare className="Footer-sub-title fs-3"/>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
