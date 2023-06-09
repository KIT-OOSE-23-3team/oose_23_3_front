import React from 'react';
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
import CustomerSupportLookuppage from "./components/noticecontrol/CustomerSupportLookuppage";
import ManagerSupportFormpage from "./components/noticecontrol/ManagerSupportFormpage";
import DateHistoryCheck from "./components/history/DateHistoryCheck";
import HistoryBoundary from "./components/history/HistoryBoundary";
import PaymentDetailCheck from "./components/history/PaymentDetailCheck";
import UserCheck from "./components/history/UserCheck";
import UserHistoryCheck from "./components/history/UserHistoryCheck";
import NavbarSignUpTop from "./NavbarSignUpTop";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <div className="main-content">
        <NavbarLeft />
          <SignUp/>
      </div>
    </div>
  );
}

export default App;


//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
