import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from 'logo.png';
import * as routes from '../constants/routes';

// As you may already know, a common way to tune a React component for performance
// is to make it “pure,” which causes it to only re-render when its props change
// (instead of every time its parent re-renders). This can be done automatically
// by extending React.PureComponent instead of React.Component.  In this case I tried
// PureComponent and found that the Navbar didn't update for all navigation activities
// so I went back to using a standard component.

class Navigation extends Component {
  buttonRef = React.createRef();
  state = {
    isHidden: true,
  };

  toggleHidden = event => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
    // blur the button (otherwise it stays pressed)
    this.buttonRef.current.blur();
  };

  render() {
    // hide and show classes
    let buttonClasses = 'navbar-toggler';
    if (this.state.isHidden) {
      buttonClasses = 'navbar-toggler collapsed';
    }
    let dropDown = 'navbar-collapse collapse show';
    if (this.state.isHidden) {
      dropDown = 'navbar-collapse collapse';
    }

    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container">
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

          <button
            className={buttonClasses}
            type="button"
            aria-label="Toggle navigation"
            onClick={this.toggleHidden}
            ref={this.buttonRef} // get a reference to the button
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={dropDown}>
            <NavLink
              to={routes.ABOUT}
              className="nav-link"
              activeClassName="active"
              onClick={this.toggleHidden}
            >
              About
            </NavLink>

            <NavLink
              to={routes.CONTACT}
              className="nav-link"
              activeClassName="active"
              onClick={this.toggleHidden}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
