import React, { useReducer, useContext } from 'react';

/**
 * Context lets us pass values deep into the component tree. This
 * example allows us to create a "flash message" that can be initiated
 * and viewed from anywhere in our app. First lets create a new context.
 */

const FlashContext = React.createContext({});

/**
 * Using a functional or class component we could pass (via context)
 * both the state and some functions to update state. Howevere, using
 * a reducer it's cleaner because state is managed through actions,
 * and we can pass state and the dispatch function viaccontaxt so you
 * can read the state and dispatch "updates" from anywhere in you app.
 * https://medium.freecodecamp.org/hooked-on-hooks-how-to-use-reacts-usereducer-2fe8f486b963
 */

const initialState = {
  showFlash: false, // whether or not to return html or null
  message: '', // The message within the notification
  style: '', // Success or error notification type
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'flash':
      return {
        ...state,
        showFlash: true,
        message: action.message,
        style: action.style,
      };
    case 'dismiss':
      return {
        ...state,
        showFlash: false,
        message: '',
        style: '',
      };
    default:
      throw new Error('Unexpected action');
  }
};

/**
 * Now lets create a hook that simply returns the context value.
 * We can destructure the context array into state and the
 * dispatch function like so:
 *
 * const [state, dispatch] = useFlashContext();
 *
 * This makes it simple to use this context anywhere in your app.
 */

export const useFlashContext = () => {
  const contextValue = useContext(FlashContext);
  return contextValue;
};

/**
 * Finally let's export a context provider so that we can
 * wrap our application with this provider. This is what actually
 * give us access to the context everywhere in our app.
 */

export const FlashProvider = ({ children }) => {
  // useReducer gives us an array - the current state and
  // the dispatch function [state, dispatch] which we share
  // via context.
  const contextValue = useReducer(reducer, initialState);
  return (
    <FlashContext.Provider value={contextValue}>
      {children}
    </FlashContext.Provider>
  );
};

/**
 * Here's an example how to use our context in a componnent
 */

/*

import React from 'react';
import { useFlashContext } from '../FlashContext';

const FlashExample = () => {
  // use our context hook to get state and the dispatch function
  const [state, dispatch] = useFlashContext();

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
          <p>{state}</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={async () => {
            dispatch({ type: 'flash', message: 'Hi there!', style: 'success' });
            await delay(3000);
            dispatch({ type: 'dismiss' });
          }}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default FlashExample;

*/
