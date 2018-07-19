import React from 'react';
import PageToast from './PageToast';
import renderer from 'react-test-renderer';

test('PageToast renders the toast page', () => {
  const component = renderer.create(<PageToast />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
