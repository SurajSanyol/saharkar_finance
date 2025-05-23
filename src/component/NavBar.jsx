import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import "./NavBar.css";
import { useState } from "react";
import { UserContext } from "../App";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(!false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isServicePageOpen, setIsServicePageOpen] = useState(false);
  const[isBlogPageOpen,setIsBlogPageOpen] = useState(false)



  const isOpenManu = () => {
    setIsOpen(!isOpen);


  };
 

  const closeOpenMenu=()=>{
    setIsOpen(true)
    setIsPageOpen(false)
    setIsServicePageOpen(false)
    setIsBlogPageOpen(false)
  }

  // show

  
  const{showSearch,setShowSearch}= useContext(UserContext)
 
 const showSearchField = ()=>{
  setShowSearch(!showSearch)
 }

  return (
    <div className="background-black">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-11">
            <div className="d-flex justify-content-between align-items-center">

              <ul className="d-flex menu-list mb-0">
                <li className="mb-0 py-3 position-relative">
                  <NavLink
                    to={"/"}
                    className="text-decoration-none  text-capitalize poppins-regular menu-item"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="mb-0 py-3 position-relative">
                  <NavLink
                    to={"about"}
                    className="text-decoration-none  py-3 text-capitalize poppins-regular menu-item"
                  >
                    About us
                  </NavLink>
                </li>

                <li className="mb-0 py-3 position-relative service-menu">
                  <NavLink
                    to={"service"}
                    className="text-decoration-none  py-3 text-capitalize poppins-regular menu-item position-relative"
                  >
                    Service
                    <FaAngleDown className="ms-1 down-arrow" />
                  </NavLink>

                  <ul className="list-unstyled black-background-dropdown position-absolute   service-menue-dropdown">

                    <li className="px-3 py-2">
                      <Link to={"service/serviceimg"} className="text-decoration-none text-capitalize poppins-regular dropdown-list-item">
                        Services Images
                      </Link>
                    </li>

                    <li className="px-3 py-2">
                      <Link to={"service/businessloan"} className="text-decoration-none text-capitalize poppins-regular dropdown-list-item">
                        Business Loan
                      </Link>
                    </li>

                    <li className="px-3 py-2">
                      <Link to={"service/educationloan"} className="text-decoration-none text-capitalize poppins-regular dropdown-list-item">
                        Education Loan
                      </Link>
                    </li>

                    <li className="px-3 py-2">
                      <Link to={"service/carloan"} className="text-decoration-none text-capitalize poppins-regular dropdown-list-item">
                        Car Loan
                      </Link>
                    </li>

                    <li className="px-3 py-2">
                      <Link to={"service/Homeloan"} className="text-decoration-none text-capitalize poppins-regular dropdown-list-item">
                        Home Loan
                      </Link>
                    </li>
                  </ul>

                </li>

                <li className="mb-0 py-3 position-relative page-menue">
                  <NavLink
                    to={"pages"}
                    className="text-decoration-none  py-3 text-capitalize poppins-regular menu-item"
                  >
                    Pages
                    <FaAngleDown className="ms-1 down-arrow" />
                  </NavLink>

                  <ul className="position-absolute list-unstyled background-black page-menue-dropdown">
                    <li className="px-3 py-2">
                      <Link to={'pages/calculator'} className="text-decoration-none text-capitalize poppins-regular page-dropdown-list-item">
                        Calculator
                      </Link>
                    </li>
                    <li className="px-3 py-2">
                      <Link to={"pages/gallery"} className="text-decoration-none text-capitalize poppins-regular page-dropdown-list-item">
                        Gallery
                      </Link>
                    </li>
                    <li className="px-3 py-2">
                      <Link to={"pages/team"} className="text-decoration-none text-capitalize poppins-regular page-dropdown-list-item">
                        team
                      </Link>
                    </li>
                    <li className="px-3 py-2">
                      <Link to={"pages/testimonial"} className="text-decoration-none text-capitalize poppins-regular page-dropdown-list-item">
                        tesimonial
                      </Link>
                    </li>
                    <li className="px-3 py-2">
                      <Link to={"pages/faq"} className="text-decoration-none text-capitalize poppins-regular page-dropdown-list-item">
                        faq
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="mb-0 py-3 position-relative blog-menu">
                  <NavLink
                    to={"blog"}
                    className="text-decoration-none  py-3 text-capitalize poppins-regular menu-item"
                  >
                    Blog
                    <FaAngleDown className="ms-1 down-arrow" />
                  </NavLink>

                  <ul className="position-absolute list-unstyled background-black blog-menue-dropdown">
                    <li className="px-3 py-2">
                      <Link to={"blog/singleblog"}className="text-decoration-none text-capitalize poppins-regular blog-dropdown-list-item">
                        Single Blog
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="mb-0 py-3 position-relative">
                  <NavLink
                    to={"contact"}
                    className="text-decoration-none  py-3 text-capitalize poppins-regular menu-item"
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>

              <IoSearchOutline className="text-white fs-3 my-3 poppins-regular search-icon" onClick={()=>showSearchField()} style={{cursor:"pointer"}} />

              <div className="menu-icon">
                {isOpen ? (
                  <IoMdMenu
                    onClick={isOpenManu}
                    className="text-white fs-1 my-3 poppins-regular "
                  />
                ) : (
                  <IoClose
                    onClick={isOpenManu}
                    className="text-white fs-1 my-3 poppins-regular menu-icon"
                  />
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="background-black position-absolute start-0 w-100" style={{top:'60px'}}>
          <ul className="list-unstyled container small-screen-menu">
            <li className="mb-0 py-3 position-relative">
              <NavLink
                to={"/"}
                className="text-decoration-none text-capitalize poppins-regular menu-text-color"
                onClick={() => closeOpenMenu()}
              >
                Home
              </NavLink>
            </li>

            <li className="mb-0 py-3 position-relative">
              <NavLink
                to={"about"}
                className="text-decoration-none  py-3 text-capitalize poppins-regular menu-text-color"
                onClick={() => closeOpenMenu()}
              >
                About us
              </NavLink>
            </li>

            <li className="mb-0 py-3 position-relative">

              <NavLink
                to={"service"}
                className="text-decoration-none  py-3 text-capitalize poppins-regular menu-text-color d-flex justify-content-between align-items-center"
              >
                

                <span onClick={() => closeOpenMenu()}>Service</span>
                {!isServicePageOpen ? 
                  <FaPlus
                    onClick={() => {
                      setIsServicePageOpen(!isServicePageOpen);
                      
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                 : 
                  <FaMinus
                    onClick={() => {
                      setIsServicePageOpen(!isServicePageOpen);
                      
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                }
              </NavLink>

              {isServicePageOpen && (
                <ul className="list-unstyled background-black page-accordian">
                  <li className="px-3 py-2">
                    <Link  to={"service/serviceimg"} className="text-decoration-none text-capitalize poppins-regular text-white" onClick={() => closeOpenMenu()}>
                      services image
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to="service/businessloan" className="text-decoration-none text-capitalize poppins-regular text-white" onClick={() => closeOpenMenu()}>
                      Business loan
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"service/educationloan"}  className="text-decoration-none text-capitalize poppins-regular text-white" onClick={() => closeOpenMenu()}>
                      Education loan
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"service/carloan"}  className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      car loan
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"service/HomeLoan"} className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      Home loan
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="mb-0 py-3 position-relative">
              <NavLink
                to={"pages"}
                className="text-decoration-none  py-3 text-capitalize poppins-regular menu-text-color d-flex justify-content-between align-items-center"
              >
                
                <span onClick={() => closeOpenMenu()}>Pages</span>
                {!isPageOpen ? 
                  <FaPlus
                    onClick={() => {
                      setIsPageOpen(!isPageOpen);
                     
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                 : 
                  <FaMinus
                    onClick={() => {
                      setIsPageOpen(!isPageOpen);
                      
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                }
              </NavLink>

              {isPageOpen && (
                <ul className="list-unstyled background-black page-accordian">
                  <li className="px-3 py-2">
                    <Link to={"pages/calculator"}  className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      Calculator
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"pages/gallery"}  className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      gallery
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"pages/team"} className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      team
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"pages/testimonial"} className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      tesimonial
                    </Link>
                  </li>
                  <li className="px-3 py-2">
                    <Link to={"pages/faq"} className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      faq
                    </Link>
                  </li>
                </ul>
              )}


            </li>

            <li className="mb-0 py-3 position-relative">
              <NavLink
                to="blog"
                className="text-decoration-none  py-3 text-capitalize poppins-regular menu-text-color d-flex justify-content-between align-items-center"
              >
                
                <span onClick={() => closeOpenMenu()}>Blog</span>

                {!isBlogPageOpen ? 
                  <FaPlus
                    onClick={() => {
                      setIsBlogPageOpen(!isBlogPageOpen);
                   
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                 : 
                  <FaMinus
                    onClick={() => {
                      setIsBlogPageOpen(!isBlogPageOpen);
                      
                    }}
                    className="ms-1 fs-3 down-arrow"
                  />
                }
              </NavLink>


              {isBlogPageOpen && (
                <ul className="list-unstyled background-black z-n1 page-accordian">
                  <li className="px-3 py-2">
                    <Link to={'blog/singleblog'} className="text-decoration-none text-capitalize poppins-regular text-white"  onClick={() => closeOpenMenu()}>
                      single blog
                    </Link>
                  </li>
                 
                </ul>
              )}

              
            </li>

            <li className="mb-0 py-3 position-relative">
              <NavLink
                onClick={() => closeOpenMenu()}
                to="contact"
                className="text-decoration-none  py-3 text-capitalize poppins-regular menu-text-color"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
