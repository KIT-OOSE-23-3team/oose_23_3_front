import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const HistoryBoundary = () => {
  return (
    <div className="navbar-left">
      <ul>
        <li>가입자 이용 내역 조회</li>
        <li>기간별 이용 내역 조회</li>
        <li>결제 환불 이력 조회</li>
        <li>전체 회원 조회</li>
      </ul>
    </div>
  );
};

export default HistoryBoundary;
