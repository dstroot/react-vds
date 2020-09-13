import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import PageLanding from '../PageLanding';

test('PageLanding renders the landing page', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PageLanding />
    </MemoryRouter>
  );
  // const component = renderer.create(<PageLanding />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
