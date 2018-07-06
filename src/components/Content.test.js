import React from 'react';
import Content from './Content';
import renderer from 'react-test-renderer';

test('Content renders some content', () => {
  const component = renderer.create(<Content />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
