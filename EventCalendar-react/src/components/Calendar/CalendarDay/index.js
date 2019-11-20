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
        onClick={() => select(day)}
      >
        <span className="day-text">{number}</span>
      </span>
    );
  }
}
