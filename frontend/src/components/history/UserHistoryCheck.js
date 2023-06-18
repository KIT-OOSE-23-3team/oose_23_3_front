import React, { useEffect, useState } from "react";
import "./UserHistoryCheck.css";
import axios from "axios";
import NavbarTopHistory from "./nav/NavbarTopHistory";
import NavbarLeftUserHistory from "./nav/NavbarLeftUserHistory";

// 가입자별 이용내역 조회
const UserHistoryCheck = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [history, setHistory] = useState([]);

  const getMemberUseHistory = (id) => {
    axios.get(`http://119.56.139.127:5050/historyCheck/${id}`).then((r) => {
      setHistory(r.data);
    });
  };

  useEffect(() => {
    axios.get("http://119.56.139.127:5050/memberFindAll").then((r) => {
      setMemberList(r.data.filter((e) => e.identification !== "admin"));
    });
  }, []);

  const handleMemberListChange = (e) => {
    const selectedId = e.target.value;
    getMemberUseHistory(selectedId);
    setSelectedMemberId(selectedId);
  };

  const selectedMemberHistory = history.filter(
    (item) => item.member.identification === selectedMemberId
  );

  return (
    <div className="App">
      <NavbarTopHistory />
      <div className="main-content">
        <NavbarLeftUserHistory />
        <div className="userHistoryCheck-page">
          <div className="userHistoryCheck-content">
            <div className="userHistoryCheck-bicycleArea">
              <h1>회원 목록</h1>
              <select
                className="memberList"
                multiple
                onChange={handleMemberListChange}
              >
                {memberList.map((option) => (
                  <option
                    key={option.identification}
                    value={option.identification}
                  >
                    {option.identification}
                  </option>
                ))}
              </select>
            </div>
            <div className="userHistoryCheck-historyArea">
              <h1>가입자별 이용내역 조회</h1>
              <div className="userHistoryCheck-historyContainer">
                <div className="userHistoryCheck-historyTitle">
                  <label>자전거 번호</label>
                  <label>대여소명</label>
                  <label>대여 일시</label>
                  <label>반납 일시</label>
                  <label>주행거리</label>
                  <label>주행시간</label>
                </div>

                <div className="userHistoryCheck-historyContent">
                  {selectedMemberHistory.map((e) => (
                    <div className="userHistoryCheck-historyElement">
                      <label>{e.bicycle.bicycleNumber}</label>
                      <label>{e.rentalOffice.rentalOfficeName}</label>
                      <label>{new Date(e.rentalTime).toLocaleString()}</label>
                      <label>
                        {e.returnTime !== null
                          ? new Date(e.returnTime).toLocaleString()
                          : ""}
                      </label>
                      <label>{e.mileage}</label>
                      <label>{e.travelTime}</label>
                    </div>
                  ))}
                </div>
              </div>
              <span className="userHistoryCheck-okBtn">확인</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserHistoryCheck;
