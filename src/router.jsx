import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./component/HomePage/HomePage";
import AboutPage from "./component/About/AboutPage";
import ServicePage from "./component/ServicePage/ServicePage";
import BlogPage from "./component/BlogPage/BlogPage";
import ContactPage from "./component/ContactPage/ContactPage";
import PageSection from "./component/Pages/PageSection";
import SingleBlog from "./component/BlogPage/SingleBlog";


import Team from "./component/Pages/Team";

import TestimonialPage from "./component/Pages/TestimonialPage";
import FaQ from "./component/Pages/FaQ";
import ServiceImg from "./component/ServicePage/ServiceImage/ServiceImg";
import Businessloan from "./component/ServicePage/BusinessLoan/Businessloan";
import BlogPageParentContainer from "./component/BlogPage/BlogPageParentContainer";
import ServiceParentContainer from "./component/ServicePage/ServiceImage/ServiceParentContainer";
import EducationLoan from "./component/ServicePage/EducationLoan/EducationLoan";
import HomeLoan from "./component/ServicePage/HomeLoan/HomeLoan";
import CarLoan from "./component/ServicePage/CarLoan/CarLoan";
import PageParentContainer from "./component/Pages/PageParentContainer";
import ErrorPage from "./component/ErrorPage";
import Gallery from "./component/Pages/Gallery";
import LoanCalculatorPage from "./component/Pages/LoanCalculatorPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "service",
        element: <ServiceParentContainer />,
        children: [
          {
            path: "",
            element: <ServicePage />,
          },
          {
            path: "serviceimg",
            element: <ServiceImg />,
          },
          {
            path: "businessloan",
            element: <Businessloan />,
          },
          {
            path: "educationloan",
            element: <EducationLoan />,
          },
          {
            path: "carloan",
            element: <CarLoan />,
          },
          {
            path: "HomeLoan",
            element: <HomeLoan />,
          },
        ],
      },
      {
        path: "blog",
        element: <BlogPageParentContainer />,
        children: [
          {
            path: "",
            element: <BlogPage />,
          },
          {
            path: "singleblog",
            element: <SingleBlog />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "pages",
        element: <PageParentContainer />,
        children: [
          {
            path: "",
            element: <PageSection />,
          },
          {
            path: "calculator",
            element:<LoanCalculatorPage/>
          },
          {
            path: "gallery",
            element:<Gallery/>
          },
          {
            path: "team",
            element: <Team />,
          },
          {
            path: "testimonial",
            element: <TestimonialPage />,
          },
          {
            path: "faq",
            element: <FaQ />,
          },
          
         
        ],
      }
    ],
  },
]);
