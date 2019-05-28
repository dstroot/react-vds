import React, { useReducer, useContext, useMemo } from 'react';

/**
 * Context lets us pass values deep into the component tree. This
 * example allows us to create a "flash message" that can be initiated
 * and viewed from anywhere in our app. First lets create a new context:
 */

const FlashContext = React.createContext({});

/**
 * Using a functional or class component we could pass (via context)
 * both the state and functions to update state. Howevere, using
 * a reducer it's cleaner because state is managed through actions,
 * and we can pass state and the dispatch function via contaxt so you
 * can read the state and dispatch updates from anywhere in you app.
 * https://medium.freecodecamp.org/hooked-on-hooks-how-to-use-reacts-usereducer-2fe8f486b963
 * https://kentcdodds.com/blog/how-to-optimize-your-context-value
 * https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext/
 * https://hswolff.com/blog/how-to-usecontext-with-usereducer/
 */

const initialState = {
  showFlash: false, // Show flash message or not
  message: '', // The message to display
  style: '', // Notification type: "success", "error" or "warning"
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
  if (!contextValue) {
    throw new Error('useFlashContext must be used within a FlashProvider');
  }
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
  // via context. Passing output of useReducer to context
  // is the "magic".
  const contextValue = useReducer(reducer, initialState);

  // memo so we don't re-render every time app renders
  const value = useMemo(() => {
    return contextValue;
  }, [contextValue]);

  return (
    <FlashContext.Provider value={value}>{children}</FlashContext.Provider>
  );
};
