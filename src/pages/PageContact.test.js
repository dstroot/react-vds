import React from 'react';
import PageContact from './PageContact';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('PageContact renders the contact page', () => {
  const component = renderer.create(
    <Router>
      <PageContact />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
