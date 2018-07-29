import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageToast from './PageToast';
import renderer from 'react-test-renderer';

test('PageToast renders the toast page', () => {
  const component = renderer.create(
    <Router>
      <PageToast />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
