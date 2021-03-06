import React, { useEffect } from 'react';
import Masthead from 'components/Masthead';
import Content from 'components/Content';
import ContactSection from 'components/ContactSection';

// React also allows us to create pure, stateless components using a normal
// JavaScript function. A Pure component can replace a component that
// only has a render function. Instead of making a full-blown component
// just to render some content to the screen, we can create a pure one instead.
// Pure components are the simplest, fastest components we can write. They are
// easy to write, simple to reason about.
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
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • Welcome`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <>
      <Masthead />
      <Content />
      <ContactSection />
    </>
  );
};

export default PageLanding;
