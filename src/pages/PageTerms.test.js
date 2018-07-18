import React from 'react';
import PageTerms from './PageTerms';
import renderer from 'react-test-renderer';

test('PageTerms renders the terms page', () => {
  const component = renderer.create(<PageTerms />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
