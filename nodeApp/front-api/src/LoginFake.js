import React, { Component } from 'react';
import Auth from './Auth';

import {
  Redirect,
  } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      redirectToReferrer: false
    }
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handleChangePassword = (event) => {
    this.setState({pwd: event.target.value});
  }
  sendLogin = (event) => {
    event.preventDefault();
    Auth.authenticate(this.state).then( res => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    }).catch( err => {
      this.setState({
        redirectToReferrer: false
      })
    })
  }

  render(){
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer === true ) {
      return(
        <Redirect to={from} />
      )
    }
    return(
      <div>
        <p>You must log in to view this page at {from.pathname}</p>
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
