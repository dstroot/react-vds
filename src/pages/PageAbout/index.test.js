import React from 'react';
import renderer from 'react-test-renderer';

import PageAbout from '../PageAbout';

test('PageAbout renders the about page', () => {
  const component = renderer.create(<PageAbout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
