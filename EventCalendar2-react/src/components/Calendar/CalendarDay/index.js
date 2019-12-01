import React, { Component } from "react";

import data from "../../../data/schema.json";

export default class CalendarDay extends Component {

  render() {
    const {
      day: { date, isCurrentMonth, isToday, number }
    } = this.props;

    let eventsForDay;

    if(data[date.year()]){
      if(data[date.year()][date.month()+1]){
        if(data[date.year()][date.month()+1][date.date()]){
          eventsForDay = data[date.year()][date.month()+1][date.date()];
        }
      }
    }

    return (
      <span
        className={
          "day" +
          (isToday ? " today" : "") +
          (isCurrentMonth ? "" : " different-month")
        }
      >
        <span className="day-text">{number}</span>
        {eventsForDay !== undefined ?  eventsForDay.length >= 1 ? <span className="eventDot" />: "" : ""}
      </span>
    );
  }
}
