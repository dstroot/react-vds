import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import PageNotFound from '../PageNotFound';

test('PageNotFound renders a 404 page', () => {
  const component = renderer.create(
    <MemoryRouter>
      <PageNotFound />{' '}
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // try setting the props
  const setProps = renderer.create(
    <MemoryRouter>
      <PageNotFound image="myimage.jpg" />
    </MemoryRouter>
  );
  tree = setProps.toJSON();
  expect(tree).toMatchSnapshot();
});
