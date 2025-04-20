import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import LightGallery from "lightgallery/react";
import {allImageData} from "../RawImageData";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

//  const allImageData = [
//     {
//       id: 1,
//       category: "MicroLoan",
//       imgSource: portfolio2
//     },
//     {
//       id: 2,
//       category: "MicroLoan",
//       imgSource:portfolio8
//     },
//     {
//       id: 3,
//       category: "PersonalLoan",
//       imgSource: portfolio1
//     },
//     {
//       id: 4,
//       category: "PersonalLoan",
//      imgSource: portfolio4
//     },
//     {
//       id: 5,
//       category: "PersonalLoan",
//        imgSource: portfolio6
//     },
//     {
//       id: 6,
//       category: "HomeLoan",
//        imgSource: portfolio5
//     },
//     {
//         id: 7,
//         category: "HomeLoan",
//         imgSource: portfolio8
//       },
//       {
//         id: 8,
//         category: "EducationLoan",
//        imgSource: portfolio7
//       },
//       { 
//         id: 9,
//         category: "EducationLoan",
//        imgSource:portfolio9
//       },
//   ];

const ImageGallery = () => {
  const [imageData, setImageData] = useState(allImageData);
  // console.log(allImageData);
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

      

        {/* <LightGallery
          mode="lg-fade"
          dynamic={true}
          dynamicEl={imageData.map((item) => {
            return {
              src: item.imgSource,
            };
          })}
          // dynamicEl={imageData.map((item) => ({
          //   src: item.imgSource,
          //   thumb: item.imgSource,
          //   subHtml: `<h4>${item.category}</h4>`,
          // }))}
          // dynamicEl={newArray}
          plugins={[lgZoom, lgThumbnail]}
          speed={500}
          style={{ minHeight: "300px", background: "#f0f0f0" }} // Debug style
        ></LightGallery> */}

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
