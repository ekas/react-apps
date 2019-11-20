import React, { Component } from "react";

export default class CalendarDay extends Component {
  render() {
    const {
      day,
      day: { date, isCurrentMonth, isToday, number },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month")
          // (date.isSame(selected) ? " selected" : "")
        }
        // onClick={() => select(day)}
      >
        <span className="day-text">{number}</span>
        <span className="eventContainer">
          <span className="event">
            <span className="eventType">L</span>
            <span className="eventText">Leap Ontario</span>
          </span>
        </span>
        <span className="eventContainer">
          <span className="event">
            <span className="eventType">L</span>
            <span className="eventText">Leap Ontario s</span>
          </span>
        </span>
      </span>
    );
  }
}
