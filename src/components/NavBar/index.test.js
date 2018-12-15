import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from '../NavBar';

test('NavBar renders a Navbar', () => {
  const component = renderer.create(<NavBar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
