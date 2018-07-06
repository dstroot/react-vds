// https://github.com/akiran/react-slick/issues/742
//
// I had to create a file setupTests.js and place it inside the src/
// folder (src/setupTests.js) and put the following code in:

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

// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};
