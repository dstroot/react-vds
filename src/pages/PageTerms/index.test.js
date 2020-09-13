import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import PageTerms from '../PageTerms';

test('PageTerms renders the terms page', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PageTerms />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
