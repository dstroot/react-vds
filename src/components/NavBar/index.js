import React from 'react';
import { Link } from '@reach/router';
import logo from 'logo.png';
import * as routes from '../../constants/routes';

// isCurrent - true if the location.pathname is exactly the same as the anchor’s href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'active nav-link' }
    : { className: 'nav-link' };
};

// `getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

// As you may already know, a common way to tune a React component for performance
// is to make it “pure,” which causes it to only re-render when its props change
// (instead of every time its parent re-renders). This can be done automatically
// by extending React.PureComponent instead of React.Component.

// In this case I tried PureComponent and found that the Navbar didn't
// update for all navigation activities so I went back to using a standard
// component.

class NavBar extends React.PureComponent {
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
            <ExactNavLink to={routes.ABOUT} onClick={this.toggleHidden}>
              About
            </ExactNavLink>

            <ExactNavLink to={routes.CONTACT} onClick={this.toggleHidden}>
              Contact
            </ExactNavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
