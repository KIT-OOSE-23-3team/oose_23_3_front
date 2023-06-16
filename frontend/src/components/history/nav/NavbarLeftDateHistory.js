import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeftDateHistory = () => {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate("/History/PaymentHistory");
  };

  const handleUserClick = () => {
    navigate("/History/UserHistory");
  };

  const handleDateClick = () => {
    navigate("/History/DateHistory");
  };

  return (
    <div className="navbar-left">
      <ul>
        <li onClick={handlePaymentClick}>
          결제/환불<br></br>이력 조회
        </li>
        <li>자전거 이용<br></br>내역 조회</li>
        <li>회원 내역 통계</li>
        <li onClick={handleUserClick}>가입자별<br></br>이용내역 조회</li>
        <li onClick={handleDateClick} style={{ backgroundColor: "#1400FF", color: "white" }}>기간별<br></br>이용내역 조회</li>
        <li>대여소별<br></br>이용내역 조회</li>
      </ul>
    </div>
  );
};

export default NavbarLeftDateHistory;
