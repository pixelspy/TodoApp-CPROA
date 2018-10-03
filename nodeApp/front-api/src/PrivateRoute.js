import React, { Component } from 'react';
import Auth from './Auth';
import {
  Route,
  Redirect,
  } from 'react-router-dom';


// Wrapper component to protect route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest} render={(props) => (
    Auth.isAuthenticated === true ?
    <Component {...props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from: props.location}
    }}/>
  )} />
)

export default PrivateRoute ;
