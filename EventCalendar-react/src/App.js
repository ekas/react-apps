import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-heading">Events Calendar</div>
      <div className="content">
        <div className="filter-section">
          <div className="hr navbar">
            <span className="active">Calendar Filters</span>
            <span>Schedulers</span>
          </div>
        </div>
        <div className="calendar-pane">
          <div className="hr"></div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
