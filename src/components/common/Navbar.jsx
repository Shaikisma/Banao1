import React, { useContext, useState } from "react";
import nav_icon from "../../assets/nav_icon.png";
import { BsSearch } from "react-icons/bs";
import down_Arrow from "../../assets/baseline-arrow_drop_down-24px.jpg";
import user from "../../assets/user2.png";
import { FaSortDown } from "react-icons/fa";
import AuthModal from "../core/AuthModal";
import { AuthContext } from "../MyContext";

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  
 

  const { isLoggedIn, logout, modal, setModal } =useContext(AuthContext);
  return (
    <>
      <nav
        className=" "
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
          {!isLoggedIn && (
            <div
              className="d-flex gap-3 align-items-center  "
              onClick={() => setModal(!modal)}
            >
              <div
                variant="secondary"
                className=" btn  custom_button_create btn-block "
              >
                Create account.
                <span className=" text-primary fw-bold">It’s free!</span>
                <img src={down_Arrow} alt="" className=" pb-1" />
              </div>
            </div>
          )}

          {/* If logged In */}
          {isLoggedIn && (
            <>
              <div
                onClick={() => setMenu(!menu)}
                className=" cursor-pointer position-relative d-flex gap-2 justify-content-center align-items-center"
              >
                <img src={user} alt="" className="profile" />
                <div>Ashish Soni</div>
                <FaSortDown />
                {menu && (
                  <ul
                    className="profile-menu-list position-absolute z-3  list-unstyled card px-3 py-2 "
                    style={{
                      backgroundColor: "#FFFFFF",
                      width: "160px",
                      // height: "102px",
                    }}
                  >
                    <li className="cursor-pointer">My Profile</li>
                    <li className="cursor-pointer mt-2">Option 3</li>

                    <li onClick={logout} className="my-2 cursor-pointer border-top">Log out</li>
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
      <div className=" position-relative">
        {modal && (
          <>
            <AuthModal modal={modal} setModal={setModal} />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
