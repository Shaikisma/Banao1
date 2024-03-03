import React from "react";

const Group = ({ group }) => {
  return (
    <>
      <div className=" w-100 d-flex  gap-3 justify-content-between align-items-center">
        <div>
          <img
            src={group.group_pic}
            alt=""
            className="profile-icon object-fit-cover rounded-circle"
          />
        </div>
        <div className=" flex-grow-1 fs-6 fw-semibold mb-3">
          {group.group_name}
        </div>
        <button
          variant="secondary"
          className=" btn btn-secondary float-end text-capitalize border-0"
          style={{ backgroundColor: "#EDEEF0", color: "black" }}
          id={group.group_id}
        >
          follow
        </button>
      </div>
    </>
  );
};

export default Group;
