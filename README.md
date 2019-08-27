[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dstroot/react-vds)](https://dependabot.com)
[![Build Status](https://travis-ci.com/dstroot/react-vds.svg?branch=master)](https://travis-ci.com/dstroot/react-vds)
[![Test](https://flat.badgen.net/dependabot/dstroot/react-vds?icon=dependabot)](https://dependabot.com)

# Verite Data Science web site

Information about the firm is on the website. This is Information **about** the website and how it was created.

This project was bootstrapped with `create-react-app`. To learn about how to use create-react-app check out this [guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

You can deploy a docker container of this application on Google Cloud with one single click below:

[![Run on Google Cloud](https://storage.googleapis.com/cloudrun/button.svg)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/dstroot/react-vds.git)

### Components Used

- Switched from react-router to reach router: https://reach.tech/router
- Using `react-particles-js`
- Using Font Awesome: https://fontawesome.com/how-to-use/on-the-web/using-with/react

### Stuff I have tweaked, learned, added:

https://daveceddia.com/hot-reloading-create-react-app/
https://daveceddia.com/react-project-structure/
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Added prettier support
https://github.com/facebook/create-react-app/pull/4195

Icons:
https://www.emergeinteractive.com/insights/detail/The-Essentials-of-FavIcons-in-2017

#### Adding SVGs

One way to add SVG files was described in the section above. However react-scripts@2.0.0 added an ability to import SVGs as React components through the fantastic @svgr/webpack. You can use either of the two approaches. In your code it would look like:

```js
import logoUrl, { ReactComponent as Logo } from './logo.svg';

console.log(logoUrl); // /logo.84287d09.svg

const App = () => (
  <div>
    {/* logoUrl is the URL of your SVG file */}
    <img src={logoUrl} alt="Logo" />

    {/* Logo is an actual React component - this can be styled! You can set the color, etc. */}
    <Logo />
  </div>
);
```

https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
