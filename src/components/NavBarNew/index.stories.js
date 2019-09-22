import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import NavBar from '../NavBarNew';

// NavBar section
storiesOf('NEXT|NavBarNew', module)
  .addParameters({
    // default for all stories in this book
    info: {
      inline: true,
      header: false,
      text: `
        NavBar provides a navigation component that uses "@reach/router" for links. 
        It overrides some Bootstrap styles so it's "styles.scss" needs to be imported after Bootstrap in "/scss/main.scss".
        `,
    },
  })
  .add('show NavBar', () => <NavBarNew />);
