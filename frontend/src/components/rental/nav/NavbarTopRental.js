import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarTopRental = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const handleRentalClick = () => {
        navigate("/Rental/Rental")
    }

    const handleInfoClick = () => {
        navigate("/User/UserInfo")
    }

    const handleWrongApproach = () => {
        alert("해당 기능은 관리자만 접근할 수 있습니다.");
    }

    useEffect(() => {
        axios
            .get(`https://119.56.139.127:5050/memberSearch`, { withCredentials: true })
            .then((r) => {
                if (r.data !== "") {
                    setName(r.data.name);
                } else {
                    alert("로그인이 필요한 서비스입니다");
                    navigate("/");
                }
            })
    }, [])

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
        <li onClick={handleWrongApproach}>이력조회</li>
        <li onClick={handleWrongApproach}>공지사항</li>
        <li onClick={handleWrongApproach}>운영소식</li>
      </ul>
      <div className="user-inform">
        <img
          src={`${process.env.PUBLIC_URL}/img/user.png`}
          alt="profile"
          className="user-profile"
        />
        <div className="profile-name">{name}</div>
      </div>
    </div>
  );
};

export default NavbarTopRental;
