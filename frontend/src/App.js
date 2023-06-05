import React from 'react';
import NavbarTop from './components/NavbarTop';
import NavbarLeft from './components/NavbarLeft';
import RentalOfficeCreateScreen from './components/management/RentalOfficeCreateScreen';
import BicycleCreate from './components/management/BicycleCreate';
import './NavborTop.css';
import './NavborLeft.css';
import './Create.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <div className="main-content">
        <NavbarLeft />
        <BicycleCreate/>
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
