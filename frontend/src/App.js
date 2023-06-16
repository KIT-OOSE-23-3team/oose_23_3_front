import React from 'react';
import {Routes, Route} from "react-router-dom";
import { useCookies } from 'react-cookie';
import NavbarTop from './components/NavbarTop';
import NavbarLeft from './components/NavbarLeft';
import RentalOfficeCreateScreen from './components/management/RentalOfficeCreateScreen';
import BicycleCreate from './components/management/BicycleCreate';
import './NavborTop.css';
import './NavborLeft.css';
import './Create.css';
import './App.css';
import SignUp from './components/member/signUp';
import MemberSearch from './components/member/memberSearch';
import Login from "./components/member/login";
import Rental from "./components/rental/rental";
import BicycleHistoryCheck from "./components/rental/BicycleHistoryCheck";
import CustomerSupportLookuppage from "./components/notice/CustomerSupportLookuppage";
import ManagerSupportFormpage from "./components/notice/ManagerSupportFormpage";
import DateHistoryCheck from "./components/history/DateHistoryCheck";
import PaymentDetailCheck from "./components/history/PaymentDetailCheck";
import UserHistoryCheck from "./components/history/UserHistoryCheck";
import PaymentDummyInsert from './components/dummyInsert/PaymentDummyInsert';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/User/UserInfo" element={<MemberSearch />}/>
      <Route path="/Rental/Rental" element={<Rental />} />
      <Route path="/Rental/History" element={<BicycleHistoryCheck />} />
      <Route path="/History/PaymentHistory" element={<PaymentDetailCheck />} />
      <Route path="/History/UserHistory" element={<UserHistoryCheck />} />
      <Route path="/History/DateHistory" element={<DateHistoryCheck />} />
      <Route path="/Notice/Submit" element={<ManagerSupportFormpage />} />
      <Route path="/Notice/View" element={<CustomerSupportLookuppage />} />
      <Route path="/Management/Bicycle/Submit" element={<BicycleCreate />} />
      <Route path="/Management/RentalOffice/Submit" element={<RentalOfficeCreateScreen />} />
      <Route path="/Dummy/Payment" element={<PaymentDummyInsert/>} />
    </Routes>
  );
}

export default App;