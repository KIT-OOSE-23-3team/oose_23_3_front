import React, { useEffect, useState } from "react";
import "./PaymentDetailCheck.css";
import axios from "axios";

// 결제 환불 이력 조회
const PaymentDetailCheck = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [history, setHistory] = useState([]);

  const getPaymentHistory = () => {
    axios.get(`http://localhost:8000/paymentDetailSearch`).then((r) => {
      console.log(r.data);
      setHistory(r.data);
    });
  };

  useEffect(() => {
    getPaymentHistory();
  }, []);

  useEffect(() => {
    const setList = () => {
      const updatedList = history.map((item) => ({
        memberNumber: item.member.memberNumber,
        historyId: item.historyId,
      }));
      setMemberList(updatedList);
    };
    setList();
  }, [history]);

  const handleMemberListChange = (e) => {
    const selectedNumber = e.target.value;
    setSelectedMemberId(Number(selectedNumber));
  };

  const selectedPaymentHistory = history.find(
    (item) => item.historyId === selectedMemberId
  );

  return (
    <div className="paymentDetailCheck-page">
      <div className="paymentDetailCheck-content">
        <div className="paymentDetailCheck-bicycleArea">
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
        <div className="paymentDetailCheck-historyArea">
          <h1>결제/환불 이력 조회</h1>
          <div className="paymentDetailCheck-historyContainer">
            <div className="paymentDetailCheck-historyTitle">
              <label>결제 번호</label>
              <label>결제 금액</label>
              <label>결제 일시</label>
              <label>환불 일시</label>
              <label>결제 상태</label>
              <label>결제 수단</label>
            </div>

            <div className="paymentDetailCheck-historyContent">
              {selectedPaymentHistory && (
                <div className="paymentDetailCheck-historyElement">
                  <label>{selectedMemberId.historyId}</label>
                  <label>{selectedMemberId.rentalPayment}</label>
                  <label>{selectedMemberId.paymentTime}</label>
                  <label>
                    {selectedMemberId.rentalOffice.refundTime}
                  </label>
                  <label>{selectedMemberId.paymentState}</label>
                  <label>{selectedMemberId.paymentMethod}</label>
                </div>
              )}
            </div>
          </div>
          <span className="paymentDetailCheck-okBtn">확인</span>
        </div>
      </div>
    </div>
  );
};
export default PaymentDetailCheck;
