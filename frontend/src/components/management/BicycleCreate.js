// BicycleCreate.js

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function BicycleCreate() {
  const [bicycleNumber, setBicycleNumber] = useState('');
  const [isBroken, setIsBroken] = useState('');

  const bicycleNumberChange = (e) => {
    setBicycleNumber(e.target.value);
  };

  const isBrokenChange = (e) => {
    setIsBroken(e.target.value);
  };

  const submit = () => {
    const bicycle = new FormData();
    bicycle.append('bicycleNumber', bicycleNumber);
    bicycle.append('isBroken', isBroken);

    axios.post('http://localhost:8000/bicycleinsert', bicycle).then((r) => {
      console.log(r);
    });
  };
  const handleSubmit = () => {
    if (bicycleNumber && isBroken) {
      submit();
    } else {
      alert("모든 값을 입력하시고 자전거 등록 버튼을 눌러주세요.");
    }
  };
  return (
    <div className="create-container">
      <h1>자전거 등록</h1>
      <div className="input-container">
        <label htmlFor="bicycleNumber" className="create-input-label">
          자전거 번호
        </label>
        <input
          type="text"
          value={bicycleNumber}
          id="bicycleNumber"
          name="bicycleNumber"
          placeholder="자전거 번호를 입력해주세요."
          onChange={bicycleNumberChange}
          className="create-input"
        ></input>
      </div>

      <div className="input-container">
        <label htmlFor="bicycleState" className="bicycle-create-input-label">
          자전거 상태
        </label>
        <select
          value={isBroken}
          id="bicycleState"
          name="bicycleState"
          onChange={isBrokenChange}
          className="bicycle-create-select"
        >
          <option value="normal">운영</option>
          <option value="broken">도난</option>
          <option value="rented">고장</option>
          <option value="disposed">폐기</option>
        </select>
      </div>
      <input type="submit" value="자전거 등록" onClick={handleSubmit} className="create-submit"/>
    </div>


  );
}
export default BicycleCreate;
