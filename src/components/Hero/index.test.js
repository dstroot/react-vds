import React from 'react';
import Hero from '../Hero';
import renderer from 'react-test-renderer';

test('Hero renders some content', () => {
  const component = renderer.create(<Hero />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
