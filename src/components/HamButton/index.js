import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * https://jonsuh.com/hamburgers/
 * Let's use CSS rather than JS to animate the burger menu
 *
 * `y add hamburgers`
 */

const HamButton = ({ toggler, clicked }) => {
  let classes = 'hamburger hamburger--squeeze';
  if (clicked) {
    // Trigger the active state by appending class name is-active
    classes = 'hamburger hamburger--squeeze is-active';
  }
  return (
    <div className={classes} onClick={toggler}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

export default HamButton;

HamButton.propTypes = {
  /** Function to toggle button clicked state */
  toggler: PropTypes.func.isRequired,
  /** Should be set to "true" if the button has been clicked */
  clicked: PropTypes.bool.isRequired,
};
