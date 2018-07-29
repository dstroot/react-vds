import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactUs from './ContactUs';
import renderer from 'react-test-renderer';

test('ContactUs renders some content', () => {
  const component = renderer.create(
    <Router>
      <ContactUs />
    </Router>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
