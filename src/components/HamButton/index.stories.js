import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HamButton from '../HamButton';

storiesOf('Pac Life|HamButton', module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `,
    },
  })
  .add('show HamButton unclicked', () => (
    <HamButton clicked={false} toggler={action('button-click')} />
  ))
  .add('show HamButton clicked', () => (
    <HamButton clicked={true} toggler={action('button-click')} />
  ));
