import React from 'react';
import { useFlashContext } from '../FlashContext';

const FlashExample = () => {
  // use our context hook to get state and the dispatch function
  const [state, dispatch] = useFlashContext();
  const { showFlash, message, style } = state;

  // 3000 milliseconds = 3 seconds
  const delay = ({ time = 3000 }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Example Flash Message</h1>
          <p>Press the button to see a flash message!</p>
          <h3>State</h3>
          <p>
            Show Flash: {showFlash.toString()}, Message: {message}, Style:{' '}
            {style}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={async () => {
              dispatch({
                type: 'flash',
                message: 'Hi there!',
                style: 'success',
              });
              await delay(3000);
              dispatch({ type: 'dismiss' });
            }}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashExample;
