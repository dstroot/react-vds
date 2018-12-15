import React from 'react';
import renderer from 'react-test-renderer';

import ParticlesPanel from '../ParticlesPanel';

test('ParticlesPanel renders', () => {
  const component = renderer.create(<ParticlesPanel />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
