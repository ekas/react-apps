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
            key={date}
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
      // day,
      day: { date, isCurrentMonth, isToday, number }
      // select,
      // selected
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
          {eventsForDay !== undefined ? this.getEvents(eventsForDay, date, isCurrentMonth) : ""}
        </span>
      </span>
    );
  }
}
