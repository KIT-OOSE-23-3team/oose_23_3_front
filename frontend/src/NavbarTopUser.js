import React from "react";

const NavbarTopUser = () => { 
    return (
        <div className="navbar-top">
          <div className="system-title">
            <img src={`${process.env.PUBLIC_URL}/img/bicycle.png`} alt="Logo" className="logo" />
            <h1 className="system-name">기장군 자전거 무인대여시스템</h1>
          </div>
          <ul className="menu-items">
            <li>회원정보</li>
            <li>대여</li>
            <li>이력조회</li>
            <li>공지사항</li>
            <li>운영소식</li>
          </ul>
        </div>
      );
}

export default NavbarTopUser;