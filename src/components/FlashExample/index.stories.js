import React from "react";
import { storiesOf } from "@storybook/react";

import { FlashProvider } from '../FlashContext';
import FlashExample from "../FlashExample";

storiesOf("FlashExample", module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      text: `This supports markdown!
      
      ~~~js
      console.log("hello");
      ~~~
      `
    }
  })
  .add("show FlashExample", () => <FlashProvider>
  <FlashExample />
</FlashProvider>);
