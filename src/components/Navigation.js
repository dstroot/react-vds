import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../media/logo.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="navbar navbar-expand navbar-light flex-column flex-md-row fixed-top">
      <NavLink to="/" className="navbar-brand mr-0 mr-md-2">
        <img
          className="d-inline-block align-top"
          src={logo}
          width="30"
          height="30"
          alt=""
        />{' '}
        Verite Data Science
      </NavLink>
    </header>
  );
};

export default Navigation;
