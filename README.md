Stuff I have tweaked, learned, added:

https://daveceddia.com/hot-reloading-create-react-app/
https://daveceddia.com/react-project-structure/
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Added prettier support
https://github.com/facebook/create-react-app/pull/4195

Icons:
https://www.emergeinteractive.com/insights/detail/The-Essentials-of-FavIcons-in-2017

This project was bootstrapped with `create-react-app`. To learn about how to use create-react-app check out this [guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

React Router Info:
https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4

69c3d4b

"react-scripts": "2.0.0-next.3e165448" 69c3d4b

Adding SVGs
One way to add SVG files was described in the section above. However react-scripts@2.0.0 added an ability to import SVGs as React components through the fantastic @svgr/webpack. You can use either of the two approaches. In your code it would look like:

```js
import logoUrl, { ReactComponent as Logo } from './logo.svg';

console.log(logoUrl); // /logo.84287d09.svg

const App = () => (
  <div>
    {/* logoUrl is the URL of your SVG file */}
    <img src={logoUrl} alt="Logo" />

    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```

<!-- Needed for IE support :( -->
<script type='text/javascript' src="https://cdn.polyfill.io/v2/polyfill.min.js"
      integrity="sha256-GgRxrVOKNdB4LrRsVPDSbzvfdV4UqglmviH9GoBJ5jk="
      crossorigin="anonymous">
</script>

{
"key": "Content-Security-Policy",
"value": "script-src 'self' 'unsafe-inline'"
},

https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
