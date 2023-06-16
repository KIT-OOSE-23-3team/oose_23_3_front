import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarTopRental = () => {
    const navigate = useNavigate();


    const handleRentalClick = () => {
        navigate("/Rental/Rental")
    }

    const handleInfoClick = () => {
        navigate("/User/UserInfo")
    }

  return (
    <div className="navbar-top">
      <div className="system-title">
        <img
          src={`${process.env.PUBLIC_URL}/img/bicycle.png`}
          alt="Logo"
          className="logo"
        />
        <h1 className="system-name">기장군 자전거<br></br>무인대여시스템</h1>
      </div>
      <ul className="menu-items">
        <li onClick={handleInfoClick}>회원정보</li>
        <li onClick={handleRentalClick} style={{ backgroundColor: "#1400FF", color: "white" }}>대여</li>
        <li>이력조회</li>
        <li>공지사항</li>
        <li>운영소식</li>
      </ul>
      <div className="user-inform">
        <img
          src={`${process.env.PUBLIC_URL}/img/user.png`}
          alt="profile"
          className="user-profile"
        />
        <div className="profile-name">홍길동</div>
      </div>
    </div>
  );
};

export default NavbarTopRental;
