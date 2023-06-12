import React, { useEffect, useState } from "react";
import "./UserHistoryCheck.css";
import axios from "axios";

// 가입자별 이용내역 조회
const UserHistoryCheck = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [history, setHistory] = useState([]);

  const getMemberUseHistory = () => {
    axios.get(`http://localhost:8000/historyCheck`).then((r) => {
      console.log(r.data);
      setHistory(r.data);
    });
  };

  useEffect(() => {
    getMemberUseHistory();
  }, []);

  useEffect(() => {
    const updatedList = history.map((item) => ({
      memberNumber: item.member.memberNumber,
      historyId: item.historyId,
    }));
    setMemberList(updatedList);
  }, [history]);

  const handleMemberListChange = (e) => {
    const selectedNumber = e.target.value;
    setSelectedMemberId(Number(selectedNumber));
  };

  const selectedMemberHistory = history.find(
    (item) => item.historyId === selectedMemberId
  );

  return (
    <div className="userHistoryCheck-page">
      <div className="userHistoryCheck-content">
        <div className="userHistoryCheck-bicycleArea">
          <h1>회원 번호 목록</h1>
          <select
            className="memberList"
            multiple
            onChange={handleMemberListChange}
          >
            {memberList.map((option) => (
              <option key={option.historyId} value={option.historyId}>
                {option.memberNumber}
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
              {selectedMemberHistory && (
                <div className="userHistoryCheck-historyElement">
                  <label>{selectedMemberId.bicycle.bicycleNumber}</label>
                  <label>{selectedMemberId.rentalOfficeName}</label>
                  <label>{selectedMemberId.rentalTime}</label>
                  <label>{selectedMemberId.returnTime}</label>
                  <label>{selectedMemberId.mileage}</label>
                  <label>{selectedMemberId.travelTime}</label>
                </div>
              )}
            </div>
          </div>
          <span className="userHistoryCheck-okBtn">확인</span>
        </div>
      </div>
    </div>
  );
};
export default UserHistoryCheck;
