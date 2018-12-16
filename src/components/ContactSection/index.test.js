import React from 'react';
import renderer from 'react-test-renderer';

import ContactSection from '../ContactSection';

test('ContactSection renders some content', () => {
  const component = renderer.create(<ContactSection />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
