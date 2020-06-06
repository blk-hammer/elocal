import React from "react";
import Drop from "./_Dropdown";
import pin from "../resources/pin.png";
import bag from "../resources/shopping_bag.png";
import logo from "../resources/E-Commerce-Logo-1.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu" style={{ height: "50px" }}>
      <div>
        <img src={logo} style={{ width: "100px", padding: "2px" }} alt="logo" />
      </div>
      <div className="right menu">
        <img
          className="item"
          src={pin}
          style={{ width: "20px", padding: "2px" }}
          alt="pin"
        />
        <div className="item">location</div>
        <img
          className="item"
          src={bag}
          style={{ height: "40px", width: "40px", padding: "0" }}
          alt="shopping_bag"
        />
        <div className="item" style={{ paddingBottom: "2px" }}>
          <Drop />
        </div>
      </div>
    </div>
  );
};

export default Header;
