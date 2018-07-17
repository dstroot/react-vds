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
    return <SubmitButton />;
  }

  if (submitted && success === 'wait') {
    return <SubmittedButton />;
  }

  if (submitted && success === 'yes') {
    return <SuccessButton />;
  }

  if (submitted && success === 'no') {
    return <FailedButton />;
  }
};

Button.propTypes = {
  submitted: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
};

/**
 * Buttons
 */

const SubmitButton = () => {
  return (
    <button type="submit" className="btn btn-primary btn-block">
      <FontAwesomeIcon icon="check" /> &nbsp; Submit
    </button>
  );
};

const SubmittedButton = () => {
  return (
    <button className="btn btn-primary btn-block">
      <FontAwesomeIcon icon="spinner" spin /> &nbsp; Submitted
    </button>
  );
};

const SuccessButton = () => {
  return (
    <button className="btn btn-success btn-block">
      <FontAwesomeIcon icon="check-circle" /> &nbsp; Thanks!
    </button>
  );
};

const FailedButton = () => {
  return (
    <button className="btn btn-danger btn-block">
      <FontAwesomeIcon icon="exclamation-triangle" /> &nbsp; Failed!
    </button>
  );
};

export default Button;
