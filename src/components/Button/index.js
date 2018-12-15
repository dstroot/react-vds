import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Button logic
 */

const Button = props => {
  const submitted = props.submitted;
  const success = props.success;

  if (!submitted) {
    return <StyledButton icon="check" color="primary" message="Submit" />;
  }

  if (submitted && success === 'wait') {
    return (
      <StyledButton icon="spinner" spin color="primary" message="Submitted" />
    );
  }

  if (submitted && success === 'yes') {
    return (
      <StyledButton icon="check-circle" color="success" message="Thanks!" />
    );
  }

  if (submitted && success === 'no') {
    return (
      <StyledButton
        icon="exclamation-triangle"
        color="danger"
        message="Failed!"
      />
    );
  }
};

Button.propTypes = {
  submitted: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
};

/**
 * Buttons
 */

const StyledButton = ({ icon, color, spin, message }) => {
  const componentClasses = ['btn', 'btn-block', 'btn-' + color];

  if (spin) {
    icon = <FontAwesomeIcon icon={icon} spin />;
  } else {
    icon = <FontAwesomeIcon icon={icon} />;
  }

  return (
    <button type="submit" className={componentClasses.join(' ')}>
      {icon} &nbsp; {message}
    </button>
  );
};

StyledButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  spin: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default Button;
