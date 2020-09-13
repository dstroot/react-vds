import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import PageAbout from '../PageAbout';

test('PageAbout renders the about page', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PageAbout />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
