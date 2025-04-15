import React from "react";
import "../HomePage/LoanProcess.css";
import "../HomePage/ExpertSection.css";
import ExpertCard from "../HomePage/ExpertCard";
import teamImage1 from "../../assets/ExpertImage/team-1.jpg";
import teamImage2 from "../../assets/ExpertImage/team-2.jpg";
import teamImage3 from "../../assets/ExpertImage/team-3.jpg";
import teamImage4 from "../../assets/ExpertImage/team-4.jpg";
import teamImage5 from "../../assets/ExpertImage/team-5.jpg";
import teamImage6 from "../../assets/ExpertImage/team-6.jpg";
import teamImage7 from "../../assets/ExpertImage/team-7.jpg";
import teamImage8 from "../../assets/ExpertImage/team-8.jpg";
import { RiLinkedinLine } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router";

const TeamExpert = () => {
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

          <div className="col-lg-3 col-md-6  team-sub-container">
            <div className="single-team">
              <Link to={"/"} className="text-decoration-none team1">
                <ExpertCard
                  name={"Martin Joe"}
                  profile={"Brand Lead"}
                  image={teamImage5}
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
                  name={"Maline"}
                  profile={"Credit Card Operations"}
                  image={teamImage6}
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
                  name={"Shine D'zoza"}
                  profile={"Founder"}
                  image={teamImage7}
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
                  name={"Alex Finch"}
                  profile={"Home Loan Consultant"}
                  image={teamImage8}
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

export default TeamExpert;
