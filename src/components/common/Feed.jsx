import React, { useContext } from "react";
import Card from "./Card";
import { postData, groupData } from "../../data/posts";
import Location from "./Location";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import Group from "./Group";
import { AuthContext } from "../MyContext";

const Feed = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div className="     d-lg-container mx-auto d-flex  gap-5  justify-content-between ">
        <div className=" container-fluid mx-auto position-relative d-flex flex-grow-1 flex-column gap-3  ">
          {postData.map((post, index) => (
            <div key={index}>
              <Card post={post} />
            </div>
          ))}
        </div>
        <div className=" border-2  d-none d-lg-block position-relative  ">
          <div className=" ">
            <Location />

            {/* groups */}
            {isLoggedIn && (
              <>
                <div
                  className=" d-flex gap-1 my-4"
                  style={{
                    // color: "#5C5C5C",
                    maxWidth: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <div style={{ width: "22px" }}>
                    <MdOutlineThumbUpAlt />
                  </div>
                  <p className=" text-uppercase" style={{ fontSize: "16px" }}>
                    Recommended Groups
                  </p>
                </div>
                <div
                  className=" d-flex flex-column px-2 gap-1 my-4"
                  style={{
                    // color: "#5C5C5C",
                    maxWidth: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {groupData.map((group, index) => (
                    <div key={index}>
                      <Group group={group} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
