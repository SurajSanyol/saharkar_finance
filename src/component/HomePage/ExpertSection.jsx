import React from "react";
import "./LoanProcess.css";
import "./ExpertSection.css";
import ExpertCard from "./ExpertCard";
import teamImage1 from "../../assets/ExpertImage/team-1.jpg";
import teamImage2 from "../../assets/ExpertImage/team-2.jpg";
import teamImage3 from "../../assets/ExpertImage/team-3.jpg";
import teamImage4 from "../../assets/ExpertImage/team-4.jpg";
import { RiLinkedinLine } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router";

const ExpertSection = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-title">
              <h2 className="poppins-semibold fs-1 title">Our Experts</h2>
              <p className="poppins-regular sub-title">
                Our lоаn specialists will wаlk уоu thrоugh the рrосеѕѕ offering
                undеrѕtаndіng and guidance thrоugh out.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 row-gap-4 team-container">
          <div className="col-lg-3 col-md-6 team-sub-container">
            <div className="single-team">
              <Link to={"/"} className="text-decoration-none team1">
                <ExpertCard 
                  name={"J.K FAKIR"}
                  profile={"CEO & Founder"}
                  image={teamImage1}
                  
                />
              </Link>

              <div className="d-inline-flex position-absolute team-hover-content">
                <RiLinkedinLine className="fs-3 linkedin" />
                <FaSquareFacebook className="fs-3 facebook" />
                <BsTwitter className="fs-3 twitter" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  team-sub-container">
            <div className="single-team ">
              <Link to={"/"} className="text-decoration-none team1">
                <ExpertCard
                  name={"Avdhesh Sagar"}
                  profile={"Head of Operations"}
                  image={teamImage2}
                />
              </Link>

              <div className="d-inline-flex position-absolute team-hover-content">
                <RiLinkedinLine className="fs-3 linkedin" />
                <FaSquareFacebook className="fs-3 facebook" />
                <BsTwitter className="fs-3 twitter" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  team-sub-container">
            <div className="single-team">
              <Link to={"/"} className="text-decoration-none team1">
                <ExpertCard
                  name={"Vrati"}
                  profile={"Manager"}
                  image={teamImage3}
                />
              </Link>
              <div className="d-inline-flex position-absolute team-hover-content">
                <RiLinkedinLine className="fs-3 linkedin" />
                <FaSquareFacebook className="fs-3 facebook" />
                <BsTwitter className="fs-3 twitter" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  team-sub-container">
            <div className="single-team">
              <Link to={"/"} className="text-decoration-none team1">
                <ExpertCard
                  name={"D Gothwal"}
                  profile={"Customer Relations"}
                  image={teamImage4}
                />
              </Link>

              <div className="d-inline-flex position-absolute team-hover-content">
                <RiLinkedinLine className="fs-3 linkedin" />
                <FaSquareFacebook className="fs-3 facebook" />
                <BsTwitter className="fs-3 twitter" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExpertSection;
