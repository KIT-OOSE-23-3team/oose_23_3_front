import React from 'react';

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="system-title">
        <img src={`${process.env.PUBLIC_URL}/img/bicycle.png`} alt="Logo" className="logo" />
        <h1 className="system-name">기장군 자전거 무인대여시스템</h1>
      </div>
      <ul className="menu-items">
        <li>회원관리</li>
        <li>대여관리</li>
        <li>이력관리</li>
        <li>공지관리</li>
        <li>운영관리</li>
      </ul>
    </div>
  );
};

export default NavbarTop;
