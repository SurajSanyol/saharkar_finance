import React from "react";
import CeoImg from "../../assets/ContactUs/ceo.png";
import "../../component/HomePage/LoanSection.css";
import "./GetInTouch.css";
import '../../component/HomePage/LoanProcess.css'
// import { Button } from "bootstrap";
import Button from "../CommonComponent/Button";
import mapPinImg from "../../assets/ContactUs/map-pin-2.png"
import emailImg from "../../assets/ContactUs/envalope-3.png"
import phoneImg from "../../assets/ContactUs/call-2.png"

const GetInTouch = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">

        <div className="row row-gap-4 pb-4">
          <div className="col-md-7">
            <div className="get-in-touch">
              <h2 className="poppins-semibold title text-center">
                Get in Touch
              </h2>
              <p className="poppins-regular sub-title text-center">
                The passages of Lorem Ipsum available but the majority have
                suffered alteration embarrased
              </p>
            </div>

            <form method="POST">
              <div className="row list-input row-gap-4">
                <div className="col-md-6">
                  <div className="single-get-touch">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-100 py-2 px-3 rounded-1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-get-touch">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="w-100 py-2 px-3 rounded-1"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-get-touch">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-100 py-2 px-3 rounded-1"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-get-touch">
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      className="w-100 py-2 px-3 rounded-1"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                 
                    <Button text={"Send Message"} />
                  
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="ceo-img">
              <img src={CeoImg} alt="ceo img" className=" w-100 rounded-2" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row pt-4 row-gap-4">
          <div className="col-md-4">
            <div className="single-contact-info d-flex align-items-center">
              <div className="icon me-3">
                <img src={mapPinImg} alt="map pin img" />
              </div>
              <div className="content">
                <p className="poppins-regular sub-title mb-0">
                  424 Madina Masjid Pase padana Ahmedabad Gujarat 382460, <br />
                  Rajasthan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-contact-info d-flex align-items-center">
              <div className="icon me-3">
                <img src={emailImg} alt="email img" />
              </div>
              <div className="content">
                <p className="poppins-regular sub-title mb-0">
                  support@sahakarfin.in <br />
                  reply within 2 Hours
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-contact-info  d-flex align-items-center">
              <div className="icon me-3">
                <img src={phoneImg} alt="phone img" />
              </div>
              <div className="content">
                <p className="poppins-regular sub-title mb-0">
                  +91 8440005400 <br />
                  Call @ 9.30am to 7.00pm{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
