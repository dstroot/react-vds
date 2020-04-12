// After importing the necessary packages, we can write a test which calls
// the render function provided by React Testing Library, which returns an
// object that we can extract asFragment from. Using this we can use the
// built-in functionality from Jest to perform a snapshot test.

import React from 'react';
import { render, screen } from '@testing-library/react';

// component to test
import { FlashProvider } from '../FlashContext';
import FlashExample from '.';

describe('FlashExample', () => {
  it('renders', () => {
    // arrange

    // act
    const { asFragment } = render(
      <FlashProvider>
        <FlashExample />
      </FlashProvider>
    );

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  it('it should say Example Flash Message', () => {
    // arrange

    // act
    render(
      <FlashProvider>
        <FlashExample />
      </FlashProvider>
    );
    const h1 = screen.getByText('Example Flash Message');

    // assert
    expect(h1).not.toBeNull();
  });
});
