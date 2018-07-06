import React from 'react';
import ParticlesComp from './ParticlesComp';
import renderer from 'react-test-renderer';

test('ParticlesComp renders the terms page', () => {
  const component = renderer.create(<ParticlesComp />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
