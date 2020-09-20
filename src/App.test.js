import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// import React from "react";
// import { render } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders text "save to reload"', () => {
//   const { getByText } = render(<App />);
//   const testText = getByText(/save to reload/i);
//   expect(testText).toBeInTheDocument();
// });
