import React from 'react';
import Masthead from '../Masthead';
import renderer from 'react-test-renderer';

test('Masthead renders a masthead', () => {
  const component = renderer.create(<Masthead />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
