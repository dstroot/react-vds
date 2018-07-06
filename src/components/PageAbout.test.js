import React from 'react';
import PageAbout from './PageAbout';
import renderer from 'react-test-renderer';

test('PageAbout renders the about page', () => {
  const component = renderer.create(<PageAbout />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
