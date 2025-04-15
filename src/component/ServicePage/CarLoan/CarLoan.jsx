import React from "react";
import AboutHeroPage from "../../About/AboutHeroPage";
import ServiceCommonpage from "../../CommonComponent/ServiceCommonpage";
import CarLoanImage from '../../../assets/ServiceImg/services-car.jpg'

const CarLoan = () => {
  return (
    <>
      <AboutHeroPage
        text={"Car Loan"}
        subTextFirst={"Home"}
        subTextSecond={"Car Loan"}
      />
      <ServiceCommonpage serviceImage={CarLoanImage} />
    </>
  );
};

export default CarLoan;
