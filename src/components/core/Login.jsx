import React, { useContext } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../MyContext";

const Login = ({ setLogin }) => {
  const { login, setModal } = useContext(AuthContext);
  return (
    <>
      <section>
        <p className=" fw-bold fs-5">Sign In</p>
        <div className=" mt-3">
          <form>
            <input
              type="text"
              className="form-control  form-control-lg rounded-0"
              placeholder="Email"
              aria-label="Email"
            />
            <div className=" position-relative w-100">
              <input
                type="text"
                className="form-control  form-control-lg rounded-0"
                placeholder="Password"
                aria-label="Password"
              />
              <div className=" position-absolute end-0 top-0">
                <IoEyeOutline className=" me-3 mt-2 cursor-pointer" />
              </div>
            </div>

            <div className="mt-3 row d-flex justify-content-between w-100">
              <div className=" col-6 col-lg-12">
                <button
                  className="btn btn-primary w-100 rounded-5"
                  onClick={() => {
                    setModal(false);
                    login();
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                className=" col-6 d-lg-none pt-2 text-end cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                <p onClick={() => setLogin(false)}>or, Create Account</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
