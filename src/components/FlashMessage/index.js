import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// context
import FlashContext from '../FlashContext';

const FlashMessage = () => {
  const { showFlash, message, type, dismiss } = useContext(FlashContext);

  let classes;
  if (type === 'warning') {
    classes = 'alert alert-warning';
  }
  if (type === 'error') {
    classes = 'alert alert-danger';
  }
  if (type === 'success') {
    classes = 'alert alert-success';
  }

  if (showFlash) {
    return (
      <div className={classes} role="alert">
        <strong>{message}</strong>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={dismiss}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default FlashMessage;

FlashMessage.propTypes = {
  show: PropTypes.bool,
  dismiss: PropTypes.func,
};
