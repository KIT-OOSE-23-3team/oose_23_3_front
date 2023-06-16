import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeftNoticeForm = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate("/Notice/Submit");
  };

  const handleViewClick = () => {
    navigate("/Notice/View");
  };

  return (
    <div className="navbar-left">
      <ul>
        <li onClick={handleSubmitClick} style={{ backgroundColor: "#1400FF", color: "white" }}>
          공지사항<br></br>등록
        </li>
        <li>공지사항<br></br>수정</li>
        <li>공지사항<br></br>삭제</li>
        <li onClick={handleViewClick}>공지사항<br></br>조회</li>
        <li>알림발송</li>
        <li>알림발송<br></br>통계 조회</li>
      </ul>
    </div>
  );
};

export default NavbarLeftNoticeForm;
