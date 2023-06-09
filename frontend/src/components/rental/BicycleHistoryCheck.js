import axios from "axios";
import { useEffect, useState } from "react";

function BicycleHistoryCheck() {
  const [bicycleNum, setBicycleNum] = useState();
  const [bicycleList, setBicycleList] = useState([]);
  const [history, setHistory] = useState([]);

  var userId = "";
  const getBicycleHistory = () => {
    axios
      .get(`http://localhost:8000/bicycleHistoryCheck/${userId}`, { withCredentials: true })
      .then((r) => {
        console.log(r);
        setHistory(r.data);
      });
  };

  const setList = () => {
    const updatedList = history.map((item) => item.bicycleNum);
    setBicycleList(updatedList);
  };

  useEffect(() => {
    getBicycleHistory();
    setList();
  }, []);

  const handleBicycleListChange = (e) => {
    setBicycleNum(e.target.value);
    getBicycleHistory(bicycleNum);
  };

  return (
    <div className="create-container">
      <div className="input-container">
        <label htmlFor="bicycleList" className="create-input-label">
          자전거 번호 목록
        </label>
        <select
          className="bicycleList"
          multiple
          onChange={handleBicycleListChange}
        >
          {bicycleList.map((option) => {
            <option key={option}>{option}</option>;
          })}
        </select>
      </div>
      <div className="input-container">
        <label className="create-input-label">자전거 번호</label>
        <label>{history.bicycleNum}</label>
        <label className="create-input-label">결제 금액</label>
        <label>{history.amount}</label>
      </div>
      <div className="input-container">
        <label className="create-input-label">이용 시간</label>
        <label>{history.time}</label>
      </div>
      <div className="input-container">
        <label className="create-input-label">대여소</label>
        <label>{history.rentalOffice}</label>
        <label className="create-input-label">반납 대여소</label>
        <label>{history.returnOffice}</label>
      </div>
      <div className="input-container">
        <label className="create-input-label">주행거리</label>
        <label>{history.mileage}</label>
      </div>
      <input type="button" value="확인"></input>
    </div>
  );
}

export default BicycleHistoryCheck;
