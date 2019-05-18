import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { FlashProvider } from '../FlashContext';
import FlashExample from '../FlashExample';

describe('FlashExample', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <FlashProvider>
          <FlashExample />
        </FlashProvider>
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('it should render', () => {
    let tree = create(
      <FlashProvider>
        <FlashExample />
      </FlashProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('it should say FlashExample!', () => {
    const h1 = getMountedComponent()
      .find('h1')
      .first();

    expect(h1.text()).toContain('Example Flash Message');
  });
});
