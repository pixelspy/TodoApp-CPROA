import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  withRouter,
  } from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/users">Users</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </nav>
)

export default Links;
