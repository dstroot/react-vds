import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('Navigation renders a Navbar', () => {
  const component = renderer.create(
    <Router>
      <Navigation />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
