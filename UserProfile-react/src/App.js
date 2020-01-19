import React from 'react';
import ProfileBlock from './ProfileBlock/ProfileBlock';
import UserList from './UserList/UserLIst';

import EmployeeData from "./data/EmployeeData.json";

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: EmployeeData.employees,
      currentUserIndex: 0
    }
  }

  handleUserSelection = (index) => {
    this.setState({
      currentUserIndex: index
    })
  }

  handlePopularityChange = (value) => {
    let { users, currentUserIndex } = this.state;
    users[currentUserIndex].popularity = value;
    this.setState({
      users: users
    })
  }

  render() {
    const { users, currentUserIndex } = this.state;
    return (
      <div className="App">
        <div className="header">
          <img src={process.env.PUBLIC_URL + '/assets/header_img.jpg'} className="header-bg" alt="header" />
        </div>
        <div className="content-container">
          <div className="site-bar">
            <div className="site-bar-logo-container">
              <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} className="logo" alt="header" />
            </div>
            <div className="site-bar-names">
              <UserList users={users} currentUserIndex={currentUserIndex} userSelectionCallBack={this.handleUserSelection}></UserList>
            </div>
          </div>
          <div className="profile-container">
            <ProfileBlock userDetails={users[currentUserIndex]} popularityChangeCallBack={this.handlePopularityChange}></ProfileBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default App;