import React from "react";
const Footer = () => {
  return (
    <nav
      className="fixed-bottom"
      role="navigation"
      style={{
        background:
          "linear-gradient(179.88deg, #011B53 -143.82%, #063DB5 226.52%)",
        color: "rgba(255, 250, 240, 1)",
      }}
    >
      <div className="container text-center">
        <p className="navbar-text col-md-12 col-sm-12 col-xs-12 m-0">
          All rights are reserved
        </p>
      </div>
    </nav>
  );
};
export default Footer;
