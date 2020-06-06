import React from "react";
// import {
//   Container,
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Button,
//   InputGroup,
//   InputGroupText,
//   Input,
// } from "reactstrap";

import { Link } from "react-router-dom";

import logo from "../resources/E-Commerce-Logo-1.png";

const home = () => {
  return (
    <div
      className="d-flex container justify-content-center align-items-center"
      style={{ height: "75vh" }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "70%", width: "60%" }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ marginBottom: "50%", font: "Medium 32px/50px Roboto" }}
        />

        <Link to={`product`}>
          <button
            className=" btn btn-outline-dark"
            style={{
              height: "60px",
              width: "200px",
              fontSize: "25px",
              fontHeight: "50px",
              fontFamily: "Roboto",
            }}
          >
            Product Detail
          </button>
        </Link>
        <br />

        <Link to={`seller`}>
          <button
            className=" btn btn-outline-dark"
            style={{
              height: "60px",
              width: "200px",
              fontFamily: "Roboto",
              fontSize: "25px",
            }}
          >
            Seller
          </button>
        </Link>
      </div>
    </div>
  );
};

export default home;
