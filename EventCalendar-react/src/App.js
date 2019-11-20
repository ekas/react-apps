import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
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
            <div className="hr">
              <span className="calendar-marker">
                <span className="eventType leap">L - Leap</span>
              </span>
              <span className="calendar-marker">
                <span className="eventType vanhackathon">V - VanHackathon</span>
              </span>
              <span className="calendar-marker">
                <span className="eventType webinar">W - Webinar</span>
              </span>
              <span className="calendar-marker">
                <span className="eventType meetup">M - Meetup</span>
              </span>
              <span className="calendar-marker">
                <span className="eventType relocationsummit">R - Relocation Summit</span>
              </span>
              <span className="calendar-marker">
                <span className="eventType premium">P - Premium</span>
              </span>
            </div>
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
