import React from "react";
import "./style.css";
import { FaCaretDown } from "react-icons/fa";
import { Dropdown, Nav } from "react-bootstrap";
import { MdGroupAdd } from "react-icons/md";
import { IoMdExit } from "react-icons/io";

// 4000

const Topbar = () => {
  return (
    <>
      {/* for desktop */}
      <div className="sticky-lg-top bg-white ">
        <div className="  d-none d-lg-block  py-1 container mx-auto mt-5 border-bottom mb-5">
          <div className=" d-none d-lg-flex justify-content-between align-items-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container mx-auto">
                <Nav
                  variant="underline"
                  defaultActiveKey="/all"
                  className="text-black"
                >
                  <Nav.Item>
                    <Nav.Link href="/all">
                      <span className="text-black fw-medium">
                        All Posts(32)
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">
                      <span className="text-black ">Article</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">
                      <span className="text-black">Event</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">
                      <span className="text-black">Education</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-4">
                      <span className="text-black">Job</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </nav>

            <div className="d-flex gap-3 justify-content-center align-items-center">
              {/* dropdown */}

              {/*  */}
              {/* write a post */}
              <div
                className=" d-flex gap-2 border-1  text-center px-3 fw-semibold rounded-2"
                style={{ cursor: "pointer", backgroundColor: "#EDEEF0" }}
              >
                <p className=" pt-2">Write a post</p>
                <FaCaretDown className=" write-post " size={22} />
              </div>

              {/* join group */}
              <div className=" d-flex gap-2 border-1  text-center px-3 bg-primary text-white cursor-pointer fw-semibold rounded-2">
                <MdGroupAdd className=" write-post " size={22} />
                <p className=" pt-2">Join Group</p>
              </div>

              {/* leave group */}
              <div
                className=" d-flex gap-2 border-1  text-center px-3   cursor-pointer fw-semibold rounded-2"
                style={{
                  backgroundColor: "#F1F3F5",
                  border: "1px solid gray",
                  color: "#5C5C5C",
                  outline: "none",
                }}
              >
                <IoMdExit className=" write-post " size={22} />
                <p className=" pt-2">Leave Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className=" container-fluid mx-auto d-flex d-lg-none justify-content-between align-items-center my-2 fw-semibold">
        <div>Post(386)</div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#F1F3F5",
                border: "none",
                color: "black",
                outline: "none",
                fontWeight: 500,
              }}
            >
              Filter: All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Shop</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Topbar;
