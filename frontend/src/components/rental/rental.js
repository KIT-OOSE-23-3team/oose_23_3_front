import axios from "axios";
import { useEffect, useState } from "react";
import "./rental.css"
import MapAPI from "./mapAPI";
import NavbarTopRental from "./nav/NavbarTopRental";
import NavbarLeftRental from "./nav/NavbarLeftRental";

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

    if(bicycleNum == undefined) {
      return(alert("필수 항목이 누락되었습니다."));
    }

    axios.get(`http://localhost:8000/bicycleRental/${bicycleNum}`, { withCredentials: true }).then((r) => {
      alert("대여 성공!");

      if (!r) {
        alert("대여가 정상적으로 되지 않았습니다!");
      }
    });
  };

  return (
    <div className="App">
      <NavbarTopRental />
      <div className="main-content">
      <NavbarLeftRental />
    <div className="rental-page">
      <h1>자전거 대여</h1>
      <div className="rental-content">
      <div className="mapAPI"><MapAPI /></div>
        <div className="rental-inputContainer">
      <div className="rental-input">
        <label htmlFor="bicycleNum" className="rental-inputTitle">
          자전거 번호
        </label>
        <div className="rental-inputBox">
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
      <div className="rental-input">
        <label htmlFor="office" className="rental-inputTitle">
          대여소
        </label>
        <div className="rental-inputBox">
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
        </div>
      </div>
      <div className="rental-btnArea">
      <span onClick={rental}>대여</span>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Rental;
