import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.png';
import * as routes from '../constants/routes';

class Navigation extends React.PureComponent {
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
          <NavLink to="/" className="navbar-brand">
            <img
              className="d-inline-block align-top"
              src={logo}
              width="30"
              height="30"
              alt=""
            />{' '}
            Verite Data Science
          </NavLink>

          <button
            className={buttonClasses}
            type="button"
            aria-label="Toggle navigation"
            onClick={this.toggleHidden}
            ref={this.buttonRef}
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
