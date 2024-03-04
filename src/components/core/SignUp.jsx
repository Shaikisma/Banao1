import React from "react";
import { IoEyeOutline } from "react-icons/io5";
// import { AuthContext } from "../MyContext";

const SignUp = ({ setLogin }) => {
  // const { login, setModal } = useContext(AuthContext);
  return (
    <>
      <section>
        <p className=" fw-bold fs-5">Create Account</p>
        <div className=" mt-3">
          <form>
            <div className="input-group rounded-0">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="First Name"
                aria-label="First Name"
              />
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Email"
              aria-label="Email"
            />
            <div className=" position-relative w-100">
              <input
                type="text"
                className="form-control rounded-0 "
                placeholder="Password"
                aria-label="Password"
              />
              <div className=" position-absolute end-0 top-0">
                <IoEyeOutline className=" me-3 mt-2 cursor-pointer" />
              </div>
            </div>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
            <div className="mt-3 row d-flex justify-content-between w-100">
              <div className=" col-6 col-lg-12">
                <button className="btn btn-primary w-100 rounded-5">
                  Create Account
                </button>
              </div>
              <div
                className=" col-6 d-lg-none pt-2 text-end cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                <p onClick={() => setLogin(true)}>or, Sign In</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
