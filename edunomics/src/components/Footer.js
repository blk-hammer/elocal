import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "2.5rem",
        position: "absolute",
        bottom: "0",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <span>Edunomics</span>
      <li>contact@edunomics.in</li>
      <span>
        <i class="facebook f icon" />
        <i class="twitter icon" />
        <i class="instagram icon" />
      </span>
      <div>
        <Link to="#">Join Us</Link> |<Link to="#">Cookie Policy</Link> |
        <Link to="#">Terms of Use</Link> |<Link to="#">Tech</Link> |
        <Link to="#">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
