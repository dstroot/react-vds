import React from "react";
import renderer from "react-test-renderer";

// import component to test
import useMediaQuery from "../useMediaQuery";

// simulate window resize
const fireResize = width => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

// Test component that uses the Hook
const EffecfulComponent = () => {
  const result = useMediaQuery(`screen and (max-width: 400px)`);
  return <span>{result}</span>;
};

describe("useMediaQuery", () => {
  it("it should render", () => {
    fireResize(320);
    const component = renderer.create(<EffecfulComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// https://medium.com/@dawchihliou/testing-react-hooks-6d3ae95cd838
