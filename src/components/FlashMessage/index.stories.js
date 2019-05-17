import React from "react";
import { storiesOf } from "@storybook/react";
import FlashMessage from "../FlashMessage";

storiesOf("FlashMessage", module)
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
  .add("show FlashMessage", () => <FlashMessage />);
