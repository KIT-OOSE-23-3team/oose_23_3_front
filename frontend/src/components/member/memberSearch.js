import axios from "axios";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";

function MemberSearch() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw_confirm, setPw_confirm] = useState("");
  const [pw_rental, setPw_rental] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");

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
    axios.get(`http://localhost:8000/memberSearch`, { withCredentials : true }).then((r) => {
        if (r.data !== "") {    //r.data가 "" -> 서버로부터 보낸 응답이 없음 -> 세션이 없음 -> 로그인하지 않은 상태
            const birthDate = new Date(r.data.birthDate);
            const year = birthDate.getFullYear();
            const month = String(birthDate.getMonth() + 1).padStart(2, "0");
            const date = String(birthDate.getDate()).padStart(2, "0");

            setId(r.data.id);
            setName(r.data.name);
            setPhoneNumber(r.data.phoneNumber);
            setEmail(r.data.email);
            setBirthDay(`${year}-${month}-${date}`);
        } else {
            alert("로그인이 필요한 서비스입니다");
        }
    });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        id="id"
        name="id"
        placeholder="id"
        required
        onChange={idChange}
      ></input>
      <input
        type="password"
        value={pw}
        id="pw"
        name="pw"
        placeholder="pw"
        required
        onChange={pwChange}
      ></input>
      <input
        type="password"
        value={pw_confirm}
        id="pw_confirm"
        name="pw_confirm"
        placeholder="pw_confirm"
        required
        onChange={pwConfirmChange}
      ></input>
      <input
        type="password"
        value={pw_rental}
        id="pw_rental"
        name="pw_rental"
        placeholder="pw_rental"
        required
        onChange={pwRentalChange}
      ></input>
      <input
        type="text"
        value={name}
        id="name"
        name="name"
        placeholder="name"
        required
        onChange={nameChange}
      ></input>
      <input
        type="text"
        value={phoneNumber}
        id="phone_number"
        name="phone_number"
        placeholder="phone_number"
        required
        onChange={phoneNumberChange}
      ></input>
      <input
        type="email"
        value={email}
        id="email"
        name="email"
        placeholder="email"
        required
        onChange={emailChange}
      ></input>
      <input
        type="date"
        value={birthDay}
        id="birthday"
        name="birthday"
        placeholder="birthday"
        required
        onChange={birthDayChange}
      ></input>
      <input type="submit" value="변경" onClick={memberSearch}></input>
    </div>
  );
}

export default MemberSearch;
