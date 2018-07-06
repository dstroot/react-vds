import React from 'react';
import ParticlesComp from './ParticlesComp';
import renderer from 'react-test-renderer';

test('ParticlesComp renders the terms page', () => {
  const component = renderer.create(<ParticlesComp />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// https://stackoverflow.com/questions/39146252/how-do-i-test-react-responsive-components-with-enzyme
