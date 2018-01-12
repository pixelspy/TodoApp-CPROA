import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  };
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
        <Login />
        {users.map((user, index) =>
          <ul key={index}>
            <li>{user.firstname} {user.lastname}</li>
          </ul>
        )}
      </div>
    );
  }
}
export default App;
