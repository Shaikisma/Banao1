import React from "react";
import "./style.css";
// import banner_image from "../../assets/banner_image.png";
// import fade from "../../assets/banner_fade.png";

const Banner = () => {
  return (
    <>
      <div className=" position-relative overflow-hidden">
        <div className=" container-fluid p-0 m-0 overlap-container overflow-hidden "></div>
        <div className="banner-content container mx-auto">
          <h1 className="">Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      
      {/* <div className=" position-relative">
              <img src={banner_image} alt="" className="image1" />
              <img src={fade} alt=""  className="image2"/>
      </div> */}
    </>
  );
};

export default Banner;
