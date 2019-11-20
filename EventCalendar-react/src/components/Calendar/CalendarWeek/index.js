import React, { Component } from "react";
import CalendarDay from "../CalendarDay";

export default class CalendarWeek extends Component {
  render() {
    let days = [];
    let { date } = this.props;

    const { month, selected, select } = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      days.push(
        <CalendarDay
          key={Math.random()}
          day={day}
          selected={selected}
          select={select}
        />
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="calendar-row week" key={Math.random()}>
        {days}
      </div>
    );
  }
}
