import React from 'react';
import renderer from 'react-test-renderer';

import PagePrivacy from '../PagePrivacy';

test('PagePrivacy renders the privacy page', () => {
  const component = renderer.create(<PagePrivacy />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
