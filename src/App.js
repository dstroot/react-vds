import React from 'react';

// components
import NavBarNew from './components/NavBarNew';
import FlashMessage from './components/FlashMessage';
import Footer from './components/Footer';
import LazyImport from './utils/LazyImport';
import retry from './utils/retry';

// page routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from './constants/routes';

// context
import { FlashProvider } from './components/FlashContext';

// pages
import PageLanding from './pages/PageLanding';
import PageAbout from './pages/PageAbout';

// --- these are now lazy loaded ---
// import PageTerms from './pages/PageTerms';
// import PagePrivacy from './pages/PagePrivacy';
// import PageNotFound from './pages/PageNotFound';
// import PageContact from './pages/PageContact';
// import PageToast from './pages/PageToast';

// our main css
import './scss/main.scss';

// Font Awesome
// https://fontawesome.com/icons?d=gallery
// https://github.com/FortAwesome/react-fontawesome
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// This might be better: https://www.npmjs.com/package/react-icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

// lazy import pages and use code splitting.
// ------------------------------------------------
// NOTE: Webpack’s way to configure the chunks we’re loading is through "magic comments".
// Preloaded chunks will be loaded with higher priority in parallel to its parent chunk.
// Prefetched chunks have lower priority and will be loaded in the browser’s idle time.
const PageTerms = LazyImport(() =>
  retry(() => import('./pages/PageTerms' /* webpackChunkName: "terms" */))
);
const PagePrivacy = LazyImport(() =>
  retry(() => import('./pages/PagePrivacy' /* webpackChunkName: "privacy" */))
);
const PageNotFound = LazyImport(() =>
  retry(() => import('./pages/PageNotFound' /* webpackChunkName: "notfound" */))
);
const PageContact = LazyImport(() =>
  retry(() =>
    import(
      './pages/PageContact' /* webpackChunkName: "contact", webpackPrefetch: true */
    )
  )
);

const App = () => (
  <FlashProvider>
    <Router>
      <NavBarNew />
      <main role="main" className="flex-shrink-0">
        <FlashMessage />
        {/* page routing */}
        <Switch>
          <Route exact path={routes.HOME}>
            <PageLanding />
          </Route>
          <Route path={routes.ABOUT}>
            <PageAbout />
          </Route>
          <Route path={routes.TERMS}>
            <PageTerms />
          </Route>
          <Route path={routes.PRIVACY}>
            <PagePrivacy />
          </Route>
          <Route path={routes.CONTACT}>
            <PageContact />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  </FlashProvider>
);

export default App;
