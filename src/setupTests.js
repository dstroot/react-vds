// mock canvas
import 'jest-canvas-mock';

// setup enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// Mock window.matchMedia
// https://github.com/akiran/react-slick/issues/742
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

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
