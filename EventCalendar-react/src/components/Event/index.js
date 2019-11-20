import React, { Component } from "react";

import "./event.scss"

export default class Event extends Component {
  render() {
    const {
      type,
      title,
      faded,
      isPremium,
      eventobj
    } = this.props;

    // const {} = event;
    return (
      <span className={`event ${type} ${faded ? 'faded' : ''}`}>
        {isPremium ? <span className="eventPremium"></span> : ""}
        <span className="eventType">{type.charAt(0)}</span>
        <span className="eventText">{title}</span>
      </span>
    );
  }
}