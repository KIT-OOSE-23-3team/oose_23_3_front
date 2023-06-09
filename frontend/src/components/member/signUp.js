import axios from "axios";
import { useState } from "react";

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
    <div className="create-container">
      <h1>회원가입</h1>
      <div className="input-container">
        <div className="field-line">
          <label htmlFor="id" className="create-input-label">
            ID
          </label>
          <input
            type="text"
            value={id}
            id="id"
            name="id"
            placeholder="id"
            required
            onChange={idChange}
          />
        </div>
        <input
          type="button"
          value="ID 중복 체크"
          id="btnIdVerification"
          name="btnIdVerification"
          onClick={idVerification}
        />
        <div className="field-line">
          <label htmlFor="name" className="create-input-label">
            이름
          </label>
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
      </div>
      <div className="input-container">
        <div className="field-line">
          <label htmlFor="password" className="create-input-label">
            비밀번호
          </label>
          <input
            type="password"
            value={pw}
            id="pw"
            name="pw"
            placeholder="pw"
            required
            onChange={pwChange}
          />
        </div>
        <div className="field-line">
          <label htmlFor="phone_number" className="create-input-label">
            전화번호
          </label>
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
      </div>
      <div className="input-container">
        <div className="field-line">
          <label htmlFor="pw_confirm" className="create-input-label">
            비밀번호확인
          </label>
          <input
            type="password"
            value={pw_confirm}
            id="pw_confirm"
            name="pw_confirm"
            placeholder="pw_confirm"
            required
            onChange={pwConfirmChange}
          />
        </div>
        <div className="field-line">
          <label htmlFor="email" className="create-input-label">
            이메일
          </label>
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
      </div>
      <div className="input-container">
        <div className="field-line">
          <label htmlFor="pw_rental" className="create-input-label">
            대여비밀번호
          </label>
          <input
            type="password"
            value={pw_rental}
            id="pw_rental"
            name="pw_rental"
            placeholder="pw_rental"
            required
            onChange={pwRentalChange}
          />
        </div>
        <div className="field-line">
          <label htmlFor="birthday" className="create-input-label">
            생일
          </label>
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
      </div>
      <input type="submit" value="가입" onClick={submit} />
    </div>
  );
}

export default SignUp;
