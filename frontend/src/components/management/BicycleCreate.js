// BicycleCreate.js

import React from "react";
import axios from "axios";
import { useState } from "react";
import NavbarTopManagement from "./nav/NavbarTopManagement";
import NavbarLeftBicycleCreate from "./nav/NavbarLeftBicycleCreate";

function BicycleCreate() {
  const [bicycleNumber, setBicycleNumber] = useState("");
  const [isBroken, setIsBroken] = useState("");
  const [rentalOfficeNum, setRentalOfficeNum] = useState("");

  const bicycleNumberChange = (e) => {
    setBicycleNumber(e.target.value);
  };

  const isBrokenChange = (e) => {
    setIsBroken(e.target.value);
  };

  const rentalOfficeNumChange = (e) => {
    setRentalOfficeNum(e.target.value);
  };
  const submit = () => {
    const bicycle = {
      bicycleNumber: bicycleNumber,
      isBroken: false,
      isRented: false,
      rentalOffice: {
        rentalOfficeNum: rentalOfficeNum,
      },
      //TODO 대여소 번호를 같이 넘겨줘야함.
      //대여소 번호를 같이 넘겨 줘야 한다는 게 이렇게 하라는 게 맞을까요...?
    };

    axios.post("http://localhost:8000/bicycleInsert", bicycle).then((r) => {
      console.log(r);
    });
  };
  const handleSubmit = () => {
    if (bicycleNumber && rentalOfficeNum) {
      submit();
    } else {
      alert("모든 값을 입력하시고 등록 버튼을 눌러주세요.");
    }
  };
  return (
    <div className="App">
      <NavbarTopManagement />
      <div className="main-content">
        <NavbarLeftBicycleCreate />
        <div className="create-container">
          <h1>자전거 등록</h1>
          <div className="input-container">
            <label htmlFor="bicycleNumber" className="create-input-label">
              자전거 번호
            </label>
            <input
              type="text"
              value={bicycleNumber}
              id="bicycleNumber"
              name="bicycleNumber"
              placeholder="자전거 번호를 입력해주세요."
              onChange={bicycleNumberChange}
              className="create-input"
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="bicycleNumber" className="create-input-label">
              대여소 번호
            </label>
            <input
              type="text"
              value={rentalOfficeNum}
              id="rentalOfficeNum"
              name="rentalOfficeNum"
              placeholder="대여소 번호를 입력해주세요."
              onChange={rentalOfficeNumChange}
              className="create-input"
            ></input>
          </div>
          <input
            type="submit"
            value="등록"
            onClick={handleSubmit}
            className="create-submit"
          />
        </div>
      </div>
    </div>
  );
}
export default BicycleCreate;
