import React from 'react';
import { Helmet } from 'react-helmet';
import Masthead from 'Masthead';
import Content from 'Content';
// import ContactUs from './ContactUs';

// React also allows us to create pure, stateless components using a normal
// JavaScript function. A Pure component can replace a component that
// only has a render function. Instead of making a full-blown component
// just to render some content to the screen, we can create a pure one instead.
// Pure components are the simplest, fastest components we can write. They are
// easy to write, simple to reason about, and the quickest component we
// can write.
//
// Advantages to using functional components in React are:
//  - We can do away with the heavy lifting of components, no constructor,
//    state, life-cycle madness, etc.
//  - There is no this keyword (i.e. no need to bind)
//  - Presentational components (also called dumb components) emphasize UI over
//    business logic (i.e. no state manipulation in the component)
//  - Encourages building smaller, self-contained components
//  - Highlights badly written code (for better refactoring)
//  - FAST
//  - They are easy to reuse

const PageLanding = () => {
  return (
    <div>
      <Helmet>
        <title>Verite Data Science &middot; Welcome!</title>
        <link rel="canonical" href="https://veritedatascience.com" />
      </Helmet>
      <Masthead />
      <Content />
      {/* <ContactUs /> */}
    </div>
  );
};

export default PageLanding;
