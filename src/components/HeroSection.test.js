import React from 'react';
import HeroSection from './HeroSection';
import renderer from 'react-test-renderer';

test('HeroSection renders some content', () => {
  const component = renderer.create(<HeroSection />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
