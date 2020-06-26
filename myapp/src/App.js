import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Activity from './components/Activity';
  
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Activity Generator</h1>
      </header>
    <Activity activity type/>
    </div>
    );
}

export default App;
