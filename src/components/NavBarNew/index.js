import React, { useState } from 'react';
import logo from 'media/logo.png';

// routing
import { Link, NavLink } from 'react-router-dom';
import * as routes from 'constants/routes';

// components
import HamButton from '../HamButton';

// hooks
import useMediaQuery from '../../hooks/useMediaQuery';

// use a boolean, not a toggle.  This prevents odd menu states.
// TODO - use tested hooks file - remove hook from here
const useBoolean = (initialValue) => {
  const [status, setStatus] = useState(initialValue);
  const clicked = () => setStatus(true);
  const notClicked = () => setStatus(false);
  window.scrollTo(0, 0);
  return [status, clicked, notClicked];
};

const NavBarNew = () => {
  const small = useMediaQuery(`screen and (max-width: 575px)`);
  const [status, clicked, notClicked] = useBoolean(false);

  if (small) {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
          {/* Brand */}
          <Link to="/" className="navbar-brand" onClick={notClicked}>
            <img
              className="d-inline-block align-top"
              src={logo}
              width="30"
              height="30"
              alt=""
            />{' '}
            Verite Data Science
          </Link>

          {/* Burger menu */}
          <HamButton
            type="button"
            toggler={status ? notClicked : clicked}
            clicked={status}
            aria-label="Toggle navigation"
          />
        </nav>

        {status ? (
          <div className="overlay bg-light text-right">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={routes.ABOUT}
              onClick={notClicked}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={routes.CONTACT}
              onClick={notClicked}
            >
              Contact
            </NavLink>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <img
            className="d-inline-block align-top"
            src={logo}
            width="30"
            height="30"
            alt=""
          />{' '}
          Verite Data Science
        </Link>

        {/* Links */}
        <div className="navbar-collapse collapse">
          <div className="mx-auto" />
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={routes.ABOUT}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={routes.CONTACT}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarNew;
