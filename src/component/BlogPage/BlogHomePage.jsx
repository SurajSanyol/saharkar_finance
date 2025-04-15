import React from "react";
import { Link } from "react-router"; // Import Link component
import largeBlogImage1 from "../../assets/blogImage/large-blog-1.jpg";
import largeBlogImage2 from "../../assets/blogImage/large-blog-2.jpg";
import largeBlogImage3 from "../../assets/blogImage/large-blog-3.jpg";
import largeBlogImage4 from "../../assets/blogImage/large-blog-4.jpg";
import largeBlogImage5 from "../../assets/blogImage/large-blog-5.jpg";
import postImg1 from "../../assets/blogImage/post.jpg";
import postImg2 from "../../assets/blogImage/post-2.jpg";
import postImg3 from "../../assets/blogImage/post-3.jpg";
import "../../component/HomePage/LoanProcess.css";
import "./BlogHomePage.css";
import { IoSearchOutline } from "react-icons/io5";

const BlogHomePage = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-8 order-2 order-md-1">
            {/* First Single Blog */}
            <div className="single-blog">
              <div className="blog-thumb mb-4">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImage1}
                    alt="large blog image"
                    className="w-100 rounded-1"
                  />
                </Link>
              </div>
              <Link
                to="single.html"
                className="blog-title text-decoration-none poppins-semibold title fs-3"
              >
                Looked up one of the more obscure batin
              </Link>
              <ul className="postmeta list-unstyled mt-4">
                <li className="d-inline-block border-end border-2 border-secondary pe-3">
                  <span className="posted-on poppins-regular sub-title">
                    On{" "}
                    <Link
                      to="#"
                      rel="bookmark"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      <time className="entry-date published">
                        January 26, 2018
                      </time>
                    </Link>
                  </span>
                </li>
                <li className="d-inline-block ps-3 pe-3 border-end border-2 border-secondary">
                  <span className="poppins-regular sub-title text-capitalize">
                    by{" "}
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    loanplus
                  </Link>
                </li>
                <li className="d-inline-block ps-3">
                  <Link
                    to="#"
                    className="loanplus-comment text-decoration-none poppins-regular sub-title"
                  >
                    No Comment
                  </Link>
                </li>
              </ul>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered...
              </p>
              <Link
                to="single.html"
                className="btn btn-primary btn-sm text-decoration-none"
              >
                Read More
              </Link>
            </div>

            {/* Second Single Blog */}
            <div className="single-blog my-4">
              <div className="blog-thumb mb-4">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImage2}
                    alt="large blog image 2"
                    className="w-100 rounded-1"
                  />
                </Link>
              </div>
              <Link
                to="single.html"
                className="blog-title text-decoration-none poppins-semibold title fs-3"
              >
                The cites of the word in classical literature
              </Link>
              <ul className="postmeta list-unstyled mt-4">
                <li className="d-inline-block border-end border-2 border-secondary pe-3">
                  <span className="posted-on poppins-regular sub-title">
                    On{" "}
                    <Link
                      to="#"
                      rel="bookmark"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      <time className="entry-date published">
                        January 24, 2018
                      </time>
                    </Link>
                  </span>
                </li>
                <li className="d-inline-block ps-3 pe-3 border-end border-2 border-secondary">
                  <span className="poppins-regular sub-title text-capitalize">
                    by{" "}
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    loanplus
                  </Link>
                </li>
                <li className="d-inline-block ps-3">
                  <Link
                    to="#"
                    className="loanplus-comment text-decoration-none poppins-regular sub-title"
                  >
                    No Comment
                  </Link>
                </li>
              </ul>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered...
              </p>
              <Link
                to="single.html"
                className="btn btn-primary btn-sm text-decoration-none"
              >
                Read More
              </Link>
            </div>

            {/* Third Single Blog */}
            <div className="single-blog">
              <div className="blog-thumb mb-4">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImage3}
                    alt="large blog image 3"
                    className="w-100 rounded-1"
                  />
                </Link>
              </div>
              <Link
                to="single.html"
                className="blog-title text-decoration-none poppins-semibold title fs-3"
              >
                Many desktop publishing packages and web page
              </Link>
              <ul className="postmeta list-unstyled mt-4">
                <li className="d-inline-block border-end border-2 border-secondary pe-3">
                  <span className="posted-on poppins-regular sub-title">
                    On{" "}
                    <Link
                      to="#"
                      rel="bookmark"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      <time className="entry-date published">
                        January 23, 2018
                      </time>
                    </Link>
                  </span>
                </li>
                <li className="d-inline-block ps-3 pe-3 border-end border-2 border-secondary">
                  <span className="poppins-regular sub-title text-capitalize">
                    by{" "}
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    loanplus
                  </Link>
                </li>
                <li className="d-inline-block ps-3">
                  <Link
                    to="#"
                    className="loanplus-comment text-decoration-none poppins-regular sub-title"
                  >
                    No Comment
                  </Link>
                </li>
              </ul>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered...
              </p>
              <Link
                to="single.html"
                className="btn btn-primary btn-sm text-decoration-none"
              >
                Read More
              </Link>
            </div>

            {/* Fourth Single Blog */}
            <div className="single-blog my-4">
              <div className="blog-thumb mb-4">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImage4}
                    alt="large blog image 4"
                    className="w-100 rounded-1"
                  />
                </Link>
              </div>
              <Link
                to="single.html"
                className="blog-title text-decoration-none poppins-semibold title fs-3"
              >
                Handful of model sentence structures, to generate
              </Link>
              <ul className="postmeta list-unstyled mt-4">
                <li className="d-inline-block border-end border-2 border-secondary pe-3">
                  <span className="posted-on poppins-regular sub-title">
                    On{" "}
                    <Link
                      to="#"
                      rel="bookmark"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      <time className="entry-date published">
                        January 22, 2018
                      </time>
                    </Link>
                  </span>
                </li>
                <li className="d-inline-block ps-3 pe-3 border-end border-2 border-secondary">
                  <span className="poppins-regular sub-title text-capitalize">
                    by{" "}
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    loanplus
                  </Link>
                </li>
                <li className="d-inline-block ps-3">
                  <Link
                    to="#"
                    className="loanplus-comment text-decoration-none poppins-regular sub-title"
                  >
                    No Comment
                  </Link>
                </li>
              </ul>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered...
              </p>
              <Link
                to="single.html"
                className="btn btn-primary btn-sm text-decoration-none"
              >
                Read More
              </Link>
            </div>

            {/* Fifth Single Blog */}
            <div className="single-blog">
              <div className="blog-thumb mb-4">
                <Link to="single.html" className="text-decoration-none">
                  <img
                    src={largeBlogImage5}
                    alt="large blog image 5"
                    className="w-100 rounded-1"
                  />
                </Link>
              </div>
              <Link
                to="single.html"
                className="blog-title text-decoration-none poppins-semibold title fs-3"
              >
                Various versions have evolved over the years
              </Link>
              <ul className="postmeta list-unstyled mt-4">
                <li className="d-inline-block border-end border-2 border-secondary pe-3">
                  <span className="posted-on poppins-regular sub-title">
                    On{" "}
                    <Link
                      to="#"
                      rel="bookmark"
                      className="text-decoration-none poppins-regular sub-title"
                    >
                      <time className="entry-date published">
                        January 20, 2018
                      </time>
                    </Link>
                  </span>
                </li>
                <li className="d-inline-block ps-3 pe-3 border-end border-2 border-secondary">
                  <span className="poppins-regular sub-title text-capitalize">
                    by{" "}
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none poppins-regular sub-title"
                  >
                    loanplus
                  </Link>
                </li>
                <li className="d-inline-block ps-3">
                  <Link
                    to="#"
                    className="loanplus-comment text-decoration-none poppins-regular sub-title"
                  >
                    No Comment
                  </Link>
                </li>
              </ul>
              <p className="poppins-regular sub-title">
                The passages of Lorem Ipsum available but the majority ave
                suffered alteration embarrased the point of using rem
                distribution Ipsum available but the majority ave suffered...
              </p>
              <Link
                to="single.html"
                className="btn btn-primary btn-sm text-decoration-none"
              >
                Read More
              </Link>
            </div>

            <div
              className="single-sidebar my-4 left-latest-section"
              style={{ backgroundColor: "#f7f8fa", padding: "20px" ,border:'1px solid rgba(0,0,0,0.1)' }}
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

            <nav className="mt-4">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link poppins-regular title" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link  poppins-regular title" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link poppins-regular title" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link poppins-regular title" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link poppins-regular title"
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* // right side section  */}
          <div className="col-md-4 order-1 order-md-2">
            <div className="sidebar-area">
              <div
                className="single-sidebar mb-4"
                style={{ backgroundColor: "#f7f8fa", padding: "20px" ,border:'1px solid rgba(0,0,0,0.1)' }}
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
                style={{ backgroundColor: "#f7f8fa", padding: "20px" ,border:'1px solid rgba(0,0,0,0.1)'}}
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
                style={{ backgroundColor: "#f7f8fa", padding: "20px" ,border:'1px solid rgba(0,0,0,0.1)' }}
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
                className="Archives-sidebar categories-sidebar"
                style={{ backgroundColor: "#f7f8fa", padding: "20px",border:'1px solid rgba(0,0,0,0.1)' }}
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
                style={{ backgroundColor: "#f7f8fa", padding: "20px" ,border:'1px solid rgba(0,0,0,0.1)' }}
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

export default BlogHomePage;
