import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return (
    <>
      <button className="d-flex gap-1 text-white align-items-center fw-semibold px-5 py-3 rounded-pill overflow-hidden apply-loan-btn">
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
