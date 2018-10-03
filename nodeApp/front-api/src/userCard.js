import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';


class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const API = 'http://localhost:3003/users';
    fetch(API).then(res => {
      // console.log(res)
      return res.json();
    })
    .then(data => {
      console.log(data)
      return this.setState({
        users: data
      });
    })
  }

  render() {
    const {users} = this.state;
    return(
      <div>
        {users.map((user, index) =>
          <ul key={index}>
            <li>{user.firstname} {user.lastname}</li>
          </ul>
        )}
      </div>
    );
  }
}

export default UserCard;
