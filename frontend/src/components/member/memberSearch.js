import axios from "axios";
import { useState } from "react";
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

  const [cookies, SetCookie, removeCookie] = useCookies(['id']);

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
    setId(cookies.id);
    // axios.get(`http://localhost:8000/memberSearch/${id}`).then((r) => { 
    // // 이거 해결 어케해야할지 모르겟음 세션 음..
    //   console.log(r);

    //   setId(r.data.id);
    //   setName(r.data.name);
    //   setPhoneNumber(r.data.phoneNumber);
    //   setEmail(r.data.email);
    //   setBirthDay(new Date(r.data.birthDay));
    // });
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
        disabled
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
