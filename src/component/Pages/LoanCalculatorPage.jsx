import React from "react";
import AboutHeroPage from "../About/AboutHeroPage";
import LoanCalculator from "./LoanCalculator";

const LoanCalculatorPage = () => {
  return (
    <>
      <AboutHeroPage
        text={"Calculator"}
        subTextFirst={"Home"}
        subTextSecond={"Calculator"}
      />
      <LoanCalculator />
    </>
  );
};

export default LoanCalculatorPage;
