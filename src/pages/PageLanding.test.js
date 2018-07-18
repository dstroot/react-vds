import React from 'react';
import PageLanding from './PageLanding';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('PageLanding renders the landing page', () => {
  const component = renderer.create(
    <Router>
      <PageLanding />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
