import React from 'react';
import Masthead from './Masthead';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('Masthead renders a masthead', () => {
  const component = renderer.create(
    <Router>
      <Masthead />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
