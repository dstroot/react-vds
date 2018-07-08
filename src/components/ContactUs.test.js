import React from 'react';
import ContactUs from './ContactUs';
import renderer from 'react-test-renderer';

test('ContactUs renders some content', () => {
  const component = renderer.create(<ContactUs />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
