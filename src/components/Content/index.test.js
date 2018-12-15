import React from 'react';
import renderer from 'react-test-renderer';

import Content from '../Content';

test('Content renders some content', () => {
  const component = renderer.create(<Content />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
