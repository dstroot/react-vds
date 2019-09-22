import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import HamButton from '../HamButton';

let clicked = false;
const mockToggler = jest.fn(() => (clicked = true));

describe('HamButton', () => {
  // mount the component
  let mountedComponent;
  const getMountedComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <HamButton toggler={mockToggler} clicked={clicked} />
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined;
    clicked = false;
  });

  it('it should render', () => {
    let tree = create(<HamButton toggler={mockToggler} clicked={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('it should render clicked', () => {
    let tree = create(<HamButton toggler={mockToggler} clicked={true} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('clicking should call toggler function', () => {
    let div = getMountedComponent()
      .find('div')
      .first();

    expect(div.hasClass('is-active')).toBe(false);

    // now click the button
    div.simulate('click');

    // The mock function is called once
    expect(mockToggler.mock.calls.length).toBe(1);
  });
});
