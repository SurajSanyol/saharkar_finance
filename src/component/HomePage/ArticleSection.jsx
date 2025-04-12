import React from "react";
import "./LoanProcess.css";
import articelImg1 from "../../assets/ArticleImage/articale-1.jpg";
import articleImg2 from "../../assets/ArticleImage/articale-2.jpg";
import articleImg3 from "../../assets/ArticleImage/articale-sm.jpg";
import articelImg4 from "../../assets/ArticleImage/articale-sm-2.jpg";
import { Link } from "react-router";
import Button from "../CommonComponent/Button";

const ArticleSection = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="poppins-semibold fs-1 title">Latest Articles</h2>
                <p className="poppins-regular sub-title">
                  News related for loan,credit card and intrest rate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-md-6 col-lg-4">
            <div className="single-article p-2">
              <div className="article-img">
                <Link to={"/"} className="text-decoration-none">
                  <img src={articelImg1} alt="" className="w-100 rounded-2" />
                </Link>

                <div className="article-date">
                  <p className="poppins-regular sub-title">Feb 20, 2024</p>
                </div>
              </div>

              <Link to={"/"} className="text-decoration-none">
                <p className="poppins-medium title fs-5">How to you can compare Pеrѕоnаl loans vеrѕuѕ car lоаnѕ</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="single-article p-2">
              <div className="article-img">
                <Link to={"/"} className="text-decoration-none">
                  <img src={articleImg2} alt="" className="w-100 rounded-2" />
                </Link>
                <div className="article-date">
                  <p className="poppins-regular sub-title">Mar 10, 2024</p>
                </div>
              </div>
              <Link to={"/"} className="text-decoration-none">
                <p className="poppins-medium title fs-5">
                  Whаt should I need to do to gеt a реrѕоnаl loan very fast
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">

            <div className="single-article-list p-2 d-flex">
              <div className="article-list-img">
                <Link to={"/"} className="text-decoration-none">
                  <img src={articleImg3} alt="" />
                </Link>
              </div>
              <div className="article-list-content">
                <Link to={"/"} className="text-decoration-none">
                  <h4>Granted my loan</h4>
                </Link>
                <p>The majority have suffer bose going to use a passage</p>
              </div>
            </div>

            <div className="single-article-list p-2 d-flex">
              <div className="article-list-img">
                <Link to={"/"} className="text-decoration-none">
                  <img src={articelImg4} alt="" />
                </Link>
              </div>
              <div className="article-list-content">
                <Link to={"/"} className="text-decoration-none">
                  <h4>Consulting assets</h4>
                </Link>
                <p>The majority have suffer bose going to use a passage</p>
              </div>
            </div>

            <div className="view-all-post">
              <Link to={"/"} className="text-decoration-none">
                <Button text={"VIEW ALL POST"} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
