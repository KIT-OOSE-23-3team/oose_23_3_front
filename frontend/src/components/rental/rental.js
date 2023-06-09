import axios from "axios";
import { useEffect, useState } from "react";

function Rental() {
  const [bicycleNum, setBicycleNum] = useState();
  const [office, setOffice] = useState();
  const [bicycleOptions, setBicycleOptions] = useState([]);
  const [officeOptions, setOfficeOptions] = useState([]);

  const getOffice = () => {
    axios.get("http://localhost:8000/rentalOfficeFindAll").then((r) => {
      console.log(r);
      setOfficeOptions(r.data);
    });
  };

  const getBicycle = () => {
    axios.get(`http://localhost:8000/bicycleSearch/${office}`).then((r) => {
      console.log(r);
      setBicycleOptions(r.data);
    });
  };

  useEffect(() => {
    getOffice();
  }, []);

  useEffect(() => {
    if (office) {
      getBicycle();
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
              <option key={option}>{option}</option>
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
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <input type="submit" value="대여" onClick={rental}></input>
    </div>
  );
}

export default Rental;
