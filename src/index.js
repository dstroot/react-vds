// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// NOTE: For routes to work properly in React, you need
// to wrap your whole application in a Router.

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

// Turn on hot module reloading, which will make it so that changes
// you make automatically update in the app without needing to
// refresh the whole page. This is only standard Webpack HMR that
// doesn’t preserve state between reloads. See:
// https://daveceddia.com/hot-reloading-create-react-app/

if (module.hot) module.hot.accept();
