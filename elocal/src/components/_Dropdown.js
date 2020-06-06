import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Drop = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ borderRadius: "30px" }}>
        <i className="user outline icon"></i>
      </DropdownToggle>
      <DropdownMenu
        style={{
          border: "none",
          boxShadow: "0px 1px 10px #00000029",
          borderRadius: "8px",
          opacity: "1",
        }}
        right
      >
        <DropdownItem style={{ paddingLeft: "10px" }}>
          <div>
            <i
              className="list alternate outline icon"
              style={{ paddingRight: "30px" }}
            />
            My Orders
          </div>
        </DropdownItem>
        <DropdownItem style={{ paddingLeft: "10px" }}>
          <div>
            <i className="user outline icon" style={{ paddingRight: "30px" }} />
            Profile
          </div>
        </DropdownItem>
        <DropdownItem style={{ paddingLeft: "10px" }}>
          <div>
            <i
              className="sign out alternate icon"
              style={{ paddingRight: "30px" }}
            />
            Signout
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Drop;
