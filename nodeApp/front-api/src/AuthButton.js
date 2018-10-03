import React, { Component } from 'react';
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter,
  } from 'react-router-dom';

const AuthButton = withRouter(({ history }) => (
  Auth.isAuthenticated === true
  ? <p>
    Welcome ! <button onClick={() => {
      Auth.signout(() => history.push("/"))
    }}>Sign Out</button>
  </p>
  : <p>You are not Logged in</p>
))

export default AuthButton ;
