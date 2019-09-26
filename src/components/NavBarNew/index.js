import React, { useState } from 'react';
import { Link } from '@reach/router';
import logo from 'media/logo.png';
import * as routes from 'constants/routes';

// components
import HamButton from '../HamButton';

// hooks
import useMediaQuery from '../../hooks/useMediaQuery';

// isCurrent - true if the location.pathname is exactly the same as the anchor’s href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'active nav-link' }
    : { className: 'nav-link' };
};

// `getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

// use a boolean, not a toggle.  This prevents odd menu states.
const useBoolean = initialValue => {
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
            <ExactNavLink to={routes.ABOUT} onClick={notClicked}>
              About
            </ExactNavLink>
            <ExactNavLink to={routes.CONTACT} onClick={notClicked}>
              Contact
            </ExactNavLink>
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
          <ExactNavLink to={routes.ABOUT}>About</ExactNavLink>
          <ExactNavLink to={routes.CONTACT}>Contact</ExactNavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarNew;
