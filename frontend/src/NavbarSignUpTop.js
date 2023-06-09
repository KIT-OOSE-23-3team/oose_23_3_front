import React from "react";

const NavbarSignUpTop = () => {
  return (
    <div className="navbar-top" style={{ display: "flex", justifyContent: "center" }}>
      <div className="system-title">
        <img
          src={`${process.env.PUBLIC_URL}/img/bicycle.png`}
          alt="Logo"
          className="logo"
        />
        <h1 className="system-name">기장군 자전거<br></br>무인대여시스템</h1>
      </div>
    </div>
  );
};

export default NavbarSignUpTop;
