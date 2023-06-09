import axios from "axios";
import { useState } from "react";
import "./signUp.css"

function SignUp() {
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

  const submit = () => {
    const birthDayArray = birthDay.split("-");
    const date = new Date(
      +birthDayArray[0],
      +birthDayArray[1] - 1,
      +birthDayArray[2] + 1
    );
    const member = {
      identification: id,
      password: pw,
      rentalPassword: pw_rental,
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      birthDate: date,
    };

    axios.post("http://localhost:8000/memberReg", member).then((r) => {
      console.log(r);
    });
  };

  const memberSearch = () => {
    axios.get(`http://localhost:8000/memberRead/${id}`).then((r) => {
      console.log(r);
    });
  };

  const idVerification = () => {
    console.log(id);
    axios.get(`http://localhost:8000/idVerification/${id}`).then((r) => {
      console.log(r);
      if (r.data === true) {
        document.getElementById("id").disabled = true;
      }
    });
  };

  return (
    <div className="signUp-page">
      <div className="signUp-title">
        <h1>회원가입</h1>
      </div>
      <div className="signUp-content">
        <div className="signUp-input">
          <div className="signUp-label">
            ID
          </div>
          <input
            type="text"
            value={id}
            id="id"
            name="id"
            placeholder="id"
            required
            onChange={idChange}
          />
        <input
          type="button"
          value="ID 중복 체크"
          id="btnIdVerification"
          name="btnIdVerification"
          onClick={idVerification}
        />
          <div className="signUp-label">
            이름
          </div>
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
          <div className="signUp-label">
            비밀번호
          </div>
          <input
            type="password"
            value={pw}
            id="pw"
            name="pw"
            placeholder="pw"
            required
            onChange={pwChange}
          />
          <div className="signUp-label">
            전화번호
          </div>
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
          <div className="signUp-label">
            비밀번호확인
          </div>
          <input
            type="password"
            value={pw_confirm}
            id="pw_confirm"
            name="pw_confirm"
            placeholder="pw_confirm"
            required
            onChange={pwConfirmChange}
          />
          <div className="signUp-label">
            이메일
          </div>
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
          <div className="signUp-label">
            대여비밀번호
          </div>
          <input
            type="password"
            value={pw_rental}
            id="pw_rental"
            name="pw_rental"
            placeholder="pw_rental"
            required
            onChange={pwRentalChange}
          />
          <div className="signUp-label">
            생일
          </div>
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
        <div className="signUp-btn" onClick={submit}>등록</div>
    </div>
    </div>
  );
}

export default SignUp;
