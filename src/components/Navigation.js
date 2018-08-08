import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.png';
// import * as routes from '../constants/routes';

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
      {/* <NavLink to={routes.ABOUT} className="nav-link">
        About
      </NavLink>
      <NavLink to={routes.CONTACT} className="nav-link">
        Contact
      </NavLink> */}
    </header>
  );
};

export default Navigation;
