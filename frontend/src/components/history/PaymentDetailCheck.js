import React, { useEffect, useState } from "react";
import "./PaymentDetailCheck.css";
import axios from "axios";
import NavbarTopHistory from "./nav/NavbarTopHistory";
import NavbarLeftPaymentHistory from "./nav/NavbarLeftPaymentHistory";

// 결제 환불 이력 조회
const PaymentDetailCheck = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const [history, setHistory] = useState([]);

  const getPaymentHistory = (id) => {
    axios.get(`https://119.56.139.127:5050/paymentDetailSearch/${id}`).then((r) => {
      setHistory(r.data);
    });
  };

  useEffect(() => {
    axios.get("https://119.56.139.127:5050/memberFindAll").then((r) => {
      setMemberList(r.data.filter((e) => e.identification !== "admin"));
    });
  }, []);

  const handleMemberListChange = (e) => {
    const selectedId = e.target.value;
    setSelectedMemberId(selectedId);
    getPaymentHistory(selectedId);
  };

  const selectedPaymentHistory = history.filter(
    (item) => item.member.identification === selectedMemberId
  );

  return (
    <div className="App">
      <NavbarTopHistory />
      <div className="main-content">
        <NavbarLeftPaymentHistory />
        <div className="paymentDetailCheck-page">
          <div className="paymentDetailCheck-content">
            <div className="paymentDetailCheck-bicycleArea">
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
                  {selectedPaymentHistory.map((e) => (
                    <div className="paymentDetailCheck-historyElement">
                      <label>{e.paymentDetailNumber}</label>
                      <label>{e.paymentAmount}</label>
                      <label>{new Date(e.paymentDate).toLocaleString()}</label>
                      <label>
                        {e.refundTime !== null
                          ? new Date(e.refundTime).toLocaleString()
                          : ""}
                      </label>
                      <label>{e.paymentStatus}</label>
                      <label>{e.paymentMethod}</label>
                    </div>
                  ))}
                </div>
              </div>
              <span className="paymentDetailCheck-okBtn">확인</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentDetailCheck;
