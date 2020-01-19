import React from "react";

export default class UserList extends React.Component {
  render() {
    const { users, currentUserIndex, userSelectionCallBack } = this.props;
    const userList = users.map((user, index) => {
      const { name, popularity, color } = user;
      return (
        <div key={index.toString()} className={`name g${popularity} ${color !== undefined ? color : ''} 
        ${currentUserIndex === index ? 'active' : ''}`} onClick={() => userSelectionCallBack(index)}>
          {name}
        </div>
      )
    })
    return (
      <>
        {userList}
      </>
    )
  }
}