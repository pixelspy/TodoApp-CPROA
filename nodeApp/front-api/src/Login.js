import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
 } from 'react-router-dom';

const fakeAtuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },

  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pwd: ''};
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleChangePassword = (event) => {
    this.setState({pwd: event.target.value});
  }
  sendLogin = (event) => {
    let userId;
    let userProfil;
    event.preventDefault();
    console.log(this.state)
    // dès qu'on fetch on veut récupérer des données en JSON
    //donc res.json()
    fetch('http://localhost:3003/login', {
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then( res => {
      return res.json()})
      .then( json => {
        userId = json.user.id
        console.log(json)
        localStorage.setItem('token', json.token)
        console.log(userId)
        fetch(`http://localhost:3003/user/${userId}`, {
          method: 'get',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('token')
          },
        })
        .then(res => {
          return res.json()
        }).then(data => {
          console.log('hello', data)
        })
      })

      // dans un form, pour modifier son profil  --> PUT /user/{id}

  }

// onSubmit appelle sendLogin
// methode sendLogin
//fetch avec post dans le submit

  render(){
    return(
      <div>
        <form onSubmit={this.sendLogin}>
          <input type="text"
            value={this.state.value}
            placeholder="email"
            onChange={this.handleChangeEmail}/>
          <br></br>
          <input type="text"
            value={this.state.value}
            placeholder="password"
            onChange={this.handleChangePassword}/>
        <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Login;

// header token à mettre
