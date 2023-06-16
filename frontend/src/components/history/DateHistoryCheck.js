import React, { useState } from "react";
import "./DateHistoryCheck.css";
import axios from "axios";
import NavbarTopHistory from "./nav/NavbarTopHistory";
import NavbarLeftDateHistory from "./nav/NavbarLeftDateHistory";

// 기간별 이용내역 조회
const DateHistoryCheck = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [history, setHistory] = useState([]);

  const getDateHistory = () => {
    axios
      .get(`http://localhost:8000/historyCheck/${startDate}/${endDate}`)
      .then((r) => {
        console.log(r.data);
        setHistory(r.data);
      });
  };

  const handleSearch = (e) => {
    getDateHistory();
  };

  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="App">
      <NavbarTopHistory />
      <div className="main-content">
        <NavbarLeftDateHistory />
        <div className="DateHistoryCheck-page">
          <div className="DateHistoryCheck-content">
            <div className="DateHistoryCheck-dateArea">
              <h1>기간 설정</h1>
              <div className="DateHistoryCheck-dateContainer">
                <div className="DateHistoryCheck-dateLine">
                  <label>시작일</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleChangeStartDate}
                  />
                </div>
                <div className="DateHistoryCheck-dateLine">
                  <label>종료일</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleChangeEndDate}
                  />
                </div>
                <div
                  className="DateHistoryCheck-searchBtn"
                  onClick={handleSearch}
                >
                  조회
                </div>
              </div>
            </div>
            <div className="DateHistoryCheck-historyArea">
              <h1>기간별 이용내역 조회</h1>
              <div className="DateHistoryCheck-historyContainer">
                <div className="DateHistoryCheck-historyTitle">
                  <label>회원</label>
                  <label>대여 일시</label>
                  <label>반납 일시</label>
                  <label>대여소명</label>
                  <label>자전거 번호</label>
                  <label>주행시간</label>
                </div>

                <div className="DateHistoryCheck-historyContent">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="DateHistoryCheck-historyElement"
                    >
                      <label>{item.member.identification}</label>
                      <label>
                        {new Date(item.rentalTime).toLocaleString()}
                      </label>
                      <label>
                        {new Date(item.returnTime).toLocaleString()}
                      </label>
                      <label>{item.rentalOffice.rentalOfficeName}</label>
                      <label>{item.bicycle.bicycleNumber}</label>
                      <label>{item.travelTime}</label>
                    </div>
                  ))}
                </div>
              </div>
              <span className="DateHistoryCheck-okBtn">확인</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DateHistoryCheck;
