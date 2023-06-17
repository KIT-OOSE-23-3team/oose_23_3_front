import axios from "axios";
import { useState } from "react";

/* 반환으로 넣는다고 선택했으면
이동거리(마일), 결제 방법, 결제한 대여비, 
이용 시간, 사용한 자전거 넘버, 
대여한 대여소, 반환한 대여소, 반환시간 */

function RentalHistoryDummyInsert() {
  const [mileage, setMileage] = useState("");
  const [payMethod, setPayMethod] = useState("교통카드");
  const [price, setPrice] = useState("");
  const [useTime, setUseTime] = useState("");
  const [bicycleNum, setBicycleNum] = useState("");
  const [rentalOffice, setRentalOffice] = useState("");
  const [returnOffice, setReturnOffice] = useState("");

  const handleMileageChange = (e) => {
    setMileage(e.target.value);
  };

  const handlePayMethodChange = (e) => {
    setPayMethod(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleUseTimeChange = (e) => {
    setUseTime(e.target.value);
  };

  const handleBicycleNumChange = (e) => {
    setBicycleNum(e.target.value);
  };

  const handleRentalOfficeChange = (e) => {
    setRentalOffice(e.target.value);
  };

  const handleReturnOfficeChange = (e) => {
    setReturnOffice(e.target.value);
  };

  const handleSubmit = () => {
    let paymentMethod;

    if (payMethod === "교통카드") {
      paymentMethod = "TRANSPORTATION_CARD";
    } else if (payMethod === "신용카드") {
      paymentMethod = "CELLPHONE";
    } else if (payMethod === "휴대전화") {
      paymentMethod = "CREDIT_CARD";
    }

    axios
      .post(
        "http://localhost:8000/historyCheckInsert",
        {
          bicycle: {
            bicycleNumber: bicycleNum,
          },
          mileage: mileage,
          paymentMethod: paymentMethod,
          rentalPayment: price,
          travelTime: useTime,
          rentalOffice: {
            rentalOfficeNum: rentalOffice,
          },
          returnOffice: {
              rentalOfficeNum: returnOffice,
          },
        },
        { withCredentials: true }
      )
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
        type="text"
        placeholder="거리"
        value={mileage}
        onChange={handleMileageChange}
      />
      <select value={payMethod} onChange={handlePayMethodChange}>
        <option>교통카드</option>
        <option>신용카드</option>
        <option>휴대전화</option>
      </select>
      <input
        type="number"
        placeholder="금액"
        value={price}
        onChange={handlePriceChange}
      />
      <input
        type="text"
        placeholder="이용시간"
        value={useTime}
        onChange={handleUseTimeChange}
      />
      <input
        type="text"
        placeholder="자전거번호"
        value={bicycleNum}
        onChange={handleBicycleNumChange}
      />
      <input
        type="text"
        placeholder="대여한 대여소"
        value={rentalOffice}
        onChange={handleRentalOfficeChange}
      />
      <input
        type="text"
        placeholder="반환 대여소"
        value={returnOffice}
        onChange={handleReturnOfficeChange}
      />

      <input type="button" onClick={handleSubmit} value="전송" />
    </div>
  );
}

export default RentalHistoryDummyInsert;
