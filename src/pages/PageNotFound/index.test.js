import React from 'react';
import renderer from 'react-test-renderer';

import PageNotFound from '../PageNotFound';

test('PageNotFound renders a 404 page', () => {
  const component = renderer.create(<PageNotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // try setting the props
  const setProps = renderer.create(<PageNotFound image="myimage.jpg" />);
  tree = setProps.toJSON();
  expect(tree).toMatchSnapshot();
});
