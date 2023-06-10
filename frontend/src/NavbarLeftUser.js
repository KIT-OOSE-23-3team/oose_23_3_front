import React from "react";

const NavbarLeftUser = ({ type }) => {
  // type == 1 : 회원 정보, type == 2 : 대여
  if (type === 1) {
    return (
      <div className="navbar-left">
        <ul>
          <li>개인정보<br></br>수정</li>
          <li>로그아웃</li>
          <li>회원 탈퇴</li>
        </ul>
      </div>
    );
  } else if (type === 2) {
    return (
      <div className="navbar-left">
        <ul>
          <li>자전거 대여</li>
          <li>자전거 반납</li>
          <li>결제 취소 신청</li>
          <li>이용 이력 조회</li>
          <li>대여소 현황<br></br>조회</li>
        </ul>
      </div>
    );
  }
};

export default NavbarLeftUser;
