import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarLeftMemberSearch = () => {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate("/User/UserInfo");
  };

  const handleLogout = () => {
    axios.get("https://119.56.139.127:5050/logout", { withCredentials : true }).then(() => {navigate("/");});
  };

  return (
    <div className="navbar-left">
      <ul>
        <li onClick={handleInfoClick} style={{ backgroundColor: "#1400FF", color: "white" }}>
          개인정보<br></br>수정
        </li>
        <li onClick={handleLogout}>로그아웃</li>
        <li>회원 탈퇴</li>
      </ul>
    </div>
  );
};

export default NavbarLeftMemberSearch;
