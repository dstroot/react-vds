import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';

test('Footer renders a footer', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
