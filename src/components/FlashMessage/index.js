import React from 'react';
import { useFlashContext } from '../FlashContext';

const FlashMessage = () => {
  const [state, dispatch] = useFlashContext();

  let classes;
  if (state.style === 'warning') {
    classes = 'alert alert-warning';
  }
  if (state.style === 'error') {
    classes = 'alert alert-danger';
  }
  if (state.style === 'success') {
    classes = 'alert alert-success';
  }

  if (state.showFlash) {
    return (
      <div className={classes} role="alert">
        <strong>{state.message}</strong>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => dispatch({ type: 'dismiss' })}
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
