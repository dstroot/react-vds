import React from 'react';
import renderer from 'react-test-renderer';

import PageContact from '../PageContact';

test('PageContact renders the contact page', () => {
  const component = renderer.create(<PageContact />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
