import axios from "axios";
import { useEffect, useState } from "react";
import "./BicycleHistoryCheck.css"

function BicycleHistoryCheck() {
  const [bicycleNum, setBicycleNum] = useState();
  const [bicycleList, setBicycleList] = useState([]);
  const [history, setHistory] = useState([]);

  var userId = "";
  const getBicycleHistory = () => {
    axios
      .get(`http://localhost:8000/bicycleHistoryCheck`, { withCredentials: true })
      .then((r) => {
          console.log(r.data);
        setHistory(r.data);
        setList(r.data);
      });
  };

  const setList = (history) => {
    const updatedList = history.map((item) => item.bicycle.bicycleNumber);
    setBicycleList(updatedList);
  };

  useEffect(() => {
    getBicycleHistory();
  }, []);

  const handleBicycleListChange = (e) => {
    setBicycleNum(e.target.value);
    getBicycleHistory(bicycleNum);
  };

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
                {bicycleList.map((option) => {
                    <option value={option}>{option}</option>;
                })}
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
                        {/* 아래 div를 map을 돌려서 동적 생성 */}
                        <div className="bicycleHistoryCheck-historyElement">
                            <label>{/*{history.bicycleNumber}*/ 1}</label>
                            <label>{/*{history.amount}*/} 10000</label>
                            <label>{/*{history.time}*/} 14:37</label>
                            <label>{/*{history.rentalOffice}*/} 성민대여소</label>
                            <label>{/*{history.returnOffice}*/} 상헌대여소</label>
                            <label>{/*{history.mileage}*/} 3.2km</label>
                        </div>
                    </div>
                </div>
                <span className="bicycleHistoryCheck-okBtn">확인</span>
            </div>
        </div>
    </div>
  );
}

export default BicycleHistoryCheck;
