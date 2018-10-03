import React, { Component } from 'react';
import Login from './LoginFake';
import UserCard from './userCard';
import Auth from './Auth';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import Links from './Links';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter,
  } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    const loggedin = false;
    return(
      <div>
        <Router>
          <div>
            <AuthButton />
            <Links />
            <Route path="/users" component={UserCard} />
            <Route exact path="/login" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
