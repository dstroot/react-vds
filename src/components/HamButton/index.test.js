import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import HamButton from '.';

let clicked = false;
const mockToggler = jest.fn(() => (clicked = true));

describe('HamButton', () => {
  it('renders', () => {
    // arrange

    // act
    const { asFragment } = render(
      <HamButton toggler={mockToggler} clicked={false} />
    );

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders as clicked', () => {
    // arrange

    // act
    const { asFragment } = render(
      <HamButton toggler={mockToggler} clicked={true} />
    );

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking should call toggler function', () => {
    // arrange
    const { container } = render(
      <HamButton toggler={mockToggler} clicked={true} />
    );
    const button = container.querySelector('div');
    expect(button).not.toBe(null);
    expect(button).toHaveClass('is-active');

    // now click the button
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    // The mock function is called once
    expect(mockToggler.mock.calls.length).toBe(1);
  });
});
