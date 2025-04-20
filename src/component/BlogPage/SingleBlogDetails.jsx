import React from "react";
import largeBlogImg3 from "../../assets/blogImage/large-blog-3.jpg";
import { Link } from "react-router";
import "../../component/HomePage/LoanSection.css";
import postImg1 from "../../assets/blogImage/post.jpg";
import postImg2 from "../../assets/blogImage/post-2.jpg";
import postImg3 from "../../assets/blogImage/post-3.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import articleImg1 from "../../assets/blogImage/articale-1.jpg";
import articleImg2 from "../../assets/blogImage/articale-2.jpg";
import { FaUserCircle } from "react-icons/fa";
import { FaReplyAll } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Button from "../CommonComponent/Button";

const SingleBlogDetails = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row row-gap-4 pb-4">
          <div className="col-md-8 order-2 order-md-1">

            <div className="single-blog single-page" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="blog-thumb">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImg3}
                    alt="large blog image"
                    className="w-100 rounded-1"
                  />
                </Link>
                <div className="date poppins-regular sub-title">
                  Feb 20, 2018
                </div>
              </div>

              <Link
                to="single.html"
                className="blog-title text-decoration-none "
              >
                <p className="poppins-semibold title fs-3 mt-3 mb-2">
                  Looked up one of the more obscure batin
                </p>
              </Link>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered there
                are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <p className="poppins-regular sub-title">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by ended injected humour, or
                randomised words which don't look even slightly.
              </p>


              <blockquote
                style={{
                  fontStyle: "italic",
                  borderLeft: "4px solid #ccc",
                  padding: "10px 20px",
                  margin: "20px 0",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <p className="poppins-regular sub-title">
                  <BiSolidQuoteAltLeft
                    style={{ fontSize: "1.5rem", color: "#888" }}
                  />
                  You need to be sure there isn't anything embarrassing hidden
                  variations of passages offer Lorem Ipsum available, but the
                  majority have suffered alteration.
                  <BiSolidQuoteAltRight
                    style={{ fontSize: "1.5rem", color: "#888" }}
                  />
                </p>
                <a
                  href="#"
                  style={{
                    display: "block",
                    textAlign: "right",
                    fontWeight: "bold",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  - Martin King
                </a>
              </blockquote>

              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using res
                distribution Ipsum available but the majority ave suffered there
                are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="tags">
                  <span className="poppins-medium">Tags : </span>
                  <Link
                    to={"#"}
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    Loan ,
                  </Link>
                  <Link
                    to={"#"}
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    {" "}
                    Personal ,
                  </Link>
                  <Link
                    to={"#"}
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    {" "}
                    Borrow
                  </Link>
                </div>
              </div>

              <div className="col-md-6 text-right" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
                <div className="share float-end">
                  <span className="poppins-medium">Share :</span>
                  <Link to={"#"} className="text-decoration-none px-2">
                    <GrFacebookOption className="text-black" />
                  </Link>

                  <Link to={"#"} className="text-decoration-none">
                    <FaTwitter className="text-black" />
                  </Link>

                  <Link to={"#"} className="text-decoration-none px-2">
                    <FaPinterestSquare className="text-black" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row row-gap-4 related-articale mt-5" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="col-md-12">
                <h2 className="related-post poppins-semibold title mb-4">
                  Related Post
                </h2>
              </div>

              <div className="col-md-6">
                <div className="single-article">
                  <div className="article-img">
                    <Link to={"#"}>
                      <img
                        src={articleImg1}
                        alt=""
                        className="w-100 rounded-1"
                      />
                    </Link>
                    <div className="article-date">
                      <p className="poppins-regular sub-title">Feb 20, 2018</p>
                    </div>
                  </div>
                  <Link to={"#"} className="text-decoration-none">
                    <h5 className="poppins-medium title">
                      Looked up one of the more obscure batin cites of the word
                      in classNameical
                    </h5>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <div className="single-article">
                  <div className="article-img">
                    <Link to={"#"}>
                      <img
                        src={articleImg2}
                        alt=""
                        className="w-100 rounded-1"
                      />
                    </Link>
                    <div className="article-date ">
                      <p className="poppins-regular sub-title">Feb 20, 2018</p>
                    </div>
                  </div>
                  <Link className="text-decoration-none">
                    <h5 className="poppins-medium title">
                      Looked up one of the more obscure batin cites of the word
                      in classNameical
                    </h5>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="col-md-12">
                <h3 className="comments-count poppins-medium title my-4">
                  Comments (02)
                </h3>
              </div>
            </div>

            <div className="row" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="col-md-12">
                <div
                  className="single-comment  d-flex column-gap-3 pb-4"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div className="comment-avater">
                    <FaUserCircle className="fs-2" />
                  </div>

                  <div className="comment-text">
                    <h5 className="poppins-medium title">John Finch</h5>
                    <p className="poppins-regular sub-title">
                      Sure there isn't anything embarrassing hidden variations
                      of passages of Lorem Ipsum available, butter the majority
                      have suffered alteration in some form, by ended injected
                      humour.
                    </p>
                    <div className="reply">
                      <a
                        href="#"
                        className="text-decoration-none poppins-regular text-black"
                      >
                        <FaReplyAll className="me-2" />
                        Reply
                      </a>
                    </div>
                  </div>
                </div>

                <div className="single-comment replay-comment d-flex column-gap-3 ms-5 pt-4">
                  <div className="comment-avater">
                    <FaUserCircle className="fs-2" />
                  </div>
                  <div className="comment-text">
                    <h5 className="poppins-medium title">David kukku</h5>
                    <p className="poppins-regular sub-title">
                      Sure there isn't anything embarrassing hidden variations
                      of passages of Lorem Ipsum available, butter the majority
                      have suffered alteration in some form, by ended injected
                      humour.
                    </p>
                    <div className="reply">
                      <a
                        href="#"
                        className="text-decoration-none poppins-regular text-black"
                      >
                        <FaReplyAll className="me-2" />
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <div className="col-md-12">
                <h2 className="leave-a-comment poppins-medium title mb-3">
                  Post a Comments
                </h2>
              </div>

              <div className="col-md-12">
                <div className="comment-box">
                  <textarea
                    name="message"
                    placeholder="Comments"
                    required
                    style={{ height: "150px", outline: "none" }}
                    className="w-100 py-2 px-3 rounded-1"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="comment-box mt-3">
                  <Button text={"Post Comments"}/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 order-1 order-md-2">
            <div className="sidebar-area">
              <div
                className="single-sidebar mb-4"
                data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
                style={{
                  backgroundColor: "#f7f8fa",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="sidebar-searchbox">
                  <form method="post" className="position-relative">
                    <input
                      type="text"
                      name="s"
                      placeholder="Search..."
                      className="px-3 py-2 poppins-regular sub-title w-100 rounded-1 border-1 blog-search-button"
                    />
                    <IoSearchOutline
                      className="position-absolute"
                      style={{
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </form>
                </div>
              </div>

              <div
                className="categories-sidebar rounded-1"
                data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
                style={{
                  backgroundColor: "#f7f8fa",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="sidebar-title poppins-semibold title">
                  Categories
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Business Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Car Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Debt Consolidation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Education Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Home Loan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      Personal Loan
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="single-sidebar my-4 right-latest-section"
                data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
                style={{
                  backgroundColor: "#f7f8fa",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="sidebar-title mb-3 poppins-semibold title">
                  Latest Post
                </h4>
                <ul className="latest-post list-unstyled">
                  <li>
                    <Link
                      to="single.html"
                      className="text-decoration-none column-gap-3 d-flex"
                    >
                      <div className="post-img">
                        <img
                          src={postImg1}
                          alt=" post image first"
                          className="rounded-2"
                        />
                      </div>

                      <div className="post-content">
                        <h5 className="poppins-medium title fs-6">
                          This book is a treatise ong ethics very popular.
                        </h5>
                        <div className="date poppins-regular sub-title">
                          January 18, 2018
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li
                    className="my-3 py-3"
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.1)",
                      borderBottom: "1px solid rgba(0,0,0,0.1)",
                    }}
                  >
                    <Link
                      to="single.html"
                      className="text-decoration-none d-flex column-gap-3"
                    >
                      <div className="post-img">
                        <img
                          src={postImg2}
                          alt="post img second"
                          className="rounded-2"
                        />
                      </div>
                      <div className="post-content">
                        <h5 className="poppins-medium title fs-6">
                          This book is a treatise ong ethics very popular.
                        </h5>
                        <div className="date poppins-regular sub-title">
                          January 18, 2018
                        </div>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="single.html"
                      className="text-decoration-none d-flex column-gap-3"
                    >
                      <div className="post-img">
                        <img
                          src={postImg3}
                          alt="post img third"
                          className="rounded-2"
                        />
                      </div>
                      <div className="post-content">
                        <h5 className="poppins-medium title fs-6">
                          This book is a treatise ong ethics very popular.
                        </h5>
                        <div className="date poppins-regular sub-title">
                          January 18, 2018
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="Archives-sidebar"
                data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
                style={{
                  backgroundColor: "#f7f8fa",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="sidebar-title poppins-semibold title">
                  Archives
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      December 2017
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      January 2018
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      February 2018
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="single-sidebar mt-4"
                data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600"
                style={{
                  backgroundColor: "#f7f8fa",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <h4 className="sidebar-title poppins-semibold title mb-4">
                  tags
                </h4>
                <div className="tagcloud d-flex flex-wrap gap-2">
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    Loan
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    document
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    consult
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    business
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    personal
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    cridite
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title border px-3 py-1 rounded-1"
                  >
                    apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
