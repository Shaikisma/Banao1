import React, { useState } from "react";
import nav_icon from "../../assets/nav_icon.png";
import { BsSearch } from "react-icons/bs";
import down_Arrow from "../../assets/baseline-arrow_drop_down-24px.jpg";

const Navbar = () => {
  // const [loggedIn, setloggedIn] = useState(false);
  const loggedIn = false;
  return (
    <>
      <nav
        className=" py-2"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <div className=" mx-5 d-none d-lg-flex py-2  justify-content-between align-items-center">
          <div className="my-2">
            <img src={nav_icon} alt="Logo" width={"162.57px"} height={"24px"} />
          </div>
          {/* search */}
          <div
            className="d-flex gap-3 align-items-center py-2 px-3 "
            style={{
              width: "360px",
              position: "relative",
              borderRadius: "21px",
              backgroundColor: "#e1e2e3",
              color: "#495057",
              // padding: "55px",
            }}
          >
            <BsSearch
              // style={{ position: "absolute", left: "30px" }}
              size={22}
            />
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              style={{
                width: "100%",
                outline: "none",
                border: "none",
                backgroundColor: "#e1e2e3",
              }}
            />
          </div>
          {/* button */}
          {!loggedIn && (
            <div className="d-flex gap-3 align-items-center  ">
              <div
                variant="secondary"
                className=" btn  custom_button_create btn-block "
              >
                Create account.{" "}
                <span className=" text-primary fw-bold">It’s free!</span>
                <img src={down_Arrow} alt="" className=" pb-1" />
              </div>
            </div>
          )}

          {/* If logged In */}
          {loggedIn && <></>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
