import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

test('Button renders a submitButton', () => {
  const component = renderer.create(
    <Button submitted={false} success="wait" />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders a submittedButton', () => {
  const component = renderer.create(<Button submitted={true} success="wait" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders a successButton', () => {
  const component = renderer.create(<Button submitted={true} success="yes" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders a failedButton', () => {
  const component = renderer.create(<Button submitted={true} success="no" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
