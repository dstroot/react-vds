// mock canvas
import 'jest-canvas-mock';

// setup react-testing-library: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom/extend-expect';

import Promise from 'bluebird';

// setup enzyme
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

// If some code uses a method which JSDOM (the DOM implementation used
// by Jest) hasn't implemented yet, testing it is not easily possible. T
// his is e.g. the case with window.matchMedia(). Jest returns TypeError:
// window.matchMedia is not a function and doesn't properly execute the test.
// In this case, mocking matchMedia in the test file should solve the issue:

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scrollTo = jest.fn().mockImplementation(() => {
  return {
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

// https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262
// And just like that tests that have proptype warnings no longer pass!

// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};

// import Promise from 'bluebird';

// We use the "Bluebird" lib for Promises, because it shows good perf
// and it implements the "unhandledrejection" event:
global.Promise = Promise;

// Global catch of unhandled Promise rejections:
global.onunhandledrejection = function onunhandledrejection(error) {
  // Warning: when running in "remote debug" mode (JS environment is Chrome browser),
  // this handler is called a second time by Bluebird with a custom "dom-event".
  // We need to filter this case out:
  if (error instanceof Error) {
    // logError(error); // Your custom error logging/reporting code
    console.log(error);
  }
};
