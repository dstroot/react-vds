// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({
  dsn: 'https://06204478c5534bb9b2eac6a0315895c0@sentry.io/1342447',
  integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();

// Turn on hot module reloading, which will make it so that changes
// you make automatically update in the app without needing to
// refresh the whole page. This is only standard Webpack HMR that
// doesn’t preserve state between reloads. See:
// https://daveceddia.com/hot-reloading-create-react-app/

// if (module.hot) module.hot.accept();
