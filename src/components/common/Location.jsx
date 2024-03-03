import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { MdOutlineErrorOutline } from "react-icons/md";

const Location = () => {
  return (
    <>
      <div
        className="container mx-auto d-flex justify-content-between align-items-center border-bottom"
        style={{
          color: "#5C5C5C",
          maxWidth: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <GrLocation />
        <form action="">
          <input
            type="text"
            value={"Noida, India"}
            className=""
            style={{
              width: "100%",
              outline: "none",
              border: "none",
            }}
          />
        </form>
        <MdEdit />
      </div>
      <div
        className=" d-flex gap-2 my-4"
        style={{
          color: "#5C5C5C",
          maxWidth: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div style={{ width: "22px" }}>
          <MdOutlineErrorOutline />
        </div>
        <p style={{ fontSize: "16px" }}>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </>
  );
};

export default Location;
