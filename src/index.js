import React from "react";
import ReactDOM from "react-dom";

import TimerContainer from "./timerContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TimerContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
