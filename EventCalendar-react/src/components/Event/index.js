import React, { Component } from "react";
import Popover from 'react-tiny-popover'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import "./event.scss"

export default class Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      isPopoverOpen: false,
      eventDetails: ''
    }
  }

  openPopover = (eventObj) => {
    this.setState({
      isPopoverOpen: true,
      eventDetails: eventObj
    });
  }

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
      eventDetails: ''
    });
  }

  renderPopover = () => {
    return (
      <div className="popover-subcontainer">
        <span className={`popover-heading ${this.state.eventDetails.eventType}`}>
          <span className="eventType ">
            {this.state.eventDetails.eventType && this.state.eventDetails.eventType.charAt(0)}
          </span>
          <span className="eventText">{this.state.eventDetails.title}</span>
          <FontAwesomeIcon
            icon={faTimesCircle}
            onClick={this.closePopover}
            size="lg"
          />
        </span>
        <div className="popover-content">
          <span>{this.state.eventDetails.description}</span>
          <div className="popover-deadline">
            {this.state.eventDetails.deadline && this.state.eventDetails.deadline.length !==0 ? `Apply by ${this.state.eventDetails.deadline}`: ""}
          </div>
        </div>
        <div className="popover-actions">
          <span className="popover-apply">Apply</span>
        </div>
      </div>
    )
  }

  render() {
    const {
      type,
      title,
      faded,
      isPremium,
      eventObj
    } = this.props;
    
    return (
      <Popover
        isOpen={this.state.isPopoverOpen}
        position={'top'}
        containerClassName="popover-container"
        content={this.renderPopover()}
        onClickOutside={() => this.closePopover()}
      >
        <span className={`event ${type} ${faded ? 'faded' : ''}`} 
          onClick={() => this.openPopover(eventObj[0])}  
        >
          {isPremium ? <span className="eventPremium"></span> : ""}
          <span className="eventType">{type.charAt(0)}</span>
          <span className="eventText">{title}</span>
        </span>
      </Popover>
    );
  }
}