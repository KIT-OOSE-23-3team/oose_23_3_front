import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeftRental = () => {
  const navigate = useNavigate();

  const handleRentalClick = () => {
    navigate("/Rental/Rental");
  };

  const handleHistoryClick = () => {
    navigate("/Rental/History");
  };

  return (
    <div className="navbar-left">
      <ul>
        <li onClick={handleRentalClick} style={{ backgroundColor: "#1400FF", color: "white" }}>
          자전거 대여
        </li>
        <li>자전거 반납</li>
        <li>결제 취소 신청</li>
        <li onClick={handleHistoryClick}>이용 이력 조회</li>
        <li>대여소 현황<br></br>조회</li>
      </ul>
    </div>
  );
};

export default NavbarLeftRental;
