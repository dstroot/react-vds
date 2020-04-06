import React from 'react';
import { render } from '@testing-library/react';

// component to test
import NavBar from '.';

describe('NavBar', () => {
  it('renders', () => {
    // arange

    // act
    const { asFragment } = render(<NavBar />);

    // assert
    expect(asFragment()).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
