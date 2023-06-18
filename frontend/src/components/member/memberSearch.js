import axios from "axios";
import { useEffect, useState } from "react";
import "./signUp.css";
import NavbarTopMember from "./nav/NavbarTopMember";
import NavbarLeftMemberSearch from "./nav/NavbarLeftMemberSearch";
import {useNavigate} from "react-router-dom";

function MemberSearch() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_confirm, setPw_confirm] = useState("");
  const [pw_rental, setPw_rental] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const navigate = useNavigate();

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };
  const pwConfirmChange = (e) => {
    setPw_confirm(e.target.value);
  };
  const pwRentalChange = (e) => {
    setPw_rental(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const phoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const birthDayChange = (e) => {
    setBirthDay(e.target.value);
  };

  const memberSearch = () => {
    axios
      .get(`https://119.56.139.127:5050/memberSearch`, { withCredentials: true })
      .then((r) => {
        if (r.data !== "") {
          //r.data가 "" -> 서버로부터 보낸 응답이 없음 -> 세션이 없음 -> 로그인하지 않은 상태
          const birthDate = new Date(r.data.birthDate);
          const year = birthDate.getFullYear();
          const month = String(birthDate.getMonth() + 1).padStart(2, "0");
          const date = String(birthDate.getDate()).padStart(2, "0");

          setId(r.data.identification);
          setName(r.data.name);
          setPhoneNumber(r.data.phoneNumber);
          setEmail(r.data.email);
          setBirthDay(`${year}-${month}-${date}`);
        } else {
          alert("로그인이 필요한 서비스입니다");
          navigate("/");
        }
      });
  };

  useEffect(() => {
    memberSearch();
  }, []);

  return (
    <div className="App">
      <NavbarTopMember />
      <div className="main-content">
        <NavbarLeftMemberSearch/>
        <div className="signUp-page">
          <div className="signUp-title">
            <h1>개인정보 수정</h1>
          </div>
          <div className="signUp-content">
            <div className="signUp-input">
              <div className="signUp-label">ID</div>
              <input
                type="text"
                value={id}
                id="id"
                name="id"
                placeholder="id"
                required
                onChange={idChange}
              />
              <div className="signUp-label">이름</div>
              <input
                type="text"
                value={name}
                id="name"
                name="name"
                placeholder="name"
                required
                onChange={nameChange}
              />
            </div>
            <div className="signUp-input">
              <div className="signUp-label">비밀번호</div>
              <input
                type="password"
                value={pw}
                id="pw"
                name="pw"
                placeholder="pw"
                required
                onChange={pwChange}
              />
              <div className="signUp-label">전화번호</div>
              <input
                type="text"
                value={phoneNumber}
                id="phone_number"
                name="phone_number"
                placeholder="phone_number"
                required
                onChange={phoneNumberChange}
              />
            </div>
            <div className="signUp-input">
              <div className="signUp-label">비밀번호확인</div>
              <input
                type="password"
                value={pw_confirm}
                id="pw_confirm"
                name="pw_confirm"
                placeholder="pw_confirm"
                required
                onChange={pwConfirmChange}
              />
              <div className="signUp-label">이메일</div>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="email"
                required
                onChange={emailChange}
              />
            </div>
            <div className="signUp-input">
              <div className="signUp-label">대여비밀번호</div>
              <input
                type="password"
                value={pw_rental}
                id="pw_rental"
                name="pw_rental"
                placeholder="pw_rental"
                required
                onChange={pwRentalChange}
              />
              <div className="signUp-label">생일</div>
              <input
                type="date"
                value={birthDay}
                id="birthday"
                name="birthday"
                placeholder="birthday"
                required
                onChange={birthDayChange}
              />
            </div>
            <div className="signUp-btn">수정</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberSearch;
