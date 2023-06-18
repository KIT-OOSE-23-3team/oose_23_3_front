import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarTopHistory = () => {
    const navigate = useNavigate();

    const handleHistoryClick = () => {
        navigate("/History/PaymentHistory");
    }

    const handleNoticeClick = () => {
        navigate("/Notice/Submit");
    }

    const handleManagementClick = () => {
        navigate("/Management/Bicycle/Submit");
    }

    const handleWrongApproach = () => {
        alert("해당 기능은 회원만 접근할 수 있습니다.");
    }

    const logout = () => {
        axios.get("http://119.56.139.127:5050/logout", { withCredentials : true }).then(() => {navigate("/");});
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
        <li onClick={handleWrongApproach}>회원관리</li>
        <li onClick={handleWrongApproach}>대여관리</li>
        <li onClick={handleHistoryClick} style={{ backgroundColor: "#1400FF", color: "white" }}>이력관리</li>
        <li onClick={handleNoticeClick}>공지관리</li>
        <li onClick={handleManagementClick}>운영관리</li>
      </ul>
      <div onClick={logout} className="user-inform">
        <img
          src={`${process.env.PUBLIC_URL}/img/user.png`}
          alt="profile"
          className="user-profile"
        />
        <div className="profile-name">관리자</div>
      </div>
    </div>
  );
};

export default NavbarTopHistory;
