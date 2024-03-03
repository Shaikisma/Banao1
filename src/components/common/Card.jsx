import React, { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

const Card = ({ post }) => {
  const [info, setInfo] = useState(false);
  return (
    <>
      <div className="card border-1">
        {/* image */}
        <img
          className={`card-img-top ${post.post_url ? "" : "d-none"}`}
          style={{ height: "220px" }}
          src={post.post_url}
          alt="Card  cap"
        />
        <div className="card-body">
          <h5 className="card-title fs-6">{post.tag}</h5>
          {/* title */}
          <div className="d-flex justify-content-between ">
            <p className="card-text w-75 fw-bold" style={{ fontSize: "20px" }}>
              {post.title}
            </p>
            {/* info */}
            <div
              className={`position-relative float-end  ${
                info ? "info-bg" : ""
              }`}
              style={{ height: "fit-content" }}
            >
              <MdMoreHoriz
                onClick={() => setInfo(!info)}
                id="info"
                className=" fs-4 my-1 mx-1 cursor-pointer"
              />
              {info && (
                <ul
                  className="info-list position-absolute  list-unstyled card px-3 py-2 "
                  style={{
                    backgroundColor: "#FFFFFF",
                    width: "160px",
                    height: "102px",
                  }}
                >
                  <li className="cursor-pointer">Edit</li>
                  <li className="my-2 cursor-pointer">Report</li>
                  <li className="cursor-pointer">Option 3</li>
                </ul>
              )}
            </div>
          </div>
          {/* sub title */}
          <p style={{ fontSize: "19px", color: "#5C5C5C" }}>{post.subTitle}</p>

          {/* date and Address */}
          <ul
            className=" list-unstyled d-lg-flex gap-5  "
            // style={{ maxWidth: "358px", height: "20px" }}
          >
            <li
              className={` ${
                post.statusText ? "d-flex" : "d-none"
              }  gap-1 d-lg-justify-content-between align-items-center fs-6 `}
            >
              <IoMdCalendar />
              <span>{post.statusText}</span>
            </li>
            <li
              className={`${
                post.loaction ? "d-flex " : "d-none"
              } d-flex gap-1 d-lg-justify-content-between align-items-center fs-6 `}
            >
              <GrLocation />
              <span>{post.loaction}</span>
            </li>
          </ul>

          {/* visit website */}
          <button
            type="button"
            className={`w-100 btn btn-lg btn-block ${
              post.visitWebsite ? "d-block" : "d-none"
            } btn-outline-danger my-2`}
            variant="secondary"
          >
            Visit Website
          </button>

          {/* visit website */}
          <button
            type="button"
            className={`w-100 btn btn-lg btn-block ${
              post.applyTimesjobs ? "d-block" : "d-none"
            } btn-outline-success my-2`}
            variant="secondary"
          >
            Apply on Timesjobs
          </button>

          {/* footer */}
          
          <div className="d-flex w-100 gap-3  align-items-center">
            <img
              src={post.userProfile}
              alt=""
              className="profile-icon object-fit-cover rounded-circle"
            />
            <ul className=" list-unstyled flex-grow-1 d-lg-flex justify-content-between align-items-center">
              <li className="mt-2 fs-5 fw-bold">{post.userName}</li>
              <li
                className=" d-flex gap-2 align-items-center d-lg-mt-2 pb-2 d-lg-pt-2 fs-6"
                style={{ color: "#5C5C5C" }}
              >
                <IoEyeOutline className="d-lg-mt-2" />
                <span>{post.views}k views</span>
              </li>
            </ul>
            <div
              className=" fs-5  d-flex justify-content-center align-items-center mb-3"
              style={{
                width: "42px",
                height: "36px",
                backgroundColor: "#EDEEF0",
              }}
            >
              <IoMdShare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
