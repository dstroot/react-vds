import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('Footer renders a footer', () => {
  const component = renderer.create(
    <Router>
      <Footer />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
