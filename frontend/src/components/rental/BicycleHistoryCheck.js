import axios from "axios";
import { useEffect, useState } from "react";
import "./BicycleHistoryCheck.css";
import BicycleHistoryData from "./../../dummyData/BicycleHistory.json";

function BicycleHistoryCheck() {
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);
  const [bicycleList, setBicycleList] = useState([]);
  const [history, setHistory] = useState([]);

  const getBicycleHistory = () => {
    axios
      .get(`http://localhost:8000/bicycleHistoryCheck`, { withCredentials: true })
      .then((r) => {
          console.log(r.data);
        setHistory(r.data);
      });
    // setHistory(BicycleHistoryData);
  };

  useEffect(() => {
    getBicycleHistory();
  }, []);

  useEffect(() => {
    const setList = () => {
      const updatedList = history.map((item) => ({
        bicycleNumber: item.bicycle.bicycleNumber,
        historyId: item.historyId,
      }));
      setBicycleList(updatedList);
    };
    setList();
  }, [history]);

  const handleBicycleListChange = (e) => {
    const selectedNumber = e.target.value;
    setSelectedHistoryId(Number(selectedNumber));
  };

  const selectedBicycleHistory = history.find(
    (item) => item.historyId === selectedHistoryId
  );

  return (
    <div className="bicycleHistoryCheck-page">
      <div className="bicycleHistoryCheck-content">
        <div className="bicycleHistoryCheck-bicycleArea">
          <h1>자전거 번호 목록</h1>
          <select
            className="bicycleList"
            multiple
            onChange={handleBicycleListChange}
          >
            {bicycleList.map((option) => (
              <option key={option.historyId} value={option.historyId}>{option.bicycleNumber}</option>
            ))}
          </select>
        </div>
        <div className="bicycleHistoryCheck-historyArea">
          <h1>자전거 이용내역 조회</h1>
          <div className="bicycleHistoryCheck-historyContainer">
            <div className="bicycleHistoryCheck-historyTitle">
              <label>자전거 번호</label>
              <label>결제 금액</label>
              <label>이용 시간</label>
              <label>대여소</label>
              <label>반납 대여소</label>
              <label>주행거리</label>
            </div>

            <div className="bicycleHistoryCheck-historyContent">
              {selectedBicycleHistory && (
                <div className="bicycleHistoryCheck-historyElement">
                  <label>{selectedBicycleHistory.bicycle.bicycleNumber}</label>
                  <label>{selectedBicycleHistory.rentalPayment}</label>
                  <label>{selectedBicycleHistory.rentalTime}</label>
                  <label>{selectedBicycleHistory.rentalOffice.rentalOfficeName}</label>
                  <label>{selectedBicycleHistory.returnOffice}</label>
                  <label>{selectedBicycleHistory.mileage}</label>
                </div>
              )}
            </div>
          </div>
          <span className="bicycleHistoryCheck-okBtn">확인</span>
        </div>
      </div>
    </div>
  );
}

export default BicycleHistoryCheck;
