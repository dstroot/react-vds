import React from 'react';
import PagePrivacy from './PagePrivacy';
import renderer from 'react-test-renderer';

test('PagePrivacy renders the privacy page', () => {
  const component = renderer.create(<PagePrivacy />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
