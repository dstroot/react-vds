// After importing the necessary packages, we can write a test which calls
// the render function provided by React Testing Library, which returns an
// object that we can extract asFragment from. Using this we can use the
// built-in functionality from Jest to perform a snapshot test.

import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

// component to test
import NavBarNew from '.';

describe('NavBarNew', () => {
  it('renders', () => {
    // arrange

    // act
    const { asFragment } = render(<NavBarNew />);

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should be at the top of the page', () => {
    // arrange
    const { container } = render(<NavBarNew />);
    const nav = container.querySelector('nav');

    //act

    //assert

    // Verify its class includes "fixed top"
    expect(nav.className).toContain('fixed-top');
  });

  it('it should render small', async () => {
    // arrange

    expect(window.innerWidth).toBe(1024);
    expect(window.innerHeight).toBe(768);

    act(() => {
      // Change the viewport to 500px.
      window.innerWidth = 319;
      window.innerHeight = 500;

      // Trigger the window resize event.
      // window.dispatchEvent(new Event('resize'))
      fireEvent(window, new Event('resize'));
    });

    // assert]
    expect(window.innerWidth).toBe(319);
    expect(window.innerHeight).toBe(500);

    const { asFragment } = render(<NavBarNew />);
    // await waitFor(() => expect(asFragment()).not.toBeNull());
    // await waitFor(() => expect(asFragment()).toMatchSnapshot());
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
