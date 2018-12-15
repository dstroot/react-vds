import React from 'react';
import renderer from 'react-test-renderer';

import PageTerms from '../PageTerms';

test('PageTerms renders the terms page', () => {
  const component = renderer.create(<PageTerms />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
