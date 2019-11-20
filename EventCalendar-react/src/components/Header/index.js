import React, { Component } from "react";
import "./header.scss";
import logo from "../../logo.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>
          <img src={logo} alt="Logo" />
        </span>
        <span className="container-nav">
          <span>Jobs</span>
          <span className="active">Events</span>
          <span>Jobs Pipeline</span>
          <span>Slack</span>
          <span>Referral</span>
          <span>More</span>
        </span>
        <span className="profile">P</span>
      </div>
    );
  }
}
