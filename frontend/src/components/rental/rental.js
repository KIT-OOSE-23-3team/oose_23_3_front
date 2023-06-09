import axios from "axios";
import { useEffect, useState } from "react";

function Rental() {
  const [bicycleNum, setBicycleNum] = useState();
  const [office, setOffice] = useState();
  const [bicycleOptions, setBicycleOptions] = useState([]);
  const [officeOptions, setOfficeOptions] = useState([]);

  const init = () => {
    axios.get("http://localhost:8000/rentalOfficeFindAll").then((r) => {
      setOfficeOptions(r.data);

      if (r.data.length) {
        setOffice(r.data[0].rentalOfficeNum);
        getBicycle(r.data[0].rentalOfficeNum);
      }
    });
  };

  const getBicycle = (office) => {
    axios.get(`http://localhost:8000/bicycleSearch/${office}`).then((r) => {
      setBicycleOptions(r.data);
      if (r.data.length) {
        setBicycleNum(r.data[0].bicycleNumber);
      } else {
        setBicycleNum(null);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (office) {
      getBicycle(office);
    }
  }, [office]);

  const rental = () => {
    axios.get(`http://localhost:8000/bicycleRental/${bicycleNum}`, { withCredentials: true }).then((r) => {
      console.log(r);

      if (!r) {
        alert("대여가 정상적으로 되지 않았습니다!");
      }
    });
  };

  const dummyInsert = () => {
    const historyCheck = {
        bicycle: {
          bicycleNumber: bicycleNum
        },
      rentalOffice: {
        rentalOfficeNum: office
      }
    }

    axios.post("http://localhost:8000/historyCheckDummy", historyCheck, {withCredentials: true}).then();
  }

  return (
    <div className="create-container">
      <h1>자전거 대여</h1>
      <div className="input-container">{/* <mapAPI /> */}</div>
      <div className="input-container">
        <label htmlFor="bicycleNum" className="create-input-label">
          자전거 번호
        </label>
        <div className="inputBox">
          <select
            className="bicycleNum"
            value={bicycleNum}
            onChange={(e) => setBicycleNum(e.target.value)}
          >
            {bicycleOptions.map((option) => (
              <option value={option.bicycleNumber}>{option.bicycleNumber}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="office" className="create-input-label">
          대여소
        </label>
        <div className="inputBox">
          <select
            className="office"
            value={office}
            onChange={(e) => setOffice(e.target.value)}
          >
            {officeOptions.map((option) => (
              <option value={option.rentalOfficeNum}>{option.rentalOfficeName}</option>
            ))}
          </select>
        </div>
      </div>
      <input type="submit" value="대여" onClick={rental}></input>
      <input type="submit" value="더미 이용내역 삽입" onClick={dummyInsert}></input>
    </div>
  );
}

export default Rental;
