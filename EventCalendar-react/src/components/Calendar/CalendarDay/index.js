import React, { Component } from "react";
import Event from "../../Event";

import data from "../../../data/schema.json";

export default class CalendarDay extends Component {
  getEvents = (events, date, isCurrentMonth) => {
    let eventArr = [];
    if (events !== undefined) {
      events.forEach(event => {
        eventArr.push(
          <Event
            key={Math.random()}
            eventObj={event}
            type={event.eventType}
            title={event.title}
            faded={isCurrentMonth ? false : true}
            isPremium={event.isPremium ? true : false}
          />
        );
      });
    }
    return eventArr;
  };

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
        <span className="eventContainer">
          {eventsForDay !== undefined ? this.getEvents(eventsForDay, date, isCurrentMonth) : ""}
        </span>
      </span>
    );
  }
}
