import axios from "axios";
import { useState } from "react";

function PaymentDummyInsert() {
  const [price, setPrice] = useState("");
  const [payState, setPayState] = useState("승인");
  const [payMethod, setPayMethod] = useState("교통카드");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStateChange = (e) => {
    setPayState(e.target.value);
  };

  const handleMethodChange = (e) => {
    setPayMethod(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/postPaymentData", {
        price,
        payState,
        payMethod,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="금액"
        value={price}
        onChange={handlePriceChange}
      />
      <select value={payState} onChange={handleStateChange}>
        <option>승인</option>
        <option>거부</option>
        <option>대기</option>
        <option>환불</option>
      </select>
      <select value={payMethod} onChange={handleMethodChange}>
        <option>교통카드</option>
        <option>신용카드</option>
        <option>휴대전화</option>
      </select>
      <input type="button" onClick={handleSubmit} value="전송" />
    </div>
  );
}

export default PaymentDummyInsert;
