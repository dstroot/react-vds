import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import PagePrivacy from '../PagePrivacy';

test('PagePrivacy renders the privacy page', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PagePrivacy />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
