import React from 'react';

// components
import NavBar from './components/NavBar';
import FlashMessage from './components/FlashMessage';
import Footer from './components/Footer';
import LazyImport from './utils/LazyImport';
import retry from './utils/retry';

// routes
import { Router } from '@reach/router';
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
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);

// lazy import page for code splitting
const PageTerms = LazyImport(() => retry(() => import('./pages/PageTerms')));
const PagePrivacy = LazyImport(() =>
  retry(() => import('./pages/PagePrivacy'))
);
const PageNotFound = LazyImport(() =>
  retry(() => import('./pages/PageNotFound'))
);
const PageContact = LazyImport(() =>
  retry(() => import('./pages/PageContact'))
);

const App = () => (
  <FlashProvider>
    <NavBar />
    <main role="main" className="flex-shrink-0">
      <FlashMessage />
      <Router>
        <PageLanding path={routes.HOME} />
        <PageAbout path={routes.ABOUT} />
        <PageTerms path={routes.TERMS} />
        <PagePrivacy path={routes.PRIVACY} />
        <PageAbout path={routes.ABOUT} />
        <PageContact path={routes.CONTACT} />
        <PageNotFound
          default
          image="https://i.giphy.com/media/sMABNWsUWPC1y/giphy.gif"
        />
      </Router>
    </main>
    <Footer />
  </FlashProvider>
);

export default App;
