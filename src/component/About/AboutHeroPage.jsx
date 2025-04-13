import React from "react";
import { Link } from "react-router";
import { HiMiniSlash } from "react-icons/hi2";
import heroPageImg  from '../../assets/AboutImage/HeaderImage/page-header.jpg'

const AboutHeroPage = ({text,subTextFirst,subTextSecond}) => {
  return (

    <div style={{ backgroundImage: `url(${heroPageImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>

    <div
      className="page-header"
      style={{
        padding: "70px 0",
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 text-center"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className="text-capitalize text-white-title poppins-semibold">
              {text}
            </h2>

            <ul className="list-unstyled">
              <li className="d-inline-block">
                <Link
                  to={"/"}
                  className="text-decoration-none text-white-sub-title"
                  style={{'&:hover': { color: '#ce1212'}}}
                >
                  {subTextFirst}
                </Link>
              </li>
              <li className="d-inline-block">
                <HiMiniSlash className="text-white-sub-title" />
              </li>
              <li className="d-inline-block">
                <Link
                  to={"/about"}
                  className="text-decoration-none text-white-sub-title"
                >
                 {subTextSecond}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutHeroPage;
