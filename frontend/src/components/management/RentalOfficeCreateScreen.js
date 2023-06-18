import React from "react";
import axios from "axios";
import { useState } from "react";
import NavbarTopManagement from "./nav/NavbarTopManagement";
import NavbarLeftRentalOfficeCreate from "./nav/NavbarLeftRentalOfficeCreate";

function RentalOfficeCreateScreen() {
  const [rentalOfficeNum, setRentalOfficeNum] = useState("");
  const [rentalOfficeName, setRentalOfficeName] = useState("");
  const [maximumBicycle, setMaximumBicycle] = useState("");

  const rentalOfficeNumChange = (e) => {
    setRentalOfficeNum(e.target.value);
  };

  const rentalOfficeNameChange = (e) => {
    setRentalOfficeName(e.target.value);
  };

  const maximumBicycleChange = (e) => {
    setMaximumBicycle(e.target.value);
  };

  const submit = () => {
    const rentalOffice = {
      rentalOfficeNum: rentalOfficeNum,
      rentalOfficeName: rentalOfficeName,
      maximumBicycle: maximumBicycle,
    };

    axios
      .post("http://119.56.139.127:5050/rentalOfficeInsert", rentalOffice)
      .then((res) => {
        if (res.data === "success") {
          alert("대여소가 성공적으로 등록되었습니다.");
        } else if (res.data === "id") {
          alert("해당 대여소 ID는 이미 존재합니다.");
        }
      });
  };

  const handleSubmit = () => {
    if (rentalOfficeNum && rentalOfficeName && maximumBicycle) {
      submit();
    } else {
      alert("모든 값을 입력하시고, 등록 버튼을 눌러주세요.");
    }
  };

  return (
    <div className="App">
      <NavbarTopManagement />
      <div className="main-content">
        <NavbarLeftRentalOfficeCreate />
        <div className="create-container">
          <h2> 대여소 등록 </h2>
          <div className="input-container">
            <label htmlFor="rentalOfficeNum" className="create-input-label">
              대여소번호
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

          <div className="input-container">
            <label htmlFor="rentalOfficeName" className="create-input-label">
              대여소이름
            </label>
            <input
              type="text"
              value={rentalOfficeName}
              id="rentalOfficeName"
              name="rentalOfficeName"
              placeholder="대여소 이름을 입력해주세요."
              onChange={rentalOfficeNameChange}
              className="create-input"
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="maximumBicycle" className="create-input-label">
              최대 자전거 수용 수
            </label>
            <input
              type="text"
              value={maximumBicycle}
              id="maximumBicycle"
              name="maximumBicycle"
              placeholder="최대 자전거 수용 수를 입력해주세요."
              onChange={maximumBicycleChange}
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

export default RentalOfficeCreateScreen;
