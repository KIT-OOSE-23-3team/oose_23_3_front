import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeftBicycleCreate = () => {
  const navigate = useNavigate();

  const handleBicycleClick = () => {
    navigate("/Management/Bicycle/Submit");
  };

  const handleOfficeClick = () => {
    navigate("/Management/RentalOffice/Submit");
  };

  return (
    <div className="navbar-left">
      <ul>
        <li onClick={handleBicycleClick} style={{ backgroundColor: "#1400FF", color: "white" }}>
          자전거등록
        </li>
        <li>자전거조회</li>
        <li onClick={handleOfficeClick}>대여소등록</li>
        <li>대여소조회</li>
      </ul>
    </div>
  );
};

export default NavbarLeftBicycleCreate;
