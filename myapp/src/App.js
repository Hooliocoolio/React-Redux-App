import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Activity from './components/Activity';
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    <Activity type  activity />
    </div>
    );
}

export default App;
