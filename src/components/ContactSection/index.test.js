import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import ContactSection from '../ContactSection';

test('ContactSection renders some content', () => {
  const component = renderer.create(
    <MemoryRouter>
      <ContactSection />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
