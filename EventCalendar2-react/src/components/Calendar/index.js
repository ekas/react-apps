import React, { Component } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CalendarDayNames from "./CalendarDayNames";
import CalendarWeek from "./CalendarWeek";

import '../../fonts/Helvetica.ttf';
import '../../fonts/HelveticaBold.ttf';

import "./calendar.scss";

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
      selected: moment().startOf("day")
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, "month")
    });
  }

  next() {
    const { month } = this.state;

    this.setState({
      month: month.add(1, "month")
    });
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month
      .clone()
      .startOf("month")
      .add("w" - 1)
      .day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const { selected, month } = this.state;

    while (!done) {
      weeks.push(
        <CalendarWeek
          key={Math.random()}
          date={date.clone()}
          month={month}
          selected={selected}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  renderMonthLabel() {
    const { month } = this.state;

    return <span className="month-label">{month.format("MMMM YYYY")}</span>;
  }

  render() {
    return (
      <div className="calendar">
        <header className="calendar-header">
          <div className="month-display calendar-row">
            <FontAwesomeIcon
              className="arrow"
              icon={faAngleLeft}
              onClick={this.previous}
            />
            {this.renderMonthLabel()}
            <FontAwesomeIcon
              className="arrow"
              icon={faAngleRight}
              onClick={this.next}
            />
          </div>
          <CalendarDayNames />
        </header>
        {this.renderWeeks()}
      </div>
    );
  }
}
