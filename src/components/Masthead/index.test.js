import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import Masthead from '../Masthead';

test('Masthead renders a masthead', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Masthead />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
