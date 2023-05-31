import React from 'react';
import NavbarTop from './components/NavbarTop';
import NavbarLeft from './components/NavbarLeft';
import RentalOfficeCreateScreen from './components/management/RentalOfficeCreateScreen';
//import BicycleCreate from './components/management/BicycleCreate';
/*import BicycleRead from './components/management/BicycleRead';*/
/*import RentalOfficeRead from './components/management/RentalOfficeRead';*/
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarTop /> {/* 상단 메뉴바 태그 */}
      <div className="main-content">
        {/* 좌측 메뉴바 태그 */}
        <NavbarLeft />
        <RentalOfficeCreateScreen/>
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
