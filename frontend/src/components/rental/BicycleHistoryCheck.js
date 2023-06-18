import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BicycleHistoryCheck.css";
import BicycleHistoryData from "./../../dummyData/BicycleHistory.json";
import NavbarTopRental from "./nav/NavbarTopRental";
import NavbarLeftRentalHistory from "./nav/NavbarLeftRentalHistory";

function BicycleHistoryCheck() {
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);
  const [bicycleList, setBicycleList] = useState([]);
  const [history, setHistory] = useState([]);

  const getBicycleHistory = () => {
    axios
      .get(`http://119.56.139.127:5050/bicycleHistoryCheck`, {
        withCredentials: true,
      })
      .then((r) => {
        setHistory(r.data);
      });
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
    <div className="App">
      <NavbarTopRental />
      <div className="main-content">
        <NavbarLeftRentalHistory />
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
                  <option key={option.historyId} value={option.historyId}>
                    {option.bicycleNumber}
                  </option>
                ))}
              </select>
            </div>
            <div className="bicycleHistoryCheck-historyArea">
              <div className="bicycleHistoryCheck-historyContainer">
                <div className="bicycleHistoryCheck-historyContent">
                  {selectedBicycleHistory && (
                    <div className="bicycleHistoryCheck-historyElement">
                      <div className="bicycleHistoryCheck-line">
                        <div className="bicycleHistoryCheck-label">
                          자전거 번호
                        </div>
                        <label>
                          {selectedBicycleHistory.bicycle.bicycleNumber}
                        </label>

                        <div className="bicycleHistoryCheck-label">
                          결제 금액
                        </div>
                        <label>
                          {selectedBicycleHistory.rentalPayment}
                        </label>
                      </div>

                      <div className="bicycleHistoryCheck-line">
                        <div className="bicycleHistoryCheck-label">
                          이용 시간
                        </div>
                        <label>{`${selectedBicycleHistory.rentalTime} ~ ${selectedBicycleHistory.returnTime}`}</label>
                      </div>

                      <div className="bicycleHistoryCheck-line">
                        <div className="bicycleHistoryCheck-label">
                          대여소
                        </div>
                        <label>
                          {selectedBicycleHistory.rentalOffice.rentalOfficeName}
                        </label>

                        <div className="bicycleHistoryCheck-label">
                          반납 대여소
                        </div>
                        <label>
                          {selectedBicycleHistory.returnOffice && selectedBicycleHistory.returnOffice.rentalOfficeName}
                        </label>
                      </div>

                      <div className="bicycleHistoryCheck-line">
                        <div className="bicycleHistoryCheck-label">
                          주행거리
                        </div>
                        <label>{selectedBicycleHistory.mileage}</label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <span className="bicycleHistoryCheck-okBtn">확인</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BicycleHistoryCheck;
