import React, { useContext } from "react";
import "./style.css";
import banner_image from "../../assets/banner_image.png";
import banner2 from "../../assets/banner-2.png";
// import arrow_back from '../../assets/arrow_back_24px.png'
// import fade from "../../assets/banner_fade.png";
import { MdOutlineArrowBack } from "react-icons/md";
import { AuthContext } from "../MyContext";

const Banner = () => {
  const { setModal } = useContext(AuthContext);
  return (
    <>
      <div className="position-relative">
        <div className="card rounded-0 pt-0  ">
          <img
            src={banner_image}
            alt=""
            className=" d-none d-lg-block banner-1  card-image-top"
          />
          <img
            src={banner2}
            alt=""
            className="d-flex d-lg-none banner-2 card-image-top"
          />
        </div>
        <div className="position-absolute z-2 top-0 start-0 bg-black opacity-50  w-100 h-100"></div>
        <div className="  position-absolute z-2 top-0 start-0  w-100 h-100 py-2">
          <div className=" container-fluid d-lg-container mx-auto d-flex flex-column h-100 justify-content-between  ">
            <div className="d-flex lg-hidden d-lg-opacity-0 w-100 justify-content-between align-items-center text-white">
              <div className=" text-white fs-1 opacity-100 cursor-pointer">
                <MdOutlineArrowBack />
              </div>
              <div>
                <button onClick={()=>setModal(true)} className=" join-grp ">Join Group</button>
              </div>
            </div>
            <div className=" mb-lg-5 ps-lg-5">
              <div className="banner-title">Computer Engineering</div>
              <div className="banner-subtitle">
                142,765 Computer Engineers follow this
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
