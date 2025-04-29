import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import {allImageData} from "../RawImageData";



const ImageGallery = () => {
  const [imageData, setImageData] = useState(allImageData);
 
  const handleFilter = (category) => {
    const updatedList = allImageData.filter((x) => x.category === category);
    setImageData(updatedList);
  };


  return (
    <div style={{ padding: "70px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex column-gap-3 justify-content-center align-items-center flex-wrap row-gap-4" data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
            <Button
              variant="outlined"
              onClick={() => setImageData(allImageData)}
            >
              All
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleFilter("MicroLoan")}
            >
              Micro Loan
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleFilter("PersonalLoan")}
            >
              Personal Loan
            </Button>
            <Button variant="outlined" onClick={() => handleFilter("HomeLoan")}>
              Home Loan
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleFilter("EducationLoan")}
            >
              Education Loan
            </Button>
          </div>
        </div>

      


        <div className="row mt-5">
          {imageData.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id} data-aos="fade-up"  data-aos-delay="70" data-aos-duration="600">
              <img
                src={item.imgSource}
                alt={item.category}
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;
